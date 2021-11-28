import { useEffect, useState } from "react"

const STORAGE_KEY = 'PREFERED_THEME'
type ThemeValue = 'light' | 'dark'
type Theme = ThemeValue | null

export function useThemeEffect() {
  const [theme, setTheme] = useState<Theme | null>(() => {
    return window.localStorage.getItem(STORAGE_KEY) as Theme
  })

  useEffect(() => {
    window.localStorage.setItem(STORAGE_KEY, theme)
  }, [theme])

  return {
    theme,
    setTheme
  }
}