import React, { useState, useEffect } from 'react'
import { Outlet, useNavigate } from 'react-router-dom'
import { Box, Typography } from '@mui/material'
import {
  AuthContainer,
  FormContainer,
  FormLeftBox,
  FormRightBox,
  AuthLogoImg,
  FormBottomBox
} from './components/StyledComponents'
import ViewCompactIcon from '@mui/icons-material/ViewCompact'
import PowerSettingsNewIcon from '@mui/icons-material/PowerSettingsNew'
import HowToRegIcon from '@mui/icons-material/HowToReg'
import IconButton from '@mui/material/IconButton'
import LoadingView from '@renderer/components/LoadingView'
import { useAuth } from '@renderer/hooks/AuthContext'
import LogoImg from '@renderer/assets/images/logo.png'
import { motion } from 'motion/react'

const AuthLayout: React.FC = () => {
  const [isLoading, setIsLoading] = useState(true)

  const { isAuthenticated, authError } = useAuth()
  const navigate = useNavigate()

  useEffect(() => {
    if (!isAuthenticated) {
      setIsLoading(false)
    } else {
      navigate('/')
    }
  }, [isAuthenticated, navigate])

  const quiteApp = (): void => {
    window.electron.ipcRenderer.send('quit-app')
  }

  console.log(authError)

  const variants = {
    shake: {
      scale: 1,
      x: [-3, 3, -3, 3, 0],
      y: [-2, 2, -2, 2, 0],
      transition: {
        duration: 0.3,
        repeat: 1
      }
    },
    normal: {
      scale: 1,
      transition: { duration: 0.6, type: 'spring', bounce: 0.5 }
    }
  }

  return (
    <>
      {isLoading ? (
        <LoadingView />
      ) : (
        <AuthContainer sx={{ flexGrow: 1 }}>
          <motion.div
            initial={{ scale: 0 }}
            animate={[authError ? 'shake' : 'normal']}
            variants={variants}
          >
            <FormContainer>
              <FormLeftBox className="movable">
                <AuthLogoImg src={LogoImg} alt="logo" />
                <Box
                  sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    padding: '10px 0px 0px'
                  }}
                >
                  <Typography
                    sx={{
                      color: '#000',
                      fontSize: '24px',
                      textAlign: 'center'
                    }}
                  >
                    Welcome Back
                  </Typography>
                  <Typography
                    sx={{
                      color: '#aab0b6',
                      fontSize: '13px',
                      textAlign: 'center'
                    }}
                  >
                    Please Enter Your Credentials to Log in the Portal
                  </Typography>
                </Box>
              </FormLeftBox>
              <FormRightBox>
                <Box
                  sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center'
                  }}
                >
                  <Outlet />
                </Box>
              </FormRightBox>
              <FormBottomBox>
                <IconButton className="movable" color="primary" size="small" aria-label="movable">
                  <ViewCompactIcon />
                </IconButton>
                <IconButton color="success" size="small" aria-label="register">
                  <HowToRegIcon />
                </IconButton>
                <IconButton onClick={quiteApp} color="error" size="small" aria-label="power">
                  <PowerSettingsNewIcon />
                </IconButton>
              </FormBottomBox>
            </FormContainer>
          </motion.div>
        </AuthContainer>
      )}
    </>
  )
}

export default AuthLayout
