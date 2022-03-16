import { useEffect, useMemo } from "react"
import { useFormik } from "formik"
import { Modal, ModalBody, ModalHeader, Row, Col, Form, Input, Label, Button } from "reactstrap"
import { cancelApplication, completedApplication, changePerson, getSingleApplication, dxmApplication, uploadDocument } from "@store/reducers/Legal_Cancel"
import { useDispatch, useSelector } from "react-redux"
import * as Yup from "yup"
import { useParams, useHistory } from "react-router-dom"
import { unwrapResult } from "@reduxjs/toolkit"
import { rmSpace } from "@utils"
import InputPassport from "@cp/InputPassport"
import { getByPassport, getIndividualDocTypes } from "@store/reducers/System"
import ReactSelect from "react-select"
import InputMask from "react-input-mask"
import moment from "moment"

// Validator schema
const ApplicationCancelSchema = Yup.object({
    text: Yup.string().required()
})
const dxmCompleteSchema = Yup.object({
    director: Yup.string().required(),
    basis: Yup.string().required()
})
const ApplicationCompleteSchema = Yup.object({
    number: Yup.string().required(),
    date: Yup.string().required(),
    basis: Yup.string().required()
})
const ValidateSchema = Yup.object().shape({
    document_type_id: Yup.string().required(),
    pin: Yup.string().required(),
    passport_serial: Yup.string().required(),
    passport_number: Yup.string().required(),
    email: Yup.string().required(),
    phone: Yup.string().required()
})

