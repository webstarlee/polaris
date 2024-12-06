/* eslint-disable @typescript-eslint/explicit-function-return-type */
import { Box, InputAdornment } from '@mui/material'
import { useAuth } from '@renderer/hooks/AuthContext'
import { CustomButton, CustomTextField } from '@renderer/components/StyledComponents'
import AccountCircle from '@mui/icons-material/AccountCircle'
import LockIcon from '@mui/icons-material/Lock'

const Login: React.FC = () => {
  const { login } = useAuth()
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const data = new FormData(event.currentTarget)
    console.log({
      email: data.get('username'),
      password: data.get('password')
    })
  }

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
        onClick={login}
        type="submit"
        fullWidth
        variant="outlined"
        sx={{ mt: 3, mb: 1 }}
      >
        Sign In
      </CustomButton>
    </Box>
  )
}

export default Login
