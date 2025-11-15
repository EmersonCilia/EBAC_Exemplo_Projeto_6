import styled from 'styled-components'
import { colors } from '../../styles'

export const Container = styled.div`
  min-height: 298px;
  background-color: ${colors.brancoTexto};
  padding: 40px 0;
  display: flex;
  flex-direction: column;
  margin-top: 120px;
  justify-content: space-between;

  img {
    display: block;
    margin: 0 auto;
  }
  > img {
    min-idth: 120px;
    min-height: 40px;
    object-fit: contain;
  }
`
export const SocialMedia = styled.div`
  display: flex;
  justify-content: center;
  gap: 8px;
`

export const Text = styled.p`
  color: ${colors.salmao};
  font-size: 10px;
  text-align: center;
`
