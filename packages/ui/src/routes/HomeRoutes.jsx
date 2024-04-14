import { lazy } from 'react'
import Loadable from '@/ui-component/loading/Loadable'

const Home = Loadable(lazy(() => import('@/portfolio/screens/Home/Home')))

const HomeRoutes = {
    path: '/',
    element: <Home />,
    children: [

    ]
}

export default HomeRoutes
