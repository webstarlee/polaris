/* eslint-disable @typescript-eslint/explicit-function-return-type */
import { Box, InputAdornment } from '@mui/material'
import { useAuth, UserProps } from '@renderer/hooks/AuthContext'
import { CustomButton, CustomTextField } from '@renderer/components/StyledComponents'
import AccountCircle from '@mui/icons-material/AccountCircle'
import LockIcon from '@mui/icons-material/Lock'
import { collection, query, where, getDocs } from 'firebase/firestore'
import { checkPassword } from '@renderer/utils'
import { db } from '@renderer/utils/firebase'
import LoadingImg from '@renderer/assets/images/loading.svg'

const Login: React.FC = () => {
  const { updateError, login, authLoading, updateLoading } = useAuth()
  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    updateLoading(true)
    const data = new FormData(event.currentTarget)
    const username: string = (data.get('username') as string | null) ?? ''
    const password: string = (data.get('password') as string | null) ?? ''
    const q = query(collection(db, 'users'), where('username', '==', username))
    const querySnapshot = await getDocs(q)
    if (!querySnapshot.empty) {
      const userDoc = querySnapshot.docs[0]
      const userData = userDoc.data()
      const isMatch = await checkPassword(password, userData.password)
      if (isMatch) {
        const _user: UserProps = {
          username: userData.username,
          is_admin: userData.is_admin,
          fullname: userData.fullname
        }

        login(_user)
      } else {
        updateLoading(false)
        updateError(true)
        setTimeout(() => {
          updateError(false)
        }, 1000)
      }
      console.log(userData.username)
      console.log(isMatch)
    } else {
      updateLoading(false)
      updateError(true)
      setTimeout(() => {
        updateError(false)
      }, 1000)
    }
  }

  console.log(authLoading)

  return (
    <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 0 }}>
      <CustomTextField
        margin="normal"
        required
        fullWidth
        id="username"
        label="Username"
        name="username"
        autoFocus
        sx={{ mb: 1, mt: 2 }}
        slotProps={{
          input: {
            startAdornment: (
              <InputAdornment position="start">
                <AccountCircle />
              </InputAdornment>
            )
          }
        }}
        placeholder="Username"
      />
      <CustomTextField
        margin="normal"
        required
        fullWidth
        name="password"
        label="Password"
        type="password"
        id="password"
        autoComplete="current-password"
        sx={{ mt: 3, mb: 1 }}
        slotProps={{
          input: {
            startAdornment: (
              <InputAdornment position="start">
                <LockIcon />
              </InputAdornment>
            )
          }
        }}
        placeholder="Password"
      />
      <CustomButton
        className="custom-btn"
        type="submit"
        disabled={authLoading}
        fullWidth
        variant="outlined"
        sx={{ mt: 3, mb: 1 }}
      >
        {authLoading ? <img style={{ width: '20px' }} src={LoadingImg} /> : 'Sign In'}
      </CustomButton>
    </Box>
  )
}

export default Login
