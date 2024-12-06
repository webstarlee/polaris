import { lazy, Suspense } from 'react'
import { createBrowserRouter, Navigate, RouteObject } from 'react-router-dom'
import MainLayout from '@renderer/layouts/MainLayout'
import AuthLayout from '@renderer/layouts/AuthLayout'
import { NotFound } from '@renderer/pages/Errors'

const Home = lazy(() => import('@renderer/pages/Home'))
const Login = lazy(() => import('@renderer/pages/Auth/Login'))
const Register = lazy(() => import('@renderer/pages/Auth/Register'))

const routes: RouteObject[] = [
  {
    path: '/',
    element: <MainLayout />,
    children: [
      {
        path: '*',
        element: (
          <Suspense fallback={<>...</>}>
            <Navigate to="/404" />
          </Suspense>
        )
      },
      {
        path: '/',
        element: <Navigate to="/dashboard" replace />
      },
      {
        path: '/dashboard',
        element: (
          <Suspense fallback={<>...</>}>
            <Home />
          </Suspense>
        )
      }
    ]
  },
  {
    path: '/',
    element: <AuthLayout />,
    children: [
      {
        path: '/*',
        element: (
          <Suspense fallback={<>...</>}>
            <Navigate to="/404" />
          </Suspense>
        )
      },
      {
        path: '/login',
        element: (
          <Suspense fallback={<>...</>}>
            <Login />
          </Suspense>
        )
      },
      {
        path: '/register',
        element: (
          <Suspense fallback={<>...</>}>
            <Register />
          </Suspense>
        )
      }
    ]
  },
  {
    path: '/404',
    element: (
      <Suspense fallback={<>...</>}>
        <NotFound />
      </Suspense>
    )
  }
]

const router = createBrowserRouter(routes)

export default router
