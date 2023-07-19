import styled from "styled-components";

export const Container = styled.div`
  height: 100vh;
  width: 345px;
  background-color: #131313;
  display: flex;
`;
export const ContainerContent = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;
export const Header = styled.div`
  display: flex;
  justify-content: flex-end;
  padding: 10px;
`;
export const Body = styled.div`
  display: flex;
  width: 90%;
  margin-left: 5%;
  background-color: white;
  cursor: pointer;

  padding: 12px;
  border-radius: 10px;
  margin-top: 30px;
  img {
    display: flex;
    margin-left: 5px;
    width: 25px;
    height: 22px;
  }
  button {
    display: flex;
    width: 100%;
    justify-content: center;
    align-items: center;
    background-color: white;
    border: none;
  }
`;
