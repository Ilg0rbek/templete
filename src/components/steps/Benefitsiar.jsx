import React, { useState } from 'react'
import { TabContent, TabPane, Nav, NavItem, NavLink, Row, Col, Input, Label, Button, Accordion, AccordionBody, AccordionItem, AccordionHeader } from 'reactstrap'
import Select from "react-select"
import InputMask from 'react-input-mask'
import { User, Home, ArrowLeft, ArrowRight, Star } from "react-feather"
import { useFormik } from "formik"

const defaultValues = {
    document_type: '',
    document_number: '',
    document_date: '',
    name: '',
    capital_founder: '',
    inn: '',
    country: '',
    phone: '',
    email: ''
}
const colourOptions = [
    { value: 'ocean', label: 'Ocean' },
    { value: 'blue', label: 'Blue' },
    { value: 'purple', label: 'Purple' },
    { value: 'red', label: 'Red' },
    { value: 'orange', label: 'Orange' }
]

const Benefitsiar = ({ nextStep, previousStep }) => {
    const [active, setActive] = useState('jis')
    const formik = useFormik({
        initialValues: defaultValues,
        onSubmit: (values) => {
            alert(JSON.stringify(values))
        }
    })
    const toggle = tab => {
        if (active !== tab) {
            setActive(tab)
        }
    }
    return (
        <>
            <h3>Benefitsiar</h3>
            <div className='mt-1'>
                <div>
                    <strong>
                        Benefitsiar mulkdor BU:
                    </strong><p>ta’sis etilayotgan yuridik shaxs mol-mulkining haqiqiy egasi yoki ariza beruvchini haqiqatda nazorat qiluvchi yoxud manfaati ko‘zlangan holda pul mablag‘lari yoki boshqa mol-mulk bilan bog‘liq operatsiya amalga oshirilayotgan jismoniy shaxshisoblanadi;</p>
                </div>
                <div>
                    <strong>
                        Yuqori mansabdor shaxs Bu:
                    </strong><p>xorijiy davlatning qonun chiqaruvchi, ijro etuvchi, ma’muriy yoki sud organida yoxud xalqaro tashkilotda doimiy, vaqtincha yoki maxsus vakolat bo‘yicha tayinlanadigan yoki saylanadigan, tashkiliy-boshqaruv vazifalarini bajaradigan va yuridik ahamiyatga ega bo‘lgan harakatlarni sodir etishga vakolat berilgan shaxs.</p>
                </div>
            </div>
            <div className='border p-1 rounded mb-1'>
                <Nav tabs>
                    <NavItem>
                        <NavLink
                            active={active === 'jis'}
                            onClick={() => {
                                toggle('jis')
                            }}
                        >
                            <User />
                            Jismoniy shaxs
                        </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink
                            active={active === 'ysh'}
                            onClick={() => {
                                toggle('ysh')
                            }}
                        >
                            <Home />
                            Xorijiy jismoniy shaxs
                        </NavLink>
                    </NavItem>
                </Nav>
                <TabContent className='py-50' activeTab={active}>
                    <TabPane tabId='jis'>
                        <Form formik={formik} selected={active} />
                    </TabPane>
                    <TabPane tabId='ysh'>
                        <Form formik={formik} selected={active} />
                    </TabPane>
                </TabContent>
            </div>
            <div className='mb-1'>
                <Accardion />
            </div>
            <h3 className='my-2'>Xodim qo'shish</h3>
            <div className='border p-1 rounded mb-1'>
                <Nav tabs>
                    <NavItem>
                        <NavLink
                            active={active === 'jis'}
                            onClick={() => {
                                toggle('jis')
                            }}
                        >
                            <User />
                            Jismoniy shaxs
                        </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink
                            active={active === 'ysh'}
                            onClick={() => {
                                toggle('ysh')
                            }}
                        >
                            <Home />
                            Xorijiy jismoniy shaxs
                        </NavLink>
                    </NavItem>
                </Nav>
                <TabContent className='py-50' activeTab={active}>
                    <TabPane tabId='jis'>
                        <Form formik={formik} selected={active} />
                    </TabPane>
                    <TabPane tabId='ysh'>
                        <Form formik={formik} selected={active} />
                    </TabPane>
                </TabContent>
            </div>
            <div className='d-flex justify-content-between'>
                <Button color='secondary' className='btn-prev' onClick={() => previousStep()} outline>
                    <ArrowLeft size={14} className='align-middle me-sm-25 me-0'></ArrowLeft>
                    <span className='align-middle d-sm-inline-block d-none'>Orqaga</span>
                </Button>
                <Button type='submit' color='primary' className='btn-next' onClick={() => nextStep()}>
                    <span className='align-middle d-sm-inline-block d-none'>Keyingisi</span>
                    <ArrowRight size={14} className='align-middle ms-sm-25 ms-0'></ArrowRight>
                </Button>
            </div>
        </>
    )
}

