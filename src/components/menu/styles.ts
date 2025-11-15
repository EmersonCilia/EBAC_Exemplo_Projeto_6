import styled from 'styled-components'
import { breakpoint, colors } from '../../styles'

export const Card = styled.div`
  background-color: ${colors.salmao};
  color: ${colors.brancoTexto};
  height: 100%;
  padding: 8px;

  > img {
    height: 167px;
    width: calc(100% - 16px);
    margin: 8px;
  }
`
export const Headline = styled.h3`
  margin-bottom: 8px;

  @media (min-width: ${breakpoint.celular}) and (max-width: ${breakpoint.desktop}) {
    text-align: center;
    height: 48px;
  }
`
export const Content = styled.div`
  margin: 8px;

  .card-button {
    display: flex;
    background-color: ${colors.brancoBackground};
    color: ${colors.salmao};
    width: 100%;
    justify-content: center;
  }
`

export const Descricao = styled.p`
  line-height: 22px;
  font-size: 14px;
  font-weight: 400;
  margin-bottom: 16px;
  text-align: justify;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
`
export const Modal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
  display: none;
  align-items: center;
  justify-content: center;

  &.visivel {
    display: flex;
  }

  .overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.8);
  }
`
export const ModalContainer = styled.div`
  width: 100%;
  z-index: 1;
  background-color: ${colors.salmao};
  display: flex;
  flex-direction: column;
  color: ${colors.brancoItens};

  > img {
    align-self: flex-end;
    margin-top: 8px;
    margin-right: 8px;
    width: 16px;
    height: 16px;
    cursor: pointer;
  }

  @media (max-width: ${breakpoint.celular}) {
    width: 90%;
    max-width: 320px;
  }
`
export const ModalContent = styled.div`
  display: flex;
  margin: 32px;

  img {
    width: 280px;
    height: 280px;
    object-fit: cover;
  }

  div {
    margin-left: 24px;

    h4 {
      font-size: 18px;
      font-weight: 900;
      margin-bottom: 16px;
    }
    .card-button {
      background-color: ${colors.brancoBackground};
      color: ${colors.salmao};
      margin-bottom: 16px;
    }

    p {
      font-size: 14px;
      line-height: 22px;
      margin-bottom: 16px;
    }
  }
  @media (max-width: ${breakpoint.celular}) {
    flex-direction: column;
    margin: 16px;
    align-itens: center;

    div {
      margin-left: 0;
    }
    img {
      width: 100%;
      height: 100%;
      margin-bottom: 16px;
    }
  }
`
