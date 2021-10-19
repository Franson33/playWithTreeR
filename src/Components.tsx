import styled from "styled-components";

export const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 1fr 2fr 1fr;
`;

export const Image = styled.img`
  grid-column: 2/3;
  grid-row: 2/3;
`;
