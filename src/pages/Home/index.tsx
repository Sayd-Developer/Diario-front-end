import { Container, ContainerContent, Footer, Title } from "./style";
import CreateButton from "./components/button/CreateButton";
export default function Home() {
  return (
    <Container>
      <ContainerContent>
        <Title>Desvende sua história, uma página por vez</Title>
      </ContainerContent>
      <Footer>
        <CreateButton fill="black" />
      </Footer>
    </Container>
  );
}
