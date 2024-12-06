import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { ThemeModeProvider } from '@renderer/hooks/ThemeModeContext'
import { RootProvider } from '@renderer/hooks/RootContext'
import { AuthProvider } from '@renderer/hooks/AuthContext'
import '@renderer/styles//index.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ThemeModeProvider>
      <RootProvider>
        <AuthProvider>
          <App />
        </AuthProvider>
      </RootProvider>
    </ThemeModeProvider>
  </React.StrictMode>
)
