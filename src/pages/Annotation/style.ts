import styled from "styled-components"

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  padding: 10px;
`

export const Header = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 200px;
  height: 51px;
  background: #131313;
  border-radius: 15px;
  color: #fff;
  margin-bottom: 25px;

  img {
    width: 28px;
    height: 49px;
  }

  p {
    width: 122px;
    color: #fff;
    text-align: center;

    font-size: 12px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
  }
`
export const Body = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 45px;

  .one {
    width: 312px;
    height: 60px;
    max-height: 60px;
    background: #8f97a3;
    margin-bottom: 25px;
    outline: none;
    border: none;
    border-radius: 10px;
    padding: 10px;
  }

  .two {
    padding: 10px;
    width: 1334px;
    height: 446px;
    background: #8f97a3;
    margin-bottom: 25px;
    outline: none;
    border: none;
    border-radius: 10px;
  }
`
export const Footer = styled.div`
  display: flex;
  justify-content: flex-end;
  width: 91%;
  button {
    flex-direction: row;
    width: 164px;
    height: 53px;
    border-radius: 15px;
    background: #131313;
    color: white;
    border: none;

    color: #fff;

    font-size: 15px;
    font-weight: 600;
  }
`
