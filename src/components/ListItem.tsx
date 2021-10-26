import React from "react";
import { ListItemInterface } from "../screens/Home";
import { LinkBox, StyledLink, LinkTitle } from "../Components";

interface ListItemPropsInterface {
  item: ListItemInterface;
}

function ListItem({ item }: ListItemPropsInterface): JSX.Element {
  return (
    <LinkBox>
      <StyledLink to={item.link} key={item.title}>
        <LinkTitle>{item.title}</LinkTitle>
      </StyledLink>
    </LinkBox>
  );
}

export default ListItem;
