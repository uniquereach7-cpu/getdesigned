import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";

import { contact, navLinks, processSteps } from "./data";
import { Arrow, Brand, Header } from "./experience";

export function SectionLabel({
  children,
  number,
}: {
  children: ReactNode;
  number: string;
}) {
  return (
    <div className="section-label" data-reveal>
      <span className="tiny-dot" /> {children}{" "}
      <span className="section-number">{number}</span>
    </div>
  );
}

export function PageHero({
  kicker,
  title,
  description,
  image,
  alt,
  position = "center",
}: {
  kicker: string;
  title: ReactNode;
  description: string;
  image: string;
  alt: string;
  position?: string;
}) {
  return (
    <section
      id="main-content"
      className="hero page-hero"
      aria-labelledby="page-heading"
    >
      <Header />
      <div className="hero-image">
        <Image
          src={image}
          alt={alt}
          fill
          preload
          sizes="100vw"
          style={{ objectPosition: position }}
        />
      </div>
      <div className="hero-shade" />
      <div className="hero-content">
        <p className="hero-kicker">{kicker}</p>
        <h1 id="page-heading">{title}</h1>
        <p className="hero-description">{description}</p>
      </div>
    </section>
  );
}

export function ProcessSteps() {
  return (
    <div className="process-grid">
      {processSteps.map((step) => (
        <article className="process-step" key={step.number} data-reveal>
          <div className="step-top">
            <span>{step.number}</span>
            <Arrow />
          </div>
          <h3>{step.title}</h3>
          <p>{step.description}</p>
          <span className="step-note">{step.note}</span>
        </article>
      ))}
    </div>
  );
}

export function ClosingCTA() {
  return (
    <section className="contact-section" id="contact">
      <div className="contact-image">
        <Image
          src="/images/hero-warm.jpg"
          alt="Warm wood and comfortable seating in an inviting interior"
          fill
          sizes="100vw"
        />
      </div>
      <div className="contact-overlay" />
      <div className="contact-content" data-reveal>
        <span className="eyebrow">
          <span className="tiny-dot" /> YOUR SPACE. A NEW PERSPECTIVE.
        </span>
        <h2>
          Let’s make room
          <br />
          for <em>your kind of living.</em>
        </h2>
        <p>
          Have a space in mind? Tell us what you’re imagining.
          <br />
          We’ll take it from there, together.
        </p>
        <Link className="button button-light" href="/lets-talk">
          Start a conversation <Arrow diagonal />
        </Link>
        <a className="contact-phone" href={contact.phoneHref}>
          Or give us a call: {contact.phone}
        </a>
      </div>
    </section>
  );
}

export function Footer() {
  return (
    <footer className="footer">
      <div className="footer-main">
        <div className="footer-brand">
          <Link href="/" className="brand" aria-label="GetDesigned home">
            <Brand />
          </Link>
          <p>
            Thoughtful spaces.
            <br />
            Made for the way you live.
          </p>
        </div>
        <div>
          <span className="footer-label">COME SAY HELLO</span>
          <address>
            {contact.address.map((line) => (
              <span key={line}>
                {line}
                <br />
              </span>
            ))}
          </address>
          <a
            className="text-link"
            href={contact.directions}
            target="_blank"
            rel="noopener noreferrer"
          >
            Get directions <Arrow diagonal />
          </a>
        </div>
        <div>
          <span className="footer-label">LET’S CONNECT</span>
          <a href={`mailto:${contact.email}`}>{contact.email}</a>
          <a href={contact.phoneHref}>{contact.phone}</a>
          <a
            className="text-link"
            href={contact.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
          >
            Say hello on WhatsApp <Arrow diagonal />
          </a>
        </div>
        <div className="footer-nav">
          <span className="footer-label">EXPLORE</span>
          {navLinks.map(({ label, href }) => (
            <Link href={href} key={href}>
              {label}
            </Link>
          ))}
          <Link href="/lets-talk">Let’s talk</Link>
        </div>
      </div>
      <div className="footer-bottom">
        <span>
          © {new Date().getFullYear()} GetDesigned. All rights reserved.
        </span>
        <span>BASED IN HYDERABAD. DESIGNED AROUND YOU.</span>
        <a href="#main-content">Back to top ↑</a>
      </div>
    </footer>
  );
}
