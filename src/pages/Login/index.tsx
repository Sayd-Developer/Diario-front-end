import { Container, ContainerLogin, ContainerImgLogin } from "./style"

import UserLogin from "../../assets/icons/iconUserLogin.svg"
import KeyLogin from "../../assets/icons/iconKeyLogin.svg"
import Styled_1 from "../../assets/icons/iconStyled_1.svg"
import { useState } from "react"

const Login = () => {
  const [name, setName] = useState("")

  const ChangeNumber = () => {
    // Previous Value
    setName((previName) => previName + "")
    setName(name + "")
  }

  return (
    <Container>
      <ContainerLogin>
        <label htmlFor="">
          <h1>Login</h1>
          <img src={UserLogin} alt="" />
          <input
            type="text"
            placeholder="Digite seu e-mail"
            onChange={(e) => setName(e.target.value)}
          />
        </label>
        <label htmlFor="">
          <img src={KeyLogin} alt="" />
          <input type="text" />
        </label>
        <p>Esqueceu sua senha? Clique Aqui</p>
        <button></button>
        <ContainerImgLogin>
          <img src={Styled_1} alt="" />
        </ContainerImgLogin>
      </ContainerLogin>
    </Container>
  )
}

export default Login
