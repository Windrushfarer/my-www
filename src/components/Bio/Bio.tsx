import { Link } from '@components/Link'
import { FC } from 'react'
import styles from './Bio.module.css'


export const Bio: FC = () => {
  return (
    <section className={styles.bio}>
      <p className={styles.text}>
        Глажу котов и чиню баги из разных уголков мира. Пишу и программирую в вебе.
      </p>
      <p className={styles.text}>
        В блоге рассказываю о вещах, которые узнаю, работе и делюсь впечатленями об играх. Иногда пишу в <Link href="https://doka.guide/">Доке</Link> и менторю
      </p>
    </section>
  )
}
