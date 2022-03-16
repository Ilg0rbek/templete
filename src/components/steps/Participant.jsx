import React, { useState } from 'react'
import { Modal, ModalBody, ModalHeader, Row, Col, Input, Label, Button, Form, Table } from 'reactstrap'
import Select from "react-select"
import InputMask from 'react-input-mask'
import { User, Home, ArrowLeft, ArrowRight, Edit, Trash, Users, UserPlus, UserCheck } from "react-feather"
import { Formik } from 'formik'
import { setParticipantInfo } from "@store/reducers/Register"
import { useDispatch, useSelector } from "react-redux"
import FileUploader from '@cp/Uploader'

const dataBtn = [
    {
        name: 'Jismoniy shaxs',
        icon: <User size={50} />,
        value: "jsh"
    },
    {
        name: 'Yuridik shaxs',
        icon: <Users size={50} />,
        value: "ysh"
    },
    {
        name: 'Xorijiy JSh',
        icon: <UserPlus size={50} />,
        value: "xjsh"
    },
    {
        name: 'Xorijiy YSh',
        icon: <UserCheck size={50} />,
        value: "xysh"
    },
    {
        name: 'Davlat muas..',
        icon: <Home size={50} />,
        value: "dm"
    }
]


const colourOptions = [
    { value: 'ocean', label: 'Ocean' },
    { value: 'blue', label: 'Blue' },
    { value: 'purple', label: 'Purple' },
    { value: 'red', label: 'Red' },
    { value: 'orange', label: 'Orange' }
]


const initialValues = {
    document_type: '',
    document_number: '',
    document_date: '',
    name: '',
    capital_founder: '',
    inn: '',
    stir: '',
    company_name: '',
    country: '',
    phone: '',
    email: ''
}

const Participant = ({ nextStep, previousStep }) => {
    const [show, setShow] = useState(false)
    const [selected, setSelected] = useState({ name: null, value: null })
    const participant = useSelector(state => state.register?.participant)
    return (
        <>
            <h3>Ishtirokchi</h3>
            <div className="mb-1">
                <Row xl={5} className='justify-content-center'>
                    {
                        Array.isArray(dataBtn) && dataBtn?.map((btn, index) => (
                            <Col key={index}>
                                <div className='border cursor-pointer p-2 rounded w-auto shadow d-flex flex-column align-items-center justify-content-center' onClick={() => {
                                    setShow(true)
                                    setSelected({ name: btn.name, value: btn.value })
                                }}>
                                    {btn.icon}
                                    <strong>{btn.name}</strong>
                                </div>
                            </Col>
                        ))
                    }
                </Row>
                {participant?.length ? <List data={participant} /> : null}
                <Modal isOpen={show} toggle={() => setShow(!show)} className='modal-dialog-centered modal-lg'>
                    <ModalHeader className='bg-transparent' toggle={() => setShow(!show)}></ModalHeader>
                    <ModalBody className='px-sm-5 mx-50 pb-4'>
                        <h1 className='text-center mb-1'>{selected.name}</h1>
                        <FormCom selected={selected} actionModal={() => setShow(false)} />
                    </ModalBody>
                </Modal>
            </div>
            <div className='d-flex justify-content-between'>
                <Button color='secondary' className='btn-prev' onClick={() => previousStep()} outline>
                    <ArrowLeft size={14} className='align-middle me-sm-25 me-0'></ArrowLeft>
                    <span className='align-middle d-sm-inline-block d-none'>Orqaga</span>
                </Button>
                <Button type='submit' color='primary' onClick={() => nextStep()} className='btn-next'>
                    <span className='align-middle d-sm-inline-block d-none'>Keyingisi</span>
                    <ArrowRight size={14} className='align-middle ms-sm-25 ms-0'></ArrowRight>
                </Button>
            </div>
        </>
    )
}

const List = ({ data }) => {
    return (
        <Table striped responsive className='my-2'>
            <thead>
                <tr>
                    <th>Nomi</th>
                    <th>F.I.O</th>
                    <th>Hujjat Raqami</th>
                    <th>INN raqami</th>
                    <th>Ustaf fondi</th>
                    <th></th>
                </tr>
            </thead>
            <tbody>
                {
                    data?.map((participant, index) => (
                        <tr key={index}>
                            <td>
                                <span className='align-middle fw-bold'>{participant?.type?.name}</span>
                            </td>
                            <td>{participant?.content?.name}</td>
                            <td>
                                {participant?.content?.document_number}
                            </td>
                            <td>
                                {participant?.content?.inn}
                            </td>
                            <td>
                                {participant?.content?.capital_founder}
                            </td>
                            <td>
                                <Edit color="blue" className='me-50' role="button" size={20} />
                                <Trash color='red' className='me-50' role="button" size={20} />
                            </td>
                        </tr>
                    ))
                }
            </tbody>
        </Table>
    )
}

