import { Link } from "@components/Link"

import styles from './Logo.module.css'

export const Logo = () => {
  return (
    <Link href="/" className={styles.wrapper}>
      <span className={styles.first}>Cats</span>
      <span className={styles.second}>&</span>
      <span className={styles.third}>Bugs</span>
    </Link>
  )
}