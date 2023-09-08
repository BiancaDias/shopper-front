import { styled } from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 15px;
`

export const ContainerList = styled.div`
  display: flex;
`

export const Containerbuttons = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  button{
    width: 100px;
    height: 50px;
    margin-right: 10px;
    margin-top: 10px;
    border-radius: 5px;
    font-size: 20px;
    font-weight: 700;
    
  }
`

export const ButtonDelete = styled.button`
  background-color: #FF4040;
  color: #fff;
  border: #fff;
`
export const ButtonValidate = styled.button`
  background-color: #00BFFF;
  color: #fff;
  border: #fff;
`
export const ButtonUpgrade = styled.button`
  background-color: #008B45;
  color: #fff;
  border: #fff;
`
export const ListRe = styled.div`
  display: flex;
  flex-direction: column;
  overflow-y: auto;
  p{
    font-size: 17px;
    font-weight: 700;
    margin-bottom: 15px;
  }
  background-color: #fff;
  padding: 15px;
  min-width: 400px;
  max-height: 400px;
  border-radius: 5px;
  box-shadow: 5px 5px 5px rgba(0, 0, 0, 0.2); 
  margin-right: 15px;
`