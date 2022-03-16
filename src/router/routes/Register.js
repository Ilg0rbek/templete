import { lazy } from 'react'

const RegisterRoutes = [
    {
        path: '/register/:who',
        exact: true,
        className: 'who',
        component: lazy(() => import('../../views/register/Organizations'))
    },
    {
        path: '/register/:who/offer',
        exact: true,
        className: 'offer',
        component: lazy(() => import('../../views/register/Offer')),
        meta: {
            navLink: '/register'
        }
    },
    {
        path: '/register/individual/applicant/:id',
        exact: true,
        className: 'register',
        component: lazy(() => import('../../views/register/Individual')),
        meta: {
            navLink: '/register'
        }
    },
    {
        path: '/register/legal/applicant/:id',
        exact: true,
        className: 'register',
        component: lazy(() => import('../../views/register/legal')),
        meta: {
            navLink: '/register'
        }
    },
    {
        path: '/applications/legal',
        exact: true,
        className: 'app',
        component: lazy(() => import('../../views/register/legal/List')),
        meta: {
            navLink: '/applications'
        }
    },
    {
        path: '/applications/individual',
        exact: true,
        className: 'app',
        component: lazy(() => import('../../views/register/Individual/List')),
        meta: {
            navLink: '/applications'
        }
    },
    {
        path: '/applications/legal/view/:id',
        exact: true,
        className: 'app',
        component: lazy(() => import('../../views/register/legal/View')),
        meta: {
            navLink: '/applications'
        }
    },
    {
        path: '/applications/individual/view/:id',
        exact: true,
        className: 'app',
        component: lazy(() => import('../../views/register/Individual/View')),
        meta: {
            navLink: '/applications'
        }
    }
    // {
    //     path: '/applications/:type/view/:id',
    //     exact: true,
    //     className: 'app',
    //     component: lazy(() => import('../../views/application/View')),
    //     meta: {
    //         navLink: '/dashboard'
    //     }
    // },
    // {
    //     path: '/applications/:type/edit/:id',
    //     exact: true,
    //     className: 'app',
    //     component: lazy(() => import('../../views/application/Edit')),
    //     meta: {
    //         navLink: '/dashboard'
    //     }
    // }
]

export default RegisterRoutes
