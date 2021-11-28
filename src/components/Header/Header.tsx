import { Logo } from "@components/Logo"
import { Nav } from "@components/Nav"
import { Social } from "@components/Social"

import styles from './Header.module.css'

export const Header = () => {
  return (
    <header className={styles.header}>
      <Logo />
      <div className={styles.right}>
        <Nav />
        <div className={styles.social}>
          <Social />
        </div>
      </div>
    </header>
  )
}