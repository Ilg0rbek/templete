// import { useState } from "react"
import { Modal, ModalBody, ModalHeader, Row, Col, Input, Button, Label} from "reactstrap"
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
                        <Col className="mb-1">
                            <Input type="checkbox" />
                            <Label className="ms-1">
                                Aksiyadorlik jamiyati
                            </Label>
                        </Col>
                        <Col className="mb-1">
                            <Input type="checkbox" />
                            <Label className="ms-1">
                               Mas'uliyati cheklangan jamiyat
                            </Label>
                        </Col>
                        <Col className="mb-1">
                            <Input type="checkbox" />
                            <Label className="ms-1">
                               Qo'shimcha mas'uliyatli jamiyat
                            </Label>
                        </Col>
                        <Col className="mb-1">
                            <Input type="checkbox" />
                            <Label className="ms-1">
                                Oilaviy korxona
                            </Label>
                        </Col>
                        <Col className="mb-1">
                            <Input type="checkbox" />
                            <Label className="ms-1">
                               To`liq shirkat
                            </Label>
                        </Col>
                        <Col className="mb-1">
                            <Input type="checkbox" />
                            <Label className="ms-1">
                               Komandit shirkat
                            </Label>
                        </Col>
                        <Col className="mb-1">
                            <Input type="checkbox" />
                            <Label className="ms-1">
                                Unitar korxona
                            </Label>
                        </Col>
                        <Col className="mb-1">
                            <Input type="checkbox" />
                            <Label className="ms-1">
                               Davlat unitar korxonasi
                            </Label>
                        </Col>
                        <Col className="mb-1">
                            <Input type="checkbox" />
                            <Label className="ms-1">
                              Dehqon xo‘jaligi (yuridik shaxs tashkil etgan holda)
                            </Label>
                        </Col>
                        <Col className="mb-1">
                            <Input type="checkbox" />
                            <Label className="ms-1">
                               Fermer xo‘jaligi
                            </Label>
                        </Col>
                        <Col className="mb-1">
                            <Input type="checkbox" />
                            <Label className="ms-1">
                                Xususiy korxona
                            </Label>
                        </Col>
                        <Col className="mb-1">
                            <Input type="checkbox" />
                            <Label className="ms-1">
                               Ishlab chiqarish kooperativi
                            </Label>
                        </Col>
                        <Col className="mb-1">
                            <Input type="checkbox" />
                            <Label className="ms-1">
                                Fuqarolarning o‘zini-o‘zi boshqarish organi
                            </Label>
                        </Col>
                        <Col className="mb-1">
                            <Input type="checkbox" />
                            <Label className="ms-1">
                                Uy-joy mulkdorlarining shirkati
                            </Label>
                        </Col>
                        <Col className="mb-1">
                            <Input type="checkbox" />
                            <Label className="ms-1">
                               Maktabgacha ta'lim muassasasi
                            </Label>
                        </Col>
                        <Col className="mb-1">
                            <Input type="checkbox" />
                            <Label className="ms-1">
                               Nodavlat ta'lim muassasasi
                            </Label>
                        </Col>
                        <Col className="mb-1">
                            <Input type="checkbox" />
                            <Label className="ms-1">
                                 Davlat muassasasi
                            </Label>
                        </Col>
                        <Col className="mb-1">
                            <Input type="checkbox" />
                            <Label className="ms-1">
                                Maktabgacha taʼlim tashkiloti
                            </Label>
                        </Col>
                        <Col className="mb-1">
                            <Input type="checkbox" />
                            <Label className="ms-1">
                                 Davlat korxonasi
                            </Label>
                        </Col>
                        <Col className="mb-1">
                            <Input type="checkbox" />
                            <Label className="ms-1">
                                Advokatlik byurosi
                            </Label>
                        </Col>
                        <Col className="mb-1">
                            <Input type="checkbox" />
                            <Label className="ms-1">
                                Advokatlik firmasi
                            </Label>
                        </Col>
                        <Col className="mb-1">
                            <Input type="checkbox" />
                            <Label className="ms-1">
                               Advokatlar hay'ati
                            </Label>
                        </Col>
                        <Col className="mb-1">
                            <Input type="checkbox" />
                            <Label className="ms-1">
                                Yuridik shaxslarning birlashmasi (uyushma)
                            </Label>
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
