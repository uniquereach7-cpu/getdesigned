import Image from "next/image";
import Link from "next/link";

import { Arrow, Header, Motion, Services, Testimonials } from "./experience";
import { ClosingCTA, ProcessSteps } from "./site";

export default function Home() {
  return (
    <>
      <Motion />
      <main id="home">
        <section
          id="main-content"
          className="hero"
          aria-labelledby="hero-heading"
        >
          <Header />
          <div className="hero-image">
            <Image
              src="/images/hero-architecture.webp"
              alt="Architectural concept: a sunlit double-height living room with curved plaster walls, walnut, and sculptural cream seating"
              fill
              preload
              sizes="100vw"
            />
          </div>
          <div className="hero-shade" />
          <div className="hero-content">
            <p className="hero-kicker">CONSIDERED SPACES. DISTINCTLY YOU.</p>
            <h1 id="hero-heading">
              Spaces with soul.
              <br />
              <em>Designed around you.</em>
            </h1>
            <p className="hero-description">
              A reason behind every detail. A place for the way you live.
            </p>
            <Link href="/services" className="button button-light">
              Explore our services <Arrow diagonal />
            </Link>
          </div>
          <div className="hero-bottom">
            <a href="#studio" className="scroll-link">
              <span className="scroll-circle">↓</span> SCROLL TO DISCOVER
            </a>
            <span className="hero-location">
              INTERIOR DESIGN STUDIO · HYDERABAD
            </span>
          </div>
        </section>
        <div className="belief-strip" aria-label="Thoughtful spaces, planned around you">
          <div className="belief-track">
            {[0, 1].map((copy) => (
              <div className="belief-phrases" key={copy} aria-hidden={copy === 1}>
                <span>Thoughtful spaces</span>
                <span>Purpose in every detail</span>
                <span>Designed around you</span>
                <span>From plan to place</span>
              </div>
            ))}
          </div>
        </div>

        <section className="home-founder-section" id="studio">
          <div className="section founder-layout">
            <div className="founder-portrait" data-reveal>
              <Image
                src="/images/founder.jpg"
                alt="Samanvita Reddy, founder of GetDesigned"
                fill
                sizes="(max-width: 900px) 90vw, 40vw"
              />
            </div>
            <div className="founder-copy" data-reveal>
              <div className="section-label">
                <span className="tiny-dot" /> THE PERSON BEHIND THE PLANS
                <span className="section-number">01 / THE FOUNDER</span>
              </div>
              <h2>Samanvita <em>Reddy.</em></h2>
              <p className="founder-role">CEO &amp; Founder</p>
              <p className="founder-intro">
                Every space deserves its own answer, not a borrowed template.
              </p>
              <p>
                Samanvita begins by listening: how you move through a room, what
                your day asks of it, and where a small change could make life
                easier. From there, every layout and detail has a reason.
              </p>
              <p>
                Her approach brings considered planning and a personal sense of
                luxury together, so the finished space feels unmistakably yours.
              </p>
              <Link href="/about#founder" className="text-link">
                Get to know the studio <Arrow diagonal />
              </Link>
            </div>
          </div>
        </section>

        <section className="section services-section" id="services">
          <div className="section-label" data-reveal>
            <span className="tiny-dot" /> FROM POSSIBILITIES TO PLACES{" "}
            <span className="section-number">02 / OUR EXPERTISE</span>
          </div>
          <div className="section-heading" data-reveal>
            <h2>
              A whole vision.
              <br />
              <em>Every little detail.</em>
            </h2>
            <p>
              One thoughtful approach, from planning
              <br />
              your space to bringing it to life.
            </p>
          </div>
          <Services />
          <div className="services-footnote" data-reveal>
            <span>
              EVERY DECISION, EXPLAINED. EVERY SPACE, PLANNED FOR YOU.
            </span>
            <Link href="/services" className="text-link">
              Explore our services <Arrow diagonal />
            </Link>
          </div>
        </section>

        <section className="process-section" id="process">
          <div className="section">
            <div className="section-label" data-reveal>
              <span className="tiny-dot" /> GOOD DESIGN IS A CONVERSATION{" "}
              <span className="section-number">03 / THE PROCESS</span>
            </div>
            <div className="section-heading" data-reveal>
              <h2>
                From your first idea
                <br />
                to <em>“this feels like me.”</em>
              </h2>
              <p>
                A clear path. An open conversation.
                <br />
                And you at the centre of it all.
              </p>
            </div>
            <ProcessSteps />
          </div>
        </section>

        <Testimonials />

        <ClosingCTA />
      </main>
    </>
  );
}
