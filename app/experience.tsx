"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState, type FormEvent } from "react";
import Lenis from "lenis";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { contact, navLinks, services } from "./data";

export function Arrow({ diagonal = false }: { diagonal?: boolean }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d={diagonal ? "M5 19 19 5M5 5h14v14" : "M4 12h15m-6-6 6 6-6 6"}
        stroke="currentColor"
        strokeWidth="1.4"
      />
    </svg>
  );
}

export function Motion() {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const media = gsap.matchMedia();
    media.add("(prefers-reduced-motion: no-preference)", () => {
      const lenis = new Lenis({
        duration: 1.1,
        anchors: { offset: -85 },
        allowNestedScroll: true,
      });
      lenis.on("scroll", ScrollTrigger.update);
      const tick = (time: number) => lenis.raf(time * 1000);
      gsap.ticker.add(tick);
      // Home and inner pages share the same hero markup: image, shade, content.
      if (document.querySelector(".hero")) {
        const intro = gsap.timeline({ defaults: { ease: "power3.out" } });
        intro
          .from(".hero-image", { scale: 1.08, duration: 1.7 })
          .from(
            ".hero-content > *",
            { y: 32, opacity: 0, stagger: 0.13, duration: 1 },
            0.15,
          )
          .from(".site-header", { opacity: 0, duration: 1 }, 0.7);
        if (document.querySelector(".hero-bottom")) {
          intro.from(".hero-bottom", { opacity: 0, duration: 1 }, 0.7);
        }
        gsap.to(".hero-image", {
          yPercent: 15,
          ease: "none",
          scrollTrigger: {
            trigger: ".hero",
            start: "top top",
            end: "bottom top",
            scrub: true,
          },
        });
      }
      gsap.utils.toArray<HTMLElement>("[data-reveal]").forEach((element) => {
        gsap.from(element, {
          y: 32,
          opacity: 0,
          duration: 0.9,
          ease: "power2.out",
          scrollTrigger: { trigger: element, start: "top 93%", once: true },
        });
      });
      return () => {
        gsap.ticker.remove(tick);
        lenis.destroy();
      };
    });
    return () => media.revert();
  }, []);
  return null;
}

export function Brand() {
  return (
    <>
      <Image
        className="brand-logo"
        src="/assets/new Get designed logo.png"
        alt=""
        width={225}
        height={81}
      />
    </>
  );
}

export function Header({ light = false }: { light?: boolean }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const menuButton = useRef<HTMLButtonElement>(null);
  const pathname = usePathname();
  useEffect(() => {
    if (!menuOpen) return;
    const onEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setMenuOpen(false);
        menuButton.current?.focus();
      }
    };
    window.addEventListener("keydown", onEscape);
    return () => window.removeEventListener("keydown", onEscape);
  }, [menuOpen]);
  return (
    <header className={`site-header ${light ? "header-on-light" : ""} ${menuOpen ? "menu-is-open" : ""}`}>
      <Link
        href="/"
        className="brand"
        aria-label="GetDesigned home"
        onClick={() => setMenuOpen(false)}
      >
        <Brand />
      </Link>
      <nav aria-label="Main navigation" className="desktop-nav">
        {navLinks.map(({ label, href }) => (
          <Link
            href={href}
            key={href}
            aria-current={pathname === href ? "page" : undefined}
          >
            {label}
          </Link>
        ))}
      </nav>
      <Link
        className="header-cta"
        href="/lets-talk"
        aria-current={pathname === "/lets-talk" ? "page" : undefined}
      >
        Let’s talk <Arrow diagonal />
      </Link>
      <button
        ref={menuButton}
        className={`menu-toggle ${menuOpen ? "is-open" : ""}`}
        aria-label={menuOpen ? "Close navigation" : "Open navigation"}
        aria-expanded={menuOpen}
        aria-controls="mobile-menu"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        <span />
        <span />
      </button>
      <nav
        id="mobile-menu"
        className="mobile-nav"
        aria-label="Mobile navigation"
        hidden={!menuOpen}
      >
        {navLinks.map(({ label, href }, index) => (
          <Link href={href} key={href} onClick={() => setMenuOpen(false)}>
            <span>0{index + 1}</span>
            {label}
            <Arrow diagonal />
          </Link>
        ))}
        <Link href="/lets-talk" onClick={() => setMenuOpen(false)}>
          <span>05</span>Let’s talk
          <Arrow diagonal />
        </Link>
      </nav>
    </header>
  );
}

