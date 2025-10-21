import styled from 'styled-components'
import { cores } from '../../styles'
import fechar from '../../assets/images/fechar.png'

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
  background-color: ${cores.salmao};
  z-index: 1;
  padding: 32px 16px 0;
  max-width: 360px;
  width: 100%;
  display: flex;
  flex-direction: column;

  .card-button {
    max-width: 100%;
    width: 100%;
    background-color: ${cores.brancoBackground};
    color: ${cores.salmao};
    text-align: center;
    margin-top: 16px;
  }
`
export const Prices = styled.p`
  padding-top: 24px;
  font-weight: bold;
  font-size: 14px;
  color: ${cores.brancoTexto};
  display: flex;
  justify-content: space-between;
`

export const CartItem = styled.li`
  display: flex;
  padding: 8px;
  background-color: ${cores.brancoTexto};
  margin-bottom: 16px;
  position: relative;

  img {
    height: 80px;
    width: 80px;
    object-fit: cover;
    margin-right: 24px;
  }

  h3 {
    color: ${cores.salmao};
    font-weight: bold;
    font-size: 18px;
    margin-bottom: 16px;
  }

  span {
    display: block;
    color: ${cores.salmao};
    font-size: 14px;
  }

  button {
    background-image: url(${fechar});
    width: 16px;
    height: 16px;
    border: none;
    background-color: transparent;
    position: absolute;
    top: 8;
    right: 0;
    cursor: pointer;
  }
`
