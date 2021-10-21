import styled from "styled-components";
import { Canvas } from "@react-three/fiber";

export const Container = styled("div")`
  display: grid;
  grid-template-columns: 100vw;
  grid-template-rows: 10vh 90vh;
`;

export const Header = styled("div")`
  grid-area: 1 / 1 / 2 / 2;
  background-color: #97cedf;
  padding-left: 20px;
  padding-right: 20px;
`;

export const StyledCanvas = styled(Canvas)`
  display: grid;
  grid-template-columns: 100vw;
  grid-template-rows: 100vh;
`;
