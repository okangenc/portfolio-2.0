import React from 'react'
import styled from 'styled-components'

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
`;

const Icon = styled.img`
    width: 26px;
    height: 26px;
    cursor: pointer;
`;

const CircleIconWrapper = styled.div`
  width: 40px; /* Adjust the size of the white circle */
  height: 40px; /* Adjust the size of the white circle */
  background-color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%; /* Makes it a circle */
  opacity: 70%;
`;

const Navbar = () => {
  return (
    <Section>
        <Container>
            <Links>
                <Name>
                    OKAN GENÇ
                </Name>
                <List>
                    <ListItem>Home</ListItem>
                    <ListItem>About</ListItem>
                    <ListItem>Work</ListItem>
                    <ListItem>Contact</ListItem>
                </List>
            </Links>
            <Icons>
                <CircleIconWrapper>
                    <Icon src="./img/github.png" />
                </CircleIconWrapper>
                <CircleIconWrapper>
                    <Icon src="./img/linkedin.png" />
                </CircleIconWrapper>
            </Icons>
        </Container>
    </Section>
  )
}

export default Navbar