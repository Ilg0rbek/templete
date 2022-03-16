// ** React Imports
// import { useRef, useState } from 'react'

// ** Custom Components
// import Wizard from '@components/wizard'
import WizzardComp from '@cp/Wizard'
// ** Steps
import Oferta from './steps/Oferta'
import FindByTin from './steps/FindByPin'
import CancelReason from './steps/CancelReason'
import Information from './steps/Information'
import { useLocation } from 'react-router-dom'
import QueryString from 'qs'

const CancelWizzard = () => {
    const location = useLocation()
    // const dispatch = useDispatch()
    // const history = useHistory()
    const query = QueryString.parse(location.search, { ignoreQueryPrefix: true })


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
                <h1 className="mb-2">Tadbirkorlik subyekti jismoniy shaxs faoliyatini tugatish uchun yangi ariza</h1>
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
