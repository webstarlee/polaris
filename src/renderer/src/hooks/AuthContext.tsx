import React, { createContext, useContext, useState } from 'react'
import { useEffectOnce } from './useEffectOnce'

export interface UserProps {
  id: string
  username: string
  is_admin: boolean
  fullname: string
}

interface AuthContextType {
  authLoading: boolean
  isAuthenticated: boolean
  authError: boolean
  user: UserProps | undefined
  updateError: (error: boolean) => void
  login: (_user: UserProps) => void
  logout: () => void
  updateLoading: (loading: boolean) => void
}

const AuthContext = createContext<AuthContextType | undefined>(undefined)

interface AuthProviderProps {
  children: React.ReactNode
}

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [authLoading, setAuthLoading] = useState(false)
  const [authError, setAuthError] = useState(false)
  const [user, setUser] = useState<UserProps>({
    id: '',
    username: '',
    is_admin: false,
    fullname: ''
  })

  // eslint-disable-next-line @typescript-eslint/explicit-function-return-type
  const login = (_user: UserProps) => {
    setUser(_user)
    setIsAuthenticated(true)
    sessionStorage.setItem('authToken', '0x7aff4c7265321e288A46be560c3A0aefdCe0421C')
    const expirationDate = new Date()
    expirationDate.setDate(expirationDate.getDate() + 1)

    const cookieValue =
      encodeURIComponent('0x7aff4c7265321e288A46be560c3A0aefdCe0421C') +
      expirationDate.toUTCString()

    document.cookie = 'authToken=' + cookieValue + '; path=/'
    // setTimeout()
    setTimeout(() => {
      window.electron.ipcRenderer.send('toggle-fullscreen')
    }, 500)
  }

  // eslint-disable-next-line @typescript-eslint/explicit-function-return-type
  const logout = () => {
    setIsAuthenticated(false)
    document.cookie = 'authToken=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;'
    sessionStorage.removeItem('accessToken')
    window.electron.ipcRenderer.send('toggle-fullscreen')
  }

  // eslint-disable-next-line @typescript-eslint/explicit-function-return-type
  const updateLoading = (loading: boolean) => {
    setAuthLoading(loading)
  }

  const updateError = (error: boolean): void => {
    setAuthError(error)
  }

  useEffectOnce(() => {
    const authToken = getCookie('authToken')
    setIsAuthenticated(!!authToken)
  })

  // eslint-disable-next-line @typescript-eslint/explicit-function-return-type
  const getCookie = (name: string): string | undefined | null => {
    const value = `; ${document.cookie}`
    const parts = value.split(`; ${name}=`)
    if (parts.length === 2) {
      return parts.pop()?.split(';').shift()
    }
    return null
  }

  return (
    <AuthContext.Provider
      value={{
        user,
        authError,
        authLoading,
        isAuthenticated,
        login,
        logout,
        updateLoading,
        updateError
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
export const useAuth = () => {
  const context = useContext(AuthContext)
  if (!context) {
    throw new Error('useAuth must be used within a AuthProvider')
  }
  return context
}
