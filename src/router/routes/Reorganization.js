import { lazy } from 'react'

const ReorganizationRoutes = [
    {
        path: '/reorganization/jurnal',
        exact: true,
        className: 'reorganization-jurnal',
        component: lazy(() => import('../../views/reorganization/jurnal'))
    },
    {
        path: '/reorganization/:type',
        exact: true,
        className: 'reorganization',
        component: lazy(() => import('../../views/reorganization'))
    },
    {
        path: '/reorganization/division/applicant',
        exact: true,
        className: 'reorganization',
        component: lazy(() => import('../../views/reorganization/division')),
        meta: {
            navLink: "/reorganization/division"
        }
    },
    {
        path: '/reorganization/joining/applicant',
        exact: true,
        className: 'reorganization',
        component: lazy(() => import('../../views/reorganization/joining')),
        meta: {
            navLink: "/reorganization/joining"
        }
    },
    {
        path: '/reorganization/marge/applicant',
        exact: true,
        className: 'reorganization',
        component: lazy(() => import('../../views/reorganization/marge')),
        meta: {
            navLink: "/reorganization/marge"
        }
    },
    {
        path: '/reorganization/segregation/applicant',
        exact: true,
        className: 'reorganization',
        component: lazy(() => import('../../views/reorganization/segregation')),
        meta: {
            navLink: "/reorganization/segregation"
        }
    }
]

export default ReorganizationRoutes