const FormCom = ({ selected, actionModal }) => {

    const dispatch = useDispatch()
    return (
        <Formik
            initialValues={initialValues}
            onSubmit={(values, { setSubmitting }) => {
                dispatch(setParticipantInfo({
                    type: selected,
                    content: values
                }))
                setSubmitting(false)
                actionModal()
            }}
        >
            {({
                errors,
                touched,
                setFieldValue,
                handleChange,
                handleBlur,
                handleSubmit }) => (
                <Form onSubmit={handleSubmit}>
                    <Row xl={2} md={1} >
                        {
                            ['jsh', "xjsh"].includes(selected?.value) && (
                                <>
                                    <Col className='mb-1'>
                                        <Label>Hujjat turi</Label>
                                        <Select
                                            onChange={(option) => setFieldValue('document_type', option.value)}
                                            onBlur={handleBlur}
                                            name="document_type"
                                            className='react-select'
                                            classNamePrefix='select'
                                            options={colourOptions}
                                        />
                                        {errors.document_type && touched.document_type && (
                                            <span className='text-danger'>{errors.document_type}</span>
                                        )}
                                    </Col>
                                    {/* <Col className='mb-1'>
                                        <Label>Hujjat seriyasi va raqami</Label>
                                        <Input
                                            type='text'
                                            name='document_number'
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            placeholder='Seriya va raqamini kiriting...' />
                                        {errors.document_number && touched.document_number && (
                                            <span className='text-danger'>{errors.document_number}</span>
                                        )}
                                    </Col> */}
                                </>
                            )
                        }
                        {
                            ['jsh'].includes(selected?.value) && (
                                <Col className='mb-1'>
                                    <Label>Passport berilgan sana</Label>
                                    <Input
                                        type='date'
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        name='document_date' />
                                    {errors.document_date && touched.document_date && (
                                        <span className='text-danger'>{errors.document_date}</span>
                                    )}
                                </Col>
                            )
                        }
                        {
                            ["jsh", 'xjsh', 'xysh'].includes(selected?.value) && (
                                <>
                                    <Col className='mb-1'>
                                        <Label>F.I.O.</Label>
                                        <Input
                                            type='text'
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            name='name'
                                            placeholder='F.I.O kiriting...' />
                                        {errors.name && touched.name && (
                                            <span className='text-danger'>{errors.name}</span>
                                        )}
                                    </Col>
                                    <Col className='mb-1'>
                                        <Label>Ustav fondi</Label>
                                        <Input
                                            type='text'
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            name="capital_founder"
                                            placeholder='Ustav fondini kiriting...' />
                                        {errors.capital_founder && touched.capital_founder && (
                                            <span className='text-danger'>{errors.capital_founder}</span>
                                        )}
                                    </Col>
                                </>
                            )
                        }
                        {
                            ['jsh', 'xjsh'].includes(selected?.value) && (
                                <Col className='mb-1'>
                                    <Label>PINFL (JSHSHIR)</Label>
                                    <Input
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        name="inn"
                                        placeholder='0000 0000 0000 0000'
                                        type="text"
                                        mask="9999 9999 9999 9999"
                                        maskChar=" "
                                        tag={InputMask} />
                                    {errors.inn && touched.inn && (
                                        <span className='text-danger'>{errors.inn}</span>
                                    )}
                                </Col>
                            )
                        }
                        {
                            ['ysh', 'xysh', 'dm'].includes(selected?.value) && (
                                <>
                                    <Col className='mb-1'>
                                        <Label>STIR</Label>
                                        <Input
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            name="stir"
                                            placeholder='0000 0000 0000 0000'
                                            type="text"
                                            mask="9999 9999 9999 9999"
                                            maskChar=" "
                                            tag={InputMask} />
                                        {errors.stir && touched.stir && (
                                            <span className='text-danger'>{errors.stir}</span>
                                        )}
                                    </Col>
                                    <Col className='mb-1'>
                                        <Label>Korxona nomini</Label>
                                        <Input
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            name="company_name"
                                            placeholder='Korxona nomini kirgizing...'
                                            type="text" />
                                        {errors.company_name && touched.company_name && (
                                            <span className='text-danger'>{errors.company_name}</span>
                                        )}
                                    </Col>
                                </>
                            )
                        }
                        {
                            ["xjsh", "xysh"].includes(selected?.value) && (
                                <Col className='mb-1'>
                                    <Label>Davlat</Label>
                                    <Select
                                        onChange={(option) => setFieldValue('country', option.value)}
                                        onBlur={handleBlur}
                                        options={colourOptions}
                                        name="country"
                                        className='react-select'
                                        classNamePrefix='select'
                                    />
                                    {errors.country && touched.country && (
                                        <span className='text-danger'>{errors.country}</span>
                                    )}
                                </Col>
                            )
                        }
                        {
                            ["xysh"].includes(selected?.value) && (
                                <Col xl={12} className='mb-1'>
                                    <Label>Vakolatlangan shaxsga berilgan ishonchnoma</Label>
                                    <FileUploader />
                                </Col>
                            )
                        }
                        <Col className='mb-1'>
                            <Label>Telefon</Label>
                            <Input
                                onChange={handleChange}
                                onBlur={handleBlur}
                                type="tel"
                                name="phone"
                                placeholder='+998 00 000 00 00'
                                mask="+\9\98 99 999 99 99"
                                maskChar=" "
                                tag={InputMask} />
                            {errors.phone && touched.phone && (
                                <span className='text-danger'>{errors.phone}</span>
                            )}
                        </Col>
                        <Col className='mb-1'>
                            <Label>Email</Label>
                            <Input
                                type='email'
                                onChange={handleChange}
                                onBlur={handleBlur}
                                name='email'
                                placeholder='example@example.com' />
                            {errors.email && touched.email && (
                                <span className='text-danger'>{errors.email}</span>
                            )}
                        </Col>
                    </Row>
                    <div className='d-flex align-items-center justify-content-end gap-1'>
                        <Button color='danger' onClick={actionModal}>Bekor qilish</Button>
                        <Button color='success' type='submit'>Saqlash</Button>
                    </div>
                </Form>
            )}
        </Formik>
    )
}
export default Participant
