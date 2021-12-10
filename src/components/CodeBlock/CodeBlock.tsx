import { FC } from 'react'
import styles from './CodeBlock.module.css'

export const CodeBlock: FC = ({ children }) => {
  return <pre className={styles.codeBlock}>{children}</pre>
}
