export type BlogPost = {
  slug: string;
  title: string;
  category: string;
  readTime: string;
  summary: string;
  image: string;
  imageAlt: string;
  intro: string;
  sections: { heading: string; paragraphs: string[] }[];
};

export const posts: BlogPost[] = [
  {
    slug: "why-space-planning-comes-first",
    title: "Why the best interiors begin with a plan",
    category: "Space planning",
    readTime: "5 min read",
    summary:
      "Before colours and finishes, a thoughtful layout can change how every day feels.",
    image: "/images/hero-interior.jpg",
    imageAlt: "A light-filled living room with cream seating and a timber coffee table",
    intro:
      "A beautiful room can still be difficult to live in. A plan gives the beauty somewhere sensible to belong.",
    sections: [
      {
        heading: "Start with the life inside the room",
        paragraphs: [
          "Every household moves differently. Some mornings revolve around a busy kitchen; others need a quiet corner before the day begins. Asking where people pause, gather, work, and put things down reveals more than a mood board can.",
          "That is why we begin by mapping routines. The questions may seem small, but they decide where light, storage, seating, and circulation should go.",
        ],
      },
      {
        heading: "Make the space work harder",
        paragraphs: [
          "Good planning does not always mean adding more. A clearer path through a room, a better door swing, or a cabinet in the right place can give existing square footage new purpose.",
          "We test how furniture sits in a space and how people move around it before materials are chosen. It helps avoid a lovely room that feels cramped once it is used.",
        ],
      },
      {
        heading: "Know the reason behind every choice",
        paragraphs: [
          "A plan should be a conversation, not a surprise. When you understand why a layout changed, you can decide with confidence whether it serves your life. The result feels personal because it was built from your needs, not borrowed from someone else's home.",
        ],
      },
    ],
  },
  {
    slug: "designing-for-the-way-you-live",
    title: "A home should feel like the people in it",
    category: "Living well",
    readTime: "4 min read",
    summary:
      "The details that make a home personal are usually the ones shaped around your routines.",
    image: "/images/swing.png",
    imageAlt: "A custom timber and cane swing in a warm residential interior",
    intro:
      "The spaces we remember are rarely the most perfect. They are the spaces that make room for real life.",
    sections: [
      {
        heading: "Notice the everyday rituals",
        paragraphs: [
          "Perhaps Sunday lunch draws everyone to one table. Perhaps the window seat belongs to a reader, or a child's school bag always lands beside the door. These are clues to a design that will feel natural once you move in.",
          "We listen for those details before we draw. They tell us where to create a shared moment, where to make a quiet one, and where practical storage will make a day easier.",
        ],
      },
      {
        heading: "Let materials support the mood",
        paragraphs: [
          "A room's character comes from more than colour. The warmth of wood, the softness of a seat, the way evening light touches a wall, and the feel of a handle all contribute to how a space is experienced.",
          "Choosing materials with use in mind helps the room age gracefully. The right finish should be as comfortable with everyday life as it is beautiful in a photograph.",
        ],
      },
      {
        heading: "Leave room to grow",
        paragraphs: [
          "A personal home is not frozen in time. Families change, work habits shift, and favourite corners find new uses. Flexible furniture layouts and thoughtful storage can give a room the freedom to adapt without losing its identity.",
        ],
      },
    ],
  },
  {
    slug: "from-idea-to-finished-space",
    title: "From first idea to a finished space",
    category: "Our process",
    readTime: "5 min read",
    summary:
      "A clear design process turns a big project into a series of informed, comfortable decisions.",
    image: "/images/materials.jpg",
    imageAlt: "Timber, stone, and marble samples arranged for an interior design project",
    intro:
      "A renovation can feel overwhelming when every decision arrives at once. A good process makes each step understandable.",
    sections: [
      {
        heading: "First, we listen",
        paragraphs: [
          "We begin with the space you have and the one you imagine. Conversations about your routines, priorities, budget, and preferences create a useful brief, not just a list of visual references.",
          "We also look closely at the site: its dimensions, existing conditions, natural light, and the practical limits that shape what is possible.",
        ],
      },
      {
        heading: "Then, we explore and explain",
        paragraphs: [
          "Layouts come before decoration. We explore possibilities for flow and function, and explain the thinking behind each option. Once the direction is right, the materials, lighting, colours, and custom details follow.",
          "Seeing how choices connect makes feedback easier. It helps everyone move toward the same vision before work begins on site.",
        ],
      },
      {
        heading: "Finally, we bring it to life",
        paragraphs: [
          "Drawings become a real space through careful coordination. Designers, craftspeople, and site teams check how each element fits with the next, from the large built-ins to the final light fitting.",
          "The aim is simple: a finished home that reflects the decisions you made together, and feels right when you use it every day.",
        ],
      },
    ],
  },
];
