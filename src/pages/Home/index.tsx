import { Container, ContainerContent, Footer, Title } from "./style"
import Sidebar from "../../components/Sidebar"
import Low from "../../assets/icons/iconHomePlus.svg"
export default function Home() {
  return (
    <Container>
      <Sidebar />
      <ContainerContent>
        <Title>
          <h1>Desvende sua história, uma página por vez.</h1>
        </Title>
        <Footer>
          <img src={Low} alt="" />
        </Footer>
      </ContainerContent>
    </Container>
  )
}
