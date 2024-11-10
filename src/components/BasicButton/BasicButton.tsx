import { BaseComponentProps } from '@interfaces/components'
import { styled } from '@mui/material'

interface BasicButtonProps extends BaseComponentProps {
  text: string
  onClick?: () => void
}

const StyledButton = styled('button')({
  padding: '10px',
  backgroundColor: 'red',
  border: 'none',
  borderRadius: '5px'
})

const BasicButton: React.FC<BasicButtonProps> = ({ text, onClick }) => {
  return <StyledButton onClick={onClick}>{text}</StyledButton>
}

export default BasicButton
