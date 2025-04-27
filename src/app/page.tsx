'use client';

import styled from 'styled-components';

const Body = styled.div`
  display: grid;
  justify-content: center;
  background: url('CS_Background.jpg');
  background-size: cover;
  background-repeat: no-repeat;
  height: 100vh;
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  background: rgba(0, 0, 0, 0.65);
  margin: 10vh;
  height: 50vh;
  width: 50vw;
  justify-content: center;
  text-align: center;
`;

const Head = styled.h1`
  font-size: 4vw;
  font-weight: bold;
  letter-spacing: 0.3rem;
`;

const SubHead = styled.h2`
  margin-bottom: 20px;
  font-size: 2vw;
  font-weight: bold;
  letter-spacing: 0.3rem;
`;
export default function Home() {
  return (
    <Body>
      <Wrapper>
        <Head>DAVID PASCUAL</Head>
        <SubHead>Web Developer</SubHead>
        Website Coming Soon!
      </Wrapper>
    </Body>
  );
}
