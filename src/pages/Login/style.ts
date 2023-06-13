import styled from "styled-components"

export const Container = styled.div`
  margin: 0;
  height: 100vh;
  width: 100vw;
  color: white;
  display: flex;
`
export const ContainerContent = styled.div`
  background-color: #131313;
  width: 50vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
`
export const ContainerHeader = styled.div`
  h1 {
    font-size: 40px;
  }
  h2 {
    font-size: 20px;
  }
`
export const ContainerBody = styled.div`
  input {
    box-sizing: border-box;
    width: 406px;
    height: 55px;

    border: 3px solid #ddc2dc;
    border-radius: 20px;
    background-color: #131313;
  }

  img {
    left: 10.58%;
    right: 88.1%;
    top: 48.17%;
    bottom: 49.29%;
  }

  h3 {
    font-size: 10px;
  }
`
export const ContainerFooter = styled.div`
  button {
    width: 198px;
    height: 50px;
    background: #ffffff;

    border-radius: 12px;
    border: none;
    color: #131313;
    font-weight: 900;
    font-size: 20px;
  }
`
export const ContainerImg = styled.div`
  img {
    background-color: white;
    height: 100vh;
    width: 50vw;
  }
`
