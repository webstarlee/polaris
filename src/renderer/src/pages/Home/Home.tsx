import { Typography } from '@mui/material'
import { PageHeader } from '@renderer/components/StyledComponents'

const Home: React.FC = () => {
  return (
    <>
      <PageHeader>
        <Typography sx={{ fontFamily: 'SatoshiBold', fontSize: '28px' }}>Welcome, Chino</Typography>
      </PageHeader>
    </>
  )
}

export default Home
