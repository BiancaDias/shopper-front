import { styled } from "styled-components";

export const Container = styled.div`
  background-color: #fff;
  min-height: 50px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  padding: 15px !important;
  border-radius: 5px;
  box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.2); 
  min-width: 490px;
  width: 885px;
  max-height: 400px;
  overflow-y: auto;
  p{
    font-size: 17px;
    font-weight: 700;
    margin-bottom: 15px;
  }
`

export const ListProducts = styled.ul`
  display: flex;
  white-space: nowrap;
`