import styled from "styled-components"

export const Container = styled.div``
export const ContainerContent = styled.div`
  margin: 10px 10px 10px 10px;
`
export const Header = styled.div`
  display: flex;
  padding: 10px 10px 10px 10px;
  button {
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #78087a;
    color: white;
    border-radius: 8px;
    width: 175px;
    height: 50px;
    border: none;
    font-size: 15px;
  }
  img {
    margin-right: 8px;
  }
`
export const Body = styled.div`
  display: flex;
  flex-direction: column;
  padding: 10px 10px 10px 10px;
  .One {
    padding: 10px 10px 10px 10px;
    border: none;
    margin-top: 60px;
    background-color: #8f97a3;
    outline: none;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 20%;
    height: 50px;
  }
  .Two {
    padding: 10px 10px 10px 10px;
    resize: both;
    overflow: auto;
    background-color: #8f97a3;
    border: none;
    outline: none;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-top: 40px;
    width: 1420px;
    height: 400px;
  }
`
export const Footer = styled.div`
  display: flex;
  justify-content: flex-end;
  padding: 10px 10px 10px 10px;
  margin-top: 20px;
  margin-right: 70px;
  button {
    background-color: #78087a;
    color: white;
    border-radius: 8px;
    width: 134px;
    height: 45px;
    border: none;
  }
`
