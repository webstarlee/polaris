import { Box } from '@mui/material'
import {
  ChatContainerBox,
  MessageContainerBox,
  InputContainerBox
} from '@renderer/components/StyledComponents'

const Home: React.FC = () => {
  return (
    <ChatContainerBox>
      <MessageContainerBox>
        <Box sx={{ height: '2000px' }}></Box>
      </MessageContainerBox>
      <InputContainerBox></InputContainerBox>
    </ChatContainerBox>
  )
}

export default Home
