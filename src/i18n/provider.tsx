import { createContext, useState, useCallback, type ReactNode } from 'react'
import type { Locale, TranslationDict } from './types'

export interface I18nContextValue {
  locale: Locale
  setLocale: (locale: Locale) => void
  t: (key: string, params?: Record<string, string | number>) => string
}

export const I18nContext = createContext<I18nContextValue | null>(null)

interface I18nProviderProps {
  defaultLocale?: Locale
  translations: Record<string, TranslationDict>
  children: ReactNode
}

export function I18nProvider({
  defaultLocale = 'zh',
  translations,
  children,
}: I18nProviderProps) {
  const [locale, setLocale] = useState<Locale>(() => {
    const stored = localStorage.getItem('locale') as Locale | null
    return stored ?? defaultLocale
  })

  const handleSetLocale = useCallback((newLocale: Locale) => {
    localStorage.setItem('locale', newLocale)
    setLocale(newLocale)
  }, [])

  const t = useCallback(
    (key: string, params?: Record<string, string | number>): string => {
      const dict = translations[locale]
      let text = dict?.[key] ?? translations[defaultLocale]?.[key] ?? key

      if (params) {
        for (const [k, v] of Object.entries(params)) {
          text = text.replace(new RegExp(`\\{${k}\\}`, 'g'), String(v))
        }
      }

      return text
    },
    [locale, translations, defaultLocale],
  )

  return (
    <I18nContext.Provider value={{ locale, setLocale: handleSetLocale, t }}>
      {children}
    </I18nContext.Provider>
  )
}
