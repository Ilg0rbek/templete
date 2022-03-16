import WizardComp from '@cp/Wizard'
import FindByTin from "../../../components/steps/FindByTin"
import ReorganizationApplicant from "../../../components/steps/ReorganizationApplicant"
import Le_edited from "../../../components/steps/Le_edited"
import Payment from "../../../components/steps/Payment"
import Applicant_address from "../../../components/steps/Applicant"
import Address from "../../../components/steps/Address"
import Tax from "../../../components/steps/Tax"
import Info from "../../business/components/Info"
import Thsh_name from "../../../components/steps/Thsh_name"
import Application from "../../../components/steps/Application"
import {
    AiOutlineFileDone,
    AiOutlineSafetyCertificate,
    BsCheck2All,
    FaRegFileCode,
    FiActivity,
    FiEdit3,
    GiPayMoney,
    RiExchangeFundsFill,
    RiWhatsappLine
} from "react-icons/all"
import { Search } from "react-feather"

export default () => {

    const steps = [
        {
            id: 'joining_copmany',
            title: 'Qo`shib olishdagi korxonalar',
            content: <FindByTin />,
            icon: <Search />
        },
        {
            id: 'notificate_accepted',
            title: 'Qayta tashkil etishdagi XABARNOMA',
            content: <ReorganizationApplicant />,
            icon: <RiExchangeFundsFill fontSize={25} />
        },
        {
            id: 'edited',
            title: "O`zgartirish",
            content: <Le_edited />,
            icon: <FiEdit3 fontSize={25} />
        },
        {
            id: 'select_company_name',
            title: "THSh va firma nomini tanlash",
            content: <Thsh_name />,
            icon: <AiOutlineFileDone fontSize={25} />
        },
        {
            id: 'le_address',
            title: "Yuridik shaxs manzili",
            content: <Address />,
            icon: <RiWhatsappLine fontSize={25} />
        },
        {
            id: 'select_activity_type',
            title: "Faoliyat turini tanlash",
            content: <Applicant_address />,
            icon: <FiActivity fontSize={25} />
        },
        {
            id: 'founding_info',
            title: "Ta`sis ma`lumotlari",
            content: <Tax />,
            icon: <FaRegFileCode fontSize={25} />
        },
        {
            id: 'view_info',
            title: "Ma`lumotlarni ko`rib chiqish",
            content: <Info />,
            icon: <BsCheck2All fontSize={25} />
        },
        {
            id: 'payment',
            title: "Ta`sis ma`lumotlari",
            content: <Payment />,
            icon: <GiPayMoney fontSize={25} />
        },
        {
            id: 'Certificate',
            title: "Guvohnoma",
            content: <Application />,
            icon: <AiOutlineSafetyCertificate fontSize={25} />
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
