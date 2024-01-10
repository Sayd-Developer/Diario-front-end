import {
  Form,
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
import { useNavigate } from "react-router"
import { useState } from "react"

export default function Login() {
  const [name, setName] = useState<string>()
  const [password, setPassword] = useState<string>()

  const handleSubmit = (e) => {
    e.preventDefault()
  }

  const navigate = useNavigate()

  return (
    <Form onSubmit={handleSubmit}>
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
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </ContainerInput>
            <ContainerInput>
              <img src={KeyLogin} alt="" />
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </ContainerInput>

            <h3>Esqueceu sua senha? Clique Aqui</h3>
          </ContainerBody>
          <ContainerFooter onClick={() => navigate("/")}>
            <button>Entrar</button>
          </ContainerFooter>
        </ContainerContent>
      </ContainerLeft>

      <ContainerImg>
        <img src={DarkLogin} alt="" />
      </ContainerImg>
    </Form>
  )
}
