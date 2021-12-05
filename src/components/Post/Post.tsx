import { FC } from 'react'
import { MDXRemote } from "next-mdx-remote";

import { Link } from '@components/Link';
import { Picture } from '@components/Picture';

import styles from "./Post.module.css";

type Props = {
  content: string
}

const substituteComponents = {
  a: Link,
  img: Picture,
}

export const Post: FC<Props> = ({ content, }) => {
  return (
    <main className={styles.post}>
      <MDXRemote
        compiledSource={content}
        components={substituteComponents}
      />
    </main>
  );
};
