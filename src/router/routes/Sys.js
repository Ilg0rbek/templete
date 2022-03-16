import { lazy } from 'react'
import { Redirect } from 'react-router-dom'

const SysRoutes = [
  {
    path: '/sys/appeal',
    exact: true,
    className: 'appeal',
    component: lazy(() => import('../../views/sys/appeal'))
  },
  {
    path: '/sys/stamp_application',
    exact: true,
    className: 'stamp_application',
    component: lazy(() => import('../../views/sys/stamp_application'))
  },
  {
    path: '/sys/id_gov_members',
    exact: true,
    className: 'id_gov_members',
    component: lazy(() => import('../../views/sys/id_gov_members'))
  },
  {
    path: '/sys/members',
    exact: true,
    className: 'members',
    component: lazy(() => import('../../views/sys/members'))
  },
  {
    path: '/sys/user_ip',
    exact: true,
    className: 'user_ip',
    component: lazy(() => import('../../views/sys/user_ip'))
  },
  {
    path: '/sys/user_group',
    component: lazy(() => import('../../views/sys/user_group')),
    exact: true,
    className: 'user_group'
  },
  {
    path: '/sys/user_group/add_new',
    component: lazy(() => import('../../views/sys/user_group/Operations')),
    exact: true,
    className: 'user_group_new',
    meta: {
      navLink: '/sys/user_group'
    }
  },
  {
    path: '/sys/user_group/edit',
    component: lazy(() => import('../../views/sys/user_group/Operations')),
    exact: true,
    className: 'user_group_edit',
    meta: {
      navLink: '/sys/user_group'
    }
  },
  {
    path: '/sys/bank',
    exact: true,
    className: 'bank',
    component: lazy(() => import('../../views/sys/bank'))
  },
  {
    path: '/sys/bank/:id/list',
    exact: true,
    className: 'branch',
    component: lazy(() => import('../../views/sys/bank/branch')),
    meta: {
      navLink: '/sys/bank'
    }
  },
  {
    path: '/sys/payment_list',
    exact: true,
    className: 'payment',
    component: lazy(() => import('../../views/sys/payment_list'))
  },
  {
    path: '/sys/change_payment_status',
    exact: true,
    className: 'payment_status',
    component: lazy(() => import('../../views/sys/change_payment_status'))
  },
  {
    path: '/sys/news',
    exact: true,
    className: 'news',
    component: lazy(() => import('../../views/sys/news'))
  },
  {
    path: '/sys/change_role',
    exact: true,
    className: 'change_role',
    component: lazy(() => import('../../views/sys/user_role'))
  },
  {
    path: '/sys/i_change',
    component: lazy(() => import('../../views/sys/i_change')),
    exact: true,
    className: 'i_change'
  },
  {
    path: '/sys/i_change/add_new',
    component: lazy(() => import('../../views/sys/i_change/Operations')),
    exact: true,
    className: 'i_change_edit',
    meta: {
      navLink: '/sys/i_change'
    }
  },
  {
    path: '/sys/y_change',
    component: lazy(() => import('../../views/sys/y_change')),
    exact: true,
    className: 'y_change'
  },
  {
    path: '/sys/y_change/add_new',
    component: lazy(() => import('../../views/sys/y_change/Operations')),
    exact: true,
    className: 'y_change_edit',
    meta: {
      navLink: '/sys/y_change'
    }
  },
  {
    path: '/sys/application_status',
    component: lazy(() => import('../../views/sys/application_status')),
    exact: true,
    className: 'application_status'
  },
  {
    path: '/sys/application_status/edit',
    component: lazy(() => import('../../views/sys/application_status/Edit')),
    exact: true,
    className: 'application_status_edit',
    meta: {
      navLink: '/sys/application_status'
    }
  },
  {
    path: '/sys/archive',
    component: lazy(() => import('../../views/sys/company/archive')),
    exact: true,
    className: 'archive'
  },
  {
    path: '/sys/catch_company',
    component: lazy(() => import('../../views/sys/company/catch')),
    exact: true,
    className: 'catchCompany'
  },
  {
    path: '/sys/rezerv_company',
    component: lazy(() => import('../../views/sys/company/rezserv')),
    exact: true,
    className: 'rezervCompany'
  },
  {
    path: '/sys/save_company',
    component: lazy(() => import('../../views/sys/company/save')),
    exact: true,
    className: 'saveCompany'
  },
  {
    path: '/sys/permits',
    component: lazy(() => import('../../views/sys/permits/permits')),
    exact: true,
    className: 'news'
  }
]

export default SysRoutes

