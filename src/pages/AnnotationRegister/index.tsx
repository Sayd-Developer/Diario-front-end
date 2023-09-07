import useAnnotations from "@/hooks/useAnnotations";
import { Container, Header, Body, ContainerContent } from "./style";

export default function AnnotationRegister() {
  const [annotations] = useAnnotations();
  return (
    <Container>
      <Header>Registro de Anotações</Header>
      <ContainerContent>
        {annotations.map((annotation) => (
          <Body key={annotation.id}>
            <h2>Data:</h2>
            <p>{annotation.date.toString()}</p>
            <h3>Conteúdo:</h3>
            <p>{annotation.description}</p>
            <hr style={{ border: ".5px solid red", width: "100%" }} />
          </Body>
        ))}
      </ContainerContent>
    </Container>
  );
}
