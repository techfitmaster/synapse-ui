import { createStore, type StoreApi } from 'zustand/vanilla'

export interface AuthState<TUser> {
  token: string | null
  user: TUser | null
  setAuth: (token: string, user: TUser) => void
  setUser: (user: TUser) => void
  logout: () => void
  isAuthenticated: () => boolean
}

export interface CreateAuthStoreOptions {
  tokenKey: string
  userKey?: string
}

export function createAuthStore<TUser>(
  options: CreateAuthStoreOptions,
): StoreApi<AuthState<TUser>> {
  const { tokenKey, userKey } = options

  const readUser = (): TUser | null => {
    if (!userKey) return null
    try {
      return JSON.parse(localStorage.getItem(userKey) || 'null')
    } catch {
      return null
    }
  }

  return createStore<AuthState<TUser>>((set, get) => ({
    token: localStorage.getItem(tokenKey),
    user: readUser(),
    setAuth: (token, user) => {
      localStorage.setItem(tokenKey, token)
      if (userKey) localStorage.setItem(userKey, JSON.stringify(user))
      set({ token, user })
    },
    setUser: (user) => {
      if (userKey) localStorage.setItem(userKey, JSON.stringify(user))
      set({ user })
    },
    logout: () => {
      localStorage.removeItem(tokenKey)
      if (userKey) localStorage.removeItem(userKey)
      set({ token: null, user: null })
    },
    isAuthenticated: () => !!get().token,
  }))
}
