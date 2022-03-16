import { lazy } from 'react'
import { Redirect } from 'react-router-dom'

const AppRoutes = [
    {
        path: '/dashboard',
        exact: true,
        className: 'app',
        component: lazy(() => import('../../views/dashboard'))
    }
    // {
    //     path: '/dashboard/applications/legal',
    //     exact: true,
    //     className: 'app',
    //     component: lazy(() => import('../../views/application')),
    //     meta: {
    //         navLink: '/dashboard'
    //     }
    // },
    // {
    //     path: '/dashboard/applications/:type/view/:id',
    //     exact: true,
    //     className: 'app',
    //     component: lazy(() => import('../../views/application/View')),
    //     meta: {
    //         navLink: '/dashboard'
    //     }
    // },
    // {
    //     path: '/dashboard/applications/:type/edit/:id',
    //     exact: true,
    //     className: 'app',
    //     component: lazy(() => import('../../views/application/Edit')),
    //     meta: {
    //         navLink: '/dashboard'
    //     }
    // }
]

export default AppRoutes