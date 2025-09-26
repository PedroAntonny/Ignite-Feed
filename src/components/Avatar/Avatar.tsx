import styles from './Avatar.module.css'
import { ImgHTMLAttributes } from 'react'

interface AvatarProps extends ImgHTMLAttributes<HTMLImageElement> {
  hasBorder?: boolean
}

export function Avatar({ hasBorder = true, ...rest }: AvatarProps) {
  const className = hasBorder ? styles.avatarWithBorder : styles.avatar

  return <img className={className} {...rest} />
}
