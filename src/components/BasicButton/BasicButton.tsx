interface BasicButtonProps extends BaseComponentProps {
  text: string
  onClick?: () => void
}

const BasicButton: React.FC<BasicButtonProps> = ({
  text,
  cssClasses,
  onClick
}) => {
  const baseClass = cssClasses ?? 'basic-button'
  
  return (
    <button onClick={onClick} className={baseClass}>
      {text}
    </button>
  )
}

export default BasicButton