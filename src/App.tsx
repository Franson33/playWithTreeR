import React from "react";
import { Container, Header, Title, Body, List } from "./Components";
import Cubes from "./screens/Cubes";
import ListItem from "./components/ListItem";

function App(): JSX.Element {
  const listItems: string[] = ["1", "2", "3"];

  return (
    <Container>
      <Header>
        <Title>PlayWithThree!</Title>
      </Header>
      <Body>
        <List>
          {listItems.map((item) => (
            <ListItem />
          ))}
        </List>
      </Body>
    </Container>
  );
}

export default App;
