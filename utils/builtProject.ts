export interface Project {
  title: string;
  image: string;
  description: string;
  techno: string[];
  url: string;
}

export const shopIt = {
  title: "Shop-it!",
  image: "/assets/images/projects/shop-it.webp",
  description:
    "Shop-it is a fake e-commerce website where you can find all sorts of products.",
  techno: [
    "NextJS",
    "MUI",
    "React Query",
    "React Hook Form",
    "Yup",
    "Dummy API",
    "Vercel",
  ],
  url: "https://shop-it-now.vercel.app/",
};
export const moviz = {
  title: "Moviz",
  image: "/assets/images/projects/moviz.webp",
  description:
    "Moviz is a movie index. On Moviz you can find your next movie. The most popular or by genre, the choice is yours.",
  techno: ["NextJS", "TailwindCSS", "The Movie Database API", "Vercel"],
  url: "https://moviz.vercel.app/",
};

export const grouposocial = {
  title: "Grouposocial",
  image: "/assets/images/projects/grouposocial.webp",
  description:
    "Grouposocial is a social network built for a fictional company. Users can post their thoughts and interact with each other.",
  techno: ["React", "SASS", "NodeJS", "ExpressJS", "MySQL", "Prisma"],
  url: "https://github.com/pyko7/Groupomania",

};
