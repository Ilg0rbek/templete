// ** Custom Components
import WizardComp from '@cp/Wizard'
// ** Steps
import GetOutCompany from '../../../components/steps/Getoutcompany'
import Legal from '../../../components/steps/Applicant'
import InfoDoc from '../../../components/steps/Info'
import Thsh_name from '../../../components/steps/Thsh_name'
import Activity from '../../../components/steps/Activity'
import ReorganizationApplicant from "../../../components/steps/ReorganizationApplicant"
import Tax from "../../../components/steps/Tax"
import Payment from "../../../components/steps/Payment"
import Application from "../../../components/steps/Application"
import { Search } from "react-feather"
import {
    AiOutlineFileDone,
    AiOutlineSafetyCertificate,
    BiDockBottom,
    BsCheck2All,
    FaRegFileCode,
    FiActivity,
    GiPayMoney,
    MdFlipToBack,
    RiWhatsappLine
} from "react-icons/all"

const IndividualWizzard = () => {

    const steps = [
        {
            id: 'Extraction',
            title: 'Ajratib chiqarishdagi asosiy korxona',
            // content: <FindByTin/>,
            content: <ReorganizationApplicant />,
            icon: <Search />
        },
        {
            id: 'Reorganization',
            title: "Qayta tashkil etish to'grisidagi XABARNOMA",
            content: <ReorganizationApplicant />,
            icon: <BiDockBottom fontSize={25} />
        },
        {
            id: 'Getoutcompany',
            title: "Ajralib chiqayotgan korxonalar",
            content: <GetOutCompany />,
            icon: <MdFlipToBack fontSize={25} />
        },
        {
            id: 'Thsh_name',
            title: "THSh va firma nomini tanlash",
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
            content: <InfoDoc />,
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
