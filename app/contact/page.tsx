import type { Metadata } from "next";
import Link from "next/link";

import { contact } from "../data";
import { Arrow, Motion } from "../experience";
import { PageHero, SectionLabel } from "../site";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Call, email, WhatsApp, or visit the GetDesigned studio in Narsingi, Hyderabad.",
};

const faqs = [
  {
    q: "Where do you work?",
    a: "We are based in Narsingi, Hyderabad, and work on homes, offices, and commercial spaces across the city.",
  },
  {
    q: "Do you only design, or do you build too?",
    a: "Both. Our designers and in-house implementation team handle everything from drawings and material selection to carpentry, finishing, and handover.",
  },
  {
    q: "Can you work within my budget?",
    a: "Yes. Luxury at an honest price is what we are known for. We plan around your budget from the first conversation and show you where each rupee goes.",
  },
  {
    q: "How does a project begin?",
    a: "With a conversation. We learn how you live and what you need, visit the space, and then come back with a plan and the reasoning behind it.",
  },
];

export default function ContactPage() {
  return (
    <>
      <Motion />
      <main>
        <PageHero
          kicker="CONTACT"
          title={
            <>
              Come say <em>hello.</em>
            </>
          }
          description="Connect with us to bring your dream space to life. Call, write, or drop by the studio."
          image="/images/hero-warm.jpg"
          alt="Warm wood and comfortable seating in an inviting interior"
          position="center 70%"
        />

        <section className="section">
          <SectionLabel number="01 / GET IN TOUCH">
            WE’D LOVE TO HEAR ABOUT YOUR SPACE
          </SectionLabel>
          <div className="contact-cards">
            <a className="contact-card" href={contact.phoneHref} data-reveal>
              <span className="contact-card-label">Call us</span>
              <strong>{contact.phone}</strong>
              <span className="contact-card-note">
                Talk to the team directly
              </span>
              <Arrow diagonal />
            </a>
            <a
              className="contact-card"
              href={`mailto:${contact.email}`}
              data-reveal
            >
              <span className="contact-card-label">Email</span>
              <strong>{contact.email}</strong>
              <span className="contact-card-note">
                Share plans, photos, or ideas
              </span>
              <Arrow diagonal />
            </a>
            <a
              className="contact-card"
              href={contact.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              data-reveal
            >
              <span className="contact-card-label">WhatsApp</span>
              <strong>Message us</strong>
              <span className="contact-card-note">
                Quick questions, quick replies
              </span>
              <Arrow diagonal />
            </a>
          </div>

          <div className="visit-layout">
            <div className="visit-copy" data-reveal>
              <h2>
                Visit the <em>studio.</em>
              </h2>
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
              <div className="visit-cta">
                <p>Ready to start? Tell us about your project in two minutes.</p>
                <Link className="button button-dark" href="/lets-talk">
                  Let’s talk <Arrow diagonal />
                </Link>
              </div>
            </div>
            <div className="visit-map" data-reveal>
              <iframe
                title="GetDesigned studio location on Google Maps"
                src="https://www.google.com/maps?q=Narsingi,+Hyderabad,+Telangana+500075&output=embed"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </section>

        <section className="process-section">
          <div className="section">
            <SectionLabel number="02 / QUESTIONS">GOOD TO KNOW</SectionLabel>
            <div className="faq-layout">
              <h2 data-reveal>
                Before you
                <br />
                <em>reach out.</em>
              </h2>
              <div className="faq-list" data-reveal>
                {faqs.map((faq) => (
                  <details key={faq.q}>
                    <summary>
                      {faq.q}
                      <span aria-hidden="true" />
                    </summary>
                    <p>{faq.a}</p>
                  </details>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
