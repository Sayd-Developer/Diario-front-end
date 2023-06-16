import {
  Container,
  ContainerBody,
  ContainerImg,
  ContainerHeader,
  ContainerFooter,
  ContainerContent,
  ContainerLeft,
  ContainerInput,
} from "./style"

import DarkLogin from "../../assets/icons/iconDarkLogin.svg"
import KeyLogin from "../../assets/icons/iconKeyLogin.svg"
import UserLogin from "../../assets/icons/iconUserLogin.svg"
import { useState } from "react"

export default function Login() {
  const [name, setName] = useState("")

  const ChangeNumber = () => {
    // Previous Value
    setName((previName) => previName + "")
    setName(name + "")
  }

  return (
    <Container>
      <ContainerLeft>
        <ContainerContent>
          <ContainerHeader>
            <h1>Login</h1>
            <h2>
              Desvende sua história, uma
              <br />
              página por vez.
            </h2>
          </ContainerHeader>
          <ContainerBody>
            <ContainerInput>
              <img src={UserLogin} alt="" />
              <input type="text" />
            </ContainerInput>
            <ContainerInput>
              <img src={KeyLogin} alt="" />
              <input type="password" />
            </ContainerInput>

            <h3>Esqueceu sua senha? Clique Aqui</h3>
          </ContainerBody>
          <ContainerFooter>
            <button>Entrar</button>
          </ContainerFooter>
        </ContainerContent>
      </ContainerLeft>

      <ContainerImg>
        <img src={DarkLogin} alt="" />
      </ContainerImg>
    </Container>
  )
}
