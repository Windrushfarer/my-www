import { useEffect, useState } from "react"

export type ThemeValue = 'light' | 'dark'
export type Theme = ThemeValue | null

const STORAGE_KEY = 'PREFERED_THEME'

export function useThemeEffect() {
  const [theme, setTheme] = useState<Theme | null>(null)

  useEffect(() => {
    const preferedTheme = window.localStorage.getItem(STORAGE_KEY)

    if (preferedTheme) {
      setTheme(preferedTheme as ThemeValue)
    }
  }, [])

  useEffect(() => {
    document.documentElement.classList.remove('light', 'dark')

    if (theme === null) {
      window.localStorage.removeItem(STORAGE_KEY)

    } else {
      window.localStorage.setItem(STORAGE_KEY, theme)

      document.documentElement.classList.add(theme)
    }
  }, [theme])

  return {
    theme,
    setTheme
  }
}