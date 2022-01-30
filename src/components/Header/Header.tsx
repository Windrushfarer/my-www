import { Content } from "@components/Content"
import { Logo } from "@components/Logo"
import { ThemeSwitch } from "@components/ThemeSwitch"

import styles from './Header.module.css'

export const Header = () => {
  return (
    <header className={styles.header}>
      <Content>
        <div className={styles.content}>
          <Logo />
          <div className={styles.right}>
            <div className={styles.social}>
              <ThemeSwitch />
            </div>
          </div>
        </div>
      </Content>
    </header>
  )
}