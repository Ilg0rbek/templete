import { lazy } from 'react'
import { Redirect } from 'react-router-dom'

const MonRoutes = [
  {
    path: '/monitoring/y_registr',
    exact: true,
    className: 'y_register',
    component: lazy(() => import('../../views/monitoring/y_registr/index'))
  },
  {
    path: '/monitoring/y_registr/new',
    exact: true,
    className: 'new page',
    component: lazy(() => import('../../views/monitoring/y_registr/next_pages/pages')),
    meta: {
      navLink: '/monitoring/y_registr'
    }
  },
  {
    path: '/monitoring/j_registr',
    exact: true,
    className: 'j_registr',
    component: lazy(() => import('../../views/monitoring/j_registr'))
  },
  {
    path: '/monitoring/j_registr/new',
    exact: true,
    className: 'new page',
    component: lazy(() => import('../../views/monitoring/j_registr/next_pages/pages')),
    meta: {
      navLink: '/monitoring/j_registr'
    }
  },
  {
    path: '/monitoring/y_reestr',
    exact: true,
    className: 'y_reestr',
    component: lazy(() => import('../../views/monitoring/y_reestr'))
  },
  {
    path: '/monitoring/y_reestr/new',
    exact: true,
    className: 'new pages',
    component: lazy(() => import('../../views/monitoring/y_reestr/next_pages/pages')),
    meta: {
      navLink: '/monitoring/y_registr'
    }
  },
  {
    path: '/monitoring/j_reestr',
    exact: true,
    className: 'j_reestr',
    component: lazy(() => import('../../views/monitoring/j_reestr'))
  },
  {
    path: '/monitoring/j_reestr/new',
    exact: true,
    className: 'new pages',
    component: lazy(() => import('../../views/monitoring/j_reestr/next_pages/pages')),
    meta: {
      navLink: '/monitoring/j_registr'
    }
  },
  {
    path: '/monitoring/application',
    exact: true,
    className: 'application',
    component: lazy(() => import('../../views/monitoring/application'))
  },
  {
    path: '/monitoring/application/new',
    exact: true,
    className: 'new pages',
    component: lazy(() => import('../../views/monitoring/application/next_pages/pages')),
    meta: {
      navLink: '/monitoring/application'
    }
  },
  {
    path: '/monitoring/copy_monitorings_jis',
    exact: true,
    className: 'copy_monitorings_jis',
    component: lazy(() => import('../../views/monitoring/copy_monitorings_jis'))
  },
  {
    path: '/monitoring/copy_monitorings_jis/new',
    exact: true,
    className: 'new pages',
    component: lazy(() => import('../../views/monitoring/copy_monitorings_jis/next_pages/pages')),
    meta: {
      navLink: '/monitoring/copy_monitorings_jis'
    }
  },
  {
    path: '/monitoring/copy_monitorings_yur',
    exact: true,
    className: 'copy_monitorings_yur',
    component: lazy(() => import('../../views/monitoring/copy_monitorings_yur'))
  },
  {
    path: '/monitoring/copy_monitorings_yur/new',
    exact: true,
    className: 'new pages',
    component: lazy(() => import('../../views/monitoring/copy_monitorings_yur/next_pages/pages'))
  },
  {
    path: '/monitoring/editing_j',
    exact: true,
    className: 'editing_j',
    component: lazy(() => import('../../views/monitoring/editing_j'))
  },
  {
    path: '/monitoring/editing_j/view',
    exact: true,
    className: 'editing_j/view',
    component: lazy(() => import('../../views/monitoring/editing_j/components/View')),
    meta: {
      navLink: "/monitoring/editing_j"
    }
  },

  {
    path: '/monitoring/editing_yur',
    exact: true,
    className: 'editing_yur',
    component: lazy(() => import('../../views/monitoring/editing_y'))
  },
  // {
  //   path: '/monitoring/editing_yur/view',
  //   exact: true,
  //   className: 'editing_yur/view',
  //   component: lazy(() => import('../../views/monitoring/editing_y/components/View')),
  //   meta: {
  //     navLink: "/monitoring/editing_yur"
  //   }
  // },

  {
    path: '/monitoring/reorganization_monitor',
    exact: true,
    className: 'reorganization_monitor',
    component: lazy(() => import('../../views/monitoring/reorganization_monitoring'))
  },
  {
    path: '/monitoring/reorganization_monitor/view',
    exact: true,
    className: 'reorganization_monitor/view',
    component: lazy(() => import('../../views/monitoring/reorganization_monitoring/components/View')),
    meta: {
      navLink: "/monitoring/reorganization_monitor"
    }
  },

  {
    path: '/monitoring/reorganization_monitor_company',
    exact: true,
    className: 'reorganization_monitor_company',
    component: lazy(() => import('../../views/monitoring/reorganization_monitoring_company'))
  },
  {
    path: '/monitoring/reorganization_monitor_company/view',
    exact: true,
    className: 'reorganization_monitor_company/view',
    component: lazy(() => import('../../views/monitoring/reorganization_monitoring_company/components/View')),
    meta: {
      navLink: "/monitoring/reorganization_monitor_company"
    }
  },

  {
    path: '/monitoring/account_register',
    exact: true,
    className: 'account_register',
    component: lazy(() => import('../../views/monitoring/account_opening_app'))
  },
  {
    path: '/monitoring/account_register/view',
    exact: true,
    className: 'account_register_view',
    component: lazy(() => import('../../views/monitoring/account_opening_app/components/View')),
    meta: {
      navLink: '/monitoring/account_register'
    }
  },
  {
    path: '/monitoring/account_register_individual',
    exact: true,
    className: 'account_register_individual',
    component: lazy(() => import('../../views/monitoring/account_register_individual'))
  },
  {
    path: '/monitoring/account_register_individual/view',
    exact: true,
    className: 'account_register_view',
    component: lazy(() => import('../../views/monitoring/account_register_individual/components/View')),
    meta: {
      navLink: '/monitoring/account_register_individual'
    }
  },
  {
    path: '/monitoring/i_new_certificate',
    exact: true,
    className: 'account_register_individual',
    component: lazy(() => import('../../views/monitoring/i_new_certificate'))
  },
  {
    path: '/monitoring/i_new_certificate/:id',
    exact: true,
    className: 'i_new_certificate',
    component: lazy(() => import('../../views/monitoring/i_new_certificate/components/View')),
    meta: {
      navLink: '/monitoring/i_new_certificate'
    }
  },
  {
    path: '/monitoring/le_new_certificate',
    exact: true,
    className: 'le_new_certificate',
    component: lazy(() => import('../../views/monitoring/le_new_certificate'))
  },
  {
    path: '/monitoring/le_new_certificate/view',
    exact: true,
    className: 'i_new_certificate',
    component: lazy(() => import('../../views/monitoring/le_new_certificate/components/View')),
    meta: {
      navLink: '/monitoring/le_new_certificate'
    }
  },
  {
    path: '/monitoring/j_registr/new',
    exact: true,
    className: 'new page',
    component: lazy(() => import('../../views/monitoring/j_registr/next_pages/pages')),
    meta: {
      navLink: '/monitoring/j_registr'
    }
  },
  {
    path: '/monitoring/y_reestr',
    exact: true,
    className: 'y_reestr',
    component: lazy(() => import('../../views/monitoring/y_reestr'))
  },
  {
    path: '/monitoring/y_reestr/new',
    exact: true,
    className: 'new pages',
    component: lazy(() => import('../../views/monitoring/y_reestr/next_pages/pages')),
    meta: {
      navLink: '/monitoring/y_registr'
    }
  },
  {
    path: '/monitoring/j_reestr',
    exact: true,
    className: 'j_reestr',
    component: lazy(() => import('../../views/monitoring/j_reestr'))
  },
  {
    path: '/monitoring/j_reestr/new',
    exact: true,
    className: 'new pages',
    component: lazy(() => import('../../views/monitoring/j_reestr/next_pages/pages')),
    meta: {
      navLink: '/monitoring/j_registr'
    }
  },
  {
    path: '/monitoring/application',
    exact: true,
    className: 'application',
    component: lazy(() => import('../../views/monitoring/application'))
  },
  {
    path: '/monitoring/application/:id',
    exact: true,
    className: 'new pages',
    component: lazy(() => import('../../views/monitoring/application/next_pages/pages')),
    meta: {
      navLink: '/monitoring/application'
    }
  },
  {
    path: '/monitoring/copy_monitorings_jis',
    exact: true,
    className: 'copy_monitorings_jis',
    component: lazy(() => import('../../views/monitoring/copy_monitorings_jis'))
  },
  {
    path: '/monitoring/copy_monitorings_jis/new',
    exact: true,
    className: 'new pages',
    component: lazy(() => import('../../views/monitoring/copy_monitorings_jis/next_pages/pages')),
    meta: {
      navLink: '/monitoring/copy_monitorings_jis'
    }
  },
  {
    path: '/monitoring/copy_monitorings_yur',
    exact: true,
    className: 'copy_monitorings_yur',
    component: lazy(() => import('../../views/monitoring/copy_monitorings_yur'))
  },
  {
    path: '/monitoring/copy_monitorings_yur/new',
    exact: true,
    className: 'new pages',
    component: lazy(() => import('../../views/monitoring/copy_monitorings_yur/next_pages/pages'))
  },
  {
    path: '/monitoring/stamp',
    exact: true,
    className: 'stamp',
    component: lazy(() => import('../../views/monitoring/stamp'))
  }
]

export default MonRoutes

