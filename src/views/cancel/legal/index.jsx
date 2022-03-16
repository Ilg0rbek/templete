// ** React Imports
// import { useRef, useState } from 'react'

// ** Custom Components
// import Wizard from '@components/wizard'
import WizzardComp from '@cp/Wizard'
// ** Steps
import Oferta from './steps/Oferta'
import FindByTin from '@cp/steps/FindByTin'
import CancelReason from './steps/CancelReason'
import Information from './steps/Information'
import Person from './steps/Person'
import { useLocation } from 'react-router-dom'
import QueryString from 'qs'
// import { useEffect } from 'react'
// import { useDispatch } from 'react-redux'
// import { checkApplication } from "@store/reducers/Legal_Cancel"
// import { unwrapResult } from '@reduxjs/toolkit'

const CancelWizzard = () => {
    const location = useLocation()
    // const dispatch = useDispatch()
    // const history = useHistory()
    const query = QueryString.parse(location.search, { ignoreQueryPrefix: true })

    // const checkedApplication = () => {
    //     dispatch(checkApplication(query?.id)).then(unwrapResult).catch(() => {
    //         const finalQuery = {
    //             step: 1
    //         }
    //         history.push({
    //             pathname: location.pathname,
    //             search: `?${QueryString.stringify(finalQuery)}`
    //         })
    //     })
    // }

    // useEffect(() => {
    //     if (query?.id) {
    //         dispatch(checkApplication(query?.id)).then(unwrapResult).catch(() => {
    //             const finalQuery = {
    //                 step: 1
    //             }
    //             history.push({
    //                 pathname: location.pathname,
    //                 search: `?${QueryString.stringify(finalQuery)}`
    //             })
    //         })
    //     }
    // }, [query?.id, query?.step])

    const steps = [
        {
            id: 'Qidirish',
            title: 'Find',
            content: <FindByTin query={query} />
        },
        {
            id: 'oferta',
            title: 'Oferta',
            content: <Oferta query={query} type={'legal'} />
        },
        {
            id: 'cancel',
            title: 'Cancel',
            content: <Person query={query} />
        },
        {
            id: 'application',
            title: 'Application',
            content: <CancelReason query={query} />
        },
        {
            id: 'info',
            title: 'Information',
            content: <Information query={query} />
        }
    ]
    return (
        <div className='horizontal-wizard'>
            <div className='d-flex align-items-end justify-content-between'>
                <h1 className="mb-2">Ixtiyoriy to'xtatish</h1>
                {query.id && <span>Ariza raqami: №{query.id}</span>}
            </div>
            <WizzardComp>
                {
                    steps.map((step) => step)
                }
            </WizzardComp>
        </div>
    )
}

export default CancelWizzard
