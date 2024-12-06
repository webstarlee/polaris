import React, { useEffect } from 'react'
import { Outlet, useNavigate } from 'react-router-dom'
import { Box, Typography } from '@mui/material'
import { Main, StatusBar, StatusBarBtn } from './components/StyledComponents'
import TransparentView from '@renderer/components/TransparentView'
import Sidebar from './components/Sidebar'
import Header from './components/Header'
import { useAuth } from '@renderer/hooks/AuthContext'
import { useRoot } from '@renderer/hooks/RootContext'
import LogosImage from '@renderer/assets/images/logos.png'
import RemoveOutlinedIcon from '@mui/icons-material/RemoveOutlined'
import RectangleOutlinedIcon from '@mui/icons-material/RectangleOutlined'
import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined'

const MainLayout: React.FC = () => {
  const { isAuthenticated, authLoading, updateLoading } = useAuth()
  const { sideOpenD } = useRoot()
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
        <Box
          sx={{
            display: 'flex',
            paddingTop: '20px',
            position: 'relative',
            backgroundColor: 'rgba(52, 53, 65, 1)'
          }}
        >
          <StatusBar className="movable">
            <Box
              sx={{
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'center'
              }}
            >
              <img
                style={{ width: '15px', height: '15px', marginRight: '10px' }}
                src={LogosImage}
              />
              <Typography
                sx={{ color: '#fff', fontSize: '12px', lineHeight: '12px', marginTop: '3px' }}
              >
                PLR
              </Typography>
            </Box>
            <Box>
              <StatusBarBtn color="primary" size="small" aria-label="movable">
                <RemoveOutlinedIcon sx={{ fontSize: '15px' }} />
              </StatusBarBtn>

              <StatusBarBtn color="primary" size="small" aria-label="movable">
                <RectangleOutlinedIcon sx={{ fontSize: '12px' }} />
              </StatusBarBtn>

              <StatusBarBtn color="error" size="small" aria-label="movable">
                <CloseOutlinedIcon sx={{ fontSize: '16px' }} />
              </StatusBarBtn>
            </Box>
          </StatusBar>
          <Header />
          <Sidebar />
          <Main open={sideOpenD}>
            <Outlet />
          </Main>
        </Box>
      )}
    </>
  )
}

export default MainLayout
