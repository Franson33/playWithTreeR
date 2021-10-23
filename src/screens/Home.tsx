import React from "react";
import { Container, Header, Title, Body, List } from "../Components";
import ListItem from "../components/ListItem";

export interface ListItemInterface {
  title: string;
  link: string;
}

function Home(): JSX.Element {
  const listItems: ListItemInterface[] = [{ title: "Cubes", link: "/cubes" }];

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
