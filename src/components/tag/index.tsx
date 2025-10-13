import { TagContainer } from './styles'

export type Props = {
  children: string | undefined
}

const Tag = ({ children }: Props) => <TagContainer>{children}</TagContainer>

export default Tag
