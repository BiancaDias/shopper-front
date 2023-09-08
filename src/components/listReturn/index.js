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
                <li>Código: {list.product_code} -&nbsp;</li>
                <li>Nome: {list.product_name} -&nbsp;</li>
                <li>Preço Atual: R$ {(Number(list.actual_price)).toFixed(2).replace('.', ',')} -&nbsp;</li>
                <li>Novo Preço: R$ {Number(list.new_price).toFixed(2).replace('.', ',')}</li>
              </ListProducts>
            ))}
          </>
        ) : (
          returnBack.error && (
            <p>Não foi possível validar</p>
          )
        )}
    
        {returnBack.error && returnBack.error.map((list) => (
          <ListProducts key={list.product_code}>
            <li>Código: {list.product_code} -&nbsp;</li>
            <li>Erro: {list.error}</li>
          </ListProducts>
        ))}
      </Container>
    )
    }
