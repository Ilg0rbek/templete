import { lazy } from 'react'
// import { Redirect } from 'react-router-dom'

const CanceledListRoutes = [
    {
        path: '/cancel/legal',
        exact: true,
        className: 'cancel-legal',
        component: lazy(() => import('../../views/cancel/legal'))
    },
    {
        path: '/cancel/legal/view/:id',
        exact: true,
        className: 'cancel-legal-view',
        component: lazy(() => import('../../views/cancel/legal/View'))
    },
    {
        path: '/cancel/legal_jurnal',
        className: 'end-jurnal',
        component: lazy(() => import('../../views/cancel/legal/JurnalAndApplications'))
    },
    {
        path: '/cancel/individual',
        exact: true,
        className: 'cancel-individual',
        component: lazy(() => import('../../views/cancel/individual'))
    },
    {
        path: '/cancel/individual/view/:id',
        exact: true,
        className: 'cancel-legal-view',
        component: lazy(() => import('../../views/cancel/individual/View'))
    },

    {
        path: '/cancel/individual_jurnal',
        className: 'end-jurnal',
        component: lazy(() => import('../../views/cancel/individual/JurnalAndApplications'))
    },
    // {
    //     path: '/cancel/:type',
    //     exact: true,
    //     className: 'end-view',
    //     component: lazy(() => import('../../views/cancel/View')),
    //     meta: {
    //         navLink: '/cancel'
    //     }
    // },
    {
        path: '/cancel/legal_bankrupt',
        exact: true,
        className: 'legal_bankruptcy',
        component: lazy(() => import("../../views/cancel/bankruptcy/legal"))
    }
]

export default CanceledListRoutes
