import React from "react";
import styled from "styled-components";

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
  flex: 2;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 20px;
`;

const Title = styled.h1`
  font-size: 74px;
`; // Design. Implement. Evolve.

const UnderTitle = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

const Line = styled.img`
  height: 5px;
`

const Subtitle = styled.h2`
  color: #da4ea2;
`

const Desc = styled.p`
  font-size: 24px;
  color: white;
  opacity: 70%;
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
`;

const Right = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 20px;
`;


const About = () => {
  return (
    <Section>
      <Container>
        <Left>
          
        </Left>
        <Right>
        <Title>Learn. Apply. Innovate.</Title>
          <UnderTitle>
            <Line src="./img/line.png" />
            <Subtitle> What can I do? </Subtitle> 
          </UnderTitle>
          <Desc>
            I enjoy creating delightful, human-centered digital experiences.
          </Desc>
          <Button> Learn More </Button>
        </Right>
      </Container>
    </Section>
  );
};

export default About;