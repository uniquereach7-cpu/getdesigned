import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

import { services } from "../data";
import { Arrow, Motion } from "../experience";
import { ClosingCTA, PageHero, ProcessSteps, SectionLabel } from "../site";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Space planning, residential interiors, workspace design, and full design-and-execution from GetDesigned, Hyderabad.",
};

const expertise = [
  "Home interior design",
  "Commercial & offices",
  "Furniture decoration",
  "Home building",
  "Decoration",
  "Furniture selection",
];

const details = [
  {
    image: "/images/kitchen.jpg",
    alt: "Open kitchen with a fluted breakfast counter and glowing glass display shelves",
    caption: "Open kitchen",
  },
  {
    image: "/images/shelving.jpg",
    alt: "Backlit display shelving beside a warm timber kitchen",
    caption: "Lit display shelving",
  },
  {
    image: "/images/crockery.jpg",
    alt: "Solid wood crockery unit with cane panels",
    caption: "Crockery unit",
  },
  {
    image: "/images/washbasin.jpg",
    alt: "Wash basin with a round backlit mirror and patterned feature wall",
    caption: "Dining wash basin",
  },
];

export default function ServicesPage() {
  return (
    <>
      <Motion />
      <main>
        <PageHero
          kicker="WHAT WE DO"
          title={
            <>
              Design, detail, and execution
              <br />
              <em>under one roof.</em>
            </>
          }
          description="From the first layout to the last light fitting, one team that understands how your space should feel."
          image="/images/materials.jpg"
          alt="Timber, stone, and marble samples laid out for a material selection"
        />

        <section className="section">
          <SectionLabel number="01 / OUR EXPERTISE">
            NOTHING GENERIC. NOTHING WITHOUT A REASON.
          </SectionLabel>
          <div className="section-heading" data-reveal>
            <h2>
              Planned for you,
              <br />
              <em>explained to you.</em>
            </h2>
            <p>
              We don’t copy layouts. We plan each space
              <br />
              around its people, and tell you why.
            </p>
          </div>
          <nav className="service-index" aria-label="Services" data-reveal>
            {services.map((service, index) => (
              <a href={`#${service.id}`} key={service.id}>
                <span>0{index + 1}</span>
                {service.name}
                <Arrow />
              </a>
            ))}
          </nav>

          <div className="service-details">
            {services.map((service, index) => (
              <article
                className="service-detail"
                id={service.id}
                key={service.id}
              >
                <div className="service-detail-image" data-reveal>
                  <Image
                    src={service.image}
                    alt={service.alt}
                    fill
                    sizes="(max-width: 900px) 90vw, 45vw"
                  />
                  <span className="service-detail-index">0{index + 1}</span>
                </div>
                <div className="service-detail-copy" data-reveal>
                  <p className="service-detail-tags">
                    {service.tags.join(" · ")}
                  </p>
                  <h2>{service.name}</h2>
                  <p className="service-detail-intro">{service.intro}</p>
                  <p>{service.detail}</p>
                  <ul>
                    {service.includes.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                  <Link href="/lets-talk" className="text-link">
                    Discuss your space <Arrow diagonal />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="expertise-band" aria-label="Areas of expertise">
          <div className="expertise-track">
            {[...expertise, ...expertise].map((item, index) => (
              <span key={index} aria-hidden={index >= expertise.length}>
                {item}
              </span>
            ))}
          </div>
        </section>

        <section className="section">
          <SectionLabel number="02 / IN THE DETAILS">
            FROM RECENT GETDESIGNED SPACES
          </SectionLabel>
          <div className="section-heading" data-reveal>
            <h2>
              Small corners,
              <br />
              <em>carefully considered.</em>
            </h2>
            <p>
              Carpentry, lighting, and finishes
              <br />
              designed and built by our own team.
            </p>
          </div>
          <div className="detail-grid">
            {details.map((detail) => (
              <figure key={detail.image} data-reveal>
                <div className="detail-photo">
                  <Image
                    src={detail.image}
                    alt={detail.alt}
                    fill
                    sizes="(max-width: 650px) 45vw, 22vw"
                  />
                </div>
                <figcaption>{detail.caption}</figcaption>
              </figure>
            ))}
          </div>
        </section>

        <section className="process-section">
          <div className="section">
            <SectionLabel number="03 / THE PROCESS">
              GOOD DESIGN IS A CONVERSATION
            </SectionLabel>
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
