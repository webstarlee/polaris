/* eslint-disable @typescript-eslint/explicit-function-return-type */
import { Box, TextField } from '@mui/material'
import { useAuth } from '@renderer/hooks/AuthContext'
import { CustomButton, CustomTextField } from '@renderer/components/StyledComponents'

const Register: React.FC = () => {
  const { login } = useAuth()
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const data = new FormData(event.currentTarget)
    console.log({
      email: data.get('email'),
      password: data.get('password')
    })
  }

  return (
    <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
      <CustomTextField
        margin="normal"
        required
        fullWidth
        id="email"
        label="Username"
        name="username"
        autoFocus
      />
      <TextField
        margin="normal"
        required
        fullWidth
        name="password"
        label="Password"
        type="password"
        id="password"
        autoComplete="current-password"
      />
      <CustomButton
        className="custom-btn"
        onClick={login}
        type="submit"
        fullWidth
        variant="outlined"
        sx={{ mt: 3, mb: 2 }}
      >
        Send Message
      </CustomButton>
    </Box>
  )
}

export default Register
