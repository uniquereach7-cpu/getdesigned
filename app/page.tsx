import Image from "next/image";
import Link from "next/link";

import { Arrow, Header, Motion, Services } from "./experience";
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
        <div className="belief-strip">
          <span>Considered spaces. Meaningful details.</span>
          <span>
            Designed around <em>you.</em>
          </span>
          <span>FROM THE FIRST SKETCH TO THE FINAL TOUCH.</span>
        </div>

        <section className="section studio-section" id="studio">
          <div className="section-label" data-reveal>
            <span className="tiny-dot" /> THE WAY WE SEE IT{" "}
            <span className="section-number">01 / THE STUDIO</span>
          </div>
          <div className="studio-grid">
            <div data-reveal>
              <h2>
                Not just a beautiful space.
                <br />A <em>better way to live.</em>
              </h2>
              <div className="studio-mini-image">
                <Image
                  src="/images/living.png"
                  alt="A warmly lit stone niche from GetDesigned’s portfolio"
                  fill
                  sizes="180px"
                />
                <span>
                  It’s all in
                  <br />
                  <em>the details.</em>
                </span>
              </div>
            </div>
            <div className="studio-copy" data-reveal>
              <p className="lead">
                The best spaces don’t happen by chance.
                <br />
                They begin with the right questions.
              </p>
              <p>
                How do you start your mornings? Where does everyone gather? What
                would make your everyday feel a little easier?
              </p>
              <p>
                At GetDesigned, we look beyond a floor plan. We get to know the
                people who will live in it. Then we shape the light, the flow,
                and every little detail around them. Nothing generic. Nothing
                without a reason.
              </p>
              <div className="founder">
                <div className="founder-photo">
                  <Image
                    src="/images/founder.jpg"
                    alt="Samanvita Reddy, founder of GetDesigned"
                    fill
                    sizes="60px"
                  />
                </div>
                <div>
                  <strong>Samanvita Reddy</strong>
                  <span>Founder & CEO</span>
                </div>
                <Link
                  href="/about"
                  className="round-arrow"
                  aria-label="More about the studio"
                >
                  <Arrow diagonal />
                </Link>
              </div>
            </div>
          </div>
          <div className="principles" data-reveal>
            <div>
              <span>01</span>
              <p>People before plans.</p>
            </div>
            <div>
              <span>02</span>
              <p>Purpose in every detail.</p>
            </div>
            <div>
              <span>03</span>
              <p>Beauty that belongs.</p>
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

        <ClosingCTA />
      </main>
    </>
  );
}
