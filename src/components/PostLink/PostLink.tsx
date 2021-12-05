import { FC } from 'react'
import { Link } from '@components/Link'
import { formatDateTime } from '@shared/date/formatDateTime'

import styles from './PostLink.module.css'

type Props = {
  title: string
  slug: string
  description: string
  date: string
}

const Icon = () => (
  <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" className={styles.icon} fill="currentColor">
    <path d="M19 26a1 1 0 0 1-.71-.29 1 1 0 0 1 0-1.42l8.3-8.29-8.3-8.29a1 1 0 0 1 1.42-1.42l9 9a1 1 0 0 1 0 1.42l-9 9A1 1 0 0 1 19 26Z" />
    <path d="M28 17H4a1 1 0 0 1 0-2h24a1 1 0 0 1 0 2Z" />
    <path fill="none" d="M0 0h32v32H0z" />
  </svg>
)

export const PostLink: FC<Props> = ({ title, slug, description, date }) => {
  return (
    <article className={styles.post}>
      <Link href={slug} className={styles.link}>
        <h3 className={styles.title}>
          {title}
        </h3>

        <time dateTime={date} className={styles.date}>
          {formatDateTime(date)}
        </time>

        <p className={styles.decription}>
          {description}
        </p>

        <span className={styles.more}>
          К посту
          <Icon />
        </span>
      </Link>
    </article>
  )
};
