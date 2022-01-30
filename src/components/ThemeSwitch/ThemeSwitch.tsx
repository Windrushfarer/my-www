import { FC } from 'react'
import styles from './ThemeSwitch.module.css'
import { ThemeValue, useThemeEffect } from '@effects/useThemeEffect'
import { useMounted } from '@effects/useMounted'

import SunIcon from './sun.svg'
import MoonIcon from './moon.svg'
import AutoIcon from './auto.svg'

export const ThemeSwitch: FC = () => {
  const mounted = useMounted()
  const { theme, setTheme } = useThemeEffect()

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.value === 'auto') {
      setTheme(null)
    } else {
      setTheme(e.target.value as ThemeValue)
    }
  }

  if (!mounted) {
    return null
  }

  return (
    <div className={styles.themeSwitch}>
      <label className={styles.label}>
        <input
          className={styles.input}
          type="radio" name="theme"
          value="light"
          checked={theme === 'light'}
          onChange={handleChange}
        />
        <span className={styles.inputText}>
          <SunIcon className={styles.icon} />
        </span>
      </label>
      <label className={styles.label}>
        <input
          className={styles.input}
          type="radio"
          name="theme"
          value="dark"
          checked={theme === 'dark'}
          onChange={handleChange}
        />
        <span className={styles.inputText}>
          <MoonIcon className={styles.icon} />
        </span>
      </label>
      <label className={styles.label}>
        <input className={styles.input}
          type="radio"
          name="theme"
          value="auto"
          checked={theme === null}
          onChange={handleChange}
        />
        <span className={styles.inputText}>
          <AutoIcon className={styles.icon} />
        </span>
      </label>
    </div>
  )
}
