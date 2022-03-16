import { Row, Col, Form, Input, Label, Button, CardBody, Card, InputGroup } from "reactstrap"
import { useFormik } from "formik"
import InputMask from "react-input-mask"
import Select from "react-select"
import { rmSpace } from "@utils"
import InputPassport from "@cp/InputPassport"
import { createPerson } from "@store/reducers/Legal_Cancel"
import { getByPassport, getIndividualDocTypes, getCountryList } from "@store/reducers/System"
import { useDispatch, useSelector } from "react-redux"
import { useEffect, useMemo } from "react"
import * as yup from 'yup'
import { unwrapResult } from "@reduxjs/toolkit"

const ValidateSchema = yup.object().shape({
    document_type_id: yup.string().required(),
    pin: yup.string().required(),
    country: yup.string(),
    passport_serial: yup.string().required(),
    passport_number: yup.string().required(),
    email: yup.string().required(),
    phone: yup.string().required()
})

const Person = ({ query, nextStep, previousStep }) => {
    const dispatch = useDispatch()
    const store = useSelector(state => state.sys)
    const initialValues = {
        document_type_id: "",
        pin: "",
        country: "",
        passport_serial: "",
        passport_number: "",
        email: "",
        phone: ""
    }
    const formik = useFormik({
        initialValues,
        validationSchema: ValidateSchema,
        onSubmit: values => {
            dispatch(createPerson({ id: query?.id, data: values })).then(unwrapResult).then(() => nextStep())
        }
    })

    useEffect(() => {
        dispatch(getIndividualDocTypes())
        dispatch(getCountryList())
    }, [])
    console.log(store)
    useMemo(() => {
        if (store.passport_data) {
            formik.setFieldValue('pin', store.passport_data?.pinfl)
        }
    }, [store.passport_data])

    const passport = (formik.values.passport_serial)?.toUpperCase() + rmSpace(formik.values.passport_number)
    const options = store.inDocTypesList?.filter(option => { return option.id !== 2 })
    const handleSearch = () => {
        dispatch(getByPassport({ passport, pinfl: 0 }))
    }

    return (
        <>
            <Card>
                <CardBody>
                    <h3 className="mb-2">Tugatuvchi vakolatiga ega shaxs ma'lumotlari</h3>
                    <Form onSubmit={formik.handleSubmit} className="my-2">
                        <Row sm={2} xs={1} className="my-1">
                            <Col className='mb-1'>
                                <Label>Hujjat turi</Label>
                                <Select
                                    onChange={(option) => formik.setFieldValue('document_type_id', option.id)}
                                    onBlur={formik.handleBlur}
                                    placeholder='Hujjat turini tanlang...'
                                    options={options}
                                    getOptionLabel={(option) => option.name}
                                    getOptionValue={(option) => option.id}
                                    name="document_type_id"
                                    className='react-select'
                                    classNamePrefix='select'
                                />
                            </Col>
                            <Col className='mb-1'>
                                <Label>Passport seryasi va raqami</Label>
                                <InputPassport
                                    values={formik.values}
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur} onSearch={handleSearch} />
                            </Col>
                            {
                                formik.values.document_type_id === 5 && (
                                    <Col className='mb-1'>
                                        <Label>Davlat</Label>
                                        <Select
                                            onChange={(option) => formik.setFieldValue('country', option.id)}
                                            onBlur={formik.handleBlur}
                                            placeholder='Davlatni tanlang...'
                                            options={store.countrys}
                                            getOptionLabel={(option) => option?.fullName}
                                            getOptionValue={(option) => option?.fullName}
                                            name="country"
                                            className='react-select'
                                            classNamePrefix='select'
                                        />
                                    </Col>
                                )
                            }
                            <Col className='mb-1'>
                                <Label>F.I.O.</Label>
                                <Input
                                    disabled={store.isLoading}
                                    type='text'
                                    defaultValue={(store.passport_data?.firstname && `${store.passport_data?.lastname} ${store.passport_data?.firstname} ${store.passport_data?.middlename}`)}
                                    name='fullname'
                                    placeholder='F.I.O kiriting...' />
                            </Col>

                            <Col className='mb-1'>

                                <Label>PINFL (JSHSHIR)</Label>
                                <Input
                                    disabled={store.isLoading}
                                    onBlur={formik.handleBlur}
                                    value={formik.values.pin}
                                    onChange={(val) => formik.setFieldValue('pin', rmSpace(val?.target?.value))}
                                    name="pin"
                                    placeholder='00 0000 0000 0000'
                                    type="text"
                                    mask="99 9999 9999 9999"
                                    maskChar=" "
                                    tag={InputMask} />
                            </Col>
                            <Col className='mb-1'>
                                <Label>Telefon</Label>
                                <Input
                                    onChange={(val) => formik.setFieldValue('phone', rmSpace(val?.target?.value))}
                                    onBlur={formik.handleBlur}
                                    type="tel"
                                    name="phone"
                                    placeholder='998 00 000 00 00'
                                    mask="\9\98 99 999 99 99"
                                    maskChar=" "
                                    tag={InputMask} />
                            </Col>
                            <Col className='mb-1'>
                                <Label>Email</Label>
                                <Input
                                    type='email'
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    name='email'
                                    placeholder='example@example.com' />
                            </Col>
                        </Row>
                        <div className="d-flex justify-content-end gap-1">
                            <Button type="button" onClick={() => previousStep()} outline>Bekor qilish</Button>
                            <Button color="primary" type="submit" disabled={!(formik.isValid && formik.dirty)}>Keyingi</Button>
                        </div>
                    </Form>
                </CardBody>
            </Card>
        </>
    )
}

export default Person