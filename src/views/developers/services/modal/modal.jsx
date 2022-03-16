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
                        <Col className="mb-1">
                            <Label>
                            Service ID
                            </Label>
                            <Input  />
                        </Col>
                        <Col className="mb-1">
                            <Label>
                            OPF
                            </Label>
                            <ReactSelect placeholder="Nomini kiriting..." />
                        </Col>
                        <Col className="mb-1">
                            <Label>
                            okedGroup
                            </Label>
                            <ReactSelect placeholder="Nomini kiriting..." />
                        </Col>
                        <Col className="mb-1">
                            <Label>
                            soatoGroup
                            </Label>
                            <ReactSelect placeholder="Nomini kiriting..." />
                        </Col>
                        <Col className="mb-1">
                            <Label>
                            Регистрация через:
                            </Label>
                            <ReactSelect placeholder="Nomini kiriting..." />
                        </Col>
                        <Col className="mb-1">
                        <Label>
                           Юридическо лице    
                        </Label>
                          <ReactSelect placeholder="Nomini kiriting..." />
                        </Col>
                        <Col className="mb-1">
                          <Input  type="checkbox"/>
                           <Label className="ms-1">
                             Безплатна регистрацияе    
                           </Label>
                        </Col>
                        <Col className="mb-1">
                          <Input  type="checkbox"/>
                          <Label className="ms-1">
                            Иностранный капитал более 15%
                          </Label>
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
