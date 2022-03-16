// ** React Imports
// ** Custom Components
import WizardComp from '@cp/Wizard'

// ** Steps
import Payment from '@cp/steps/Payment'
import Info from '@cp/steps/InfoYur'
import Tax from '@cp/steps/Tax'
import Participant from '@cp/steps/Participant'
import Manager from '@cp/steps/Manager'
import Benefitsiar from '@cp/steps/Benefitsiar'
import {Card, CardBody} from "reactstrap"
import {
    BsCheck2All,
    FaRegAddressCard,
    FaRegFileCode,
    FiUserCheck,
    GiCompanionCube,
    GiPayMoney,
    MdManageAccounts
} from "react-icons/all"
import Applicant from "./step/Applicant"
import Address from './step/Address'
import Activity from "./step/Activity"

const LegalWizard = () => {

    const steps = [
        {
            id: 'applicant',
            title: 'A`rizachi ma`lumotlari',
            content: <Applicant/>,
            icon: <FaRegAddressCard fontSize={25}/>
        },
        {
            id: 'address',
            title: 'Manzil',
            content: <Address/>,
            icon: <FaRegAddressCard fontSize={25}/>
        },
        {
            id: 'tax',
            title: 'Soliq va Faolyat turi',
            content: <Activity/>,
            icon: <FaRegFileCode fontSize={25}/>
        },
        {
            id: 'participant',
            title: 'Ishtirokchi',
            content: <Tax/>,
            icon: <FiUserCheck fontSize={25}/>
        },
        {
            id: 'benefitsiar',
            title: 'Benefitsiar',
            content: <Benefitsiar/>,
            icon: <GiCompanionCube fontSize={25}/>
        },
        {
            id: 'manager',
            title: 'Jamiyat rahbari',
            content: <Manager/>,
            icon: <MdManageAccounts fontSize={25}/>
        },
        {
            id: 'info',
            title: "Ma'lumotlar",
            content: <Info/>,
            icon: <BsCheck2All fontSize={25}/>
        },
        {
            id: 'payment',
            title: "To'lov",
            content: <Payment/>,
            icon: <GiPayMoney fontSize={25}/>
        }
    ]
    return (
        <div className='horizontal-wizard'>
            <Card>
                <CardBody>
                    <WizardComp>
                        {
                            steps.map((step) => step)
                        }
                    </WizardComp>
                </CardBody>
            </Card>
        </div>
    )
}

export default LegalWizard
