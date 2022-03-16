// ** Custom Components
import WizardComp from '@cp/Wizard'

// ** Steps
import Legal from '../../../components/steps/Applicant'
import Activity from '../../../components/steps/Activity'
import FindByTin from "../../../components/steps/FindByTin"
import ReorganizationApplicant from "../../../components/steps/ReorganizationApplicant"
import Thsh_name from "../../../components/steps/Thsh_name"
import Tax from "../../../components/steps/Tax"
import Info from "../../../components/steps/Info"
import Payment from "../../../components/steps/Payment"
import Application from "../../../components/steps/Application"
import {
    AiOutlineFileDone,
    AiOutlineSafetyCertificate,
    BsCheck2All,
    FaRegFileCode,
    FiActivity,
    GiPayMoney,
    RiExchangeFundsFill,
    RiWhatsappLine
} from "react-icons/all"
import { Search } from "react-feather"


const IndividualWizzard = () => {

    const steps = [
        {
            id: 'Extraction',
            title: "Qo'shib yuborilgan korxonalar",
            content: <FindByTin />,
            icon: <Search />
        },
        {
            id: 'Reorganization',
            title: "Qayta tashkil etish to'grisidagi XABARNOMA",
            content: <ReorganizationApplicant />,
            icon: <RiExchangeFundsFill fontSize={25} />
        },
        {
            id: 'Thsh_name',
            title: "THSh va fima nomini tanlash",
            content: <Thsh_name />,
            icon: <AiOutlineFileDone fontSize={25} />
        },
        {
            id: 'Legal',
            title: "Yuridik shaxs manzili",
            content: <Legal />,
            icon: <RiWhatsappLine fontSize={25} />
        },
        {
            id: 'Activity',
            title: "Faoliyat turini tanlash",
            content: <Activity />,
            icon: <FiActivity fontSize={25} />
        },
        {
            id: 'tasis',
            title: "Tasis ma'lumotlari",
            content: <Tax />,
            icon: <FaRegFileCode fontSize={25} />
        },
        {
            id: 'chiqish',
            title: "Ma'lumotlari ko'rib chiqish",
            content: <Info />,
            icon: <BsCheck2All fontSize={25} />
        },
        {
            id: 'fee',
            title: "To'lo'v",
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

export default IndividualWizzard
