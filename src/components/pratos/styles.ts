import styled from 'styled-components'
import { cores } from '../../styles'

export const Card = styled.div`
  background-color: ${cores.salmao};
  position: relative;
  color: ${cores.brancoTexto};

  img {
    margin: 8px 8px 0 8px;
  }
`
export const Headline = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 8px;
`
export const Content = styled.div`
  margin: 8px;

  .card-button {
    display: flex;
    background-color: ${cores.brancoBackground};
    color: ${cores.salmao};
    width: 100%;
    justify-content: center;
  }
`

export const Descricao = styled.p`
  line-height: 22px;
  font-size: 14px;
  font-weight: 400;
  margin-bottom: 16px;
`
