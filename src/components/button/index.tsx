import { ButtonLink } from './styles'
type Props = {
  title: string
  to?: string
  onClick?: () => void
  children: React.ReactNode
}

const Button = ({ title, to, onClick, children }: Props) => (
  <ButtonLink
    className="card-button"
    to={to as string}
    title={title}
    onClick={onClick}
  >
    {children}
  </ButtonLink>
)

export default Button
