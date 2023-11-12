
# Input Avançado React/Next.js

Este estudo tem como objetivo utilizar as melhores tecnologias para criar formulários no React/Next.js. Também visa aproveitar o uso de props para criar componentes individuais no formulário. 

Para utilizar a função register do react-hook-form foi necessário fazer uma referência. Logo foi utilizado o Hook do proprio React, chamada *forwardRef*


O forwardRef é usado para encaminhar uma referência para um elemento filho para um componente pai. Neste caso, o forwardRef é usado para encaminhar uma referência para o elemento <input> para o componente pai. Isso permite que o componente pai acesse o elemento <input> diretamente.

O forwardRef é necessário porque o componente Input é um componente funcional. Componentes funcionais não podem ser referenciados diretamente, pois eles não têm uma instância. O forwardRef cria uma instância de referência que pode ser usada para acessar o componente pai.

## 🛠 Tecnologias utilizada

✅ React/Next.js-13

✅ TailwindCss

Blibiotecas

✅ React Hook Form

✅ Zod

✅ @hookform/resolvers



## Instalação

Clone o projeto e faça a instalação com npm

```bash
  npm install
  cd advanced-input-react
  npm run dev (iniciar projeto)
```
    
