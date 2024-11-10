import { styled } from '@mui/material'
import { currencyFormatter } from '@utils/formatters'

interface HeaderProps {
  logoSrc: string
  subTotalAmount: number
}

const StyledHeader = styled('header')({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  margin: '15px 0'
})

const Header: React.FC<HeaderProps> = ({ logoSrc, subTotalAmount }) => {
  return (
    <StyledHeader>
      <img
        src={logoSrc}
        alt='logo'
      />
      <section>{currencyFormatter.format(subTotalAmount)}</section>
    </StyledHeader>
  )
}

export default Header
