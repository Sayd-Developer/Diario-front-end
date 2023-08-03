import { Container, Header, Body, Footer } from "./style"
import Arrow from "../../assets/icons/iconArrow.svg"
import TextareaAutosize from "react-textarea-autosize"
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
        <TextareaAutosize
          className="one"
          minRows={1}
          maxRows={1}
          cols={1}
          style={{ resize: "none" }}
        />
        <TextareaAutosize
          className="two"
          minRows={19}
          rows={20}
          cols={10}
          style={{ resize: "none" }}
        />
      </Body>
      <Footer>
        <button>Salvar</button>
      </Footer>
    </Container>
  )
}
