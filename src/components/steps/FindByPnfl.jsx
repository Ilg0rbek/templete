import { useState } from 'react'
import { Row, Col, Button, Label, InputGroup, Input } from 'reactstrap'
import InputMask from "react-input-mask"
import { Search } from "react-feather"

const individual = [
    {
        name: 'Kim tomonidan kiritilgan',
        value: "00 - Islombek Atajanov ibragimovich"
    },
    {
        name: 'FIO',
        value: "Atajanov Islombek Ibragimovich"
    },
    {
        name: 'JSH SHIR',
        value: "0000000000000000"
    },
    {
        name: "Ro'yhatdan o'tish boshlangan sana va vaqt",
        value: "17.11.2021 / 07:31:04"
    },
    {
        name: "Ro'yhatdan o'tish tugatilgan sana va vaqt",
        value: "17.11.2021 / 07:41:57"
    },
    {
        name: 'Soliqdan hulosa kelgan sana va vaqti',
        value: "25.11.2021 / 07:41:57"
    },
    {
        name: 'Bankdan hulosa kelgan sana va vaqt',
        value: "25.11.2021 / 07:41:57"
    }
]

const legal = [
    {
        name: 'Firma nomi',
        value: "Qatortol MCHJ"
    },
    {
        name: 'Reesrtdagi ro`yxatdan o`tilgan raqami',
        value: 1
    },
    {
        name: "Ro'yxatdan o'tgan sanasi",
        value: "01.02.1992"
    },
    {
        name: 'STIR',
        value: "200838407"
    },
    {
        name: 'Asosiy IFUT kodi',
        value: 84112
    },
    {
        name: 'OKPO kodi',
        value: 17126455
    },
    {
        name: 'Tashkiliy-huquqiy shakli (THSHT)',
        value: "270. Davlat muassasasi"
    },
    {
        name: 'Mulkchilik shakli (MSHT)',
        value: "223. Tumаn hokimiyatlаri mulki"
    },
    {
        name: 'Korxona holati',
        value: "Faoliyat korsatayorgan"
    },
    {
        name: 'Yuridik shaxs manzili',
        value: "Toshkent shahri, Yashnobod tumani, FARG'ONA YO'LI KO'CHASI, 28-UY,"
    }
]


const Find = ({ type, stepper }) => {
    const [show, setShow] = useState(false)
    return (
        <>
            <h1 className="mb-2">{type === 'legal' ? "Yuridik" : "Jismoniy"} shaxs ma’lumot o’zgartirish</h1>
            <div className="border rounded mb-2 p-2 shadow">
                <Label>{type === 'legal' ? "Stir" : "JSHSHIRni"} bilan izlash</Label>
                <InputGroup>
                    <Button color='primary' outline>
                        <Search size={12} />
                    </Button>
                    {
                        type === 'legal' ? (
                            <Input
                                placeholder='000 000 000'
                                type="text"
                                mask="999 999 999"
                                maskChar=" "
                                tag={InputMask} />
                        ) : (
                            <Input
                                placeholder='00 0000 0000 0000'
                                type="text"
                                mask="99 9999 9999 9999"
                                maskChar=" "
                                tag={InputMask} />
                        )
                    }
                    <Button onClick={() => setShow(true)} color='primary' outline>
                        Qidirish
                    </Button>
                </InputGroup>
            </div>
            {
                show && (
                    <div className="border rounded mb-2 p-2 shadow">

                        <Row xl={2} className="mb-1">
                            {
                                (type === 'legal' ? legal : individual).map((cd, ind) => (
                                    <Col key={ind} className='d-flex aligin-items-center gap-1 p-1 border'>
                                        <span className="h5">{cd.name}:</span>
                                        <b>{cd.value}</b>
                                    </Col>
                                ))
                            }
                        </Row>
                        <div className="d-flex items-center justify-content-end">
                            <Button onClick={() => stepper.next()} color='primary' className='text-center' >O'zgartirish</Button>
                        </div>
                    </div>
                )
            }
        </>
    )
}

export default Find
