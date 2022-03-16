import { lazy } from 'react'

const Certificate = [
    {
        path: '/certificate',
        exact: true,
        className: 'certificate',
        component: lazy(() => import('../../views/certificate'))
    },
    {
        path: '/certificate/reference/:id',
        exact: true,
        className: 'certificate',
        component: lazy(() => import('../../views/certificate/individual/step')),
        meta: {
            navLink: '/certificate'
        }
    },
    {
        path: '/certificate/applications',
        exact: true,
        className: 'certificate-view',
        component: lazy(() => import('../../views/certificate/individual/List')),
        meta: {
            navLink: '/certificate'
        }
    },
    {
        path: '/certificate/legal/jurnal',
        exact: true,
        className: 'certificate-jurnal',
        component: lazy(() => import('../../views/certificate/legal/Jurnal')),
        meta: {
            navLink: '/certificate'
        }
    },
    {
        path: '/certificate/individual/jurnal',
        exact: true,
        className: 'certificate-jurnal',
        component: lazy(() => import('../../views/certificate/individual/Jurnal')),
        meta: {
            navLink: '/certificate'
        }
    },
    {
        path: '/certificate/individual/jurnal/view/:id',
        exact: true,
        className: 'certificate-jurnal-view',
        component: lazy(() => import('../../views/certificate/individual/step/index')),
        meta: {
            navLink: '/certificate/individual/jurnal'
        }
    },
    {
        path: '/certificate/legal/list',
        exact: true,
        className: 'certificate-jurnal',
        component: lazy(() => import('../../views/certificate/legal/List')),
        meta: {
            navLink: '/certificate'
        }
    },
    {
        path: '/certificate/individual/list',
        exact: true,
        className: 'certificate-jurnal',
        component: lazy(() => import('../../views/certificate/individual/List')),
        meta: {
            navLink: '/certificate'
        }
    },
    {
        path: '/certificate/region_jurnal',
        exact: true,
        className: 'region_jurnal',
        component: lazy(() => import('../../views/certificate/individual/RegionJournal')),
        meta: {
            navLink: '/certificate'
        }
    },
    {
        path: '/certificate/subregion_journal',
        exact: true,
        className: 'certificate-jurnal',
        component: lazy(() => import('../../views/certificate/individual/SubregionJournal')),
        meta: {
            navLink: '/certificate'
        }
    },
    {
        path: '/certificate/subregion_journal/view/:id',
        exact: true,
        className: 'certificate-jurnal',
        component: lazy(() => import('../../views/certificate/individual/SubregionJournal/components/View')),
        meta: {
            navLink: '/certificate/subregion_journal'
        }
    }
]
export default Certificate
