import { FC } from 'react'

import styles from "./Section.module.css"

type Props = {
  title: string
}

export const Section: FC<Props> = ({ title, children }) => {
  return (
    <section>
      <h2 className={styles.title}>{title}</h2>
      {children}
    </section>
  );
};
