import { FC } from 'react'

import styles from "./Section.module.css"

type Props = {
  title: string
  className?: string
}

export const Section: FC<Props> = ({ title, children, className }) => {
  return (
    <section className={className}>
      <h2 className={styles.title}>{title}</h2>
      {children}
    </section>
  );
};
