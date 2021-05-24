import React from "react";

import { Wrapper, Container, Shadow, Circle } from "./styles";

function App() {
  const word = "C L E V E R S O N".split(" ");
  return (
    <Wrapper>
      <header />
      <Container>
        <div>
          {word.map((letter, index) => (
            <Circle length={index}>{letter}</Circle>
          ))}
        </div>
        <div>
          {word.map((letter, index) => (
            <Shadow length={index} />
          ))}
        </div>
        <span>CLEVERSON</span>
        <span>FERNANDES</span>
      </Container>

      <footer />
    </Wrapper>
  );
}

export default App;
