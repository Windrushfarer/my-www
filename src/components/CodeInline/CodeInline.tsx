import { FC } from 'react'
import styles from './CodeInline.module.css'

export const CodeInline: FC = ({ children }) => {
  return <code className={styles.code}>{children}</code>
}
