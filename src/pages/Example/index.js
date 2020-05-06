import React from "react";

import { Container, Title, Subtitle, User } from "./styles";

export default function Example() {
  return (
    <Container>
      <Title>ReactJS Template</Title>
      <Subtitle>
        by:
        <User
          href="https://github.com/vinniciusgomes"
          target="_blank"
          className="ml-2"
        >
          @vinniciusgomes
        </User>
      </Subtitle>
    </Container>
  );
}
