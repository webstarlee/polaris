import React from 'react'
import { Box } from '@mui/material'
import { styled } from '@mui/material/styles'
import LoadingImg from '@renderer/assets/images/loading.svg'

const LoadingContainer = styled(Box)(() => ({
  width: '100%',
  height: '100vh',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center'
}))

const LoadingView: React.FC = () => {
  return (
    <LoadingContainer>
      <img style={{ width: '40px' }} src={LoadingImg} />
    </LoadingContainer>
  )
}

export default LoadingView
