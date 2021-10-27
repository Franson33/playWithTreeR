import { StyledCanvas } from "../Components";

function Second(): JSX.Element {
  return (
    <StyledCanvas>
      <ambientLight />
      <pointLight position={[50, 50, 50]} />
    </StyledCanvas>
  );
}

export default Second;
