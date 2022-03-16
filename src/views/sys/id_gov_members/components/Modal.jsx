// import { useState } from "react"
import { Modal, ModalBody, ModalHeader, Row, Col, Input, Button } from "reactstrap"
import ErrorProgress from "components/ErrorProgress"

export default ({ open, toggle }) => {
    return (
        <>
            <Modal isOpen={open} toggle={toggle} className='modal-dialog-centered modal-lg'>
                <ModalHeader className='bg-transparent' toggle={toggle}></ModalHeader>
                <ModalBody>
                    <Row xl={2} className="border rounded m-1 p-1">
                        <Col className='d-flex aligin-items-center justify-content-between gap-1 pb-1'>
                            <span className="h5 w-50 border-end border-2 ">Ariza turi:</span>
                            <span className='w-50'>UzApi</span>
                        </Col>
                        <Col className='d-flex aligin-items-center justify-content-between gap-1 pb-1'>
                            <span className="h5 w-50 border-end border-2 ">Ariza holati:</span>
                            <span className='w-50'>yuborilgan</span>
                        </Col>
                        <Col className='d-flex aligin-items-center justify-content-between gap-1 pb-1'>
                            <span className="h5 w-50 border-end border-2 ">Sana va vaqt:</span>
                            <span className='w-50'>26.Jan.2022 08:47:05</span>
                        </Col>
                        <Col className='d-flex aligin-items-center justify-content-between gap-1 pb-1'>
                            <span className="h5 w-50 border-end border-2 ">Shu ish joyidan ma'lumotnoma:</span>
                            <span className='w-50'> Ишончнома.PDF</span>
                        </Col>
                        <Col className='d-flex aligin-items-center justify-content-between gap-1 pb-1'>
                            <span className="h5 w-50 border-end border-2 ">Ismingiz:</span>
                            <span className='w-50'>RUZIYEV SOXIBJON</span>
                        </Col>
                        <Col className='d-flex aligin-items-center justify-content-between gap-1 pb-1'>
                            <span className="h5 w-50 border-end border-2 ">Telefon raqami:</span>
                            <span className='w-50'>+998915406969</span>
                        </Col>
                        <Col className='d-flex aligin-items-center justify-content-between gap-1 pb-1'>
                            <span className="h5 w-50 border-end border-2 ">Manzil turi:</span>
                            <span className='w-50'>ТИНЧЛИК МФЙ, ГАГАРИН КЎЧАСИ, uy:34 xonadon:3</span>
                        </Col>
                        <Col className='d-flex aligin-items-center justify-content-between gap-1 pb-1'>
                            <span className="h5 w-50 border-end border-2 ">Elektron pochta:</span>
                            <span className='w-50'>Ogabek@g.com</span>
                        </Col>
                    </Row>
                    <Row xl={2} className="border rounded m-1 p-1 aligin-items-center">
                        <Col xl={9}>
                            <span className="h5 w-50 border-2 mb-2">Tasdiqlamaslik</span>
                            <Input type="textarea" />
                            <Button className="btn btn-success mt-1">Tasdiqlash</Button>
                        </Col>
                        <Col xl={3} className="mt-2">
                            <p>Tasdiqlash</p>
                            <p className="h5 w-50 border-2 ">UzAPI</p>
                            <Button className="btn btn-success">Tasdiqlash</Button>
                        </Col>
                    </Row>
                </ModalBody>
            </Modal>
        </>
    )
}
