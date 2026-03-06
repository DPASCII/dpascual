'use client';
import styled from 'styled-components';

const getThemeColors =
  (prop: string) =>
  ({ theme }: any) =>
    theme.colors[prop];

const CardWrapper = styled.div<{
  $width: number;
  $height: number;
}>`
  display: grid;
  grid-template-rows: 80% 20%;
  width: 100%;
  max-width: ${({ $width }) => $width}px;
  height: ${({ $height }) => $height}px;
  overflow: hidden;
  border-radius: 1rem;
  margin: 0 auto;

  @media (max-width: 768px) {
    grid-template-rows: auto auto;
    height: auto;
  }
`;

const ImgWrapper = styled.div`
  width: 100%;
  overflow: hidden;
`;

const StyledImg = styled.img`
  width: 100%;
  height: 100%;
  object-position: top;
  object-fit: cover;
  opacity: 80%;
  transition: all linear 0.5s;
  transform-origin: top left;
  transform: scale(110%);

  &:hover {
    opacity: 70%;
    transform: scale(100%);
  }

  @media (max-width: 768px) {
    height: auto;
  }
`;

const TextWrapper = styled.div<{
  $width: number;
  $height: number;
}>`
  padding: 8px;
  color: rgb(${getThemeColors('text')});
  background-color: rgba(${getThemeColors('secondary')}, 0.7);

  h1 {
    font-size: ${({ $width, $height }) => 0.07 * Math.min($width, $height)}px;
    line-height: 1.2;

    @media (max-width: 768px) {
      font-size: 1.2rem;
    }
  }

  h2 {
    font-size: ${({ $width, $height }) => 0.035 * Math.min($width, $height)}px;
    color: gray;

    @media (max-width: 768px) {
      font-size: 0.9rem;
    }
  }
`;

const Card = ({
  width = 500,
  height = 500,
  text,
  subText,
  link,
  imgSrc,
  alt = 'card image',
}: {
  width: number;
  height: number;
  text: string;
  subText?: string;
  link?: string;
  imgSrc: string;
  alt: string;
}) => {
  return (
    <CardWrapper $width={width} $height={height}>
      <ImgWrapper>
        <a href={link}>
          <StyledImg src={imgSrc} alt={alt} />
        </a>
      </ImgWrapper>
      <TextWrapper $width={width} $height={height}>
        <h1>
          <a href={link} style={link ? { cursor: 'pointer' } : undefined}>
            {text}
          </a>
        </h1>
        {subText && <h2>{subText}</h2>}
      </TextWrapper>
    </CardWrapper>
  );
};

export default Card;
