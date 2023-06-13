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
`
export const ContainerHeader = styled.div`
  justify-content: center;
`
export const ContainerBody = styled.div`
  input {
    width: 486px;
    height: 75px;
    left: 131px;
    top: 528px;

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
`
export const ContainerFooter = styled.div`
  button {
    width: 238px;
    height: 70px;
    left: 131px;
    top: 694px;

    background: #ffffff;
    border-radius: 20px;
    border: none;
    color: #131313;
    font-weight: 700;
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
