import { useState } from 'react'
import { Row, Col, Button, Label, InputGroup, Input } from 'reactstrap'
import { Link, useLocation, useParams } from 'react-router-dom'
import InputMask from "react-input-mask"
import { Search } from "react-feather"

const Information = () => {
    const [show, setShow] = useState(false)
    const location = useLocation()
    const params = useParams()
    return (
        <>
            <h1 className="mb-2">{params.type === 'yur' ? "Yuridik" : "Jismoniy"} shaxs ma’lumot o’zgartirish</h1>
            <div className="border rounded mb-2 p-2 bg-white shadow">
                <Label>JSHSHIRni izlash</Label>
                <InputGroup>
                    <Button color='primary' outline>
                        <Search size={12} />
                    </Button>
                    <Input
                        placeholder='00 00 00 00 00 00 0000 0000'
                        type="text"
                        mask="99 99 99 99 99 9999 9999 99"
                        maskChar=" "
                        tag={InputMask} />
                    <Button onClick={() => setShow(true)} color='primary' outline>
                        Qidirish
                    </Button>
                </InputGroup>
            </div>
            {
                show && (
                    <div className="border rounded mb-2 p-2 bg-white shadow">
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
                        <div className="d-flex items-center justify-content-end">
                            <Link to={`${location.pathname}/edit`}>
                                <Button color='primary' className='text-center' >O'zgartirish</Button>
                            </Link>
                        </div>
                    </div>
                )
            }
        </>
    )
}

export default Information
