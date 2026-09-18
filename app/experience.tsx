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
        .from(".hero-topline, .hero-bottom", { opacity: 0, duration: 1 }, 0.7);
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
    <header className="site-header">
      <a
        href="#home"
        className="brand"
        aria-label="GetDesigned home"
        onClick={() => setMenuOpen(false)}
      >
        <span className="brand-mark" aria-hidden="true" />
        <span>
          get<span className="brand-light">designed</span>
          <span className="brand-dot">.</span>
        </span>
      </a>
      <nav aria-label="Main navigation" className="desktop-nav">
        {links.map(([label, target]) => (
          <a href={`#${target}`} key={target}>
            {label}
          </a>
        ))}
      </nav>
      <a className="button button-dark header-cta" href="#contact">
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
      "Every good interior begins with a better plan. We study your routines, natural light, circulation, and storage needs to make each square foot work harder for you.",
    tags: "LAYOUTS · FLOW · FUNCTION",
    image: "/images/hero-interior.jpg",
    alt: "Considered arrangement of cream seating, wooden tables, and natural light",
  },
  {
    name: "Residential interiors",
    description:
      "A home that feels like you. We bring materials, colour, lighting, and custom furniture together into a considered whole, from the kitchen to your favourite quiet corner.",
    tags: "HOMES · MATERIALS · BESPOKE FURNITURE",
    image: "/images/swing.png",
    alt: "Custom cane and timber swing in a residential interior",
  },
  {
    name: "Workspace design",
    description:
      "Spaces that support the way your team works. We balance focused work, collaboration, and a welcoming first impression through purposeful layouts and thoughtful interiors.",
    tags: "OFFICES · COLLABORATION · COMFORT",
    image: "/images/hero.jpg",
    alt: "Glass-partitioned workspace with a lounge and open circulation",
  },
  {
    name: "Design & execution",
    description:
      "From drawings to the details you can touch. Our designers and implementation team work together to carry the design through material selection, coordination, and the finishing touches.",
    tags: "DRAWINGS · COORDINATION · FINISHING",
    image: "/images/living.png",
    alt: "Detailed stone installation with integrated feature lighting",
  },
];

export function Services() {
  const [active, setActive] = useState<number | null>(0);
  return (
    <div className="services-layout">
      <div className="service-visual" data-reveal>
        <Image
          key={active ?? 0}
          src={services[active ?? 0].image}
          alt={services[active ?? 0].alt}
          fill
          sizes="(max-width: 650px) 90vw, 42vw"
        />
        <span className="image-note">
          THOUGHT THROUGH. BEAUTIFULLY REALISED.
        </span>
      </div>
      <div className="service-list" data-reveal>
        {services.map((service, index) => (
          <div
            className={`service-item ${active === index ? "active" : ""}`}
            key={service.name}
          >
            <h3>
              <button
                aria-expanded={active === index}
                aria-controls={`service-panel-${index}`}
                id={`service-button-${index}`}
                onClick={() => setActive(active === index ? null : index)}
              >
                <span className="service-number">0{index + 1}</span>
                <span>{service.name}</span>
                <span className="service-plus" aria-hidden="true">
                  {active === index ? "−" : "+"}
                </span>
              </button>
            </h3>
            <div
              className="service-description"
              id={`service-panel-${index}`}
              role="region"
              aria-labelledby={`service-button-${index}`}
              hidden={active !== index}
            >
              <p>{service.description}</p>
              <p className="service-tags">{service.tags}</p>
              <a href="#contact" className="text-link">
                Discuss your space <Arrow diagonal />
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
