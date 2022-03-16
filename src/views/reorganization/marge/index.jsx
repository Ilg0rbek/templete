import WizardComp from '@cp/Wizard'
import FindByTin from "../../../components/steps/FindByTin"
import ReorganizationApplicant from "../../../components/steps/ReorganizationApplicant"
import Le_edited from "../../../components/steps/Le_edited"
import Application from "../../../components/steps/Application"
import Payment from "../../../components/steps/Payment"
import {Search} from "react-feather"
import {AiOutlineSafetyCertificate, AiOutlineSnippets, FiEdit3, GiPayMoney, RiExchangeFundsFill} from "react-icons/all"

export default () => {

    const steps = [
        {
            id: 'joining_copmany',
            title: 'Qo`shib olishdagi korxonalar',
            content: <FindByTin/>,
            icon: <Search/>
        },
        {
            id: 'notificate_accepted',
            title: 'Qayta tashkil etishdagi XABARNOMA',
            content: <ReorganizationApplicant/>,
            icon: <RiExchangeFundsFill fontSize={25}/>
        },
        {
            id: 'edited',
            title: "O`zgartirish",
            content: <Le_edited/>,
            icon: <FiEdit3 fontSize={25}/>
        },
        {
            id: 'applicant',
            title: "A`riza",
            content: <Application/>,
            icon: <AiOutlineSnippets fontSize={25}/>
        },
        {
            id: 'payment',
            title: "To'lov",
            content: <Payment/>,
            icon: <GiPayMoney fontSize={25}/>
        },
        {
            id: 'reference',
            title: "Ma`lumotnoma",
            content: <Application/>,
            icon: <AiOutlineSafetyCertificate fontSize={25}/>
        }
    ]

    return (
        <div className='horizontal-wizard'>
            <WizardComp>
                {
                    steps.map((step) => step)
                }
            </WizardComp>
        </div>
    )
}
