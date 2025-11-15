import styled from 'styled-components'
import { breakpoint, colors } from '../../styles'
import trashCan from '../../assets/images/lixeira-de-reciclagem.png'

type InputGroupProps = {
  maxWidth?: string
}

export const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: #000;
  opacity: 0.7;
`
export const CartContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: none;
  justify-content: flex-end;
  z-index: 1;

  &.is-open {
    display: flex;
  }
`
export const Sidebar = styled.aside`
  background-color: ${colors.salmao};
  z-index: 1;
  form,
  > div {
    padding: 32px 16px 0;
    max-width: 360px;
    width: 100%;
    display: flex;
    flex-direction: column;
  }

  .card-button {
    max-width: 100%;
    width: 100%;
    background-color: ${colors.brancoTexto};
    color: ${colors.salmao};
    text-align: center;
    margin-bottom: 8px;
  }

  @media (max-width: ${breakpoint.celular}) {
    max-width: 240px;
  }
`
export const Prices = styled.p`
  padding-top: 24px;
  font-weight: bold;
  font-size: 14px;
  color: ${colors.brancoTexto};
  display: flex;
  justify-content: space-between;
  margin-bottom: 16px;
`

export const CartItem = styled.li`
  display: flex;
  padding: 8px;
  background-color: ${colors.brancoTexto};
  margin-bottom: 16px;
  position: relative;

  img {
    height: 80px;
    width: 80px;
    object-fit: cover;
    margin-right: 24px;
  }

  h3 {
    color: ${colors.salmao};
    font-weight: bold;
    font-size: 18px;
    margin-bottom: 16px;
  }

  span {
    display: block;
    color: ${colors.salmao};
    font-size: 14px;
  }

  button {
    background-image: url(${trashCan});
    width: 16px;
    height: 16px;
    border: none;
    background-color: transparent;
    position: absolute;
    bottom: 8px;
    right: 8px;
    cursor: pointer;
  }
`

export const InputGroup = styled.div<InputGroupProps>`

  max-width: ${(props) => props.maxWidth || ''};
  width: 100%;

  label {
    display: block;
    font-size: 14px;
    font-weight: 700;
    margin-bottom: 8px;
  }

  &.cardCode {
    max-width: 88px;
  }

  input, InputMask {
    background-color: ${colors.brancoBackground};
    height: 32px;
    padding: 0 8px;
    border: 1px solid ${colors.brancoItens};
    width: 100%;
    margin-bottom: 8px;

    &.error {
      border: 1px solid red;
    }
  }




  @media (max-width: ${breakpoint.tablet}{
    margin-top: 16px;
  })
`
export const Title = styled.h3`
  font-size: 16px;
  font-weight: 700px;
  margin-bottom: 16px;
`
export const Form = styled.div`
  margin-bottom: 16px;
`

export const Row = styled.div`
  display: flex;
  gap: 32px;
`

export const ConfirmationParagraph = styled.p`
  line-height: 22px;
  font-size: 14px;
  font-weight: 400px;
  margin-bottom: 24px;
`
