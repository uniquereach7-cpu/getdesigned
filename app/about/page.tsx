import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

import { stats } from "../data";
import { Arrow, Motion } from "../experience";
import { ClosingCTA, PageHero, SectionLabel } from "../site";

export const metadata: Metadata = {
  title: "About",
  description:
    "GetDesigned is a Hyderabad interior design studio creating personalised, luxurious interiors at honest prices, led by founder Samanvita Reddy.",
};

const values = [
  {
    title: "People before plans.",
    text: "We begin with how you live, not with a catalogue. Your habits, rituals, and wish list shape every drawing.",
  },
  {
    title: "Purpose in every detail.",
    text: "Every wall, light, and cabinet earns its place. If we suggest it, we can tell you why.",
  },
  {
    title: "Beauty that belongs.",
    text: "Luxury that feels like you, delivered with the practicality and value your home deserves.",
  },
];

export default function AboutPage() {
  return (
    <>
      <Motion />
      <main>
        <PageHero
          kicker="ABOUT THE STUDIO"
          title={
            <>
              Crafting personalised
              <br />
              <em>design experiences.</em>
            </>
          }
          description="Luxury interiors at honest prices, shaped around the people who live in them."
          image="/images/about-hero.jpg"
          alt="A bright living room with tan leather lounge chairs, a low timber table, and a fireplace"
          position="center 65%"
        />

        <section className="section">
          <SectionLabel number="01 / WHO WE ARE">
            WHERE LUXURY MEETS AFFORDABILITY
          </SectionLabel>
          <div className="about-intro">
            <div data-reveal>
              <h2>
                Spaces that reflect
                <br />
                <em>who you are.</em>
              </h2>
              <div className="about-intro-image">
                <Image
                  src="/images/crockery.jpg"
                  alt="A solid wood crockery unit with cane-panelled doors and a brass wall light"
                  fill
                  sizes="(max-width: 650px) 90vw, 35vw"
                />
              </div>
            </div>
            <div className="about-copy" data-reveal>
              <p className="lead">
                Our passion is creating bespoke spaces that reflect your
                personality and lifestyle, and quietly exceed what you imagined.
              </p>
              <p>
                GetDesigned brings together young designers and seasoned
                implementation experts. That blend lets us pair fresh, modern
                ideas with the practical know-how to build them properly, on
                site and on budget.
              </p>
              <p>
                We merge creativity with practicality. Every plan starts with
                your routines and needs, and every recommendation comes with a
                reason, so you always know why a space is shaped the way it is.
              </p>
              <p>
                Our process is collaborative from the first concept to the final
                handover. Whether it is a family home, a busy office, or a
                commercial space, you stay involved, and the result stays
                yours.
              </p>
              <Link href="/services" className="text-link">
                See what we do <Arrow diagonal />
              </Link>
            </div>
          </div>
        </section>

        <section className="stats-band" aria-label="GetDesigned in numbers">
          <div className="stats-grid">
            {stats.map((stat) => (
              <div key={stat.label} data-reveal>
                <strong>{stat.value}</strong>
                <span>{stat.label}</span>
              </div>
            ))}
          </div>
        </section>

        <section className="section">
          <SectionLabel number="02 / MISSION & VISION">
            WHAT DRIVES US
          </SectionLabel>
          <div className="mission-grid">
            <article data-reveal>
              <span className="mission-kicker">Our mission</span>
              <h3>
                Spaces that make everyday life <em>better.</em>
              </h3>
              <p>
                To create captivating, functional interiors that enhance the
                lives of our clients, while delivering exceptional value and
                personal service. Through close collaboration, we turn ideas
                into reality, one design at a time.
              </p>
            </article>
            <article data-reveal>
              <span className="mission-kicker">Our vision</span>
              <h3>
                A studio known for <em>individuality.</em>
              </h3>
              <p>
                To be recognised as a leading interior design studio, known for
                innovative design, genuine care for our clients, and spaces that
                become true reflections of the people in them.
              </p>
            </article>
          </div>
        </section>

        <section className="founder-section">
          <div className="section founder-layout">
            <div className="founder-portrait" data-reveal>
              <Image
                src="/images/founder.jpg"
                alt="Samanvita Reddy, founder of GetDesigned"
                fill
                sizes="(max-width: 650px) 90vw, 40vw"
              />
            </div>
            <div className="founder-copy" data-reveal>
              <SectionLabel number="03 / THE FOUNDER">
                MEET THE PERSON BEHIND THE PLANS
              </SectionLabel>
              <h2>
                Samanvita <em>Reddy.</em>
              </h2>
              <p className="founder-role">CEO & Founder</p>
              <p className="founder-intro">
                A unique, luxurious touch in every project, so each space tells
                a story of its own.
              </p>
              <p>
                Samanvita is a creative force in interior design, with a keen
                eye for detail and a talent for customisation. She approaches
                every project, from a cosy family home to a bustling office,
                with the same precision: listen carefully, understand deeply,
                then design something that could only belong to that client.
              </p>
              <p>
                Her signature is a touch of luxury that never loses sight of
                how a space is really used. From concept to completion, her
                work is about spaces that meet practical needs and still
                inspire and delight.
              </p>
            </div>
          </div>
        </section>

        <section className="section">
          <SectionLabel number="04 / WHAT GUIDES US">
            WHY CLIENTS CHOOSE US
          </SectionLabel>
          <div className="section-heading" data-reveal>
            <h2>
              Great design,
              <br />
              <em>made accessible.</em>
            </h2>
            <p>
              Functional, comfortable spaces, created in
              <br />
              close collaboration with the people who use them.
            </p>
          </div>
          <div className="values-grid">
            {values.map((value, index) => (
              <article key={value.title} data-reveal>
                <span>0{index + 1}</span>
                <h3>{value.title}</h3>
                <p>{value.text}</p>
              </article>
            ))}
          </div>
        </section>

        <ClosingCTA />
      </main>
    </>
  );
}
