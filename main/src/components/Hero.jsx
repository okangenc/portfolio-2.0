import React from 'react'
import styled from 'styled-components'
import Navbar from "./Navbar";

const Section = styled.div`
  height: 100vh;
  scroll-snap-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`;

const Container = styled.div`
  height: 100%;
  scroll-snap-align: center;
  width: 1400px;
  display: flex;
  justify-content: space-between;
`;

const Left = styled.div`
  flex: 2;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 20px;
`;

const Right = styled.div`
  flex: 3;
  position: relative;
`;

const Title = styled.h1`
  font-size: 74px;
`; // Design. Implement. Evolve.

const Subheader = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

const Hero = () => {
  return (
    <Section>
      <Navbar />
      <Container>
        <Left>
          <Title>Learn. Apply. Innovate.</Title>
          <Subheader> What can I do? </Subheader>
        </Left>
        <Right>

        </Right>
      </Container>
    </Section>
  )
}

export default Hero