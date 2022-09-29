
import { lazy } from 'react'
const Login = lazy(() => import('../pages/login/'))
const Home = lazy(() => import('../pages/admin'))

const rules = [
  { path: '',element: <Login /> },
  { path: 'login',element: <Login /> },
  { path: 'home',element: <Home /> },
]
export default rules
