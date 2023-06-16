import styled from "styled-components"

export const Container = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: row;

  @media only screen and (max-width: 820px) {
    background-color: #131313;
  }
`
export const ContainerLeft = styled.div`
  height: 100%;
  width: 50%;
  background-color: #131313;
  color: #fff;
  display: flex;

  @media only screen and (max-width: 820px) {
    display: flex;
    width: 100vh;
    height: 100vh;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    background-color: #131313;
  }
`
export const ContainerContent = styled.div`
  height: 100%;
  width: 90%;
  margin-left: 10%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
`

export const ContainerHeader = styled.div`
  display: flex;
  flex-direction: column;
  width: 90%;

  h1 {
    font-style: normal;
    font-weight: 700;
    font-size: 48px;
    line-height: 58px;
    margin-bottom: 47px;
    margin-top: 107px;
  }

  @media only screen and (max-height: 668px) {
    h1 {
      margin-top: 30px;
      font-size: 29px;
    }
  }

  @media only screen and (max-height: 668px) {
    h2 {
      font-size: 20px;
      margin-bottom: 10px;
    }
  }

  h2 {
    font-style: normal;
    font-weight: 500;
    font-size: 32px;
    line-height: 48px;
    margin-bottom: 20px;
  }
`
export const ContainerBody = styled.div`
  display: flex;
  flex-direction: column;
  width: 90%;
  justify-content: space-around;

  h3 {
    font-size: 10px;
    margin-left: 10px;
    margin-top: 5px;
    cursor: pointer;
  }
`
export const ContainerInput = styled.div`
  display: flex;
  width: 90%;

  height: 45px;
  margin-top: 25px;
  padding: 0px 0px 0px 20px;
  border: 3px solid #ddc2dc;
  border-radius: 20px;

  width: 486px;
  height: 75px;
  left: 131px;
  top: 447px;

  display: flex;
  align-items: center;

  @media only screen and (max-width: 1122px) {
    width: 90%;
  }

  input {
    background-color: #131313;
    border: none;
    color: #fff;
    margin-left: 10px;
    width: 90%;
    height: 35px;
    padding: 5px;
    outline: none;
  }
`
export const ContainerFooter = styled.div`
  button {
    width: 158px;
    height: 60px;
    left: 131px;
    top: 694px;

    font-weight: 700;
    font-size: 20px;
    line-height: 45px;
    margin-top: 20px;
    background: #ffffff;
    border-radius: 20px;
    cursor: pointer;
    border: none;
  }
`
export const ContainerImg = styled.div`
  height: 100vh;
  width: 50%;
  display: flex;
  justify-content: center;
  align-items: center;

  @media only screen and (max-width: 820px) {
    visibility: hidden;
    display: none;
  }

  img {
    max-width: 100%;
    height: auto;
  }
`
