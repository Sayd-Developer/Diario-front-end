import { Container, ContainerInput, ContainerImg } from "./style"

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
      <ContainerInput>
        <h1>Login</h1>
        <h3>
          Desvende sua história,
          <br /> uma página por vez.
        </h3>
        <label htmlFor="" className="User">
          <img src={UserLogin} alt="" />
          <input type="text" />
        </label>
        <label htmlFor="" className="Key">
          <img src={KeyLogin} alt="" />
          <input type="text" />
        </label>
      </ContainerInput>
      <ContainerImg>
        <img src={DarkLogin} alt="" />
      </ContainerImg>
    </Container>
  )
}
