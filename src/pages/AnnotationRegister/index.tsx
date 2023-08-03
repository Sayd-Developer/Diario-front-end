import { Container, Header, Body1, Body2, ContainerContent } from "./style"

export default function AnnotationRegister() {
  return (
    <Container>
      <Header>
        <h1>Registro de Anotações</h1>
      </Header>
      <ContainerContent>
        <Body1>
          <h1>Data:</h1>
          <h1>Conteúdo:</h1>
        </Body1>
        <Body2>
          <h1>Data:</h1>
          <h1>Conteúdo:</h1>
        </Body2>
      </ContainerContent>
    </Container>
  )
}
