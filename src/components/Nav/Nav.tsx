import { Link } from "@components/Link"

import styles from './Nav.module.css'

const links = [
  { path: '/me', title: 'Обо мне' }
]

export const Nav = () => {
  return (
    <nav className={styles.nav}>
      <ul>
        {links.map(link => (
          <li key={link.path} className={styles.navItem}>
            <Link href={link.path}>
              {link.title}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  )
}