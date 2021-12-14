import { Logo } from "@components/Logo"
import { Social } from "@components/Social"

import styles from './Header.module.css'

export const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.content}>
        <Logo />
        <div className={styles.right}>
          <div className={styles.social}>
            <Social />
          </div>
        </div>
      </div>
    </header>
  )
}