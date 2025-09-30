import styled from 'styled-components'
import { cores } from '../../styles'
import { Link } from 'react-router-dom'

export const ButtonLink = styled(Link)`
  color: ${cores.brancoTexto};
  background-color: ${cores.salmao};
  font-size: 14px;
  font-weight: bold;
  padding: 4px 8px;
  text-decoration: none;
  border: none;
`
