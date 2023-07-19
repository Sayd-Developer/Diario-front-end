import { Container, ContainerContent, Header, Body1, Body2 } from "./style"

import ClosedBar from "../../assets/icons/iconClosedBar.svg"
import User from "../../assets/icons/iconUserSidebar.svg"
import Register from "../../assets/icons/iconRegisterSidebar.svg"
import { useNavigate } from "react-router"
export default function Sidebar() {
  const navigate = useNavigate()

  return (
    <Container>
      <ContainerContent>
        <Header>
          <img src={ClosedBar} />
        </Header>
        <Body1 onClick={() => navigate("/")}>
          <img src={User} />
          <button>Início</button>
        </Body1>
        <Body2 onClick={() => navigate("/registro")}>
          <img src={Register} alt="" />
          <button>Registro de Anotações</button>
        </Body2>
      </ContainerContent>
    </Container>
  )
}
