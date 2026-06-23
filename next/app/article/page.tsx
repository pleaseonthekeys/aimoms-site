import type { Metadata } from 'next';
import { redirect } from 'next/navigation';
import { ARTICLES, ARTICLE_IDS, getArticle, type Article } from '@/lib/articles-data';
import ArticleView from '@/components/ArticleView';
import '../article.css';

type SearchParams = Promise<{ id?: string }>;

export async function generateMetadata({ searchParams }: { searchParams: SearchParams }): Promise<Metadata> {
  const { id } = await searchParams;
  const article = id ? getArticle(id) : null;
  if (!article) {
    return { title: 'The Edit — ai moms™', description: 'AI-powered insights for mothers.' };
  }
  return {
    title: `${article.title} — The Edit | ai moms™`,
    description: article.subtitle,
    alternates: { canonical: `/article?id=${article.id}` },
    openGraph: {
      title: article.title,
      description: article.subtitle,
      type: 'article',
      images: ['https://aimoms.ai/og-image.png'],
    },
    twitter: {
      card: 'summary_large_image',
      title: article.title,
      description: article.subtitle,
    },
  };
}

/** Pick up to 2 related articles: same category first, then fill from the rest (in order). */
function relatedFor(article: Article): Article[] {
  const sameCat = ARTICLE_IDS.filter((id) => id !== article.id && ARTICLES[id].category === article.category);
  const ids = sameCat.slice(0, 2);
  if (ids.length < 2) {
    for (const id of ARTICLE_IDS) {
      if (ids.length >= 2) break;
      if (id !== article.id && !ids.includes(id)) ids.push(id);
    }
  }
  return ids.map((id) => ARTICLES[id]);
}

export default async function ArticlePage({ searchParams }: { searchParams: SearchParams }) {
  const { id } = await searchParams;
  const article = id ? getArticle(id) : null;

  // No id / unknown id → back to the editorial index, matching the static site.
  if (!article) redirect('/editorial');

  return (
    <div className="page-article">
      <ArticleView article={article} related={relatedFor(article)} />
    </div>
  );
}
