import styled from "styled-components";
import Contact from "./components/Contact";
import Hero from "./components/Hero";
import About from "./components/About";
import Works from "./components/Works";

const Container = styled.div`
  height: 100vh;
  scroll-snap-type: y mandatory;
  scroll-behavior: smooth;
  overflow-y: auto;
  scrollbar-width: none;
  color: white;
`;

function App() {
  return (
    <Container>
      <Hero />
      <About />
      <Works />
      <Contact />
    </Container>
  );
}

export default App;