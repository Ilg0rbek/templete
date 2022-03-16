import { lazy } from 'react'
import { Redirect } from 'react-router-dom'

const DevRoutes = [
  {
    path: '/dev/translets',
    exact: true,
    className: 'translets',
    component: lazy(() => import('../../views/developers/translets'))
  },
  {
    path: '/dev/settings',
    exact: true,
    className: 'settings',
    component: lazy(() => import('../../views/developers/settings'))
  },
  {
    path: '/dev/ifutgroups',
    exact: true,
    className: 'settings',
    component: lazy(() => import('../../views/developers/ifutgroups'))
  },
  {
    path: '/dev/response',
    exact: true,
    className: 'response',
    component: lazy(() => import('../../views/developers/response'))
  },
  {
    path: '/dev/services',
    exact: true,
    className: 'services',
    component: lazy(() => import('../../views/developers/services'))
  },
  {
    path: '/dev/activitytype',
    exact: true,
    className: 'activitytype',
    component: lazy(() => import('../../views/developers/activitytype'))
  },
  {
    path: '/dev/requirement',
    exact: true,
    className: 'requirement',
    component: lazy(() => import('../../views/developers/requirement'))
  },
  {
    path: '/dev/legalentities',
    exact: true,
    className: 'legalentities',
    component: lazy(() => import('../../views/developers/legalentities'))
  },
  {
    path: '/dev/answer_question',
    exact: true,
    className: 'answer_question',
    component: lazy(() => import('../../views/developers/answer_question'))
  },
  {
    path: '/dev/le_opf_choice_settings',
    exact: true,
    className: 'le_opf_choice_settings',
    component: lazy(() => import('../../views/developers/thsh_interments'))
  },
  {
    path: '/dev/br_le_reg_requiriments',
    exact: true,
    className: 'br_le_reg_requiriments',
    component: lazy(() => import('../../views/developers/legal_requirments'))
  },
  {
    path: '/dev/br_le_reg_requiriments/add_new',
    exact: true,
    className: 'br_le_reg_requiriments',
    component: lazy(() => import('../../views/developers/legal_requirments/add_new')),
    meta: {
      navLink: '/dev/br_le_reg_requiriments'
    }
  },
  {
    path: '/dev/static_page',
    exact: true,
    className: 'static_page',
    component: lazy(() => import('../../views/developers/page_interment'))
  },
  {
    path: '/dev/fixed_service',
    exact: true,
    className: 'fixed_service',
    component: lazy(() => import('../../views/developers/fixed_service'))
  },
  {
    path: '/dev/fixed_service_amount',
    exact: true,
    className: 'fixed_service_amount',
    component: lazy(() => import('../../views/developers/fixed_service_amount'))
  }
]

export default DevRoutes

