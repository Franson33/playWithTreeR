import styled from "styled-components";
import { Canvas } from "@react-three/fiber";
import { Link } from "react-router-dom";

export const Container = styled("div")`
  display: grid;
  grid-template-columns: 100vw;
  grid-template-rows: 10vh 90vh;
`;

export const Header = styled("div")`
  display: grid;
  grid-area: 1 / 1 / 2 / 2;
  padding-left: 20px;
  padding-right: 20px;
  background-color: #97cedf;
  box-shadow: 0 5px 5px -3px rgba(0, 0, 0, 0.5);
  z-index: 1;
`;

export const Title = styled("h1")`
  height: 1fr;
  align-self: center;
`;

export const Body = styled("div")`
  display: grid;
  grid-template-rows: auto;
`;

export const List = styled("ul")`
  margin: 5vh 25vw;
  background-color: #fff;
  border-radius: 5px;
`;

export const StyledCanvas = styled(Canvas)`
  display: grid;
  grid-template-columns: 100vw;
  grid-template-rows: 100vh;
`;

export const LinkBox = styled("div")`
  display: grid;
  width: 100%;
  height: 5vh;
  padding: 0px 10px;
  border-radius: 10px;
  box-shadow: 0 2px 8px 0 rgba(0, 0, 0, 0.4);

  &:active {
    transform: translateY(3px);
    box-shadow: 0px 1px 0px 0px rgba(0, 0, 0, 0.4),
      inset 0px 1px 2px 0px rgba(0, 0, 0, 0.4);
  }
`;

export const StyledLink = styled(Link)`
  height: 100%;
`;

export const LinkTitle = styled("p")`
  align-self: center;
  color: #c190dd;
`;
