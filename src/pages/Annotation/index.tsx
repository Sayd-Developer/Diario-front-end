import { Container, ContainerContent, Header, Body, Low } from "./style";

export default function Annotation() {
  return (
    <Container>
      <ContainerContent>
        <Header>
          <img src="" alt="" />
          <button></button>
        </Header>
        <Body>
          <input type="text" />
          <input type="text" />
        </Body>
        <Low>
          <button></button>
        </Low>
      </ContainerContent>
    </Container>
  );
}
