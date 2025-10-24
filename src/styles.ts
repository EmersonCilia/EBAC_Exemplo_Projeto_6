import styled, { createGlobalStyle } from 'styled-components'

export const cores = {
  brancoBackground: '#FFF8F2',
  brancoTexto: '#FFEBD9',
  brancoItens: '#fff',
  salmao: '#E66767'
}
export const breakpoint = {
  celular: '480px',
  tablet: '768px',
  desktop: '1023px'
}

export const GlobalCss = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: Roboto, sans-serif;
    list-style: none;
  }
  body {
    background-color: ${cores.brancoBackground};
    color: ${cores.brancoTexto};
    }

  .container{
    max-width: 1024px;
    width: 100%;
    margin: 0 auto;

    @media (max-width: ${breakpoint.desktop}) {
      width: 80%;
    }
    @media (max-width: ${breakpoint.tablet}) {
      width: 90%;
    }
  }
`
export const Container = styled.div`
  width: 100%;
  height: 384px;
  background-repeat: no-repeat;
  background-size: cover;
  padding: 40px 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;

  img {
    display: block;
    margin: 0 auto;
  }
`
