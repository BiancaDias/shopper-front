import { css, styled } from "styled-components";

const active = css`
  border-color: green;
`

const reject = css`
  border-color: red;
`

export const Container = styled.div`
  height: calc(100vh - 100px);
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  padding: 50px;
  h1{
    margin-bottom: 30px;
    font-size: 25px;
    font-weight: 400;
  }
`

export const CointainerInput = styled.div`
  width: 100%;
  max-width: 400px;
  height: 120px;
  background-color: #fff;
  border-radius: 5px;
  padding: 20px;
  box-shadow: 5px 5px 5px rgba(0, 0, 0, 0.2); 
  margin-right: 15px;
`

export const DropContainer = styled.div.attrs({ className: "dropZone" })`
  border: 1px dashed #ddd;
  ${props => props.isDragActive && active};
  ${props => props.isDragReject && reject};
  border-radius: 5px;
  cursor: ${props => props.disabled ? 'not-allowed !important' : 'pointer' };
  pointer-events: ${props => props.disabled && 'none' };
  transition: height 0.2s ease;
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 18px;
  text-align: center;
  padding: 5px;
  ` 

const messageColors = {
  default: '#999',
  error: 'red',
  sucess: 'green'
}
export const UploadMessage = styled.div`
  display: flex;
  color: ${props => messageColors[props.type || 'default']};
  justify-content: center;
  align-items: center;
  margin: auto;
`

export const ContainerInstrucions = styled.div`
  display: flex;
  align-items: center;
  padding-bottom: 15px;
  border-bottom: 1px solid #1e2044;
`

export const Instructions = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-width: 300px;
  width: 885px;
  background-color: #fff;
  min-height: 40px;
  padding: 15px;
  border-radius: 5px;
  box-shadow: 5px 5px 5px rgba(0, 0, 0, 0.2); 
  h3{
    margin-bottom: 10px;
    font-weight: 400;
    font-size: 17px;
  }
  li{
    margin-bottom: 5px;
  }
`