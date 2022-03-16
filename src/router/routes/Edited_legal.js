import { lazy } from 'react'

const EditedLegalPermissionListRoutes = [
    {
        path: '/edit_legal/search',
        exact: true,
        className: 'search_edited',
        component: lazy(() => import("../../views/edited/legal/Search_edited"))
    },
    {
        path: '/edit_legal/saved',
        exact: true,
        className: 'saved_edits',
        component: lazy(() => import("../../views/edited/legal/Saved_edited"))
    },
    {
        path: '/edit_legal/list',
        exact: true,
        className: 'edits_list',
        component: lazy(() => import("../../views/edited/legal/List_edited"))
    },
    {
        path: '/edit_legal/checked',
        exact: true,
        className: 'edit_checked',
        component: lazy(() => import("../../views/edited/legal/checked_edits"))
    },
    {
        path: '/edit_legal/checked_list',
        exact: true,
        className: 'edit_checked_list',
        component: lazy(() => import("../../views/edited/legal/checkedList_edit"))
    }
]

export default EditedLegalPermissionListRoutes
