'use client';

import Card from '@/components/card';
import CardContainer from '@/components/card-container';
import HeroSection from '@/components/hero-section';
import { text } from 'stream/consumers';

export default function Home() {
  const projectList = [
    {
      imgSrc: '/assets/Phillwell.png',
      alt: 'placeholder',
      text: 'PhillWell',
      subText: 'NextJs, TinaCMS, TailwindCSS, TypeScript, shadcn',
      link: 'https://www.phillwell.com',
    },
    {
      imgSrc: '/assets/PADM.png',
      alt: 'placeholder',
      text: 'PADMConstruct',
      subText: 'NextJs, TailwindCSS, TypeScript',
      link: 'https://www.padmconstruct.com',
    },
    // {
    //   imgSrc:
    //     'https://www.shutterstock.com/image-vector/no-photo-image-viewer-thumbnail-260nw-2495883211.jpg',
    //   alt: 'placeholder',
    //   text: 'YourProMedVA',
    //   subText: 'NextJs, TailwindCSS, TypeScript',
    //   link: '/projects/ypva',
    // },
  ];
  const cardSize = { width: 500, height: 1000 };

  return (
    <>
      <HeroSection
        title='David Pascual'
        subtitle='Web Developer'
        tag='Designing with purpose. Building with code.'
      />
      <CardContainer columns={2}>
        {projectList.map((project, index) => (
          <Card key={index} {...cardSize} {...project} />
        ))}
      </CardContainer>
    </>
  );
}
