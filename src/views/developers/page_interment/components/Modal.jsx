import React from "react"
import {Button, Input, Label, Modal, ModalBody, ModalHeader} from "reactstrap"

export default ({openModal, setOpenModal, toggle}) => {
    return (
        <Modal isOpen={openModal} toggle={toggle} className='modal-dialog-centered modal-lg'>
            <ModalHeader className='bg-transparent' toggle={toggle}/>
            <ModalBody>
                <div className="card-3">
                    <span
                        className="h4 d-flex justify-content-center">mgmt_staticPages.addStaticPage</span>
                    <div className="inputs">
                        <Label htmlFor="question_uz" className={"mt-1"}>mgmt_staticPages.name</Label>
                        <Input
                            id={"question_uz"}
                            type="text"
                        />
                        <Label htmlFor="question_ru" className={"mt-1"}>mgmt_staticPages.tag</Label>
                        <Input
                            id={"question_ru"}
                            type="text"
                        />

                        <Label htmlFor="question_uz" className={"mt-1"}>mgmt_staticPages.body</Label>
                        <Input
                            id={"question_uz"}
                            type="textarea"
                        />
                    </div>
                    <div className="d-flex justify-content-end gap-1 mt-2">
                        <Button color="danger" outline onClick={() => setOpenModal(false)}>Bekor qilish</Button>
                        <Button color="success" onClick={() => setOpenModal(false)}>Saqlash</Button>
                    </div>
                </div>
            </ModalBody>
        </Modal>
    )
}