export function Services() {
  return (
    <div className="service-cards">
      {services.map((service, index) => (
        <article key={service.id} className="service-card" data-reveal>
          <div className="service-card-copy">
            <span className="service-card-number">0{index + 1} / WHAT WE DO</span>
            <h3>{service.name}</h3>
            <p>{service.description}</p>
            <span className="service-card-tags">{service.tags.join(" · ")}</span>
            <Link href={`/services#${service.id}`} className="service-card-link">
              Explore service <Arrow />
            </Link>
          </div>
          <div className="service-card-image">
            <Image
              src={service.image}
              alt={service.alt}
              fill
              sizes="(max-width: 900px) 100vw, 45vw"
            />
          </div>
        </article>
      ))}
    </div>
  );
}

const testimonials = [
  {
    quote:
      "We wanted a home that felt calm without losing the energy of family life. The planning questions helped us see possibilities we had missed, and every choice had a clear reason.",
    name: "Ananya Sharma",
    project: "Home interior · Hyderabad",
  },
  {
    quote:
      "The team considered how we actually use each room. Storage, light, and movement were thought through together, so the design feels easy to live with every day.",
    name: "Rohan & Priya Mehta",
    project: "Residential space · Hyderabad",
  },
  {
    quote:
      "What stood out was the conversation. We understood why a layout changed and how each material would work for us before anything was finalised.",
    name: "Kavya Rao",
    project: "Apartment interior · Hyderabad",
  },
];

