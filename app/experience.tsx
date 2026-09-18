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
        src="/assets/logo.png"
        alt=""
        width={32}
        height={40}
      />
      <span className="brand-name">
        GetDesigned
        <span className="brand-descriptor">INTERIOR DESIGN STUDIO</span>
      </span>
    </>
  );
}

export function Header() {
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
    <header className={`site-header ${menuOpen ? "menu-is-open" : ""}`}>
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

const projects = [
  {
    title: "A moment to pause",
    category: "LIVING SPACES",
    image: "/images/swing.png",
    alt: "Bespoke wooden and cane swing with brass suspension in a warm family home",
    intro: "Familiar comforts, thoughtfully reimagined.",
    description:
      "A timber-and-cane swing brings a familiar Indian ritual into a contemporary interior. Soft upholstery, warm metal finishes, and the surrounding open space make this corner feel like an invitation to slow down.",
    details: [
      "Timber & woven cane",
      "Warm brass details",
      "A dedicated place to unwind",
    ],
  },
  {
    title: "Room for togetherness",
    category: "DINING SPACES",
    image: "/images/dining.png",
    alt: "Cream upholstered dining chairs under a sculptural brass and glass chandelier",
    intro: "An everyday gathering, with a little occasion.",
    description:
      "A generous dining table anchors this space, framed by upholstered seating and a sculptural chandelier. Daylight filters through sheer curtains, while a layered palette of cream, timber, and brass connects the details.",
    details: [
      "Soft, layered lighting",
      "Comfortable family seating",
      "A cohesive material palette",
    ],
  },
  {
    title: "Character in the details",
    category: "INTERIOR DETAILS",
    image: "/images/living.png",
    alt: "Textured natural stone feature wall with warm accent lighting and a framed sculpture",
    intro: "Even a small corner can hold a story.",
    description:
      "Textured stone, recessed lighting, and a framed sculptural niche give this wall depth and character. The contrast between rough stone and polished accents makes a compact feature feel quietly distinctive.",
    details: [
      "Textured stone surfaces",
      "Focused accent lighting",
      "A considered focal point",
    ],
  },
];

export function ProjectGallery() {
  const [selected, setSelected] = useState(0);
  const dialog = useRef<HTMLDialogElement>(null);
  const project = projects[selected];
  const showProject = (index: number) => {
    setSelected(index);
    dialog.current?.showModal();
  };
  return (
    <>
      <div className="project-grid">
        {projects.map((item, index) => (
          <button
            key={item.title}
            className={`project-card project-card-${index + 1}`}
            onClick={() => showProject(index)}
            aria-label={`Explore ${item.title}`}
            data-reveal
          >
            <div className="project-photo">
              <Image
                src={item.image}
                alt={item.alt}
                fill
                sizes="(max-width: 650px) 90vw, (max-width: 900px) 45vw, 35vw"
              />
              <span className="project-view">
                A closer look <Arrow diagonal />
              </span>
              <span className="project-index">0{index + 1}</span>
            </div>
            <div className="project-caption">
              <div>
                <p className="eyebrow">{item.category}</p>
                <h3>{item.title}</h3>
              </div>
              <span className="round-arrow">
                <Arrow diagonal />
              </span>
            </div>
          </button>
        ))}
      </div>
      <dialog
        ref={dialog}
        className="project-dialog"
        aria-labelledby="project-dialog-title"
        data-lenis-prevent
        onClick={(event) => {
          if (event.target === event.currentTarget) dialog.current?.close();
        }}
      >
        <button
          className="dialog-close"
          onClick={() => dialog.current?.close()}
          aria-label="Close project"
        >
          ×
        </button>
        <div className="dialog-layout">
          <div className="dialog-photo">
            <Image
              src={project.image}
              alt={project.alt}
              fill
              sizes="(max-width: 650px) 90vw, 45vw"
            />
          </div>
          <div className="dialog-copy">
            <p className="eyebrow">GETDESIGNED · {project.category}</p>
            <h2 id="project-dialog-title">{project.title}</h2>
            <p className="dialog-intro">{project.intro}</p>
            <p>{project.description}</p>
            <ul>
              {project.details.map((detail) => (
                <li key={detail}>{detail}</li>
              ))}
            </ul>
            <Link
              className="button button-dark"
              href="/lets-talk"
              onClick={() => dialog.current?.close()}
            >
              Let’s talk about your space <Arrow diagonal />
            </Link>
          </div>
        </div>
      </dialog>
    </>
  );
}

export function Services() {
  const list = useRef<HTMLUListElement>(null);
  const preview = useRef<HTMLDivElement>(null);

  // Fine pointers: a floating preview follows the cursor and cross-fades between services.
  useEffect(() => {
    const media = gsap.matchMedia();
    media.add(
      "(hover: hover) and (pointer: fine) and (prefers-reduced-motion: no-preference)",
      () => {
        const box = preview.current!;
        const listEl = list.current!;
        const rows = gsap.utils.toArray<HTMLElement>("[data-service-row]", listEl);
        const imgs = gsap.utils.toArray<HTMLElement>("[data-preview-img]", box);
        const xTo = gsap.quickTo(box, "x", { duration: 0.6, ease: "power3.out" });
        const yTo = gsap.quickTo(box, "y", { duration: 0.6, ease: "power3.out" });
        const rTo = gsap.quickTo(box, "rotation", { duration: 0.8, ease: "power3.out" });
        let lastX = 0;
        let active = -1;

        gsap.set(box, { xPercent: -50, yPercent: -50, scale: 0.6, opacity: 0 });
        gsap.set(imgs, { opacity: 0 });

        const show = (i: number) => {
          if (i === active) return;
          active = i;
          imgs.forEach((img, j) =>
            gsap.to(img, {
              opacity: j === i ? 1 : 0,
              scale: j === i ? 1 : 1.08,
              duration: 0.5,
              ease: "power2.out",
            }),
          );
        };
        const onMove = (e: PointerEvent) => {
          xTo(e.clientX);
          yTo(e.clientY);
          rTo(gsap.utils.clamp(-6, 6, (e.clientX - lastX) * 0.4));
          lastX = e.clientX;
        };
        const onEnter = (e: PointerEvent) => {
          gsap.set(box, { x: e.clientX, y: e.clientY });
          lastX = e.clientX;
          gsap.to(box, { scale: 1, opacity: 1, duration: 0.5, ease: "power3.out" });
        };
        const onLeave = () => {
          active = -1;
          gsap.to(box, { scale: 0.6, opacity: 0, duration: 0.4, ease: "power3.out" });
        };
        const rowHandlers = rows.map((row, i) => {
          const handler = () => show(i);
          row.addEventListener("pointerenter", handler);
          return handler;
        });

        listEl.addEventListener("pointermove", onMove);
        listEl.addEventListener("pointerenter", onEnter);
        listEl.addEventListener("pointerleave", onLeave);
        return () => {
          listEl.removeEventListener("pointermove", onMove);
          listEl.removeEventListener("pointerenter", onEnter);
          listEl.removeEventListener("pointerleave", onLeave);
          rows.forEach((row, i) =>
            row.removeEventListener("pointerenter", rowHandlers[i]),
          );
        };
      },
    );
    return () => media.revert();
  }, []);

  return (
    <>
      <ul ref={list} className="service-list">
        {services.map((service, index) => (
          <li key={service.name} className="service-item" data-service-row data-reveal>
            <Link href={`/services#${service.id}`} className="service-row">
              <span className="service-number">0{index + 1}</span>
              <h3 className="service-title">{service.name}</h3>
              <div className="service-body">
                <p>{service.description}</p>
                <p className="service-tags">{service.tags.join(" · ")}</p>
              </div>
              <div className="service-thumb">
                <Image
                  src={service.image}
                  alt=""
                  fill
                  sizes="(max-width: 650px) 90vw, 40vw"
                />
              </div>
              <span className="service-arrow" aria-hidden="true">
                <Arrow diagonal />
              </span>
            </Link>
          </li>
        ))}
      </ul>
      <div ref={preview} className="service-preview" aria-hidden="true">
        {services.map((service) => (
          <div key={service.name} className="service-preview-img" data-preview-img>
            <Image src={service.image} alt="" fill sizes="340px" />
          </div>
        ))}
      </div>
    </>
  );
}

const spaceTypes = ["Apartment", "Independent home", "Villa", "Office", "Commercial", "Other"];
const budgets = ["Under ₹10 lakh", "₹10–25 lakh", "₹25–50 lakh", "₹50 lakh+", "Not sure yet"];
const timelines = ["As soon as possible", "In 1–3 months", "In 3–6 months", "Just exploring"];

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
        <div className="chip-group" role="radiogroup" aria-label="Type of space">
          {spaceTypes.map((type) => (
            <label className="chip" key={type}>
              <input type="radio" name="space" value={type} />
              <span>{type}</span>
            </label>
          ))}
        </div>
        <label className="field">
          <span>Location & approximate size</span>
          <input name="location" placeholder="e.g. Kokapet, 3 BHK, 1,800 sq ft" />
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
