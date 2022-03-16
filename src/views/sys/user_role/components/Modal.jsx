// import { useState } from "react"
import { Modal, ModalBody, ModalHeader, Col, Row, Label, Input, Button, Form } from "reactstrap"
import ReactSelect from "react-select"
import Uploader from "@cp/Uploader"
import ErrorProgress from "components/ErrorProgress"

export default ({ open, toggle, type }) => {
    return (
        <>
            <Modal isOpen={open} toggle={toggle} className='modal-dialog-centered modal-lg'>
                <ModalHeader className='bg-transparent' toggle={toggle}></ModalHeader>
                <ModalBody>
                    {type ? <Fields toggle={toggle} /> : <ErrorProgress />}
                </ModalBody>
            </Modal>
        </>
    )
}

const Fields = ({ toggle }) => {
    return (
        <>
            <Form>
                <Row xl={1} className="gap-1">
                    <Col>
                        <Label>O'zgartirishdan keyin roli</Label>
                        <ReactSelect name="role" placeholder="Tanlang..." />
                    </Col>
                    <Col>
                        <Label>Sababi</Label>
                        <Input name="reason" placeholder="Sabab kiriting..." />
                    </Col>
                    <Col>
                        <Label>Sababi(Faylda)</Label>
                        <Uploader name="file" />
                    </Col>
                </Row>
                <div className="d-flex mt-1 justify-content-end gap-1">
                    <Button onClick={toggle} outline color="danger">Bekor qilish</Button>
                    <Button color="success">Saqlash</Button>
                </div>
            </Form>
        </>
    )
}