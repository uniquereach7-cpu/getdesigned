import Image from "next/image";

import { Arrow, Header, Motion, ProjectGallery, Services } from "./experience";

export default function Home() {
  return (
    <>
      <a className="skip-link" href="#main-content">
        Skip to content
      </a>
      <Header />
      <Motion />
      <main id="home">
        <section
          id="main-content"
          className="hero"
          aria-labelledby="hero-heading"
        >
          <div className="hero-image">
            <Image
              src="/images/hero-warm.jpg"
              alt="Warm timber interiors with soft cream seating and sculptural lighting"
              fill
              preload
              sizes="100vw"
            />
          </div>
          <div className="hero-shade" />
          <div className="hero-topline">
            <span className="eyebrow">
              <span className="tiny-dot" /> INTERIORS WITH INTENTION
            </span>
            <span className="hero-location">HYDERABAD, INDIA</span>
          </div>
          <div className="hero-content">
            <p className="hero-kicker">
              A little thought. A different way to live.
            </p>
            <h1 id="hero-heading">
              Beautiful spaces.
              <br />
              <em>Thoughtfully yours.</em>
            </h1>
            <p>
              Beyond the way it looks. We design around the way you live,
              <br className="desktop-break" /> with a reason behind every
              detail.
            </p>
            <a href="#projects" className="button button-light">
              Explore our work <Arrow diagonal />
            </a>
          </div>
          <div className="hero-bottom">
            <a href="#studio" className="scroll-link">
              <span className="scroll-circle">↓</span> SCROLL TO DISCOVER
            </a>
            <span>SPACE PLANNING · INTERIOR DESIGN · EXECUTION</span>
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
                <a
                  href="#contact"
                  className="round-arrow"
                  aria-label="Talk to the studio"
                >
                  <Arrow diagonal />
                </a>
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

        <section className="projects-section" id="projects">
          <div className="section projects-inner">
            <div className="section-label" data-reveal>
              <span className="tiny-dot" /> A FEW SPACES, MANY STORIES{" "}
              <span className="section-number">02 / SELECTED WORK</span>
            </div>
            <div className="section-heading" data-reveal>
              <h2>
                Spaces with <em>a point of view.</em>
              </h2>
              <p>
                A closer look at our work, and the
                <br />
                little details that make it personal.
              </p>
            </div>
            <ProjectGallery />
            <div className="projects-footnote">
              <span>REAL SPACES. REAL DETAILS. THE GETDESIGNED PORTFOLIO.</span>
              <a href="#contact" className="text-link">
                Your space could be next <Arrow diagonal />
              </a>
            </div>
          </div>
        </section>

        <section className="section services-section" id="services">
          <div className="section-label" data-reveal>
            <span className="tiny-dot" /> FROM POSSIBILITIES TO PLACES{" "}
            <span className="section-number">03 / OUR EXPERTISE</span>
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
        </section>

        <section className="process-section" id="process">
          <div className="section">
            <div className="section-label" data-reveal>
              <span className="tiny-dot" /> GOOD DESIGN IS A CONVERSATION{" "}
              <span className="section-number">04 / THE PROCESS</span>
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
            <div className="process-grid">
              {[
                {
                  number: "01",
                  title: "First, we listen.",
                  description:
                    "Your routines, your wish list, your budget. We get to know what matters to you before we put pen to paper.",
                  note: "DISCOVERY & BRIEF",
                },
                {
                  number: "02",
                  title: "Then, we question.",
                  description:
                    "We explore layouts and possibilities. Every choice comes with a why, so you understand how your space will work.",
                  note: "PLANNING & CONCEPT",
                },
                {
                  number: "03",
                  title: "Together, we refine.",
                  description:
                    "Materials, light, colour, and custom details. We develop the design with you until it feels right.",
                  note: "DESIGN & DETAILING",
                },
                {
                  number: "04",
                  title: "Finally, it’s yours.",
                  description:
                    "Our design and execution teams bring the details together, carrying the vision through to the finished space.",
                  note: "EXECUTION & HANDOVER",
                },
              ].map((step) => (
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
          </div>
        </section>

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
            <a
              className="button button-light"
              href="mailto:getdesigned26@gmail.com?subject=Let%E2%80%99s%20talk%20about%20my%20space"
            >
              Start a conversation <Arrow diagonal />
            </a>
            <a className="contact-phone" href="tel:+919000297018">
              Or give us a call: +91 90002 97018
            </a>
          </div>
        </section>
      </main>
      <footer className="footer">
        <div className="footer-main">
          <div className="footer-brand">
            <a href="#home" className="brand" aria-label="GetDesigned home">
              <span className="brand-mark" aria-hidden="true" />
              <span>
                get<span className="brand-light">designed</span>
                <span className="brand-dot">.</span>
              </span>
            </a>
            <p>
              Thoughtful spaces.
              <br />
              Made for the way you live.
            </p>
          </div>
          <div>
            <span className="footer-label">COME SAY HELLO</span>
            <address>
              Flat 301, Sri Ramaramam Building,
              <br />
              Narsingi, Hyderabad,
              <br />
              Telangana 500075.
            </address>
            <a
              className="text-link"
              href="https://www.google.com/maps/search/?api=1&query=GetDesigned+Narsingi+Hyderabad"
              target="_blank"
              rel="noopener noreferrer"
            >
              Get directions <Arrow diagonal />
            </a>
          </div>
          <div>
            <span className="footer-label">LET’S CONNECT</span>
            <a href="mailto:getdesigned26@gmail.com">getdesigned26@gmail.com</a>
            <a href="tel:+919000297018">+91 90002 97018</a>
            <a
              className="text-link"
              href="https://wa.me/919000297018"
              target="_blank"
              rel="noopener noreferrer"
            >
              Say hello on WhatsApp <Arrow diagonal />
            </a>
          </div>
          <div className="footer-nav">
            <span className="footer-label">EXPLORE</span>
            <a href="#projects">Our work</a>
            <a href="#studio">The studio</a>
            <a href="#services">What we do</a>
            <a href="#process">Our process</a>
          </div>
        </div>
        <div className="footer-bottom">
          <span>
            © {new Date().getFullYear()} GetDesigned. All rights reserved.
          </span>
          <span>BASED IN HYDERABAD. DESIGNED AROUND YOU.</span>
          <a href="#home">Back to top ↑</a>
        </div>
      </footer>
    </>
  );
}
