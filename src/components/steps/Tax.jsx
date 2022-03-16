import { useState } from "react"
import { Button, Input, Label, Row, Col, Accordion, AccordionBody, AccordionHeader, AccordionItem, ListGroup, ListGroupItem } from "reactstrap"
import InputMask from 'react-input-mask'
import { Search, ArrowLeft, ArrowRight } from "react-feather"

const dataFake = [
    {
        id: 1,
        label: 'Ogabek Yuldoshev',
        chaild: [
            {
                id: 1,
                label: 'Birinchi',
                name: 'birinchi'
            }
        ]
    }
]

const Tax = ({ nextStep }) => {
    const [payment, setPayment] = useState(null)
    const [open, setOpen] = useState()

    const toggle = id => {
        open === id ? setOpen() : setOpen(id)
    }
    return (
        <>
            <Label>IFUT kodini kiriting</Label>
            <div className="d-flex align-items-center gap-1">
                <Input type="text" placeholder="Izlash..." />
                <Input className="text-center" style={{ width: '100px' }} placeholder="0 0 0 0" mask="9 9 9 9" maskChar=" " tag={InputMask} />
                <Button color="primary">
                    <Search size={14} />
                </Button>
            </div>
            <div className="my-2">
                <h4 className="mb-2">IFUTni aniqlang va tanlang</h4>
                <Accordion open={open} toggle={toggle} className="accordion-margin">
                    {
                        dataFake?.map((item, index) => (
                            <AccordionItem key={index}>
                                <AccordionHeader targetId={item.id}>{item.label}</AccordionHeader>
                                <AccordionBody accordionId={item.id}>
                                    <ListGroup>
                                        {
                                            item.chaild.map((i, num) => (
                                                <ListGroupItem key={num} className="d-flex justify-content-between gap-2 align-item-center">
                                                    <label htmlFor={i.id}>{num + 1}. {i.label}</label>
                                                    <Input id={i.id} type="checkbox" name={i.name} />
                                                </ListGroupItem>
                                            ))
                                        }
                                    </ListGroup>
                                </AccordionBody>
                            </AccordionItem>
                        ))
                    }
                </Accordion>
            </div>
            <div className='mb-1 mt-1'>
                <Row>
                    <Col>
                        <h5>Soliq turini tanlang!</h5>
                        <Row xl={2} className="align-items-center">
                            <Col >
                                <Button block outline={payment === 1} className='mb-2' color='primary' onClick={() => { setPayment(1) }}>
                                    Aylanmadan olinadigan soliq
                                </Button>
                            </Col>
                            <Col >
                                <Button block outline={payment === 2} className='mb-2' color='primary' onClick={() => { setPayment(2) }}>
                                    Qo'shilgan qiymat solig'i va foyda solig'i
                                </Button>
                            </Col>
                        </Row>
                    </Col>
                    <Col>
                        <h5>Tahminiy ishchi sonini kiriting!</h5>
                        <Input type="number" placeholder="Ishchilar soni..." />
                    </Col>
                </Row>
            </div>
            <div className='d-flex justify-content-between'>
                <Button color='secondary' className='btn-prev' outline>
                    <ArrowLeft size={14} className='align-middle me-sm-25 me-0'></ArrowLeft>
                    <span className='align-middle d-sm-inline-block d-none'>Orqaga</span>
                </Button>
                <Button type='submit' color='primary' className='btn-next' onClick={() => nextStep()}>
                    <span className='align-middle d-sm-inline-block d-none'>Keyingisi</span>
                    <ArrowRight size={14} className='align-middle ms-sm-25 ms-0'></ArrowRight>
                </Button>
            </div>
        </>
    )
}

export default Tax
