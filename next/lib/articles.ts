/**
 * Article data access. Reads from Supabase (the Phase 3 source of truth) and falls back
 * to the bundled local module on any failure or missing row. Because the local module is
 * the exact data we import into Supabase, the rendered output is identical either way —
 * so this is safe before, during, and after the import (and if Supabase is ever down).
 */
import { ARTICLES, ARTICLE_IDS, getArticle as getLocalArticle, type Article } from './articles-data';
import { createClient } from '@supabase/supabase-js';

function readClient() {
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const key = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;
  if (!url || !key) return null;
  try {
    return createClient(url, key, { auth: { persistSession: false, autoRefreshToken: false } });
  } catch {
    return null;
  }
}

export async function getArticleById(id: string): Promise<Article | null> {
  const supabase = readClient();
  if (supabase) {
    try {
      const { data, error } = await supabase
        .from('articles')
        .select('data')
        .eq('id', id)
        .maybeSingle();
      if (!error && data?.data) return data.data as Article;
    } catch {
      /* fall through to local */
    }
  }
  return getLocalArticle(id);
}

export async function getAllArticles(): Promise<Article[]> {
  const supabase = readClient();
  if (supabase) {
    try {
      const { data, error } = await supabase.from('articles').select('id, data');
      if (!error && data && data.length) {
        const byId = new Map(data.map((r) => [r.id as string, r.data as Article]));
        // Preserve the canonical local ordering; append any unknown ids at the end.
        const ordered = ARTICLE_IDS.filter((id) => byId.has(id)).map((id) => byId.get(id)!);
        for (const [id, art] of byId) if (!ARTICLE_IDS.includes(id)) ordered.push(art);
        if (ordered.length) return ordered;
      }
    } catch {
      /* fall through to local */
    }
  }
  return ARTICLE_IDS.map((id) => ARTICLES[id]);
}
