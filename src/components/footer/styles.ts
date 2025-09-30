import styled from 'styled-components'
import { cores } from '../../styles'

export const Container = styled.div`
  min-height: 298px;
  background-color: ${cores.brancoTexto};
  padding: 40px 0;
  display: flex;
  flex-direction: column;
  margin-top: 120px;
  justify-content: space-between;

  img {
    display: block;
    margin: 0 auto;
  }
`
export const SocialMedia = styled.div`
  display: flex;
  justify-content: center;
  gap: 8px;
`

export const Texto = styled.p`
  color: ${cores.salmao};
  font-size: 10px;
  text-align: center;
`
