import React from 'react';
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
  /* Glow Effect */
  // text-shadow: 0 0 30px rgba(255, 255, 255, 0.7);
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
  transition: all 0.3s ease; /* Smooth transition effect */

  &:hover {
    transform: scale(1.1); /* Grow by 10% */
  }
`;

const Icon = styled.img`
  width: 30px;
  height: 30px;
  cursor: pointer;
  transition: all 0.3s ease; /* Smooth transition effect */

  &:hover {
    transform: scale(1.1); /* Grow by 10% */
    opacity: 1; /* Increase opacity to 100% */
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
  opacity: 0.8; /* Initial opacity */
  text-decoration: none; /* Remove default underline for links */

  transition: all 0.3s ease; /* Smooth transition effect */

  &:hover {
    //width: 45px; /* Grow by 5px */
    //height: 45px; /* Grow by 5px */
    opacity: 1; /* Increase opacity to 100% */
  }
`;

const Navbar = () => {
  return (
    <Section>
      <Container>
        <Links>
          <Name>OKAN GENÇ</Name>
          <List>
            <ListItem>Home</ListItem>
            <ListItem>About</ListItem>
            <ListItem>Work</ListItem>
            <ListItem>Contact</ListItem>
          </List>
        </Links>
        <Icons>
          <CircleIconWrapper href="https://github.com/okangenc" target="_blank">
            <Icon src="./img/github.png" />
          </CircleIconWrapper>
          <CircleIconWrapper href="https://www.linkedin.com/in/okan-gen%C3%A7-0638671b5/" target="_blank">
            <Icon src="./img/linkedin.png" />
          </CircleIconWrapper>
        </Icons>
      </Container>
    </Section>
  );
};

export default Navbar;

