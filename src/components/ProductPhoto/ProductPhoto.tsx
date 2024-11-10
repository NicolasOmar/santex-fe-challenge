import { Avatar, styled } from '@mui/material'

interface ProductPhotoProps {
  src: string | null
  fallbackText?: string
  alt?: string
}

const imgSizeConfig = {
  height: '8rem',
  width: '8rem'
}

const StyledProductPhoto = styled('img')(imgSizeConfig)
const StyledAvatar = styled(Avatar)(imgSizeConfig)

const ProductPhoto: React.FC<ProductPhotoProps> = ({
  src,
  fallbackText,
  alt
}) => {
  return src ? (
    <StyledProductPhoto
      src={src}
      alt={alt}
    ></StyledProductPhoto>
  ) : (
    <StyledAvatar variant='square'>{fallbackText}</StyledAvatar>
  )
}

export default ProductPhoto
