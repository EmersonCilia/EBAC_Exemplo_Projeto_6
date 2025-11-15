import styled from 'styled-components'
import { colors } from '../../styles'

export const Title = styled.h1`
  font-size: 36px;
  font-weight: 900;
  min-height: 80px;
  display: flex;
  flex-direction: column;
  text-align: center;
  color: ${colors.salmao};
  padding: 32px 0;
`

export const Logo = styled.img`
  display: block;
  margin: 0 auto;
  min-width: 124px;
  min-height: 58px;
  object-fit: contain;
`
