import { useState } from "react"
import { Modal, ModalBody, ModalHeader, Row, Col, TabContent, TabPane, Nav, NavLink, NavItem, Button } from "reactstrap"
import ErrorProgress from "../../../components/ErrorProgress"
import SendSMS from "./SendSMS"
const PaymentModal = ({ open, toggle }) => {
    const [active, setActive] = useState('1')
    const [modal, setModal] = useState(false)
    const toggleSMS = () => setModal(!modal)
    const setTab = tab => {
        if (active !== tab) {
            setActive(tab)
        }
    }
    return (
        <>
            <Modal isOpen={open} toggle={toggle} className='modal-dialog-centered modal-lg'>
                <ModalHeader className='bg-transparent' toggle={toggle}></ModalHeader>
                <ModalBody>
                    <Nav tabs>
                        <NavItem>
                            <NavLink
                                active={active === '1'}
                                onClick={() => {
                                    setTab('1')
                                }}
                            >
                                Shaxsiy ma’lumotlar
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink
                                active={active === '2'}
                                onClick={() => {
                                    setTab('2')
                                }}
                            >
                                Hisob raqami
                            </NavLink>
                        </NavItem>
                    </Nav>
                    <TabContent className='py-50' activeTab={active}>
                        <TabPane tabId='1'>
                            <div className="border rounded my-2 p-2 bg-white">
                                <Row xl={2}>
                                    <Col className='d-flex aligin-items-center justify-content-between gap-1 pb-1'>
                                        <span className="h5 w-50 border-end border-2 ">Reyisterdagi ro'yxat raqami:</span>
                                        <span className='w-50'>1458321</span>
                                    </Col>
                                    <Col className='d-flex aligin-items-center justify-content-between gap-1 pb-1'>
                                        <span className="h5 w-50 border-end border-2 ">Davlat ro'yxatdan o'tgan sanasi:</span>
                                        <span className='w-50'>30.09.2021</span>
                                    </Col>
                                    <Col className='d-flex aligin-items-center justify-content-between gap-1 pb-1'>
                                        <span className="h5 w-50 border-end border-2 ">THSHT:</span>
                                        <span className='w-50'>YaTT</span>
                                    </Col>
                                    <Col className='d-flex aligin-items-center justify-content-between gap-1 pb-1'>
                                        <span className="h5 w-50 border-end border-2 ">F.I.SH:</span>
                                        <span className='w-50'>IBROHIM ATAJANOV ISMOILOVICH</span>
                                    </Col>
                                    <Col className='d-flex aligin-items-center justify-content-between gap-1 pb-1'>
                                        <span className="h5 w-50 border-end border-2 ">JSHSHiR:</span>
                                        <span className='w-50'>58745896589654</span>
                                    </Col>
                                    <Col className='d-flex aligin-items-center justify-content-between gap-1 pb-1'>
                                        <span className="h5 w-50 border-end border-2 ">Faolyat yuritish sanasi:</span>
                                        <span className='w-50'>23.09.2021</span>
                                    </Col>
                                    <Col className='d-flex aligin-items-center justify-content-between gap-1 pb-1'>
                                        <span className="h5 w-50 border-end border-2 ">Faolyat turi:</span>
                                        <span className='w-50'>Chakana savdo</span>
                                    </Col>
                                    <Col className='d-flex aligin-items-center justify-content-between gap-1 pb-1'>
                                        <span className="h5 w-50 border-end border-2 ">Qo'shimcha faolyat turi:</span>
                                        <span className='w-50'>Mavjud emas</span>
                                    </Col>
                                    <Col className='d-flex aligin-items-center justify-content-between gap-1 pb-1'>
                                        <span className="h5 w-50 border-end border-2 ">Faoliyat joyi:</span>
                                        <span className='w-50'>Toshkent shahar, Mirobod tumani Mirzo ko‘chasi 16-uy. emas</span>
                                    </Col>
                                    <Col className='d-flex aligin-items-center justify-content-between gap-1 pb-1'>
                                        <span className="h5 w-50 border-end border-2 ">Amaldagi status:</span>
                                        <span className='w-50'>Faoliyat ko’rsatayotgan</span>
                                    </Col>
                                </Row>
                            </div>
                            <div className="d-flex items-center justify-content-end gap-1">
                                <Button color='danger' type="button" onClick={() => alert("Ariza tugatildi")}>Ariza jarayonini to’xtatish (qayta tiklash)</Button>
                                <Button color="primary" type="button" onClick={() => alert("Ariza Yuklanmoqda")}>Arizani yakunlash</Button>
                            </div>
                        </TabPane>
                        <TabPane tabId='2'>
                            <ErrorProgress />
                            <div className="d-flex items-center justify-content-end">
                                <Button color="warning" onClick={toggleSMS}>Maxsus xabar yuborish</Button>
                            </div>
                            <SendSMS open={modal} toggle={toggleSMS} />
                        </TabPane>
                    </TabContent>
                </ModalBody>
            </Modal>
        </>
    )
}

export default PaymentModal