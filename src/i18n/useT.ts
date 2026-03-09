import { useContext } from 'react'
import { I18nContext, type I18nContextValue } from './provider'

export function useT(): I18nContextValue {
  const ctx = useContext(I18nContext)
  if (!ctx) {
    throw new Error('useT must be used within an I18nProvider')
  }
  return ctx
}
