export type Locale = 'zh' | 'en' | 'ko'

export type TranslationDict = Record<string, string>

export type Translations = Record<Locale, TranslationDict>
