import { Container, Header, Body, Footer, Title1, Title2 } from "./style"
import Arrow from "../../assets/icons/iconArrow.svg"

import { useNavigate } from "react-router"
export default function Annotation() {
  const navegation = useNavigate()

  return (
    <Container>
      <Header onClick={() => navegation("/")}>
        <img src={Arrow} />
        <p>Voltar ao início</p>
      </Header>
      <Body>
        <Title1
          className="one"
          style={{ resize: "none" }}
          placeholder="Título..."
        />
        <Title2
          className="two"
          style={{ resize: "none" }}
          placeholder="Conteúdo..."
        />
      </Body>
      <Footer>
        <button>Salvar</button>
      </Footer>
    </Container>
  )
}
