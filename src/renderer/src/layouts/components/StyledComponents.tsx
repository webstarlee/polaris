import { styled, Box, Drawer, ListItemButton, ListItemText, IconButton } from '@mui/material'

const drawerWidth = 260

export const AuthContainer = styled(Box)(({ theme }) => ({
  width: '100vw',
  height: '100vh',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  [theme.breakpoints.down('sm')]: {
    padding: '20px'
  }
}))

export const FormContainer = styled(Box)(({ theme }) => ({
  width: '100%',
  maxWidth: '600px',
  display: 'flex',
  flexDirection: 'row',
  backgroundColor: 'rgba(52, 53, 65, 1)',
  borderRadius: '10px',
  position: 'relative',
  border: 'solid 1px #343541',
  marginRight: '45px',
  boxShadow: '2px 2px 10px 5px rgb(0 0 0 / 30%)',
  [theme.breakpoints.down('sm')]: {
    flexDirection: 'column'
  }
}))

export const FormLeftBox = styled(Box)(({ theme }) => ({
  width: '230px',
  backgroundColor: '#fff',
  padding: '20px 25px',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  overflow: 'hidden',
  justifyContent: 'center',
  borderTopLeftRadius: '10px',
  borderBottomLeftRadius: '10px',
  [theme.breakpoints.down('sm')]: {
    width: '100%'
  }
}))

export const AuthLogoImg = styled('img')(() => ({
  width: '100%'
}))

export const FormRightBox = styled(Box)(({ theme }) => ({
  flex: 1,
  padding: '20px 25px',
  [theme.breakpoints.down('sm')]: {
    width: '100%'
  }
}))

export const FormBottomBox = styled(Box)(() => ({
  width: '40px',
  height: '180px',
  position: 'absolute',
  backgroundColor: '#343541',
  bottom: '50px',
  right: '-50px',
  border: 'solid 1px #343541',
  borderRadius: '20px',
  display: 'flex',
  padding: '10px 0px',
  flexDirection: 'column',
  justifyContent: 'space-between',
  alignItems: 'center'
}))

// Dashboard components

export const Main = styled('main', { shouldForwardProp: (prop) => prop !== 'open' })<{
  open?: boolean
}>(({ theme, open }) => ({
  position: 'relative',
  display: 'flex',
  flexDirection: 'column',
  flexGrow: 1,
  overflow: 'hidden',
  padding: '60px 0px 0px',
  [theme.breakpoints.down('md')]: {
    padding: '48px 0px 0px'
  },
  transition: theme.transitions.create('margin', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen
  }),
  marginLeft: `-${drawerWidth}px`,
  [theme.breakpoints.down('sm')]: {
    marginLeft: 0,
    width: '100%'
  },
  ...(open && {
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen
    }),
    marginLeft: 0
  }),
  backgroundColor: theme.palette.mode == 'dark' ? 'rgba(52, 53, 65, 1)' : '#fff',
  height: 'calc(100vh - 20px)'
}))

export const DesktopDrawer = styled(Drawer)(({ theme }) => ({
  width: 270,
  flexShrink: 0,
  display: 'block',
  [theme.breakpoints.down('md')]: {
    display: 'none'
  },
  '& .MuiDrawer-paper': {
    width: 270,
    boxSizing: 'border-box',
    backgroundColor: '#F7F8FA',
    borderRight: '0px',
    height: '100vh',
    padding: '24px',
    boxShadow: '5px 0 20px 0px rgba(0, 0, 0, 0.1)'
  }
}))

export const MobileDrawer = styled(Drawer)(({ theme }) => ({
  width: '100%',
  display: 'none',
  zIndex: 1099,
  [theme.breakpoints.down('md')]: {
    display: 'block'
  },
  '& .MuiDrawer-paper': {
    width: '100%',
    boxSizing: 'border-box',
    backgroundColor: '#F7F8FA',
    borderRight: '0px',
    height: '100vh',
    padding: '20px',
    paddingTop: '80px',
    backgroundImage: 'unset'
  }
}))

export const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  paddingTop: '10px',
  [theme.breakpoints.down('md')]: {
    justifyContent: 'space-between'
  }
}))

export const StatusBar = styled('div')(() => ({
  display: 'flex',
  flexDirection: 'row',
  width: '100%',
  height: '20px',
  position: 'absolute',
  left: 0,
  top: 0,
  backgroundColor: '#000',
  justifyContent: 'space-between',
  padding: '0px 5px'
}))

export const StatusBarBtn = styled(IconButton)(() => ({
  height: '20px',
  width: '40px',
  borderRadius: '0px'
}))

export const Logo = styled('img')(() => ({
  width: '150px'
}))

export const ListItemButtonCustom = styled(ListItemButton)(() => ({
  borderRadius: '12px',
  padding: '10px 12px',
  color: '#272B30',
  fontFamily: 'SatoshiRegular',
  '&.Mui-selected': {
    backgroundColor: '#0156FB',
    '& svg path': {
      fill: '#fff',
      opacity: 1
    },
    '& span': {
      color: '#fff'
    },
    '& svg circle': {
      fill: '#fff'
    }
  },
  '&:hover': {
    backgroundColor: '#0156FB',
    '& svg path': {
      fill: '#fff',
      opacity: 1
    },
    '& span': {
      color: '#fff'
    },
    '& svg circle': {
      fill: '#fff'
    }
  }
}))

export const ListItemTextCustom = styled(ListItemText)(() => ({
  '& span': {
    fontFamily: 'SatoshiMedium',
    fontSize: '18px',
    color: '#6f767e'
  }
}))
