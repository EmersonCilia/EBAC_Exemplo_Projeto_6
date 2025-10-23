import { styled } from 'styled-components'
import { breakpoint, cores } from '../../styles'

export const BannerBackground = styled.div`
  height: 280px;
  width: 100%;
  margin-top: auto;
  transform: translateY(25%);
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  position: relative;

  &::before {
    content: '';
    position: absolute;
    inset: 0;
    background-color: rgba(0, 0, 0, 0.5);
    z-index: -1;
  }

  @media (max-width: ${breakpoint.desktop}) {
    max-width: 100%;
  }
`
export const Cozinha = styled.p`
  font-size: 32px;
  font-weight: 100;
  color: ${cores.brancoItens};
`
export const Titulo = styled.h1`
  font-size: 32px;
  font-weight: 900;
`
export const Container = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  padding: 32px 0;
  justify-content: space-between;
  text-align: left;
  color: ${cores.brancoItens};
`
export const CartButton = styled.a`
  display: flex;
  cursor: pointer;
`

export const Elements = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;

  a {
    color: ${cores.salmao};
    font-size: 18px;
    font-weight: 900;
    text-decoration: none;
  }
  @media (max-width: ${breakpoint.desktop}) {
    max-width: 768px;
    width: 80%;
  }
  @media (max-width: ${breakpoint.celular}) {
    flex-direction: column;
    text-align: center;

    a {
      order: 2;
      margin-top: 16px;
    }

    img {
      order: 1;
    }
  }
`
