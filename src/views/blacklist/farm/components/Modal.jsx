import React from "react"
import { Input, Row, Col, Modal, ModalBody, ModalHeader, Label, Button } from "reactstrap"
import ReactSelect from "react-select"

export default ({ openModal, setOpenModal, toggle }) => {
    return (
        <Modal isOpen={openModal} toggle={toggle} className='modal-dialog-centered modal-lg'>
            <ModalHeader className='bg-transparent' toggle={toggle} />
            <ModalBody>
                <Row xl={1}>
                    <Col>
                        <Label className={"mt-1"}>Turi</Label>
                        <ReactSelect placeholder="Tanlang..." />
                    </Col>
                    <Col>
                        <Label className={"mt-1"}>Nomi</Label>
                        <Input placeholder="Kiriting..." />
                    </Col>
                </Row>
                <div className="d-flex justify-content-end gap-1 mt-2">
                    <Button color="danger" outline onClick={() => setOpenModal(false)}>Bekor qilish</Button>
                    <Button color="success" onClick={() => setOpenModal(false)}>Saqlash</Button>
                </div>
            </ModalBody>
        </Modal>
    )
}
