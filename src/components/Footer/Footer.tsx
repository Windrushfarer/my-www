import { Social } from '@components/Social'
import { FC } from 'react'
import styles from './Footer.module.css'

export const Footer: FC = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.block}>
        <span className={styles.icon}>©</span> 2021-present, Egor Ogarkov
      </div>
      <div className={styles.block}>
        {/* Made with <span className={styles.icon}>♥</span>by Windrushfarer */}
        <Social />
      </div>
    </footer>
  )
}
