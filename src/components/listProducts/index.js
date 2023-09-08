import { useEffect } from "react";
import { Container } from "./style";
import axios from "axios";

export default function ListProducts({fileName,file, setFile}){
  const url = process.env.REACT_APP_API_URL
  useEffect(()=>{
    console.log(file)
  },[fileName])

  function deleteList(){
    setFile([]);
  }

  function validateData(){
    const body = {products: file}
    console.log(body)
    axios.post(url, body)
    .then(e => console.log(e.data))
    .catch((err) => console.log(err))
  }
  return(
    <Container>
      <p>Nome do arquivo: <strong>{ file.length > 0 ? fileName : "Carregue um novo arquivo"}</strong></p>
      {file.length > 0 ? <ul>
        {file.map((f)=>(
          <li>Código do produto: {f.product_code} Preço do Produto: {f.new_price} </li>
        ))}
      </ul>: <></>}
      <button onClick={deleteList}>Excluir</button>
      <button onClick={validateData}>Validar</button>
      <button onClick={()=>{}}>Atualizar</button>
    </Container>
  )
}