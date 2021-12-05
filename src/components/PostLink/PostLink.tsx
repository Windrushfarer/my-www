import { Link } from '@components/Link'
import { FC } from 'react'

import styles from './PostLink.module.css'

type Props = {
  title: string
  slug: string
  description: string
  date: string
}

export const PostLink: FC<Props> = ({ title, slug, description, date }) => {
  return (
    <article className={styles.post}>
      <Link href={slug} className={styles.link}>
        <h3 className={styles.title}>{title}</h3>

        {/* <span>{date}</span> */}

        <p className={styles.decription}>
          {description}
        </p>

        <span className={styles.more}>К посту</span>
      </Link>
    </article>
  )
};
