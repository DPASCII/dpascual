'use client';
import { useEffect, useState } from 'react';
import styled from 'styled-components';

const Bun = styled.div`
  width: 2.8rem;
  height: 2.8em;
  display: flex;
  flex-flow: column nowrap;
  border-radius: 6px;
  z-index: 150;
  cursor: pointer;
`;

const Burger = styled.div<{ $isOpen?: boolean; $line?: number }>`
  width: ${({ $isOpen, $line }) => ($isOpen && $line === 2 ? '0' : '2.5rem')};
  height: 0.4em;
  border-radius: 10px;
  background: rgba(255, 255, 255, 0.5);
  transform-origin: 1px;
  transition: all 0.3s linear;
  margin: auto;
  transform: ${({ $isOpen, $line }) => {
    if (!$isOpen) return 'rotate(0deg)';
    if ($line === 1) return 'rotate(45deg) translateX(5%)';
    if ($line === 3) return 'rotate(-45deg) translateX(5%)';
    return 'none';
  }};
`;

export const Hamburger = ({ isOpen = false }: { isOpen?: boolean }) => {
  const [hasMounted, setHasMounted] = useState(false);

  useEffect(() => {
    setHasMounted(true);
  }, []);
  return (
    <Bun>
      <Burger $isOpen={isOpen} $line={1} />
      <Burger $isOpen={isOpen} $line={2} />
      <Burger $isOpen={isOpen} $line={3} />
    </Bun>
  );
};

export default Hamburger;
