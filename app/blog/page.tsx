import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

import { Arrow, Header, Motion } from "../experience";
import { ClosingCTA } from "../site";
import { posts } from "./posts";

export const metadata: Metadata = {
  title: "Journal",
  description:
    "Ideas on space planning, personal interiors, and the design process from GetDesigned, Hyderabad.",
};

export default function BlogPage() {
  return (
    <>
      <Motion />
      <main id="main-content">
        <div className="blog-shell">
          <Header light />
          <div className="blog-content">
            <div className="eyebrow"><span className="tiny-dot" /> THE GETDESIGNED JOURNAL</div>
            <div className="blog-heading">
              <h1>Ideas for <em>better living.</em></h1>
              <p>Thoughts on the spaces we live in, the choices behind them, and why thoughtful design matters.</p>
            </div>
            <div className="blog-grid">
              {posts.map((post) => (
                <article className="blog-card" key={post.slug}>
                  <Link href={`/blog/${post.slug}`} aria-label={`Read ${post.title}`}>
                    <div className="blog-card-image">
                      <Image src={post.image} alt={post.imageAlt} fill sizes="(max-width: 650px) 90vw, (max-width: 900px) 45vw, 30vw" />
                    </div>
                    <div className="blog-card-meta"><span>{post.category}</span><span>{post.readTime}</span></div>
                    <h2>{post.title}</h2>
                  </Link>
                  <p>{post.summary}</p>
                  <Link href={`/blog/${post.slug}`} className="text-link">Read the story <Arrow /></Link>
                </article>
              ))}
            </div>
          </div>
        </div>
        <ClosingCTA />
      </main>
    </>
  );
}
