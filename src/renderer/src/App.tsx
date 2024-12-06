/* eslint-disable @typescript-eslint/explicit-function-return-type */
import { useState, useEffect } from 'react'
import { RouterProvider } from 'react-router-dom'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import router from '@renderer/routes/index'
import LoadingView from '@renderer/components/LoadingView'

const queryClient = new QueryClient()

const App = () => {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const loadingTimeout = setTimeout(() => {
      setIsLoading(false)
    }, 1000)

    window.onload = () => {
      clearTimeout(loadingTimeout)
      setIsLoading(false)
    }

    return () => {
      clearTimeout(loadingTimeout)
      window.onload = null
    }
  }, [])

  return (
    <QueryClientProvider client={queryClient}>
      {isLoading ? (
        <LoadingView />
      ) : (
        <>
          <RouterProvider router={router} />
        </>
      )}
    </QueryClientProvider>
  )
}

export default App
