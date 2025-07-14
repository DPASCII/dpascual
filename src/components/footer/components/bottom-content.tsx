'use client';
import styled from 'styled-components';
import StyledLink from '../../styled-link';

const getThemeBreakpoints =
  (prop: string) =>
  ({ theme }: any) =>
    theme.breakpoints[prop];

const BottomContentWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: auto;
  align-items: center;
  text-align: center;

  @media (min-width: ${getThemeBreakpoints('desktop')}px) {
    grid-template-columns: 1fr 1fr;
    row-gap: 0;
    grid-gap: 5rem;
  }
`;

const StyledImg = styled.img`
  justify-self: center;
  height: 2rem;
  margin: 0.5rem;
`;

const LeftContent = styled.div`
  display: grid;
  place-content: center;
`;

const LegalWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  @media (min-width: ${getThemeBreakpoints('desktop')}px) {
    gap: 16px;
    flex-direction: row;
    justify-self: right;
  }
`;

const YearText = styled.div`
  @media (min-width: ${getThemeBreakpoints('desktop')}px) {
    grid-column: 2;
    justify-self: left;
  }
`;

const BottomContent = ({
  smallLogo,
  companyName,
  mailTo,
}: {
  smallLogo?: string;
  companyName: string;
  mailTo?: string;
}) => {
  const year = new Date().getFullYear();
  const links = [
    { title: 'Privacy', link: '/privacy' },
    { title: 'Terms and Conditions', link: '/terms' },
    { title: 'Contact Us', link: mailTo ? `mailto:${mailTo}` : '/contact' },
  ];
  return (
    <BottomContentWrapper>
      <LeftContent>
        <LegalWrapper>
          {links.map((linkObj, index) => (
            <StyledLink key={index} href={linkObj.link}>
              {linkObj.title}
            </StyledLink>
          ))}
        </LegalWrapper>
      </LeftContent>
      {smallLogo && <StyledImg src={smallLogo} alt='logo' />}
      <YearText>
        {year}© {companyName}. All Rights Reserved.
      </YearText>
    </BottomContentWrapper>
  );
};

export default BottomContent;
