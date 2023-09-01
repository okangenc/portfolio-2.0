import React, { useRef } from 'react';
import styled from 'styled-components';

const Section = styled.div`
  display: flex;
  justify-content: center;

  @media only screen and (max-width: 768px) {
    width: 100%;
  }
`;

const Container = styled.div`
  width: 1400px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 0px;

  @media only screen and (max-width: 768px) {
    width: 100%;
    padding: 10px;
  }
`;

const Name = styled.h1`
  color: white;
  font-size: 24px;
`;

const Links = styled.div`
  display: flex;
  align-items: center;
  gap: 50px;
`;

const Icons = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
`;

const List = styled.ul`
  display: flex;
  gap: 20px;
  list-style: none;

  @media only screen and (max-width: 768px) {
    display: none;
  }
`;

const ListItem = styled.li`
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    transform: scale(1.1);
  }
`;

const Icon = styled.img`
  width: 30px;
  height: 30px;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    opacity: 1;
  }
`;

const CoinLiveIcon = styled.img`
  width: 65px;
  height: 35px;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    opacity: 1;
  }
`;

const CircleIconWrapper = styled.a`
  width: 40px;
  height: 40px;
  background-color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  opacity: 0.6;
  text-decoration: none;

  transition: all 0.3s ease;

  &:hover {
    opacity: 1;
  }
`;


const Navbar = () => {
  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <Section>
      <Container>
        <Links>
          <Name>OKAN GENÇ</Name>
          <List>
            <ListItem onClick={() => scrollToSection('home')}>Home</ListItem>
            <ListItem onClick={() => scrollToSection('about')}>About</ListItem>
            <ListItem onClick={() => scrollToSection('work')}>Work</ListItem>
            <ListItem onClick={() => scrollToSection('contact')}>Contact</ListItem>
          </List>
        </Links>
        <Icons>
          <CircleIconWrapper href="https://github.com/okangenc" target="_blank">
            <Icon src="./img/github.png" />
          </CircleIconWrapper>
          <CircleIconWrapper href="https://www.linkedin.com/in/okan-gen%C3%A7-0638671b5/" target="_blank">
            <Icon src="./img/linkedin.png" />
          </CircleIconWrapper>
          <CircleIconWrapper href="https://stellar-zuccutto-e09135.netlify.app/" target="_blank">
            <CoinLiveIcon src="./img/coinlivelogo2.png" />
          </CircleIconWrapper>
        </Icons>
      </Container>
    </Section>
  );
};

export default Navbar;
