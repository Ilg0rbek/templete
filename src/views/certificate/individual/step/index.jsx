import WizzardComp from '@cp/Wizard'
import {useLocation, useParams} from 'react-router-dom'
import See_info from "./See_info"
import Payment from "./Components/PaymentInfo"
import Application from "../../../../components/steps/Application"
import React from "react"

function useQuery() {
    const {search} = useLocation()

    return React.useMemo(() => new URLSearchParams(search), [search])
}

export default () => {

    const {id} = useParams()
    const queries = useQuery()
    const type = queries.get("type")

    const steps = [
        {
            id: 'see',
            title: 'Ko`rish',
            content: <See_info type={type}/>
        },
        {
            id: 'payment',
            title: 'To`lov',
            content: <Payment/>
        },
        {
            id: 'applicant',
            title: 'Guvohnoma',
            content: <Application/>
        }
    ]
    return (
        <div className='horizontal-wizard'>
            <div className='d-flex align-items-end justify-content-between'>
                <h1 className="mb-2">Jismoniy Sh. yangi taxrirdagi guvohnoma berish , №: {id}</h1>
            </div>
            <WizzardComp>
                {
                    steps.map((step) => step)
                }
            </WizzardComp>
        </div>
    )
}
