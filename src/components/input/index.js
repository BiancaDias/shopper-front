import Dropzone from "react-dropzone";
import { CointainerInput, Container, DropContainer, UploadMessage } from "./styles";
import ListProducts from "../listProducts";
import { useState } from "react";

export default function Input(){
  const [file, setFile] = useState([])
  const [fileName, setFileName] = useState('')
  function upload(files){
    const readerFile = files[0]
    const reader = new FileReader()
    setFileName(files[0].name)
    reader.onload = (event) => {
      const content = event.target.result;
      const lines = content.split('\n');

      let fileFormat = [];
      console.log(lines.length)
      for (let i = 1; i < lines.length; i++) {
        const line = lines[i];
        console.log(line)
        const column = line.split(',')
        fileFormat.push({product_code: Number(column[0]), new_price: Number(column[1])})
        
      }
      setFile(fileFormat)
    }

    reader.readAsText(readerFile)
  }
  function renderMessage (isDragActive,isDragReject) {
    if(!isDragActive) {
      return <UploadMessage> Arraste o arquivo de alteração de preço aqui...</UploadMessage>
    }
    if(isDragReject) {
      return <UploadMessage type="error"> Arquivo não suportado</UploadMessage>
    }

    return <UploadMessage type="sucess"> Solte seu arquivo de alteração de preço aqui!</UploadMessage>
  }
  return(
  <Container>
    <h1>Alteração de preços</h1>
    <CointainerInput>
      <Dropzone accept={{'text/csv':['.csv', '.CSV']}} onDropAccepted={upload}>
        { ({getRootProps, getInputProps, isDragActive, isDragReject}) => (
          <DropContainer {...getRootProps()} isDragActive={isDragActive} isDragReject={isDragReject}>
              <input {...getInputProps()}/>
              {renderMessage(isDragActive, isDragReject)}
            </DropContainer>
        )}
      </Dropzone>
    </CointainerInput>
    <ListProducts fileName = {fileName} file = {file} setFile = {setFile}/>
  </Container>
  )
}