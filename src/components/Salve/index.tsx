import { Container, ContainerContent, Header, Body, Footer } from "./style"

import Arrow from "../../assets/icons/iconArrow.svg"
import { useNavigate } from "react-router"

export default function Salve() {
  const navigate = useNavigate()
  return (
    <Container>
      <ContainerContent>
        <Header onClick={() => navigate("/inicio")}>
          <button>
            <img src={Arrow} alt="" />
            Voltar ao início
          </button>
        </Header>
        <Body>
          <input type="text" className="One" placeholder="Título..." />
          <input type="text" className="Two" placeholder="Anotação..." />
        </Body>
        <Footer>
          <button>Salvar</button>
        </Footer>
      </ContainerContent>
    </Container>
  )
}
