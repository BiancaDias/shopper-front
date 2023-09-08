import { useEffect, useState } from "react";
import { Container, ContainerList, Containerbuttons, ListRe, ButtonDelete, ButtonValidate, ButtonUpgrade } from "./style";
import axios from "axios";
import ListReturn from "../listReturn";

export default function ListProducts({fileName,file, setFile, load, setLoad, setDisabledInput}){
  const [returnBack, setReturnBack] = useState()
  const [upgrade, setUpgrade] = useState(false)
  const url = process.env.REACT_APP_API_URL
  useEffect(()=>{
  },[fileName])

  function deleteList(){
    setFile([]);
    setUpgrade(false)
    setReturnBack()
    setDisabledInput(false)
  }

  function updateData(){
    setLoad(true)
    const body = {products: file}
    axios.put(url, body)
    .then(e => { 
      setLoad(false)
      alert("Atualização feita com sucesso")
      deleteList()
    })
    .catch((err) => {
      setLoad(false)
    })
  }

  function validateData(){
    setLoad(true)
    const body = {products: file}
    axios.post(url, body)
    .then(e => { 
      setReturnBack(e.data)
      if(e.data.error){
        setUpgrade(false)
      }
      if(e.data.ok){
        setUpgrade(true)
      }
      setLoad(false)
    })
    .catch((err) => {
      setLoad(false)
      setUpgrade(false)
    })
  }
  return(
    <Container>
      <ContainerList>
        <ListRe>
          <p>{ file.length > 0 ? fileName : "Não há arquivos carregados"}</p>
          {file.length > 0 ? <ul>
            {file.map((f)=>(
              <li key={f.product_code}>Código do produto: {f.product_code} - Preço do Produto: R$ {Number(f.new_price).toFixed(2).replace('.', ',')} </li>
            ))}
          </ul>: <></>}
        </ListRe>
        <ListReturn returnBack={returnBack}/>
      </ContainerList>
      <Containerbuttons>
        <ButtonDelete disabled={file.length===0} style={{cursor: file.length === 0 ? 'not-allowed' : 'pointer'}} onClick={deleteList}>Excluir</ButtonDelete >
        <ButtonValidate disabled={file.length===0 } style={{cursor: file.length ===0 ? 'not-allowed' : 'pointer'}} onClick={validateData}>Validar</ButtonValidate>
        <ButtonUpgrade disabled={!upgrade} style={{cursor: !upgrade ? 'not-allowed' : 'pointer'}} onClick={updateData}>Atualizar</ButtonUpgrade>
      </Containerbuttons>
    </Container>
  )
}