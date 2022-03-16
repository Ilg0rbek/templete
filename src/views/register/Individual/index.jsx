// ** React Imports
// ** Custom Components
import WizardComp from '@cp/Wizard'
import { useEffect } from 'react'
// ** Steps
import Applicant from './steps/Applicant'
import Address from './steps/Address'
import Family from './steps/Family'
import Payment from './steps/Payment'
import Information from './steps/Information'
import { Card, CardBody } from "reactstrap"
import Activity from "./steps/Activity"
// import { useParams } from "react-router-dom"
import { BsCheck2All, MdFamilyRestroom, FaRegAddressCard, FiActivity, GiPayMoney } from "react-icons/all"
import { useSelector, useDispatch } from 'react-redux'
import { getSingleIndividualApplication } from "@store/reducers/Register"
import { useParams } from 'react-router-dom'

const IndividualWizard = () => {
    const dispatch = useDispatch()
    const { id } = useParams()
    useEffect(() => {
        dispatch(getSingleIndividualApplication(id))
    }, [id])
    const { application } = useSelector(state => state.register)
    // const params = useParams()
    const opfId = application?.info?.opf?.id || 0

    console.log(opfId)

    const steps = [
        {
            id: 'applicant',
            title: 'Arizachi',
            content: <Applicant />,
            icon: <FaRegAddressCard fontSize={25} />
        },
        {
            id: 'address',
            title: 'Manzil',
            content: <Address />,
            icon: <FaRegAddressCard fontSize={25} />
        },
        {
            id: 'activity',
            title: 'Soliq va Faolyat turi',
            content: <Activity />,
            icon: <FiActivity fontSize={25} />
        },
        {
            id: 'info',
            title: "Ma'lumotlar",
            content: <Information />,
            icon: <BsCheck2All fontSize={25} />
        },
        {
            id: 'payment',
            title: "To'lov",
            content: <Payment />,
            icon: <GiPayMoney fontSize={25} />
        }
    ]

    steps.push({
        id: 'family',
        title: "Oila a'zolari",
        content: <Family />,
        icon: <MdFamilyRestroom fontSize={25} />
    })

    return (
        <div className='horizontal-wizard'>
            <Card>
                <CardBody>
                    <WizardComp>
                        {
                            steps.filter((el) => {
                                return el !== null && typeof el !== 'undefined'
                            }).map((step) => step)
                        }
                    </WizardComp>
                </CardBody>
            </Card>
        </div>
    )
}

export default IndividualWizard
