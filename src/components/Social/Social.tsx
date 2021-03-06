import { Link } from "@components/Link"

import styles from './Social.module.css'

export const Social = () => {
  return (
    <div className={styles.social}>
      {'You can folow me on '}
      <Link
        href="https://twitter.com/windrushfarer"
        className={styles.link}
      >
        Twitter
      </Link>
      {' and '}
      <Link
        href="https://github.com/windrushfarer"
        className={styles.link}
      >
        Github
      </Link>
    </div>
  )
}
