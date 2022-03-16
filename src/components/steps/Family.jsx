// ** React Imports
import { Fragment, useState } from 'react'
import { ArrowLeft, Plus, ArrowRight, X, Delete } from 'react-feather'
import Select from 'react-select'
import { selectThemeColors, isObjEmpty } from '@utils'
import { addFamily } from "@store/reducers/Register"
import { useDispatch, useSelector } from 'react-redux'
import { useForm } from "react-hook-form"
import { yupResolver } from '@hookform/resolvers/yup'
// ** Reactstrap Imports
import { Button, Form, Input, Row, Label, Modal, ModalBody, ModalFooter, ModalHeader, Accordion, AccordionItem, AccordionBody, AccordionHeader, Col } from 'reactstrap'
import * as yup from "yup"

const schema = yup.object({
    member: yup.string().required(),
    type: yup.string().required(),
    document_number: yup.string().required(),
    fullname: yup.string().required(),
    INN: yup.string().required(),
    country: yup.string()
}).required()

const members = [
    { value: 'otasi', label: 'Otasi' },
    { value: 'onasi', label: 'Onasi' },
    { value: 'akasi', label: 'Akasi' },
    { value: 'ukasi', label: 'Ukasi' },
    { value: 'opasi', label: 'Opasi' },
    { value: 'singlisi', label: 'Singlisi' }
]

const types = [
    { value: 'passport', label: 'Passport / ID' },
    { value: 'foregin', label: 'Chet el fuqorosi passporti' },
    { value: 'birthday', label: 'Tug\'ilganlik haqida guvohnoma' },
    { value: 'home', label: 'Doimiy yashash joyi guvohnomasi' },
    { value: 'unknown', label: 'Fuqoroligi bo\'lmagan shaxs' }
]

const country = [
    { value: 'ru', label: 'Russia' },
    { value: 'us', label: 'USA' },
    { value: 'uz', label: 'Uzbekistan' }

]


