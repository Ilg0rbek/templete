
import { Modal, ModalBody, ModalHeader, Label, Row, Col, Input, Form, Button } from "reactstrap"
import ReactSelect from "react-select"

const options = {
    type: [
        {
            label: 'Muddati o’tgan ariza',
            value: '1'
        },
        {
            label: 'Asossiz rad etildi',
            value: '2'
        },
        {
            label: 'Boshqa tartib buzilishi aniqlandi',
            value: '3'
        }
    ],
    organization: [
        {
            label: 'Soliq',
            value: '1'
        },
        {
            label: 'Bank',
            value: '2'
        }
    ]
}

const SendSMSModal = ({ open, toggle }) => {
    return (
        <>
            <Modal isOpen={open} toggle={toggle} className='modal-dialog-centered modal-lg'>
                <ModalHeader className='bg-transparent' toggle={toggle}></ModalHeader>
                <ModalBody>
                    <h4 className="mb-2">Maxsus xabar yuborish</h4>
                    <Form>
                        <Row xl={2} className="mb-2">
                            <Col>
                                <Label>Maxsus xabar turi</Label>
                                <ReactSelect name="type" options={options?.type} placeholder="Xabar turini tanlang" />
                            </Col>
                            <Col>
                                <Label>Tartib buzgan idora</Label>
                                <ReactSelect name="organization" options={options?.organization} placeholder="Idorani tanlang" />
                            </Col>
                        </Row>
                        <div className="mb-2">
                            <Label>Maxsus xabarga tavsif</Label>
                            <Input name="message" type="textarea" placeholder="Maxsus xabar" />
                        </div>
                        <div className="mb-2">
                            <Label>Ro’yxatdan o’tgan hudud</Label>
                            <Row xl={2}>
                                <Col>
                                    <ReactSelect name="region" placeholder="Viloyat" />
                                </Col>
                                <Col>
                                    <ReactSelect name="district" placeholder="Tuman" />
                                </Col>
                            </Row>
                        </div>
                        <div className="d-flex items-center justify-content-end gap-1">
                            <Button color='primary' outline type="button" onClick={toggle} >Bekor qilish</Button>
                            <Button color="success" type="button" onClick={() => alert("Xabar Yuborildi")}>Yuborish</Button>
                        </div>
                    </Form>
                </ModalBody>
            </Modal>
        </>
    )
}

export default SendSMSModal