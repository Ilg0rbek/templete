import React from "react"
import { Modal, ModalBody, ModalHeader, Col, Row, Form, Label, Input, Button } from "reactstrap"
import { useFormik } from "formik"
import { useHistory, useParams } from "react-router-dom"
import * as certificate from "../../../../../redux/reducers/Certificate"
import { useDispatch } from "react-redux"

export default ({ open, toggle }) => {

    const { id } = useParams()
    const dispatch = useDispatch()
    const history = useHistory()

    const formik = useFormik({
        initialValues: {
            id: parseInt(id),
            message: ''
        },
        onSubmit: values => {
            dispatch(certificate.cancelCertificate(values)).then(() => {
                history.push("/dashboard")
            })
        }
    })

    return (
        <Modal isOpen={open} toggle={toggle} className='modal-dialog-centered modal-lg'>
            <ModalHeader className='bg-transparent' toggle={toggle}>Arizani bekor qilish</ModalHeader>
            <ModalBody>
                <Form onSubmit={formik.handleSubmit}>
                    <Label for='opf'>Arizani bekor qilish sababi</Label>
                    <Input
                        name={"message"}
                        type={"textarea"}
                        onChange={formik.handleChange}
                    />
                    <div className="mt-3 d-flex justify-content-between">
                        <Button outline color={"danger"} onClick={toggle}>Bekor qilish</Button>
                        <Button type={"submit"} color={"primary"}>Saqlash</Button>
                    </div>
                </Form>
            </ModalBody>
        </Modal>
    )
}