const Form = () => {
    return (<>
        <Row xl={2} md={1} >
            <Col className='mb-1'>
                <Label>Hujjat turi</Label>
                <Select
                    options={colourOptions}
                    className='react-select'
                    classNamePrefix='select'
                />
            </Col>
            <Col className='mb-1'>
                <Label>Hujjat seriyasi va raqami</Label>
                <Input type='text' placeholder='Seriya va raqamini kiriting...' />
            </Col>
            <Col className='mb-1'>
                <Label>F.I.O.</Label>
                <Input type='text' placeholder='F.I.O kiriting...' />
            </Col>
            <Col className='mb-1'>
                <Label>PINFL (JSHSHIR)</Label>
                <Input type="number" placeholder='0000 0000 0000 0000' type="text" mask="9999 9999 9999 9999"
                    maskChar=" "
                    tag={InputMask} />
            </Col>
        </Row>
    </>
    )
}


const Accardion = () => {
    const [open, setOpen] = useState('')

    const toggle = id => {
        open === id ? setOpen() : setOpen(id)
    }

    const questions = [
        {
            q: 'Yuqori mansabdor shaxs hisoblanasizmi?',
            type: 0
        },
        {
            q: 'Yaqin qarindoshlaringiz orasida yuqori mansabdor shaxs hisoblanadiganlar bormi??',
            type: 0
        },
        {
            q: 'Sizga yaqin shaxslar yoki do‘stlaringiz orasida yuqori mansabdor shaxs hisoblanadiganlar bormi?',
            type: 0
        },
        {
            q: 'Yuqorida qayd etilgan benefsiar mulkdor yuqori mansabdor shaxs hisoblanadimi?',
            type: 0
        },
        {
            q: 'Agar yuqorida keltirilgan savollarning biriga HA deb javob bergan bo‘lsangiz, ushbu javobga qisqacha oydinlik kiriting:',
            type: 1
        },
        {
            q: 'Siz tomondan bank operatsiyalarini uchinchi shaxs manfaatlari uchun amalga oshiriladimi?',
            type: 0
        },
        {
            q: 'Agar oldingi savolga HA deb javob bergan bo‘lsangiz, nomingizga rasmiylashtirilgan ishonchnoma bormi?',
            type: 0
        },
        {
            q: 'Agar oldingi savolga YO‘Q deb javob bergan bo‘lsangiz, ushbu javobga qisqacha oydinlik kiriting:',
            type: 1
        }
    ]

    return (
        <>
            <Accordion className='accordion-margin' open={open} toggle={toggle}>
                <AccordionItem>
                    <AccordionHeader targetId='1'>Savollar?</AccordionHeader>
                    <AccordionBody accordionId='1'>
                        <Row xl={2}>
                            {Array.isArray(questions) && questions?.map((quest, index) => (
                                <Col key={index} className='mt-2'>
                                    <h5>{quest.q}</h5>
                                    {quest.type === 0 ? (
                                        <div className='d-flex gap-3 mt-1'>
                                            <div>
                                                <Input name={`savol_${index}`} id={`yes_${index}`} type='radio' />
                                                <Label for={`yes_${index}`} >
                                                    <span className="h6 m-1">HA</span>
                                                </Label>
                                            </div>
                                            <div>
                                                <Input name={`savol_${index}`} id={`no_${index}`} type='radio' />
                                                <Label for={`no_${index}`} >
                                                    <span className="h6 m-1">Yo'q</span>
                                                </Label>
                                            </div>
                                        </div>
                                    ) : (
                                        <Input className='mt-1' placeholder='Izoh...' />
                                    )}
                                </Col>
                            ))}
                        </Row>
                    </AccordionBody>
                </AccordionItem>
            </Accordion>
        </>
    )
}
export default Benefitsiar
