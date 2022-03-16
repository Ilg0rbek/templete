import { useState } from 'react'
import { TabContent, TabPane, Nav, NavItem, Card, CardBody, Row, Col, Button } from 'reactstrap'
import { useParams } from "react-router-dom"
import { Printer, Download } from "react-feather"

const ApplicationView = () => {
    const [active, setActive] = useState('1')
    const params = useParams()
    // const location = useParams(s)


    const toggle = tab => {
        if (active !== tab) {
            setActive(tab)
        }
    }
    return (
        <>
            <div className="d-flex justify-content-between">
                <h3 className="mb-1">Ariza #{params.id}</h3>
                <Nav tabs className='gap-2'>
                    <NavItem>
                        <Button
                            outline={active !== '1'}
                            color='primary'
                            active={active === '1'}
                            onClick={() => {
                                toggle('1')
                            }}
                        >
                            Shaxsiy Ma'lumotlar
                        </Button>
                    </NavItem>
                    <NavItem>
                        <Button
                            outline={active !== '2'}
                            color='primary'
                            active={active === '2'}
                            onClick={() => {
                                toggle('2')
                            }}
                        >
                            Guvohnoma
                        </Button>
                    </NavItem>
                    <NavItem>
                        <Button
                            outline={active !== '3'}
                            color='primary'
                            active={active === '3'}
                            onClick={() => {
                                toggle('3')
                            }}
                        >
                            Hisob Raqam
                        </Button>
                    </NavItem>
                </Nav>
            </div>
            <Card>
                <CardBody>
                    <TabContent className='py-50' activeTab={active}>
                        <TabPane tabId='1'>
                            <Information />
                        </TabPane>
                        <TabPane tabId='2'>
                            <Certificate />
                        </TabPane>
                        <TabPane tabId='3'>
                            <Account />
                        </TabPane>
                    </TabContent>
                </CardBody>
            </Card>
        </>
    )
}

const dataFake = [
    {
        name: 'Kim tomonidan kiritilgan',
        option: '00 - Islombek Atajanov ibragimovich'
    },
    {
        name: 'Ro\'yhatdan o\'tish boshlangan sana va vaqt',
        option: '17.11.2021 07:31:04'
    },
    {
        name: 'Invoys yaratilgan sana va vaqt',
        option: '17.11.2021 07:31:04'
    },
    {
        name: 'Ro\'yhatdan o\'tish tugatilgan sana va vaqt',
        option: '17.11.2021 07:31:04'
    },
    {
        name: 'FIO',
        option: 'Atajanov Islombek Ibragimovich'
    },
    {
        name: 'JSH SHIR',
        option: '0000000000000000'
    },
    {
        name: 'Faoliyat turi',
        option: 'Dehqon bozorlarida qishloq xoʻjaligi mahsulotlari bilan chakana savdo qilish'
    },
    {
        name: 'Manzil turi',
        option: 'Xususiy ko‘chmas mulk'
    },
    {
        name: 'Soliq turi',
        option: 'Qat’iy belgilangan soliq turi'
    },
    {
        name: 'Muddat',
        option: '30.02.2021'
    },
    {
        name: 'Telefon raqami',
        option: '+998 94 536 07 73'
    },
    {
        name: 'Elektron pochta',
        option: 'yuldashoff1@gmail.com'
    }
]

const Information = () => {
    return (
        <div className='px-5 py-2'>
            <h3 className='text-center mb-3'>Online ro‘yxatdan o’tilgan</h3>
            <Row xl={1}>
                {
                    Array.isArray(dataFake) && dataFake.map((d, i) => (
                        <Col key={i} className='d-flex aligin-items-center justify-content-between gap-1 pb-1'>
                            <span className="h5 w-50 border-end border-2 ">{d.name}:</span>
                            <span className='w-50'>{d.option}</span>
                        </Col>
                    ))
                }
            </Row>
        </div>
    )
}

const Certificate = () => {
    return (
        <div className='px-5 py-2'>
            <div className='d-flex justify-content-end mb-3 gap-1'>
                <Download role="button" />
                <Printer role="button" />
            </div>
            <h1>Guvohnoma</h1>
        </div>
    )
}

const Account = () => {
    return (
        <div className='px-5 py-2'>
            <div className='d-flex justify-content-end mb-3 gap-1'>
                <Download role="button" />
                <Printer role="button" />
            </div>
            <h1>Hisobraqam</h1>
        </div>
    )
}

export default ApplicationView