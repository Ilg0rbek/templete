// ** Reactstrap Imports
import { useState } from "react"
import { Row, Col, Button, Modal, ModalBody, ModalHeader } from 'reactstrap'
import ErrorProgress from "../../../components/ErrorProgress"
import Huquq from "./components/Huquq"
import Address from "./components/Address"
import User from "./components/User"
import Phone from "./components/Phone"
import CompanyName from "./components/CompanyName"
import THSHT from "./components/THSHT"
import Tasis from "./components/Tasis"
import ChangeActivity from "./components/ChangeActivity"
import { useParams } from "react-router-dom"


// import { Link, useLocation } from 'react-router-dom'

const jis = [
    {
        name: "Tashkiliy-huquqiy shaklni o'zgartirish",
        link: "company"
    },
    {
        name: "Faoliyatni amalga oshirish joyini o'zgartirish",
        link: "address"
    },
    {
        name: "Shaxsiy ma'lumotlarni o'zgartirish",
        link: "user"
    },
    {
        name: "Asosiy faoliyat turini o'zgartirish",
        link: "activity"
    },
    {
        name: "Faoliyatni tiklash / Oldingi xolat: Faoliyat yuritayotgan tadbirkor",
        link: "return-activity"
    },
    {
        name: "Amal qilish muddatini o'zgartirish",
        link: "date-time"
    }
]

const yur = [
    {
        name: "THSHT o'zgarishi",
        link: "thsht"
    },
    {
        name: "Korxona nomini o'zgarishi",
        link: "name"
    },
    {
        name: "Ta'sis ma'lumotlari o'zgarishlari",
        link: "tasis"
    },
    {
        name: "Joylashgan joyi o'zgartirish",
        link: "address"
    },
    {
        name: "Telfon raqami va elektron manzilini o'zgartirish",
        link: "phone"
    }
]

const InformationMenu = () => {
    // const location = useLocation()
    const params = useParams()
    const [modal, setModal] = useState(false)
    const [type, setType] = useState(null)
    const toggle = () => setModal(!modal)
    const handelClick = (change) => {
        toggle()
        setType(change)
    }
    const routes = params?.type === 'yur' ? yur : jis
    return (
        <>
            <div className="border rounded mb-2 p-2 bg-white shadow">
                <h1 className='mb-2 text-center'>YAKKA TARTIBDAGI TADBIRKOR "IBROHIM ATAJANOV ISMOILOVICH"</h1>
                <Row xl={2}>
                    {
                        routes?.map((route, index) => (
                            <Col key={index} className='pb-1'>
                                <Button onClick={() => handelClick(route.link)} color='primary' className='text-center py-2' block >{route.name}</Button>
                            </Col>
                        ))
                    }
                </Row>
                <Modal isOpen={modal} toggle={toggle} className='modal-dialog-centered modal-lg'>
                    <ModalHeader className='bg-transparent' toggle={toggle}></ModalHeader>
                    <ModalBody>
                        <h2 className="mb-2">{routes?.find(r => r.link === type)?.name}</h2>
                        {
                            {
                                company: <Huquq toggle={toggle} />,
                                address: <Address toggle={toggle} />,
                                user: <User toggle={toggle} />,
                                activity: <ChangeActivity toggle={toggle} />,
                                phone: <Phone toggle={toggle} />,
                                name: <CompanyName toggle={toggle} />,
                                thsht: <THSHT toggle={toggle} />,
                                tasis: <Tasis toggle={toggle} />
                            }[type] || <ErrorProgress />
                        }
                    </ModalBody>
                </Modal>
            </div>
        </>
    )
}

export default InformationMenu
