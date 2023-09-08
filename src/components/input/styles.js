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
  align-items: flex-start;
  padding: 50px;
`

export const CointainerInput = styled.div`
  width: 100%;
  max-width: 400px;
  margin-right: 30px;
  background-color: #fff;
  border-radius: 5px;
  padding: 20px;
  box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.2); 
`

export const DropContainer = styled.div.attrs({ className: "dropZone" })`
  border: 1px dashed #ddd;
  ${props => props.isDragActive && active};
  ${props => props.isDragReject && reject};
  border-radius: 5px;
  cursor: pointer;
  transition: height 0.2s ease;
  height: 80px;
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