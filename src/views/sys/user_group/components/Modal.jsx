// import { useState } from "react"
import { Modal, ModalBody, ModalHeader, Col, Row, Label, Input, Button, Form, InputGroup } from "reactstrap"
// import ErrorProgress from "components/ErrorProgress"

export default ({ open, toggle }) => {
    return (
        <>
            <Modal isOpen={open} toggle={toggle} className='modal-dialog-centered modal-lg'>
                <ModalHeader className='bg-transparent' toggle={toggle}></ModalHeader>
                <ModalBody>
                    <Row xl={2} className="border rounded m-1 p-1">
                        <Col className='d-flex aligin-items-center justify-content-between gap-1 pb-1'>
                            <span className="h5 w-50 border-end border-2 ">Ismingiz:</span>
                            <span className='w-50'>Ogabek Yuldoshev</span>
                        </Col>
                        <Col className='d-flex aligin-items-center justify-content-between gap-1 pb-1'>
                            <span className="h5 w-50 border-end border-2 ">JSH SHIR:</span>
                            <span className='w-50'>45345345345543</span>
                        </Col>
                        <Col className='d-flex aligin-items-center justify-content-between gap-1 pb-1'>
                            <span className="h5 w-50 border-end border-2 ">Telefon raqami:</span>
                            <span className='w-50'>+998945360773</span>
                        </Col>
                        <Col className='d-flex aligin-items-center justify-content-between gap-1 pb-1'>
                            <span className="h5 w-50 border-end border-2 ">Elektron pochta:</span>
                            <span className='w-50'>Ogabek@g.com</span>
                        </Col>
                        <Col className='d-flex aligin-items-center justify-content-between gap-1 pb-1'>
                            <span className="h5 w-50 border-end border-2 ">Manzil turi:</span>
                            <span className='w-50'>Ijara</span>
                        </Col>
                        <Col className='d-flex aligin-items-center justify-content-between gap-1 pb-1'>
                            <span className="h5 w-50 border-end border-2 ">Manzil:</span>
                            <span className='w-50'>Samarqand</span>
                        </Col>
                        <Col className='d-flex aligin-items-center justify-content-between gap-1 pb-1'>
                            <span className="h5 w-50 border-end border-2 ">Soliq turi:</span>
                            <span className='w-50'>unknown</span>
                        </Col>
                        <Col className='d-flex aligin-items-center justify-content-between gap-1 pb-1'>
                            <span className="h5 w-50 border-end border-2 ">Muddat:</span>
                            <span className='w-50'>12.12.2021</span>
                        </Col>
                    </Row>
                </ModalBody>
            </Modal>
        </>
    )
}
