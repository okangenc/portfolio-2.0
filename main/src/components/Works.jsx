import React, { useState } from "react";
import styled from 'styled-components'
import Technology from "./Technology";

const data = [
  "Technology",
  "Design",
  "Programming",
  "Innovation",
];

const Section = styled.div`
  height: 100vh;
  scroll-snap-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`;

const Container = styled.div`
  height: 100vh;
  scroll-snap-align: center;
  width: 1400px;
  display: flex;
  justify-content: space-between;
`;

const Left = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 20px;
  padding-left: 120px;
  // background-color: black;
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
  const [work, setWork] = useState("Technology");
  return (
    <Section>
      <Container>

        <Left>
          <List>
          {data.map((item) => (
              <ListItem key={item} text={item} onClick={() => setWork(item)}>
                {item}
              </ListItem>
            ))}
          </List>
        </Left>

        <Right>
          {work === "Technology" ? (
            <Technology />
          ) : null}
        </Right>

      </Container>
    </Section>
  )
}

export default Works