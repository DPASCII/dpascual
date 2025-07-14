'use client';

import React, { useCallback, useEffect, useState } from 'react';
import styled, { useTheme } from 'styled-components';
import Hamburger from './components/hamburger';
import DesktopMenu from './components/desktop-menu';
import MobileMenu from './components/mobile-menu';

const getThemeWidth =
  (prop: string) =>
  ({ theme }: any) =>
    theme[prop];

// const NavBarContainer = styled.div<{
//   $height: number;
// }>`
//   z-index: 50;
//   position: sticky;
//   top: 0;
//   background-image: transparent;
//   height: ${({ $height }) => $height}px;
//   display: grid;
// `;

const NavBarWrapper = styled.div`
  position: fixed;
  z-index: 50;
  width: 100vw;
  display: grid;
  @media (min-width: ${getThemeWidth('windowWidth')}px) {
    display: flex;
    left: 50%;
    transform: translateX(-50%);
    max-width: ${getThemeWidth('windowWidth')}px;
    flex-direction: row-reverse;
    justify-content: space-between;
    width: 100%;
  }
`;

const StyledImage = styled.img<{ $height: number }>`
  height: calc(${({ $height }) => $height}px - 16px);
  place-self: center;
  object-fit: contain;
`;

const MenuWrapper = styled.div<{ $number: number }>`
  display: none;
  @media (min-width: ${getThemeWidth('windowWidth')}px) {
    display: grid;
    grid-template-columns: repeat(${({ $number }) => $number}, 1fr);
  }
`;

const Trigger = styled.div`
  display: grid;
  height: 100%;
  place-self: end;
  align-content: center;
  padding: 1rem;
  @media (min-width: ${getThemeWidth('windowWidth')}px) {
    display: none;
  }
`;

export interface NavBarProps
  extends React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLDivElement>,
    HTMLDivElement
  > {
  height: number;
  logo?: string;
  alt?: string;
  menuWidth?: number;
  pages: {
    iconComponent?: React.ReactNode;
    item: string;
    link: string;
    subPages?: { subItem: string; subLink: string }[];
  }[];
}

const Header: React.FC<NavBarProps> = (props) => {
  const {
    height = 60,
    logo,
    alt = 'logo',
    menuWidth = 120,
    pages,
    ...rest
  } = props;

  const hamburgerRef = React.useRef<HTMLDivElement>(
    null
  ) as React.RefObject<HTMLDivElement>;
  const [hamburgerOpen, setHamburgerOpen] = useState(false);
  const theme = useTheme();
  const desktopBreakpoint = theme.windowWidth;

  const toggleHamburger = useCallback(
    () => setHamburgerOpen((prev) => !prev),
    []
  );

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= desktopBreakpoint) {
        setHamburgerOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);
    handleResize();

    return () => window.removeEventListener('resize', handleResize);
  }, [desktopBreakpoint]);

  return (
    // <NavBarContainer $height={height} {...rest}>
    <NavBarWrapper>
      {logo && (
        <a href='/' style={{ cursor: 'pointer', placeSelf: 'center' }}>
          <StyledImage $height={height} src={logo} alt={alt} />
        </a>
      )}
      <Trigger ref={hamburgerRef} onClick={toggleHamburger}>
        <Hamburger isOpen={hamburgerOpen} />
      </Trigger>
      <MenuWrapper $number={pages.length}>
        {pages.map((item, index) => (
          <DesktopMenu page={item} key={index} menuWidth={menuWidth} />
        ))}
      </MenuWrapper>
      <MobileMenu
        height={height}
        onClose={() => setHamburgerOpen(false)}
        isOpen={hamburgerOpen}
        pages={pages}
        hamburgerRef={hamburgerRef}
      />
    </NavBarWrapper>
    // </NavBarContainer>
  );
};

export default Header;