const ModalComponent = ({ modal, toggle }) => {
    const history = useHistory()
    const dispatch = useDispatch()
    const { id } = useParams()
    const store = useSelector(state => state.sys)
    const initialValues = {
        document_type_id: null,
        pin: null,
        passport_serial: null,
        passport_number: null,
        email: null,
        phone: null
    }
    const formik = useFormik({
        initialValues,
        validationSchema: ValidateSchema,
        onSubmit: values => {
            console.log(values)
            dispatch(changePerson({ id, data: values })).then(unwrapResult).then(() => {
                dispatch(getSingleApplication(id))
                toggle()
            })
        }
    })

    useEffect(() => {
        dispatch(getIndividualDocTypes())
    }, [])
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

    const ApplicationCancel = useFormik({
        initialValues: {
            text: null
        },
        validationSchema: ApplicationCancelSchema,
        onSubmit: (values) => {
            console.log(values)
            dispatch(cancelApplication({ id, data: values })).then(unwrapResult).then(() => history.push('/cancel/legal_jurnal'))
        }
    })

    const ApplicationComplete = useFormik({
        initialValues: {
            number: null,
            date: moment().format("YYYY-MM-DD"),
            basis: null
        },
        validationSchema: ApplicationCompleteSchema,
        onSubmit: (values) => {
            dispatch(completedApplication({ id, data: values })).then(unwrapResult).then(() => history.push('/cancel/legal_jurnal'))
        }
    })

    const dxmComplete = useFormik({
        initialValues: {
            director: '',
            basis: ''
        },
        validationSchema: dxmCompleteSchema,
        onSubmit: (values) => {
            dispatch(dxmApplication({ id, data: values })).then(unwrapResult).then(() => history.push('/cancel/legal_jurnal'))
        }
    })

    console.log(ApplicationComplete)

    const handleClose = () => {
        toggle()
        ApplicationComplete.handleReset()
        ApplicationCancel.handleReset()
        formik.handleReset()
    }

    const handleDxmUpload = (e) => {
        const data = new FormData()
        data.append('file', e.target?.files[0])
        data.append('type', 4)
        dispatch(uploadDocument({ id, data }))
    }

    const handleApplicationCompleteUpload = (e) => {
        const data = new FormData()
        data.append('file', e.target?.files[0])
        data.append('type', 2)
        dispatch(uploadDocument({ id, data }))
    }

    return (
        <>
            <Modal isOpen={modal?.open} toggle={toggle} className='modal-dialog-centered modal-lg'>
                <ModalHeader className='bg-transparent' toggle={toggle}>
                    <h3>{modal.type === 0 ? "Tugatishni bekor qilish sababi" : modal.type === 1 ? "Tugatishni yakunlash sababi" : modal.type === 1 ? "Tugatuvchi vakolatiga ega shaxs ma'lumotlarini o'zgartirish" : "DXM tugatish"}</h3>
                </ModalHeader>
                <ModalBody>
                    {modal.type === 0 ? (
                        <Form onSubmit={ApplicationCancel.handleSubmit}>
                            <Row xs={1}>
                                <Col className="mb-1">
                                    <Label>Sababi</Label>
                                    <Input type="textarea" name="text" onChange={ApplicationCancel.handleChange} onBlur={ApplicationCancel.handleBlur} placeholder="Kiriting..." />
                                </Col>
                                <Col className="d-flex align-items-center justify-content-end gap-1">
                                    <Button type="button" color="primary" outline onClick={handleClose} >Bekor qilish</Button>
                                    <Button type="submit" color="success" disabled={!ApplicationCancel.isValid}>Tugatishni bekor qilish</Button>
                                </Col>
                            </Row>
                        </Form>
                    ) : modal.type === 1 ? (
                        <Form onSubmit={ApplicationComplete.handleSubmit}>
                            <Row xs={1}>
                                <Col className="mb-1">
                                    <Label>Number</Label>
                                    <Input type="number" name="number" onChange={ApplicationComplete.handleChange} onBlur={ApplicationComplete.handleBlur} placeholder="ex: 123" />
                                </Col>
                                <Col className="mb-1">
                                    <Label>Sana</Label>
                                    <Input type="date" disabled={true} value={moment().format("YYYY-MM-DD")} onChange={ApplicationComplete.handleChange} onBlur={ApplicationComplete.handleBlur} name="date" />
                                </Col>
                                <Col className="mb-1">
                                    <Label>Sababi</Label>
                                    <Input type="textarea" onChange={ApplicationComplete.handleChange} onBlur={ApplicationComplete.handleBlur} name="basis" placeholder="Kiriting..." />
                                </Col>
                                <Col className="mb-1">
                                    <Label className='form-label'>
                                        File yuklash
                                    </Label>
                                    <Input
                                        onLoadStart={() => setLoading(true)}
                                        onChange={handleApplicationCompleteUpload}
                                        type="file"
                                        name="file"
                                    />
                                </Col>
                                <Col className="d-flex align-items-center justify-content-end gap-1">
                                    <Button type="button" color="primary" onClick={handleClose} outline>Bekor qilish</Button>
                                    <Button type="submit" color="success" disabled={!ApplicationComplete.isValid}>To'xtatish</Button>
                                </Col>
                            </Row>
                        </Form>
                    ) : modal.type === 2 ? (
                        <Form onSubmit={formik.handleSubmit} className="my-2">
                            <Row sm={2} xs={1} className="my-1">
                                <Col className='mb-1'>
                                    <Label>Hujjat turi</Label>
                                    <ReactSelect
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
                                    <Label>F.I.O.</Label>
                                    <Input
                                        disabled={store.isLoading}
                                        type='text'
                                        defaultValue={(store.passport_data?.firstname && `${store.passport_data?.lastname} ${store.passport_data?.firstname} ${store.passport_data?.middlename}`)}
                                        name='fullname'
                                        placeholder='F.I.O kiriting...' />
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
                                <Button type="button" onClick={handleClose} outline>Bekor qilish</Button>
                                <Button color="primary" type="submit" disabled={!(formik.isValid && formik.dirty)}>O'zgartirish</Button>
                            </div>
                        </Form>
                    ) : modal.type === 3 ? (
                        <Form onSubmit={dxmComplete.handleSubmit}>
                            <Row xs={1}>
                                <Col className="mb-1">
                                    <Label>Direktor Ism va Familyasi</Label>
                                    <Input name="director" onChange={dxmComplete.handleChange} onBlur={dxmComplete.handleBlur} placeholder="Kiriting..." />
                                </Col>
                                <Col className="mb-1">
                                    <Label>Sababi</Label>
                                    <Input type="textarea" onChange={dxmComplete.handleChange} onBlur={dxmComplete.handleBlur} name="basis" placeholder="Kiriting..." />
                                </Col>
                                <Col className="mb-1">
                                    <Label className='form-label'>
                                        File yuklash
                                    </Label>
                                    <Input
                                        onLoadStart={() => setLoading(true)}
                                        onChange={handleDxmUpload}
                                        type="file"
                                        name="file"
                                    />
                                </Col>
                                <Col className="d-flex align-items-center justify-content-end gap-1">
                                    <Button type="button" color="primary" onClick={handleClose} outline>Bekor qilish</Button>
                                    <Button type="submit" color="success" disabled={!(dxmComplete.isValid && dxmComplete.dirty)}>Tugatish</Button>
                                </Col>
                            </Row>
                        </Form>
                    ) : null}
                </ModalBody>
            </Modal>
        </>
    )
}

export default ModalComponent