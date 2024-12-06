import React, { useEffect } from 'react'
import { Outlet, useNavigate } from 'react-router-dom'
import { Box } from '@mui/material'
import { Main } from './components/StyledComponents'
import TransparentView from '@renderer/components/TransparentView'
import Sidebar from './components/Sidebar'
import Header from './components/Header'
import { useAuth } from '@renderer/hooks/AuthContext'

const MainLayout: React.FC = () => {
  const { isAuthenticated, authLoading, updateLoading } = useAuth()
  const navigate = useNavigate()

  useEffect(() => {
    if (isAuthenticated) {
      setTimeout(() => {
        updateLoading(false)
      }, 1000)
    } else {
      navigate('/login')
    }
  }, [isAuthenticated, navigate])

  return (
    <>
      {authLoading ? (
        <TransparentView />
      ) : (
        <Box sx={{ display: 'flex' }}>
          <Header />
          <Sidebar />
          <Main>
            <Outlet />
          </Main>
        </Box>
      )}
    </>
  )
}

export default MainLayout
