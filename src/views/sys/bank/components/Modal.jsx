// import { useState } from "react"
import { Modal, ModalBody, ModalHeader, Row, Col, Label, Input, Button, Form } from "reactstrap"
import ReactSelect from "react-select"
import Uploader from "@cp/Uploader"
import { toast } from 'react-toastify'
// import { useDispatch } from 'react-redux'
// import { createAppeal } from "../../store"
import { useFormik } from "formik"

const defaultValues = {
    name: '',
    code: '',
    phone: '',
    inn: '',
    site: '',
    address: '',
    status: '',
    discription: ''
}

const colourOptions = [
    { value: 'ocean', label: 'Ocean' },
    { value: 'blue', label: 'Blue' },
    { value: 'purple', label: 'Purple' },
    { value: 'red', label: 'Red' },
    { value: 'orange', label: 'Orange' }
]

export default ({ open, toggle }) => {
    // const dispatch = useDispatch()

    const formik = useFormik({
        initialValues: defaultValues,
        onSubmit: values => {
            // dispatch(createAppeal(values))
            alert(JSON.stringify(values))
            toggle()
            toast.success("Sizning murojaatingiz yuborildi!", { autoClose: 3000 })
        }
    })

    return (
        <>
            <Modal isOpen={open} toggle={toggle} className='modal-dialog-centered modal-lg'>
                <ModalHeader className='bg-transparent' toggle={toggle}></ModalHeader>
                <ModalBody>
                    <Form onSubmit={formik.handleSubmit}>
                        <Row className="mb-2" xl={2}>
                            <Col className="mb-1" xl={12}>
                                <Label>Bank nomi</Label>
                                <Input
                                    name="name"
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    type="text" required />
                            </Col>
                            <Col className="mb-1" xl={4}>
                                <Label>Manzil</Label>
                                <Input
                                    name="address"
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    type="text" required />
                            </Col>
                            <Col className="mb-1" xl={4}>
                                <Label>Tel raqami</Label>
                                <Input
                                    name="phone"
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    type="text" required />
                            </Col>
                            <Col className="mb-1" xl={4}>
                                <Label>Sayti</Label>
                                <Input
                                    name="site"
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    type="text" required />
                            </Col>
                            <Col className="mb-1" xl={4}>
                                <Label>Bank ID</Label>
                                <Input
                                    name="code"
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    type="text" required />
                            </Col>
                            <Col className="mb-1" xl={4}>
                                <Label>Stir</Label>
                                <Input
                                    name="branch_code"
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    type="text" required />
                            </Col>
                            <Col className="mb-1" xl={4}>
                                <Label>Status</Label>
                                <ReactSelect
                                    onChange={(e) => formik.setFieldValue('status', e.value)}
                                    // onBlur={formik.handleBlur}
                                    name="type"
                                    options={colourOptions}
                                    placeholder="Tanlang" required />
                            </Col>
                            <Col className="mb-1" xl={12}>
                                <Label>Bank Logosi</Label>
                                <Uploader />
                            </Col>
                            <Col className="mb-1" xl={12}>
                                <Label>Izoh</Label>
                                <Input
                                    name="discription"
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    type="textarea" required />
                            </Col>
                        </Row>
                        <div className="d-flex justify-content-end gap-2">
                            <Button outline color='danger' type="button" onClick={toggle}>
                                Bekor qilish
                            </Button>
                            <Button color="success" type="submit">
                                Saqlash
                            </Button>
                        </div>
                    </Form>
                </ModalBody>
            </Modal>
        </>
    )
}