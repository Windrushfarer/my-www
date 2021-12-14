import { Content } from '@components/Content'
import { Hero } from '@components/Hero'
import { FC } from 'react'
import styles from './PostTitle.module.css'

export const PostTitle: FC = ({ children }) => {
  return (
    <h1 className={styles.postTitle}>
      {children}
    </h1>
  )
}
