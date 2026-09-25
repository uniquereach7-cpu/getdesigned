import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

import { Arrow, Header, Motion } from "../../experience";
import { ClosingCTA } from "../../site";
import { posts } from "../posts";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return posts.map(({ slug }) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = posts.find((item) => item.slug === slug);
  if (!post) return { title: "Story not found" };
  return { title: post.title, description: post.summary };
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = posts.find((item) => item.slug === slug);
  if (!post) notFound();

  return (
    <>
      <Motion />
      <main id="main-content">
        <div className="blog-shell">
          <Header light />
          <article className="article-wrap">
            <Link href="/blog" className="text-link article-back"><Arrow /> Back to journal</Link>
            <div className="article-hero">
              <span className="eyebrow"><span className="tiny-dot" /> {post.category.toUpperCase()} · {post.readTime.toUpperCase()}</span>
              <h1>{post.title}</h1>
              <p>{post.summary}</p>
            </div>
            <div className="article-image"><Image src={post.image} alt={post.imageAlt} fill sizes="(max-width: 650px) 100vw, 88vw" preload /></div>
            <div className="article-body">
              <p>{post.intro}</p>
              {post.sections.map((section) => (
                <section key={section.heading}>
                  <h2>{section.heading}</h2>
                  {section.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
                </section>
              ))}
              <div className="article-bottom"><Link href="/blog" className="text-link"><Arrow /> More from the journal</Link></div>
            </div>
          </article>
        </div>
        <ClosingCTA />
      </main>
    </>
  );
}
