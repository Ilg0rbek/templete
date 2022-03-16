import { lazy } from 'react'

import AppRoutes from "./App"
import RegisterRoutes from "./Register"
import ReorganizationRoutes from "./Reorganization"
// import SysRoutes from "./Sys"
// import DevRoutes from "./Dev"
import MonRoutes from './monitoring'
import Canceled from "./Canceled"
import EditLegalPermission from "./Edited_legal"
import CertificateRoute from "./Certificate"
import BlackListRoutes from "./BlackList"

// ** Document title
const TemplateTitle = 'BirDarcha.Uz'

// ** Default Route
const DefaultRoute = '/dashboard'

// ** Merge Routes
const Routes = [
  ...AppRoutes,
  ...RegisterRoutes,
  ...ReorganizationRoutes,
  ...EditLegalPermission,
  ...CertificateRoute,
  // ...DevRoutes,
  ...MonRoutes,
  ...BlackListRoutes,
  ...Canceled,
  {
    path: '/payments',
    exact: true,
    className: 'payment',
    component: lazy(() => import('../../views/payment'))
  },
  {
    path: '/payments/info',
    exact: true,
    className: 'payment-view',
    component: lazy(() => import('../../views/payment/View')),
    meta: {
      navLink: '/payments'
    }
  },
  {
    path: '/payments/jurnal',
    exact: true,
    className: 'jurnal-view',
    component: lazy(() => import('../../views/payment/Jurnal')),
    meta: {
      navLink: '/payments'
    }
  },
  {
    path: '/territory',
    exact: true,
    className: 'territory',
    component: lazy(() => import('../../views/territory'))
  },
  {
    path: '/copy',
    exact: true,
    className: 'copy',
    component: lazy(() => import('../../views/copy'))
  },
  {
    path: '/copy/applications',
    exact: true,
    className: 'copy-view',
    component: lazy(() => import('../../views/copy/View')),
    meta: {
      navLink: '/copy'
    }
  },
  {
    path: '/copy/jurnal',
    exact: true,
    className: 'copy-jurnal',
    component: lazy(() => import('../../views/copy/Jurnal')),
    meta: {
      navLink: '/copy'
    }
  },
  {
    path: '/registry',
    exact: true,
    className: 'registry',
    component: lazy(() => import('../../views/registry'))
  },
  {
    path: '/changes/saved',
    exact: true,
    className: 'changes-saved',
    component: lazy(() => import('../../views/changes/saved')),
    meta: {
      navLink: '/changes'
    }
  },
  {
    path: '/changes/jurnal',
    exact: true,
    className: 'changes-jurnal',
    component: lazy(() => import('../../views/changes/jurnal')),
    meta: {
      navLink: '/changes'
    }
  },
  {
    path: '/changes/status',
    exact: true,
    className: 'changes-status',
    component: lazy(() => import('../../views/changes/status')),
    meta: {
      navLink: '/changes'
    }
  },
  {
    path: '/changes/info/:type/edit',
    exact: true,
    className: 'changes-edit',
    component: lazy(() => import('../../views/changes/operations')),
    meta: {
      navLink: '/changes'
    }
  },
  {
    path: '/changes/info/:type',
    exact: true,
    className: 'changes-information',
    component: lazy(() => import("../../views/changes/information")),
    meta: {
      navLink: '/changes'
    }
  },
  {
    path: '/login',
    component: lazy(() => import('../../views/Login')),
    layout: 'BlankLayout',
    meta: {
      authRoute: true
    }
  },
  // {
  //   path: '/payments/jurnal',
  //   exact: true,
  //   className: 'jurnal-view',
  //   component: lazy(() => import('../../views/payment/Jurnal')),
  //   meta: {
  //     navLink: '/payments'
  //   }
  // },
  // {
  //   path: '/cancel/legal',
  //   exact: true,
  //   className: 'cancel-legal',
  //   component: lazy(() => import('../../views/cancel/legal'))
  // },
  // {
  //   path: '/cancel/individual',
  //   exact: true,
  //   className: 'cancel-individual',
  //   component: lazy(() => import('../../views/cancel/individual'))
  // },
  // {
  //   path: '/cancel/legal_jurnal',
  //   className: 'end-jurnal',
  //   component: lazy(() => import('../../views/cancel/legal/Jurnal')),
  //   meta: {
  //     navLink: '/cancel-jurnal'
  //   }
  // },
  // {
  //   path: '/cancel/:type',
  //   className: 'end-view',
  //   component: lazy(() => import('../../views/cancel/View')),
  //   meta: {
  //     navLink: '/cancel'
  //   }
  // },
  // {
  //   path: '/territory',
  //   exact: true,
  //   className: 'territory',
  //   component: lazy(() => import('../../views/territory'))
  // },
  // {
  //   path: '/copy',
  //   exact: true,
  //   className: 'copy',
  //   component: lazy(() => import('../../views/copy'))
  // },
  // {
  //   path: '/copy/applications',
  //   exact: true,
  //   className: 'copy-view',
  //   component: lazy(() => import('../../views/copy/View')),
  //   meta: {
  //     navLink: '/copy'
  //   }
  // },
  // {
  //   path: '/copy/jurnal',
  //   exact: true,
  //   className: 'copy-jurnal',
  //   component: lazy(() => import('../../views/copy/Jurnal')),
  //   meta: {
  //     navLink: '/copy'
  //   }
  // },
  // {
  //   path: '/certificate',
  //   exact: true,
  //   className: 'certificate',
  //   component: lazy(() => import('../../views/certificate'))
  // },
  // {
  //   path: '/certificate/applications',
  //   exact: true,
  //   className: 'certificate-view',
  //   component: lazy(() => import('../../views/certificate/View')),
  //   meta: {
  //     navLink: '/certificate'
  //   }
  // },
  // {
  //   path: '/certificate/jurnal',
  //   exact: true,
  //   className: 'certificate-jurnal',
  //   component: lazy(() => import('../../views/certificate/Jurnal')),
  //   meta: {
  //     navLink: '/certificate'
  //   }
  // },
  // {
  //   path: '/registry',
  //   exact: true,
  //   className: 'registry',
  //   component: lazy(() => import('../../views/registry'))
  // },
  // {
  //   path: '/changes/saved',
  //   exact: true,
  //   className: 'changes-saved',
  //   component: lazy(() => import('../../views/changes/saved')),
  //   meta: {
  //     navLink: '/changes'
  //   }
  // },
  // {
  //   path: '/changes/jurnal',
  //   exact: true,
  //   className: 'changes-jurnal',
  //   component: lazy(() => import('../../views/changes/jurnal')),
  //   meta: {
  //     navLink: '/changes'
  //   }
  // },
  // {
  //   path: '/changes/status',
  //   exact: true,
  //   className: 'changes-status',
  //   component: lazy(() => import('../../views/changes/status')),
  //   meta: {
  //     navLink: '/changes'
  //   }
  // },
  // {
  //   path: '/changes/info/:type/edit',
  //   exact: true,
  //   className: 'changes-edit',
  //   component: lazy(() => import('../../views/changes/operations')),
  //   meta: {
  //     navLink: '/changes'
  //   }
  // },
  // {
  //   path: '/changes/info/:type',
  //   exact: true,
  //   className: 'changes-information',
  //   component: lazy(() => import("../../views/changes/information")),
  //   meta: {
  //     navLink: '/changes'
  //   }
  // },
  {
    path: '/test',
    exact: true,
    className: 'test',
    component: lazy(() => import('../../views/test'))
  }
  // {
  //   path: '/login',
  //   component: lazy(() => import('../../views/Login')),
  //   layout: 'BlankLayout',
  //   meta: {
  //     authRoute: true
  //   }
  // }
]

export { DefaultRoute, TemplateTitle, Routes }
