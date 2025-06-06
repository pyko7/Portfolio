import { Project } from './_props'

const lflPickem: Project = {
  title: 'LFL Pickem',
  description:
    'Predict the winner of every games on each days of LFL, the french league of League of Legends.',
  techno: [''],
  url: 'https://github.com/pyko7/LFL-Pickem',
  date: '2023',
  archived: true,
}

const moviz: Project = {
  title: 'Moviz',
  description: 'Movie index.',
  techno: ['NextJS', 'TailwindCSS', 'The Movie Database API', 'Vercel'],
  url: 'https://moviz.vercel.app/',
  date: '2023',
}

const shopIt: Project = {
  title: 'Shop-it!',
  description:
    'Fake e-commerce website where you can find all sorts of products.',
  techno: [
    'NextJS',
    'MUI',
    'React Query',
    'React Hook Form',
    'Yup',
    'Dummy API',
    'Vercel',
  ],
  url: 'https://shop-it-now.vercel.app/',
  date: '2022',
  archived: true,
}

export const projects = [moviz, lflPickem, shopIt]
