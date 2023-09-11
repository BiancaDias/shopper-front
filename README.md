# Teste técnico | Shopper - Front

Este é um projeto em React.js. Segue abaixo as instruções de configuração:

Certifiquse-se de ter as seguintes ferramentas instaladas e atualizadas no seu sistema: 

- [Node.js](https://nodejs.org/)
- [npm](https://www.npmjs.com/)

## Instalação

Siga estas etapas para configurar e executar o projeto localmente:

```bash
   git clone https://github.com/BiancaDias/shopper-front
   cd shopper-front
```

### 1 - Instalar as dependencias
```bash
  npm install
```
### 2 - Configurar a variavel de ambiente

Crie um arquivo .env na raiz do projeto com a variavel de ambiente necessária. Você pode usar o arquivo .env.example como um modelo.

### 3 - Execute o projeto

```bash
  npm start
```

## Uso

Para enviar um arquivo para validação faça o upload de um arquivo .csv no seguinte formato:


 | product_code  | new_price |
|-------|-------|
| 16  | 30.50    |
| 18 | 25.99    | 
| 20 | 28.00    |


Nenhum outro tipo de arquivo além do .csv será aceito.

Após o upload, existe a opção de excluir o arquivo ou validá-lo. Se você excluí-lo, liberará o campo de upload para subir um novo arquivo. Se clicar em validar, os dados serão enviados para o back para verificar se é possível realizar as modificações de preço.

Se o back retorna que a validação foi um sucesso, o botão de atualizar será liberado e você poderá fazer o upload de um novo arquivo. Se não, você deverá excluí-lo e enviar um novo.
