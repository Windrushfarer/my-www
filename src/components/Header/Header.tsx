import { Logo } from "@components/Logo"
import { Social } from "@components/Social"

import styles from './Header.module.css'

export const Header = () => {
  return (
    <header className={styles.header}>
      <Logo />
      <div className={styles.right}>
        <div className={styles.social}>
          <Social />
        </div>
      </div>
    </header>
  )
}