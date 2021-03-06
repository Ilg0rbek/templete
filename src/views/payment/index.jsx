// ** React Imports
import { useRef, useState } from 'react'
import { InputGroup, Button, Input, Label, Row, Col } from "reactstrap"
import { Search } from "react-feather"
import InputMask from "react-input-mask"

// ** Custom Components
import Wizard from '@components/wizard'

import NewPayment from './components/NewPayment'

const CertificteWizzard = () => {
    const ref = useRef(null)
    const [stepper, setStepper] = useState(null)

    const steps = [
        {
            id: 'info',
            title: "Ma'umotlar",
            content: <InfoPage stepper={stepper} />
        },
        {
            id: 'payment',
            title: "Hisob Raqam Ochish",
            content: <NewPayment stepper={stepper} />
        }
    ]
    return (
        <div className='horizontal-wizard'>
            <h1 className='mb-2'>Hisob raqam ochish</h1>
            <Wizard instance={el => setStepper(el)} ref={ref} steps={steps.filter(n => n)} />
        </div>
    )
}

const InfoPage = ({ stepper }) => {
    return (
        <>
            <div>
                <p>Проверка текста на уникальность онлайн, точная и быстрая проверка покажет процент
                    уникальности статьи для сайта или Яндекс Дзен. Проверка текста на уникальность онлайн,
                    точная и быстрая проверка покажет процент уникальности статьи для сайта или Яндекс
                    Дзен. Проверка текста на уникальность онлайн, точная и быстрая проверка покажет
                    уникальности статьи для сайта или Яндекс Дзен. Проверка текста на уникальность Дзен.

                    Проверка текста на уникальность онлайн, точная и быстрая проверка покажет процент
                    уникальности статьи для сайта или Яндекс Дзен. Проверка текста на уникальность точная
                    и быстрая проверка покажет процент уникальности статьи для сайта или Дзен.

                    Проверка текста на уникальность онлайн, точная и быстрая проверка покажет процент
                    уникальности статьи для сайта или Яндекс Дзен. Проверка текста на уникальность онлайн,
                    точная и быстрая проверка покажет процент уникальности статьи для сайта или Яндекс
                    Дзен.</p>
            </div>
            <div>
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
                    <Button color='primary' outline>
                        Qidirish
                    </Button>
                </InputGroup>
            </div>
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
            <div className="d-flex justify-content-end">
                <Button color='primary' onClick={() => stepper.next()}>Keyingisi</Button>
            </div>
        </>
    )
}

export default CertificteWizzard
