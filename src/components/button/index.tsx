import { ButtonLink } from './styles'
type Props = {
  title: string
  to?: string
  onClick?: () => void
  children: React.ReactNode
  type?: 'submit' | 'button'
}

const Button = ({ title, to, onClick, children, type }: Props) => (
  <ButtonLink
    className="card-button"
    to={to as string}
    title={title}
    onClick={onClick}
    type={type}
  >
    {children}
  </ButtonLink>
)

export default Button
