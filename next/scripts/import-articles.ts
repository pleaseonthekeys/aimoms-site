/**
 * One-time (idempotent) import of the 43 articles into Supabase `articles`.
 * Reads the bundled local module and upserts every article by id.
 *
 * Run from next/:  set -a; source .env.local; set +a; npx tsx scripts/import-articles.ts
 * Uses the service_role key (insert/upsert bypasses RLS). Safe to re-run — upsert on id.
 */
import { createClient } from '@supabase/supabase-js';
import { ARTICLES, ARTICLE_IDS } from '../lib/articles-data';

const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
const serviceKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

if (!url || !serviceKey) {
  console.error('Missing NEXT_PUBLIC_SUPABASE_URL or SUPABASE_SERVICE_ROLE_KEY in env.');
  console.error('Run:  set -a; source .env.local; set +a; npx tsx scripts/import-articles.ts');
  process.exit(1);
}

const supabase = createClient(url, serviceKey, {
  auth: { persistSession: false, autoRefreshToken: false },
});

async function main() {
  const rows = ARTICLE_IDS.map((id) => {
    const a = ARTICLES[id];
    return {
      id,
      title: a.title ?? null,
      category: a.category ?? null,
      data: a,
      updated_at: new Date().toISOString(),
    };
  });

  console.log(`Upserting ${rows.length} articles…`);

  // Chunk to keep payloads reasonable.
  const CHUNK = 10;
  let done = 0;
  for (let i = 0; i < rows.length; i += CHUNK) {
    const batch = rows.slice(i, i + CHUNK);
    const { error } = await supabase.from('articles').upsert(batch, { onConflict: 'id' });
    if (error) {
      console.error(`Batch ${i / CHUNK + 1} failed:`, error.message);
      process.exit(1);
    }
    done += batch.length;
    console.log(`  …${done}/${rows.length}`);
  }

  const { count, error: countErr } = await supabase
    .from('articles')
    .select('*', { count: 'exact', head: true });
  if (countErr) {
    console.error('Count check failed:', countErr.message);
    process.exit(1);
  }
  console.log(`Done. Supabase now has ${count} article rows (expected ${rows.length}).`);
  if (count !== rows.length) {
    console.warn('⚠️  Row count does not match — investigate before relying on this.');
    process.exit(1);
  }
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
