import { lazy } from 'react'
// import { Redirect } from 'react-router-dom'

const BlackListRoutes = [
    {
        path: '/blacklist/farm',
        exact: true,
        className: 'farm',
        component: lazy(() => import("../../views/blacklist/farm"))
    },
    {
        path: '/blacklist/company',
        exact: true,
        className: 'farm',
        component: lazy(() => import("../../views/blacklist/company"))
    },
    {
        path: '/blacklist/person',
        exact: true,
        className: 'farm',
        component: lazy(() => import("../../views/blacklist/person"))
    },
    {
        path: '/blacklist/person/add_new',
        exact: true,
        className: 'farm_operations',
        component: lazy(() => import("../../views/blacklist/person/operations")),
        meta: {
            navLink: '/blacklist/person'
        }
    },
    {
        path: '/blacklist/beneficiary',
        exact: true,
        className: 'farm',
        component: lazy(() => import("../../views/blacklist/beneficiary"))
    },
    {
        path: '/blacklist/beneficiary/add_new',
        exact: true,
        className: 'beneficiary_operations',
        component: lazy(() => import("../../views/blacklist/beneficiary/operations")),
        meta: {
            navLink: '/blacklist/beneficiary'
        }
    }
]

export default BlackListRoutes

