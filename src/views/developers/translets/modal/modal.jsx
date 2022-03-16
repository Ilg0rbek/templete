// import { useState } from "react"
import { Modal, ModalBody, ModalHeader, Row, Col, Input, Button, Label, ListGroup, ListGroupItem } from "reactstrap"
import ErrorProgress from "components/ErrorProgress"

export default ({ open, toggle }) => {
    return (
        <>
            <Modal isOpen={open} toggle={toggle} className='modal-dialog-centered modal-lg'>
                <ModalHeader className='bg-transparent' toggle={toggle}></ModalHeader>
                <ModalBody>
                <Row xl={2}>
                        <Col className="mb-1">
                            <Label>
                               Teg
                            </Label>
                            <Input placeholder="Tanlang..." />
                        </Col>
                        <Col className="mb-1">
                            <Label>
                                Ruscha
                            </Label>
                            <Input type="text" placeholder="Nomini kiriting..." />
                        </Col>
                        <Col className="mb-1">
                            <Label>
                                O`zbekcha
                            </Label>
                            <Input placeholder="Tanlang..." />
                        </Col>
                        <Col className="mb-1">
                            <Label>
                                Ingilizcha
                            </Label>
                            <Input placeholder="Tanlang..." />
                        </Col>
                        <Col className="my-1">
                        <Label>
                            HTML content    
                        </Label>
                            <Input className="ms-3" type="checkbox"/>
                        </Col>
                    </Row>
                      <div className="d-flex justify-content-end mb-1">
                         <Button onClick={toggle} className="me-2 border" color="danger" outline>Bekor qilish</Button>
                         <Button onClick={toggle} className="btn-success border">Saqlash</Button>
                     </div>
                </ModalBody>
            </Modal>
        </>
    )
}
