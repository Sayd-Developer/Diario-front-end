import {
  Container,
  ContainerBody,
  ContainerImg,
  ContainerHeader,
  ContainerFooter,
  ContainerContent,
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
      <ContainerContent>
        <ContainerHeader>
          <h1>
            <strong>Login</strong>
          </h1>
          <h1>Desvende sua história, uma página por vez.</h1>
        </ContainerHeader>
        <ContainerBody>
          <label htmlFor="">
            <img src={UserLogin} alt="" />
            <input type="text" />
          </label>

          <label htmlFor="">
            <img src={KeyLogin} alt="" />
            <input type="password" />
          </label>
          <h3>Esqueceu sua senha? Clique Aqui</h3>
        </ContainerBody>
        <ContainerFooter>
          <button>Entrar</button>
        </ContainerFooter>
      </ContainerContent>

      <ContainerImg>
        <img src={DarkLogin} alt="" />
      </ContainerImg>
    </Container>
  )
}
