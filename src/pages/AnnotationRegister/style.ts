import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  width: 100vw;
  flex-direction: column;
  background-color: #f1f1f1;
`;
export const Header = styled.h1`
  font-size: 30px;
  margin: 20px;
`;

export const ContainerContent = styled.div`
  display: flex;
  padding: 10px;
  flex-direction: column;
  width: 1000px;
  margin: 100px;
  border-radius: 10px;
  justify-content: center;
  align-items: flex-start;
  border: 1px solid black;
`;
export const Body = styled.div`
  margin: 20px;
  width: 95%;
`;
