import { Container, Header, Body, Footer } from "./style"
import Arrow from "../../assets/icons/iconArrow.svg"
import TextareaAutosize from "react-textarea-autosize"
export default function Annotation() {
  return (
    <Container>
      <Header>
        <img src={Arrow} />
        <p>Voltar ao início</p>
      </Header>
      <Body>
        <TextareaAutosize className="one" minRows={1} maxRows={1} cols={10} />
        <TextareaAutosize className="two" minRows={19} rows={20} cols={10} />
      </Body>
      <Footer>
        <button>Salvar</button>
      </Footer>
    </Container>
  )
}
