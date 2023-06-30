import { Container, ContainerContent, Header, Body } from "./style"

import ClosedBar from "../../assets/icons/iconClosedBar.svg"
export default function Sidebar() {
  return (
    <Container>
      <ContainerContent>
        <Header>
          <img src={ClosedBar} />
        </Header>
        <Body>
          <img src="" alt="" />
          <button />
        </Body>
        <Body>
          <img src="" alt="" />
          <button />
        </Body>
      </ContainerContent>
    </Container>
  )
}
