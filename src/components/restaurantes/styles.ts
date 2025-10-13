import styled from 'styled-components'
import { cores } from '../../styles'

export const Card = styled.div`
  background-color: ${cores.brancoItens};
  color: ${cores.salmao};
  position: relative;
  border: 1px solid ${cores.salmao};
  height: 100%;

  > img {
    width: 100%;
    height: 218px;
  }
`
export const Infos = styled.div`
  position: absolute;
  top: 16px;
  right: 16px;
`
export const Headline = styled.div`
  display: flex;
  justify-content: space-between;
`
export const Content = styled.div`
  margin: 8px;
`
export const Nota = styled.span`
  display: inline-flex;
  align-items: center;
  gap: 4px;
  font-size: 18px;
  font-weight: 700;
  margin-bottom: 16px;
`
export const Descricao = styled.p`
  line-height: 22px;
  min-height: calc(22px * 5);
  font-size: 14px;
  font-weight: 400;
  margin-bottom: 16px;
  text-align: justify;
`
