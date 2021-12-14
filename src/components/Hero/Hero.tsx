import { FC } from 'react'
import { WithClassName } from '@shared/types/common'

import styles from './Hero.module.css'

type Props = WithClassName

export const Hero: FC<Props> = ({ children, className }) => {
  const finalClass = `${styles.hero} ${className || ''}`.trim();

  return (
    <div className={finalClass}>{children}</div>
  )
}
