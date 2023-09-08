import { useEffect } from "react"
import { Container, ListProducts } from "./styles"

export default function ListReturn({returnBack}){
  useEffect(()=>{
  }, [returnBack])
  if(!returnBack){
    return <></>
  }

  return (
      <Container>
        {returnBack.ok ? (
          <>
            <p>Validação feita com sucesso!</p>
            {returnBack.ok.map((list) => (
              <ListProducts key={list.product_code}>
                {console.log("chega aqui?")}
                <p>Código: {list.product_code} -&nbsp;</p>
                <p>Nome: {list.product_name} -&nbsp;</p>
                <p>Preço Atual: R$ {(Number(list.actual_price)).toFixed(2).replace('.', ',')} -&nbsp;</p>
                <p>Novo Preço: R$ {Number(list.new_price).toFixed(2).replace('.', ',')}</p>
              </ListProducts>
            ))}
          </>
        ) : (
          returnBack.error ? (
            <p>Não foi possível validar</p>
          ) : null
        )}
    
        {returnBack.error && returnBack.error.map((list) => (
          <ListProducts key={list.product_code}>
            <p>Código: {list.product_code} -&nbsp;</p>
            <p>Erro: {list.error}</p>
          </ListProducts>
        ))}
      </Container>
    )
    }
