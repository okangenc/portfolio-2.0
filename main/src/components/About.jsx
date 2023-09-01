import React, { Suspense } from "react";
import styled from "styled-components";
import { OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import Cube from "./Cube";

const Section = styled.div`
  height: 100vh;
  scroll-snap-align: center;
  display: flex;
  justify-content: center;
`;

const Container = styled.div`
  height: 100vh;
  scroll-snap-align: center;
  width: 1400px;
  display: flex;
  justify-content: space-between;
`;

const Left = styled.div`
  flex: 1;

  @media only screen and (max-width: 768px) {
    display: none;
  }
`;

const Title = styled.h1`
  font-size: 74px;

  /* Glow Effect */
  text-shadow: 0 0 20px rgba(255, 255, 255, 0.5);

  @media only screen and (max-width: 768px) {
    font-size: 60px;
  }
`;

const UnderTitle = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

const Line = styled.img`
  height: 5px;
  /* Other styling properties for Line */
`;

const Subtitle = styled.h2`
  color: #da4ea2;
  /* Other styling properties for Subtitle */
`;

const Desc = styled.p`
  font-size: 24px;
  color: white;
  opacity: 70%;
  /* Other styling properties for Desc */
`;

const Button = styled.button`
  background-color: #da4ea2;
  color: white;
  font-weight: 500;
  width: 100px;
  padding: 10px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  opacity: 0.7; /* Initial opacity */
  transition: all 0.3s ease; /* Smooth transition effect */

  &:hover {
    opacity: 1; /* Increase opacity to 100% */
    transform: scale(1.02); /* Grow by 10% */
  }
`;

const Right = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 20px;

  @media only screen and (max-width: 768px) {
    align-items: center;
    text-align: center;
  }
`;

const About = () => {
  return (
    <Section>
      <Container>
        <Left>
          <Canvas camera={{ position: [5, 5, 5], fov: 25 }}>
            <Suspense fallback={null}>
              <ambientLight intensity={0.5} />
              <directionalLight position={[3, 2, 1]} />
              <Cube />
              <OrbitControls enableZoom={false} autoRotate />
            </Suspense>
          </Canvas>
        </Left>
        <Right>
          <Title>A developer who thinks outside the box.</Title>
          <UnderTitle>
            <Line src="./img/line.png" />
            <Subtitle> Technologies I work with: </Subtitle> 
          </UnderTitle>
          <Desc>
            JavaScript, React, HTML, CSS, Python, SQL, just to name a few.
          </Desc>
          <Button> See more </Button>
        </Right>
      </Container>
    </Section>
  );
};

export default About;
