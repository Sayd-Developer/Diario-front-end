import { Container, ContainerContent, Footer, Title } from "./style";
import CreateButton from "./components/button/CreateButton";
import { useNavigate } from "react-router";
export default function Home() {
  const navigate = useNavigate();

  return (
    <Container>
      <ContainerContent>
        <Title>Desvende sua história, uma página por vez</Title>
      </ContainerContent>
      <Footer>
        <CreateButton fill="black" onClick={() => navigate("/anotacao")} />
      </Footer>
    </Container>
  );
}
