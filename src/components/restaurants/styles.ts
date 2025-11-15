import styled from 'styled-components'
import { colors } from '../../styles'

export const Card = styled.div`
  background-color: ${colors.brancoItens};
  color: ${colors.salmao};
  position: relative;
  border: 1px solid ${colors.salmao};
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
export const Grade = styled.span`
  display: inline-flex;
  align-items: center;
  gap: 4px;
  font-size: 18px;
  font-weight: 700;
  margin-bottom: 16px;
`
export const Description = styled.p`
  line-height: 22px;
  min-height: calc(22px * 5);
  font-size: 14px;
  font-weight: 400;
  margin-bottom: 16px;
  text-align: justify;
`
