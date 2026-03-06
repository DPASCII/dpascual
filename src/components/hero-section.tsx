'use client';
import styled, { keyframes } from 'styled-components';

const getThemeWidth =
  (prop: string) =>
  ({ theme }: any) =>
    theme[prop];

const slideUp = keyframes`
0% { transform: translateY(200%); opacity: 0;}
100% { transform: translateY(0); opacity: 1;}
`;

const HeroSectionWrapper = styled.div`
  background-image: url('/SiteBG.png');
  background-size: cover;
  position: relative;
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 80vh;

  justify-content: center;
  place-self: center;
  text-align: left;
  padding: 1rem;
  gap: 1rem;
  overflow: hidden;
`;

const Head = styled.h1`
  font-size: 3rem;
  font-weight: bold;
  letter-spacing: 0.3rem;
  line-height: 1;
  animation: ${slideUp} 1s ease-out;
  @media (min-width: ${getThemeWidth('windowWidth')}px) {
    font-size: 5rem;
  }
`;

const SubHead = styled.h2`
  font-size: 1rem;
  font-weight: bold;
  letter-spacing: 0.3rem;
  animation: ${slideUp} 1s 1000ms ease-out;
  animation-fill-mode: forwards;
  opacity: 0;
  @media (min-width: ${getThemeWidth('windowWidth')}px) {
    font-size: 1.5rem;
  }
`;

const HeroSection = ({
  title,
  subtitle,
  tag,
}: {
  title: string;
  subtitle: string;
  tag: string;
}) => {
  return (
    <HeroSectionWrapper>
      <Head>{title}</Head>
      <div>
        <SubHead>{subtitle}</SubHead>
        <SubHead>{tag}</SubHead>
      </div>
    </HeroSectionWrapper>
  );
};

export default HeroSection;
