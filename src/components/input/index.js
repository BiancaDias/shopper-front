import Dropzone from "react-dropzone";
import { CointainerInput, Container, DropContainer, UploadMessage, Instructions, ContainerInstrucions } from "./styles";
import ListProducts from "../listProducts";
import { useState } from "react";

export default function Input(){
  const [file, setFile] = useState([])
  const [fileName, setFileName] = useState('')
  const [load, setLoad] = useState(false)
  const [disabledInput, setDisabledInput] = useState(false)
  function upload(files){
    setDisabledInput(true)
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
    <h1>Área de alteração de preços</h1>
    <ContainerInstrucions>
      <CointainerInput>
        <Dropzone accept={{'text/csv':['.csv', '.CSV']}} onDropAccepted={upload}>
          { ({getRootProps, getInputProps, isDragActive, isDragReject}) => (
            <DropContainer {...getRootProps()} isDragActive={isDragActive && !disabledInput} isDragReject={isDragReject} disabled={disabledInput}>
                <input {...getInputProps()} disabled={disabledInput}/>
                {renderMessage(isDragActive, isDragReject)}
            </DropContainer>
          )}
        </Dropzone>
      </CointainerInput>
      <Instructions>
        <h3>Instruções</h3>
        <ul>
          <li>• Arreste ou selecione um arquivo .csv contendo as alterações de preço no campo ao lado;</li>
          <li>• Após a leitura do arquivo, clique em validar;</li>
          <li>• Após a validação, se todos os campos estiverm corretos, o botão atualizar ficará disponível;</li>
          <li>• Se houver algum problema, leia atentamente quais foram, exclua seu arquivo do sistema e envie um novo com as correções solicitadas;</li>
          <li>• Ao clicar em validar, as mudanças serão efetivadas e você poderá enviar um novo arquivo.</li>
        </ul>
      </Instructions>
    </ContainerInstrucions>
    <ListProducts fileName = {fileName} file = {file} setFile = {setFile} load={load} setLoad={setLoad} setDisabledInput={setDisabledInput}/>
  </Container>
  )
}