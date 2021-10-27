import React from "react";
import { Container, Header, Title, Body, List } from "../Components";
import ListItem from "../components/ListItem";

export interface ListItemInterface {
  title: string;
  link: string;
}

const listItems: ListItemInterface[] = [
  { title: "Rotating cubes", link: "/cubes" },
  { title: "Second one", link: "/second" },
];

function Home(): JSX.Element {
  return (
    <Container>
      <Header>
        <Title>PlayWithThree!</Title>
      </Header>
      <Body>
        <List>
          {listItems.map((item) => (
            <ListItem item={item} />
          ))}
        </List>
      </Body>
    </Container>
  );
}

export default Home;
