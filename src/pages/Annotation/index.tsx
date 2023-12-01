import { Container, Form, Header, Body, Footer, Title1, Title2 } from "./style"
import Arrow from "../../assets/icons/iconArrow.svg"

import { useState } from "react"
import { useNavigate } from "react-router"
export default function Annotation() {
  const [form, setForm] = useState({
    title1: "",
    title2: "",
  })

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(form)
  }

  const handleForm = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    })
  }

  const navegation = useNavigate()
  return (
    <Container>
      <Form onChange={handleForm} onSubmit={handleSubmit}>
        <Header onClick={() => navegation("/")}>
          <img src={Arrow} />
          <p>Voltar ao início</p>
        </Header>
        <Body>
          <Title1
            className="one"
            name="title1"
            title="name"
            // value={title1}
            value={form.title1}
            // onChange={(e) => settitle1(e.target.value)}
            placeholder="Título..."
          />
          <Title2
            className="two"
            name="title2"
            title="name"
            // style={{ resize: "none" }}
            // value={title2}
            value={form.title2}
            // onChange={(e) => settitle2(e.target.value)};
            placeholder="Conteúdo..."
          />
        </Body>
        <Footer>
          <button type="submit">Salvar</button>
        </Footer>
      </Form>
    </Container>
  )
}
