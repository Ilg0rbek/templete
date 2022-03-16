import React from "react"
import { Input, Row, Col, Modal, ModalBody, ModalHeader, Label, Button } from "reactstrap"
import InputDate from 'react-flatpickr'
export default ({ openModal, setOpenModal, toggle }) => {
    return (
        <Modal isOpen={openModal} toggle={toggle} className='modal-dialog-centered modal-lg'>
            <ModalHeader className='bg-transparent' toggle={toggle} />
            <ModalBody>
                <Row xl={2}>
                    <Col xl="4">
                        <Label className={"mt-1"}>Ismi</Label>
                        <Input placeholder="Kiriting..." />
                    </Col>
                    <Col xl="4">
                        <Label className={"mt-1"}>Familyasi</Label>
                        <Input placeholder="Kiriting..." />
                    </Col>
                    <Col xl="4">
                        <Label className={"mt-1"}>Otasining ismi</Label>
                        <Input placeholder="Kiriting..." />
                    </Col>
                    <Col>
                        <Label className={"mt-1"}>Tug'ilgan kuni</Label>
                        <InputDate placeholder="Kiriting..." />
                    </Col>
                    <Col>
                        <Label className={"mt-1"}>Tug'ilgan joyi</Label>
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
