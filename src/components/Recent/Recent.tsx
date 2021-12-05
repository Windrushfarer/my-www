import { PostLink } from '@components/PostLink'
import { Section } from '@components/Section'
import { PostMeta } from '@shared/types/post'
import { FC } from 'react'

import styles from "./Recent.module.css"

type Props = {
  posts: PostMeta[]
}

export const Recent: FC<Props> = ({ posts }) => {
  return (
    <Section title="За последнее время" className={styles.recent}>
      {posts.map(({ title, path, description, datetime }) => (
        <PostLink
          key={path}
          title={title}
          slug={path}
          description={description}
          date={datetime}
        />
      ))}
    </Section>
  )
}