export function Testimonials() {
  const [active, setActive] = useState(0);
  const testimonial = testimonials[active];
  const move = (direction: number) => {
    setActive((current) =>
      (current + direction + testimonials.length) % testimonials.length,
    );
  };

  return (
    <section className="section testimonials-section" aria-labelledby="testimonials-title">
      <div className="section-label">
        <span className="tiny-dot" /> A PLACE FOR CLIENT STORIES
        <span className="section-number">04 / TESTIMONIALS</span>
      </div>
      <h2 id="testimonials-title">The spaces we make. <em>The stories they hold.</em></h2>
      <p className="testimonial-disclosure">
        Sample testimonials for layout preview. Replace with approved client feedback before publishing.
      </p>
      <div className="testimonial-layout">
        <div className="testimonial-symbol" aria-hidden="true">
          <span>“</span>
          <small>THOUGHTFULLY DESIGNED · PERSONALLY FELT</small>
        </div>
        <div className="testimonial-main">
          <div className="testimonial-quote" aria-live="polite" key={active}>
            <blockquote>{testimonial.quote}</blockquote>
            <div className="testimonial-person">
              <span className="testimonial-monogram" aria-hidden="true">
                {testimonial.name.split(/\s|&/).filter(Boolean).map((part) => part[0]).slice(0, 2).join("")}
              </span>
              <div>
                <strong>{testimonial.name}</strong>
                <span>{testimonial.project} · Illustrative quote</span>
              </div>
            </div>
          </div>
          <div className="testimonial-controls">
            <span>{String(active + 1).padStart(2, "0")} / {String(testimonials.length).padStart(2, "0")}</span>
            <div>
              <button type="button" onClick={() => move(-1)} aria-label="Previous testimonial">
                <Arrow />
              </button>
              <button type="button" onClick={() => move(1)} aria-label="Next testimonial">
                <Arrow />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

const spaceTypes = [
  "Apartment",
  "Independent home",
  "Villa",
  "Office",
  "Commercial",
  "Other",
];
const budgets = [
  "Under ₹10 lakh",
  "₹10–25 lakh",
  "₹25–50 lakh",
  "₹50 lakh+",
  "Not sure yet",
];
const timelines = [
  "As soon as possible",
  "In 1–3 months",
  "In 3–6 months",
  "Just exploring",
];

// No backend yet: the enquiry is composed into an email the visitor sends from their own mail app.
export function EnquiryForm() {
  const [sent, setSent] = useState(false);
  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const field = (key: string) => String(data.get(key) ?? "").trim();
    const wanted = data.getAll("services").map(String);
    const body = [
      `Name: ${field("name")}`,
      `Phone: ${field("phone")}`,
      `Email: ${field("email")}`,
      `Space: ${field("space") || "Not specified"}`,
      `Location / area: ${field("location") || "Not specified"}`,
      `Looking for: ${wanted.length ? wanted.join(", ") : "Not specified"}`,
      `Budget: ${field("budget") || "Not specified"}`,
      `Timeline: ${field("timeline") || "Not specified"}`,
      "",
      field("message"),
    ].join("\n");
    const subject = `New enquiry from ${field("name")}`;
    window.location.href = `mailto:${contact.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    setSent(true);
  };

  return (
    <form className="enquiry-form" onSubmit={onSubmit}>
      <fieldset>
        <legend>
          <span>01</span> About you
        </legend>
        <div className="field-row">
          <label className="field">
            <span>Your name</span>
            <input name="name" autoComplete="name" required />
          </label>
          <label className="field">
            <span>Phone</span>
            <input name="phone" type="tel" autoComplete="tel" required />
          </label>
        </div>
        <label className="field">
          <span>Email</span>
          <input name="email" type="email" autoComplete="email" />
        </label>
      </fieldset>

      <fieldset>
        <legend>
          <span>02</span> Your space
        </legend>
        <div
          className="chip-group"
          role="radiogroup"
          aria-label="Type of space"
        >
          {spaceTypes.map((type) => (
            <label className="chip" key={type}>
              <input type="radio" name="space" value={type} />
              <span>{type}</span>
            </label>
          ))}
        </div>
        <label className="field">
          <span>Location & approximate size</span>
          <input
            name="location"
            placeholder="e.g. Kokapet, 3 BHK, 1,800 sq ft"
          />
        </label>
      </fieldset>

      <fieldset>
        <legend>
          <span>03</span> What you need
        </legend>
        <div className="chip-group">
          {services.map((service) => (
            <label className="chip" key={service.id}>
              <input type="checkbox" name="services" value={service.name} />
              <span>{service.name}</span>
            </label>
          ))}
        </div>
        <div className="field-row">
          <label className="field">
            <span>Budget</span>
            <select name="budget" defaultValue="">
              <option value="" disabled>
                Select a range
              </option>
              {budgets.map((b) => (
                <option key={b}>{b}</option>
              ))}
            </select>
          </label>
          <label className="field">
            <span>Timeline</span>
            <select name="timeline" defaultValue="">
              <option value="" disabled>
                When would you like to start?
              </option>
              {timelines.map((t) => (
                <option key={t}>{t}</option>
              ))}
            </select>
          </label>
        </div>
        <label className="field">
          <span>Tell us about it</span>
          <textarea
            name="message"
            rows={5}
            placeholder="How do you live in the space today? What would you change?"
          />
        </label>
      </fieldset>

      <div className="form-submit">
        <button className="button button-dark" type="submit">
          Send enquiry <Arrow diagonal />
        </button>
        <p aria-live="polite">
          {sent
            ? "Your email app should open with the details filled in. Just press send."
            : "We usually reply within one working day."}
        </p>
      </div>
    </form>
  );
}
