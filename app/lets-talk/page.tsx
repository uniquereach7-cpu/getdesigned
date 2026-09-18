import type { Metadata } from "next";

import { contact } from "../data";
import { EnquiryForm, Motion } from "../experience";
import { PageHero } from "../site";

export const metadata: Metadata = {
  title: "Let’s talk",
  description:
    "Tell GetDesigned about your home or workspace and start planning a space designed around you.",
};

const nextSteps = [
  {
    title: "We call you back",
    text: "Usually within one working day, to understand what you have in mind.",
  },
  {
    title: "We visit the space",
    text: "We measure, look at the light and flow, and listen to how you want to live.",
  },
  {
    title: "We share a plan",
    text: "A layout and direction, with the reasoning behind every decision.",
  },
];

export default function LetsTalkPage() {
  return (
    <>
      <Motion />
      <main>
        <PageHero
          kicker="LET’S TALK"
          title={
            <>
              Tell us about
              <br />
              <em>your space.</em>
            </>
          }
          description="A few details are all we need to begin. The rest, we’ll figure out together."
          image="/images/bedroom.jpg"
          alt="A calm neutral bedroom with a timber wardrobe, soft rug, and warm lamps"
          position="center 60%"
        />

        <section className="section enquiry-layout">
          <aside className="enquiry-aside" data-reveal>
            <h2>
              What happens
              <br />
              <em>next.</em>
            </h2>
            <ol>
              {nextSteps.map((step, index) => (
                <li key={step.title}>
                  <span>0{index + 1}</span>
                  <div>
                    <strong>{step.title}</strong>
                    <p>{step.text}</p>
                  </div>
                </li>
              ))}
            </ol>
            <div className="enquiry-direct">
              <span>PREFER TO TALK NOW?</span>
              <a href={contact.phoneHref}>{contact.phone}</a>
              <a href={`mailto:${contact.email}`}>{contact.email}</a>
            </div>
          </aside>
          <div data-reveal>
            <EnquiryForm />
          </div>
        </section>
      </main>
    </>
  );
}
