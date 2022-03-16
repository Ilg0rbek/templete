// import { useState } from "react"
import { Modal, ModalBody, ModalHeader } from "reactstrap"
import ErrorProgress from "components/ErrorProgress"

export default ({ open, toggle }) => {
    return (
        <>
            <Modal isOpen={open} toggle={toggle} className='modal-dialog-centered modal-lg'>
                <ModalHeader className='bg-transparent' toggle={toggle}></ModalHeader>
                <ModalBody>
                    <ErrorProgress />
                </ModalBody>
            </Modal>
        </>
    )
}