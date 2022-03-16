import React, { useState } from 'react'
import { Nav, NavItem, NavLink, Row, Col, Input, Label, Button, Form } from 'reactstrap'
import Select from "react-select"
import InputMask from 'react-input-mask'
import { User, Home, ArrowLeft, ArrowRight } from "react-feather"
import { useFormik } from 'formik'
import { setManager } from "@store/reducers/Register"
import { useDispatch } from 'react-redux'

const colourOptions = [
    { value: 'ocean', label: 'Ocean' },
    { value: 'blue', label: 'Blue' },
    { value: 'purple', label: 'Purple' },
    { value: 'red', label: 'Red' },
    { value: 'orange', label: 'Orange' }
]

const defaultValues = {
    document_type: '',
    document_number: '',
    document_date: '',
    name: '',
    inn: '',
    country: ''
}

const Manager = ({ nextStep, previousStep }) => {
    const [active, setActive] = useState('1')
    const dispatch = useDispatch()

    const formik = useFormik({
        initialValues: defaultValues,
        onSubmit: (values) => {
            dispatch(setManager(values))
            nextStep()
        }
    })

    const toggle = tab => {
        if (active !== tab) {
            formik.handleReset()
            setActive(tab)
        }
    }

    return (
        <>
            <h3>Jamiyat rahbari</h3>
            <div>
                <Nav tabs>
                    <NavItem>
                        <NavLink
                            active={active === '1'}
                            onClick={() => {
                                toggle('1')
                            }}
                        >
                            <User />
                            Jismoniy shaxs
                        </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink
                            active={active === '2'}
                            onClick={() => {
                                toggle('2')
                            }}
                        >
                            <Home />
                            Xorijiy jismoniy shaxs
                        </NavLink>
                    </NavItem>
                </Nav>
                <Form onSubmit={formik.handleSubmit}>
                    <Row xl={2} md={1} >
                        <Col className='mb-1'>
                            <Label>Hujjat turi</Label>
                            <Select
                                name="document_type"
                                onChange={(option) => formik.setFieldValue("document_type", option.value)}
                                options={colourOptions}
                                defaultValue={formik.values.document_type}
                                className='react-select'
                                classNamePrefix='select'
                            />
                            {formik.errors.document_type && formik.touched.document_type && (
                                <span className='text-danger'>{formik.errors.document_type}</span>
                            )}
                        </Col>
                        <Col className='mb-1'>
                            <Label>Hujjat seriyasi va raqami</Label>
                            <Input
                                name="document_number"
                                onChange={formik.handleChange} onBlur={formik.handleBlur}
                                type='text'
                                value={formik.values.document_number}
                                placeholder='Seriya va raqamini kiriting...' />
                            {formik.errors.document_number && formik.touched.document_number && (
                                <span className='text-danger'>{formik.errors.document_number}</span>
                            )}
                        </Col>
                        {
                            active === "2" && (
                                <Col className='mb-1'>
                                    <Label>Passport berilgan sana</Label>
                                    <Input
                                        name="document_date"
                                        type='date'
                                        value={formik.values.document_date}
                                        onChange={formik.handleChange}
                                        onBlur={formik.handleBlur} />
                                    {formik.errors.document_date && formik.touched.document_date && (
                                        <span className='text-danger'>{formik.errors.document_date}</span>
                                    )}
                                </Col>
                            )
                        }
                        <Col className='mb-1'>
                            <Label>F.I.O.</Label>
                            <Input
                                name="name"
                                type='text'
                                placeholder='F.I.O kiriting...'
                                value={formik.values.name}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur} />
                            {formik.errors.name && formik.touched.name && (
                                <span className='text-danger'>{formik.errors.name}</span>
                            )}
                        </Col>
                        {/* <Col className='mb-1'>
                            <Label>Ustav fondi</Label>
                            <Input
                                name="capital_founder"
                                type='text'
                                placeholder='Ustav fondini kiriting...'
                                value={formik.values.capital_founder}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur} />
                            {formik.errors.capital_founder && formik.touched.capital_founder && (
                                <span className='text-danger'>{formik.errors.capital_founder}</span>
                            )}
                        </Col> */}
                        <Col className='mb-1'>
                            <Label>PINFL (JSHSHIR)</Label>
                            <Input
                                name="inn"
                                type="number"
                                placeholder='0000 0000 0000 0000'
                                type="text"
                                mask="9999 9999 9999 9999"
                                maskChar=" "
                                tag={InputMask}
                                value={formik.values.inn}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur} />
                            {formik.errors.inn && formik.touched.inn && (
                                <span className='text-danger'>{formik.errors.inn}</span>
                            )}
                        </Col>
                        {
                            active === "2" && (
                                <Col className='mb-1'>
                                    <Label>Davlat</Label>
                                    <Select
                                        name="country"
                                        onChange={(option) => formik.setFieldValue("country", option.value)}
                                        defaultValue={formik.values.country}
                                        options={colourOptions}
                                        className='react-select'
                                        classNamePrefix='select'
                                    />
                                    {formik.errors.country && formik.touched.country && (
                                        <span className='text-danger'>{formik.errors.country}</span>
                                    )}
                                </Col>
                            )
                        }
                    </Row>
                    <div className='d-flex justify-content-between'>
                        <Button color='secondary' className='btn-prev' onClick={() => previousStep()} outline>
                            <ArrowLeft size={14} className='align-middle me-sm-25 me-0'></ArrowLeft>
                            <span className='align-middle d-sm-inline-block d-none'>Orqaga</span>
                        </Button>
                        <Button type='submit' color='primary' className='btn-next'>
                            <span className='align-middle d-sm-inline-block d-none'>Keyingisi</span>
                            <ArrowRight size={14} className='align-middle ms-sm-25 ms-0'></ArrowRight>
                        </Button>
                    </div>
                </Form>
            </div>
        </>
    )
}

export default Manager
