// import { useState } from "react"
import { Modal, ModalBody, ModalHeader, Row, Col, Input, Button, Label, ListGroup, ListGroupItem } from "reactstrap"
import ErrorProgress from "components/ErrorProgress"
import ReactSelect from "react-select"

export default ({ open, toggle }) => {
    return (
        <>
            <Modal isOpen={open} toggle={toggle} className='modal-dialog-centered modal-lg'>
                <ModalHeader className='bg-transparent' toggle={toggle}></ModalHeader>
                <ModalBody>
                <Row xl={2}>
                        <Col xl={12} className="mb-1">
                            <Label>
                                OPF
                            </Label>
                            <ReactSelect placeholder="Nomini kiriting..." />
                        </Col>
                        <Col xl={12} className="mb-1">
                            <Label>
                             activityTypeGroups
                            </Label>
                            <ReactSelect placeholder="Nomini kiriting..." />
                        </Col>
                        <Col className="mb-1">
                            <Label>
                              Док. Решения хокима выделение земли
                            </Label>
                            <ReactSelect placeholder="Nomini kiriting..." />
                        </Col>
                        <Col className="mb-1">
                            <Label>
                              Оила азолари сони(Енг кам)
                            </Label>
                            <Input />
                        </Col>
                    </Row>
                      <div className="d-flex justify-content-end mb-1">
                         <Button className="me-2 border" color="danger" outline>Bekor qilish</Button>
                         <Button className="btn-success border">Saqlash</Button>
                     </div>
                </ModalBody>
            </Modal>
        </>
    )
}
