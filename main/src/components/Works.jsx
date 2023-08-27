import React from "react";
import styled from 'styled-components'

const data = [
  "About",
  "Education",
  "Technologies",
  "Projects",
];

const Section = styled.div`
  height: 100vh;
  scroll-snap-align: center;
  display: flex;
  justify-content: center;
  position: relative;
  color: black;
  font-size: 14px;
  font-weight: 300;
`;

const Container = styled.div`
  width: 1400px;
  display: flex;
  justify-content: space-between;
`;

const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  padding-left: 100px;
`;

const List = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const ListItem = styled.li`
  font-size: 90px;
  font-weight: bold;
  cursor: pointer;
  color: transparent;
  -webkit-text-stroke: 1px white;
  position: relative;

  &:after {
    content: "${(props) => props.text}";
    position: absolute;
    top: 0;
    left: 0;
    color: pink;
    width: 0px;
    overflow: hidden;
    white-space: nowrap;
  }

  &:hover {
     &:after {
      animation: moveText 0.7s linear both;
      color: white;

      @keyframes moveText {
        to {
          width: 100%;
        }
      }
    }
  }
`;



const Right = styled.div`
  flex: 1;
`;


const Works = () => {
  return (
    <Section>
      <Container>

        <Left>
          <List>
            {data.map((item) => (
              <ListItem key={item} text={item}>
                {item}
              </ListItem>
            ))}
          </List>
        </Left>

        <Right>
          
        </Right>

      </Container>
    </Section>
  )
}

export default Works