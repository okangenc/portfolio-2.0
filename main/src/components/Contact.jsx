import React, { useRef, useState } from "react";
import styled from 'styled-components'
import Map from "./Map";
import emailjs from "@emailjs/browser";

const Section = styled.div`
  height: 100vh;
  scroll-snap-align: center;
`;

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-between;
  gap: 50px;
`;

const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

const Title = styled.h1`
  font-weight: 200;
`;

const Form = styled.form`
  width: 500px;
  display: flex;
  flex-direction: column;
  gap: 25px;
`;

const Input = styled.input`
  padding: 20px;
  background-color: transparent;  /* Makes the background see-through */
  border: 1px solid white;        /* White outline/border */
  color: white;                   /* White text color */
  border-radius: 5px;
  outline: none;                  /* Removes the default browser outline */
  ::placeholder {                 /* Styles the placeholder text */
    color: rgba(255, 255, 255, 0.7);
  }
  &:focus {
    border-color: #ddd;             /* Lighter border color on focus */
    box-shadow: 0 0 5px rgba(255, 255, 255, 0.5); /* Optional: Adds a subtle glow */
  }

`;

const TextArea = styled.textarea`
  padding: 20px;
  background-color: transparent;  /* Makes the background see-through */
  border: 1px solid white;        /* White outline/border */
  color: white;                   /* White text color */
  border-radius: 5px;
  outline: none;                  /* Removes the default browser outline */
  ::placeholder {                 /* Styles the placeholder text */
    color: rgba(255, 255, 255, 0.7);
  }
  resize: vertical;               /* Allows vertical resizing only */
  &:focus {
    border-color: #ddd;             /* Lighter border color on focus */
    box-shadow: 0 0 5px rgba(255, 255, 255, 0.5); /* Optional: Adds a subtle glow */
  }

`;


const Button = styled.button`
  background-color: #da4ea2;
  color: white;
  border: none;
  font-weight: bold;
  cursor: pointer;
  border-radius: 5px;
  padding: 20px;
`;

const Right = styled.div`
  flex: 1;
`;

const Contact = () => {

  const ref = useRef();
  const [success, setSuccess] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_ewuiu6c",
        "template_89i9aj6",
        ref.current,
        "VhBbS0UgWI4XogWHO"
      )
      .then(
        (result) => {
          console.log(result.text);
          setSuccess(true);
        },
        (error) => {
          console.log(error.text);
          setSuccess(false);
        }
      );
  };

  return (
    <Section>
      <Container>
        <Left>
          <Form ref={ref} onSubmit={handleSubmit}>
            <Title> Let's Connect. </Title>
            <Input placeholder="Name" name="name" />
            <Input placeholder="Email" name="email" />
            <TextArea 
              placeholder="Write your message"
              name="message"
              rows={10}
            />
            <Button type="submit">Send</Button>
            {success &&
              "Your message has been sent, I look forward to reading it :)"}
          </Form>
        </Left>
        <Right>
          
        </Right>
      </Container>
    </Section>
  )
}

export default Contact