import { FC } from 'react'
import styles from './Quote.module.css'

export const Quote: FC = ({ children }) => {
  return <blockquote className={styles.quote}>{children}</blockquote>
}
