import { Link } from "@components/Link"

import styles from './Social.module.css'

export const Social = () => {
  return (
    <div className={styles.social}>
      <Link
        href="https://twitter.com/windrushfarer"
        className={styles.link}
      >
        [Twitter]
      </Link>
      <Link
        href="https://github.com/windrushfarer"
        className={styles.link}
      >
        [Github]
      </Link>
    </div>
  )
}
