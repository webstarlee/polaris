import React from 'react'
import { Box } from '@mui/material'
import { styled } from '@mui/material/styles'

const LoadingContainer = styled(Box)(() => ({
  width: '100%',
  height: '100vh',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  backgroundColor: 'transparent'
}))

const TransparentView: React.FC = () => {
  return <LoadingContainer></LoadingContainer>
}

export default TransparentView
