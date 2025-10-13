import styled from 'styled-components'
import { Props } from '../productList'

export const Container = styled.section`
  margin-top: 80px;
`

export const List = styled.ul<Omit<Props, 'items'>>`
  display: grid;
  grid-template-columns: ${({ $variant }) =>
    $variant === 'prato' ? '1fr 1fr 1fr' : '1fr 1fr'};
  gap: ${({ $variant }) => ($variant === 'prato' ? '32px' : '48px 80px')};
  margin-bottom: 40px;
  min-height: 800px;
`
