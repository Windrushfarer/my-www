import { FC } from 'react'
import styles from './Hero.module.css'

export const Hero: FC = ({ children }) => {
  return (
    <div className={styles.hero}>{children}</div>
  )
}
