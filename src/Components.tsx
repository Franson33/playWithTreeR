import styled from "styled-components";
import { Canvas } from "@react-three/fiber";

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
