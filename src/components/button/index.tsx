import { ButtonLink } from './styles'
type Props = {
  title: string
  to?: string
  onClick?: () => void
  children: string
}

const Button = ({ title, to, onClick, children }: Props) => {
  return (
    <ButtonLink
      className="card-button"
      to={to as string}
      title={title}
      onClick={onClick}
    >
      {children}
    </ButtonLink>
  )
}

export default Button
