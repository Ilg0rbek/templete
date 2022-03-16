import { useFormik } from "formik"
import { Modal, ModalBody, ModalHeader, Row, Col, Form, Input, Label, Button } from "reactstrap"
import { cancelApplication, completedApplication, dxmApplication, uploadDocument } from "@store/reducers/Individual_Cancel"
import { useDispatch } from "react-redux"
import * as Yup from "yup"
import { useParams, useHistory } from "react-router-dom"
import { unwrapResult } from "@reduxjs/toolkit"
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

const ModalComponent = ({ modal, toggle }) => {
    const history = useHistory()
    const dispatch = useDispatch()
    const { id } = useParams()

    const ApplicationCancel = useFormik({
        initialValues: {
            text: null
        },
        validationSchema: ApplicationCancelSchema,
        onSubmit: (values) => {
            console.log(values)
            dispatch(cancelApplication({ id, data: values })).then(unwrapResult).then(() => history.push('/cancel/individual_jurnal'))
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
            dispatch(completedApplication({ id, data: values })).then(unwrapResult).then(() => history.push('/cancel/individual_jurnal'))
        }
    })

    const dxmComplete = useFormik({
        initialValues: {
            director: '',
            basis: ''
        },
        validationSchema: dxmCompleteSchema,
        onSubmit: (values) => {
            dispatch(dxmApplication({ id, data: values })).then(unwrapResult).then(() => history.push('/cancel/individual_jurnal'))
        }
    })

    console.log(ApplicationComplete)

    const handleClose = () => {
        toggle()
        ApplicationComplete.handleReset()
        ApplicationCancel.handleReset()
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
                    <h3>{modal.type === 0 ? "Tugatishni bekor qilish sababi" : modal.type === 1 ? "Tugatishni yakunlash sababi" : "DXM tugatish"}</h3>
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