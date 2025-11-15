import styled from 'styled-components'
import { Props } from '../productList'
import { breakpoint } from '../../styles'

export const Container = styled.section`
  margin-top: 80px;

  @media (max-width: ${breakpoint.desktop}) {
    margin-left: 10%;
    margin-right: 10%;
  }
`

export const List = styled.ul<Props>`
  display: grid;
  grid-template-columns: ${({ $variant }) =>
    $variant === 'menu' ? '1fr 1fr 1fr' : '1fr 1fr'};
  gap: ${({ $variant }) => ($variant === 'menu' ? '32px' : '48px 80px')};
  margin-bottom: 40px;

  @media (max-width: ${breakpoint.tablet}) {
    grid-template-columns: 1fr;
    justify-items: center;
    align-items: center;
  }

  @media (min-width: ${breakpoint.tablet}) and (max-width: ${breakpoint.desktop}) {
    grid-template-columns: ${({ $variant }) =>
      $variant === 'menu' ? '1fr 1fr' : '1fr'};
    justify-items: center;
    align-items: center;
  }
`
