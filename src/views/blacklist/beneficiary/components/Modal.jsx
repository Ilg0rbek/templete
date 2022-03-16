import React from "react"
import { Input, InputGroup, Modal, ModalBody, ModalHeader, Label, Button } from "reactstrap"
import ReactSelect from "react-select"

export default ({ openModal, setOpenModal, toggle }) => {
    return (
        <Modal isOpen={openModal} toggle={toggle} className='modal-dialog-centered modal-lg'>
            <ModalHeader className='bg-transparent' toggle={toggle} />
            <ModalBody>
                <div className="card-3">
                    <span
                        className="h4 d-flex justify-content-center">Yangilik qo'shish</span>
                    <div className="inputs">
                        <Label htmlFor="type-news" className={"mt-1"}>Xabarlar turi</Label>
                        <ReactSelect placeholder="Tanlang..." />

                        <Label htmlFor="about-lang-English" className={"mt-1"}>Ingliz tilidagi sarlavha</Label>
                        <Input
                            id={"about-lang-English"}
                            type="text"
                            maskChar=" "
                        />
                        <Label htmlFor="news-lang-English" className={"mt-1"}>Ingliz tilidagi xabarlar</Label>
                        <Input
                            id={"news-lang-English"}
                            type="textarea"
                            maskChar=" "
                        />

                        <InputGroup className="mt-1">
                            <Label htmlFor="backShow">Bek ofisda bildirish</Label>
                            <Input
                                id={"backShow"}
                                type="checkbox"
                                className={"mx-1"}
                                maskChar=" "
                            />
                        </InputGroup>
                        <InputGroup className="mt-1">
                            <Label htmlFor="frontShow">Front ofisda bildirish</Label>
                            <Input
                                id={"frontShow"}
                                type="checkbox"
                                className={"mx-1"}
                                maskChar=" "
                            />
                        </InputGroup>

                    </div>
                    <div className="d-flex justify-content-end gap-1">
                        <Button color="danger" outline onClick={() => setOpenModal(false)}>Bekor qilish</Button>
                        <Button color="success" onClick={() => setOpenModal(false)}>Saqlash</Button>
                    </div>
                </div>
            </ModalBody>
        </Modal>
    )
}
