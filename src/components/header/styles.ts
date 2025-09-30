import styled from 'styled-components'
import { cores } from '../../styles'

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

export const Titulo = styled.h1`
  font-size: 36px;
  font-weight: 900;
  height: 100%;
  display: flex;
  flex-direction: column;
  padding: 32px 0;
  justify-content: end;
  text-align: center;
  color: ${cores.salmao};
`

export const Elements = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;

  p,
  a {
    width: 200px;
    color: ${cores.salmao};
    font-size: 18px;
    font-weight: 900;
    text-decoration: none;
  }
`
