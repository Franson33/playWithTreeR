import React from "react";
import { ListItemInterface } from "../screens/Home";
import { StyledLink } from "../Components";

interface ListItemPropsInterface {
  item: ListItemInterface;
}

function ListItem({ item }: ListItemPropsInterface): JSX.Element {
  return <StyledLink to={item.link}>{item.title}</StyledLink>;
}

export default ListItem;
