const DEFAULT_IS_DARK_THEME = false

export function useInitialUserTheme(): boolean {
  /**
   * Проверка темы ОС пользователя
   */
  const prefersDarkColorScheme = window?.matchMedia('(prefers-color-scheme: dark)')?.matches

  const initialUserTheme = (): boolean => {
    const localStorageIsDarkTheme = localStorage.getItem('isDarkTheme')

    if (localStorageIsDarkTheme) {
      return localStorageIsDarkTheme === 'true'
    }

    if (prefersDarkColorScheme) {
      return true
    }

    return DEFAULT_IS_DARK_THEME
  }

  return initialUserTheme()
}
