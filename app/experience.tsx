"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import Lenis from "lenis";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

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
      const intro = gsap.timeline({ defaults: { ease: "power3.out" } });
      intro
        .from(".hero-image", { scale: 1.08, duration: 1.7 })
        .from(
          ".hero-content > *",
          { y: 32, opacity: 0, stagger: 0.13, duration: 1 },
          0.15,
        )
        .from(".site-header, .hero-bottom", { opacity: 0, duration: 1 }, 0.7);
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
  const links = [
    ["Our work", "projects"],
    ["The studio", "studio"],
    ["What we do", "services"],
    ["Our process", "process"],
  ];
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
      <a
        href="#home"
        className="brand"
        aria-label="GetDesigned home"
        onClick={() => setMenuOpen(false)}
      >
        <Brand />
      </a>
      <nav aria-label="Main navigation" className="desktop-nav">
        {links.map(([label, target]) => (
          <a href={`#${target}`} key={target}>
            {label}
          </a>
        ))}
      </nav>
      <a className="header-cta" href="#contact">
        Let’s talk <Arrow diagonal />
      </a>
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
        {links.map(([label, target], index) => (
          <a
            href={`#${target}`}
            key={target}
            onClick={() => setMenuOpen(false)}
          >
            <span>0{index + 1}</span>
            {label}
            <Arrow diagonal />
          </a>
        ))}
        <a href="#contact" onClick={() => setMenuOpen(false)}>
          <span>05</span>Let’s talk
          <Arrow diagonal />
        </a>
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
            <a
              className="button button-dark"
              href="#contact"
              onClick={() => dialog.current?.close()}
            >
              Let’s talk about your space <Arrow diagonal />
            </a>
          </div>
        </div>
      </dialog>
    </>
  );
}

const services = [
  {
    name: "Space planning",
    description:
      "Every good interior begins with a better plan. We study your routines, natural light, circulation, and storage, and explain the reason behind every layout decision.",
    tags: ["Layouts", "Flow", "Function"],
    image: "/images/hero-interior.jpg",
  },
  {
    name: "Residential interiors",
    description:
      "A home that feels like you. Materials, colour, lighting, and custom furniture brought together into a considered whole, from the kitchen to your favourite quiet corner.",
    tags: ["Homes", "Materials", "Bespoke furniture"],
    image: "/images/swing.png",
  },
  {
    name: "Workspace design",
    description:
      "Spaces that support the way your team works, balancing focus, collaboration, and a welcoming first impression through purposeful layouts.",
    tags: ["Offices", "Collaboration", "Comfort"],
    image: "/images/hero.jpg",
  },
  {
    name: "Design & execution",
    description:
      "From drawings to the details you can touch. Our designers and site team carry the design through material selection, coordination, and the finishing touches.",
    tags: ["Drawings", "Coordination", "Finishing"],
    image: "/images/living.png",
  },
];

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
            <a href="#contact" className="service-row">
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
            </a>
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
