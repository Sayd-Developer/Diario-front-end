import { Container, ContainerContent, Header, Body } from "./style"

import ClosedBar from "../../assets/icons/iconClosedBar.svg"
import User from "../../assets/icons/iconUserSidebar.svg"
import Register from "../../assets/icons/iconRegisterSidebar.svg"
export default function Sidebar() {
  return (
    <Container>
      <ContainerContent>
        <Header>
          <img src={ClosedBar} />
        </Header>
        <Body>
          <img src={User} />
          <button>Início</button>
        </Body>
        <Body>
          <img src={Register} alt="" />
          <button>Registro de Anotações</button>
        </Body>
      </ContainerContent>
    </Container>
  )
}
