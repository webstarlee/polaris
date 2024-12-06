import { styled, Box, Button, TextField } from '@mui/material'

export const PageHeader = styled(Box)(() => ({
  width: '100%',
  height: '50px',
  display: 'flex',
  marginBottom: '10px',
  flexDirection: 'column',
  justifyContent: 'center'
}))

export const Card = styled(Box)(() => ({
  width: '100%',
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
  backgroundColor: '#F7F8FA',
  padding: '15px',
  borderRadius: '20px',
  position: 'relative',
  boxShadow: '1px 1px 5px 0px rgba(0,0,0,0.2)'
}))

export const CustomButton = styled(Button)(() => ({
  textDecoration: 'none',
  border: '1px solid rgb(99 100 109)',
  position: 'relative',
  overflow: 'hidden',
  height: '44px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  padding: '4px 0px 0px',
  color: '#fff',
  '&:hover': {
    boxShadow: '1px 1px 10px 4px #595961',
    '&:before': {
      left: '100%'
    }
  },
  '&:before': {
    content: '" "',
    position: 'absolute',
    top: 0,
    left: '-100%',
    width: '100%',
    height: '100%',
    background: 'linear-gradient(145deg, transparent, rgba(255, 255, 255, 0.4), transparent)',
    transition: 'all 450ms'
  }
}))

export const CustomTextField = styled(TextField)(() => ({
  '&>.MuiFormLabel-root': {
    display: 'none'
  },
  '&>.MuiInputBase-root': {
    color: 'rgba(255,255,255,.75)',
    '&>input': {
      padding: '0px',
      height: '50px',
      fontSize: '16px'
    },
    '&>fieldset.MuiOutlinedInput-notchedOutline': {
      borderWidth: '1px',
      borderRadius: '4px',
      top: '0px',
      '&>legend': {
        display: 'none'
      },
      '&:before': {
        content: '" "',
        position: 'absolute',
        top: 0,
        left: '-100%',
        width: '100%',
        height: '100%',
        background: 'linear-gradient(145deg, transparent, rgba(255, 255, 255, 0.4), transparent)',
        transition: 'all 450ms'
      }
    },
    '&>input:focus + fieldset.MuiOutlinedInput-notchedOutline': {
      boxShadow: '1px 1px 10px 4px #595961',
      '&:before': {
        left: '100%'
      }
    },
    '&:focus-within': {
      backgroundColor: 'rgba(144, 202, 249, 0.08)'
    }
  }
}))

export const ChatContainerBox = styled(Box)(() => ({
  width: '100%',
  height: '100%',
  position: 'relative',
  display: 'flex',
  flexDirection: 'column'
}))

export const MessageContainerBox = styled(Box)(() => ({
  flex: 1,
  width: '100%',
  position: 'relative',
  display: 'flex',
  overflowX: 'hidden',
  overflowY: 'auto',
  scrollbarWidth: 'thin',
  scrollbarColor: '#888 #fff',
  '&::-webkit-scrollbar': {
    background: 'transparent',
    height: '8px',
    width: '8px'
  },
  '&::-webkit-scrollbar-track': {
    background: 'transparent'
  },
  '&::-webkit-scrollbar-thumb': {
    borderRadius: '0.25rem',
    background: 'rgb(148 163 184)'
  },
  '&::-webkit-scrollbar-thumb:hover': {
    background: '#555'
  },
  '&::-webkit-scrollbar-button': {
    display: 'none'
  }
}))

export const InputContainerBox = styled(Box)(() => ({
  height: '100px',
  borderTop: 'solid 1px #ddd',
  width: '100%',
  position: 'relative',
  display: 'flex'
}))
