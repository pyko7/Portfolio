import WorkWrapper from '@/components/work/WorkWrapper'
import { Metadata } from 'next'
import { FC } from 'react'
import { notFound } from 'next/navigation'

export const metadata: Metadata = {
  title: 'Work | Julien Henry – Fullstack Developer',
  description:
    'Explore Julien Henry’s portfolio of fullstack development projects and see how he delivers impactful digital solutions.',
  openGraph: {
    title: 'Work | Julien Henry – Fullstack Developer',
    description:
      'Explore Julien Henry’s portfolio of fullstack development projects and see how he delivers impactful digital solutions.',
    url: 'https://julienhenry.fr/work',
    type: 'website',
  },
  alternates: {
    canonical: 'https://julienhenry.fr/work',
  },
  robots: 'index, follow',
}

const WorkPage: FC = () => notFound()

export default WorkPage