const Family = ({ nextStep, previousStep }) => {
    const [modal, setModal] = useState(false)
    const [selectedMem, setMem] = useState(null)
    const [selectedType, setType] = useState(null)
    const dispatch = useDispatch()
    const { handleSubmit, formState: { errors }, setValue } = useForm({
        defaultValues: {
            member: '',
            type: '',
            document_number: '',
            fullname: '',
            INN: '',
            country: ''
        },
        resolver: yupResolver(schema)
    })

    const handleModal = () => {
        setModal(!modal)
        setMem(null)
        setType(null)
    }

    const onSubmit = (data) => {
        if (isObjEmpty(errors)) {
            dispatch(addFamily(data))
            handleModal()
        }
    }

    return (
        <Fragment>
            <div className=''>
                <div className='w-100 d-flex align-items-center justify-content-between'>
                    <h3>Oila a'zolarini qo'shish!</h3>
                    <Button.Ripple className='btn-icon' outline color='primary' onClick={handleModal}>
                        <Plus size={16} />
                    </Button.Ripple>
                </div>
                <Modal
                    isOpen={modal}
                    toggle={handleModal}
                    className='modal-dialog-centered modal-lg'>
                    <Form onSubmit={handleSubmit(onSubmit)} className='mb-1'>
                        <ModalHeader className='bg-transparent' toggle={handleModal}></ModalHeader>
                        <ModalBody className='flex-grow-1 pb-sm-0 pb-3'>

                            <h2 className='text-center mb-1'>Oila a'zolarini tanlang</h2>
                            <Select
                                placeholder="A'zolari"
                                className='react-select mb-1'
                                classNamePrefix='select'
                                options={members}
                                theme={selectThemeColors}
                                isDisabled={selectedMem}
                                invalid={errors.member && true}
                                onChange={(e) => { setMem(e.value); setValue('member', e.value) }}
                            />
                            {
                                selectedMem && (
                                    <div className='border p-1 rounded'>
                                        <Select
                                            placeholder="Hujjat turi"
                                            className='react-select mb-1'
                                            classNamePrefix='select'
                                            options={types}
                                            invalid={errors.type && true}
                                            onChange={(e) => { setType(e.value); setValue("type", e.value) }}
                                            theme={selectThemeColors}
                                        />
                                        {
                                            selectedType && (
                                                <div className='d-flex flex-column gap-1'>
                                                    {
                                                        selectedType === 'foregin' && (
                                                            <Select
                                                                placeholder="Davlatni tanlang!"
                                                                className='react-select'
                                                                classNamePrefix='select'
                                                                options={country}
                                                                theme={selectThemeColors}
                                                                onChange={(e) => setValue('country', e.value)}
                                                            />
                                                        )
                                                    }
                                                    <div>
                                                        <Label>{types.find((t) => t.value === selectedType)?.label || "Hujjat seryasi va raqami"}</Label>
                                                        <Input invalid={errors.document_number && true} onChange={(e) => setValue("document_number", e.target.value)} placeholder='Hujjat raqami' />
                                                    </div>
                                                    <div>
                                                        <Label>PINFL (JSHSHIR)</Label>
                                                        <Input invalid={errors.INN && true} onChange={(e) => setValue("INN", e.target.value)} placeholder='ex: 0000 0000 0000 0000' />
                                                    </div>
                                                    <div>
                                                        <Label>F.I.O.</Label>
                                                        <Input invalid={errors.fullname && true} onChange={(e) => setValue("fullname", e.target.value)} placeholder="ex: Juraqulov Zuhruddin Tohir o'g'li" />
                                                    </div>
                                                </div>
                                            )
                                        }
                                    </div>
                                )
                            }
                            <ModalFooter>
                                <Button type='submit' color='primary' >Saqlash</Button>
                                <Button color='primary' outline onClick={handleModal}>Bekor Qilish</Button>
                            </ModalFooter>
                        </ModalBody>
                    </Form>
                </Modal>
            </div >
            <ShowCase />
            <div className='d-flex justify-content-between mt-1'>
                <Button color='secondary' className='btn-prev' onClick={() => previousStep()} outline>
                    <ArrowLeft size={14} className='align-middle me-sm-25 me-0'></ArrowLeft>
                    <span className='align-middle d-sm-inline-block d-none'>Previous</span>
                </Button>
                <Button color='primary' onClick={() => nextStep()} className='btn-next'>
                    <span className='align-middle d-sm-inline-block d-none'>Next</span>
                    <ArrowRight size={14} className='align-middle ms-sm-25 ms-0'></ArrowRight>
                </Button>
            </div>
        </Fragment >
    )
}


const ShowCase = () => {
    const [open, setOpen] = useState('1')
    const family = useSelector(state => state.register?.family)


    const toggle = id => {
        open === id ? setOpen() : setOpen(id)
    }

    return family.length ? (
        <Accordion className='accordion-margin' open={open} toggle={toggle}>
            {
                Array.isArray(family) && family.map((f, index) => (
                    <AccordionItem key={index}>
                        <AccordionHeader targetId={index.toString()}>{f.fullname}</AccordionHeader>
                        <AccordionBody accordionId={index.toString()}>
                            <Row>
                                <Col md="4">
                                    <h6>Oila A'zosi:</h6>
                                    <p className='font-weight-bold'>{f.member}</p>
                                </Col>
                                <Col md="4">
                                    <h6>Hujjat yoki passport Raqami:</h6>
                                    <p className='font-weight-bold'>{f.document_number}</p>
                                </Col>
                                <Col md="4">
                                    <h6>Inn Raqami:</h6>
                                    <p className='font-weight-bold'>{f.INN}</p>
                                </Col>
                            </Row>
                        </AccordionBody>
                    </AccordionItem>
                ))
            }
        </Accordion>
    ) : (
        <h1>Empty</h1>
    )
}


export default Family
