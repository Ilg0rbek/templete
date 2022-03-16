import { useState } from "react"
import { Offcanvas, OffcanvasHeader, OffcanvasBody, Label, Input, Form, Button } from "reactstrap"
import ReactSelect from "react-select"
import Flatpickr from 'react-flatpickr'

const Filter = ({ open, handleModal }) => {
    const [picker, setPicker] = useState(new Date())

    return (

        <Offcanvas
            direction='end'
            width={500}
            isOpen={open}
            toggle={handleModal}
        >
            <OffcanvasHeader toggle={handleModal}>Ma'lumotlarni filter qilish</OffcanvasHeader>
            <OffcanvasBody className='mx-0 flex-grow-0'>
                <Form>
                    <div className='mb-1'>
                        <Label className='form-label' for='full-name'>
                            Ariza raqami
                        </Label>
                        <Input name="application_number" id='application_number' placeholder='ex: 123' />
                    </div>
                    <div className='mb-1'>
                        <Label className='form-label' for='activity_type'>
                            Sana
                        </Label>
                        <Flatpickr
                            value={picker}
                            id='range-picker'
                            className='form-control'
                            onChange={date => setPicker(date)}
                            options={{
                                mode: 'range',
                                defaultDate: ['2020-02-01', '2020-02-15']
                            }}
                        />
                    </div>
                    <div className='mb-1'>
                        <Label className='form-label' for='full-name'>
                            Vloyat
                        </Label>
                        <ReactSelect name="status" />
                    </div>
                    <div className='mb-1'>
                        <Label className='form-label' for='full-name'>
                            Tuman
                        </Label>
                        <ReactSelect name="status" />
                    </div>
                    <div className='mb-1'>
                        <Label className='form-label' for='full-name'>
                            Muallif
                        </Label>
                        <ReactSelect name="status" />
                    </div>
                    <div className='mb-1'>
                        <Label className='form-label' for='full-name'>
                            Invoys raqami
                        </Label>
                        <Input name="application_number" id='application_number' placeholder='ex: 123423' />
                    </div>
                    <div className='mb-1'>
                        <Label className='form-label' for='full-name'>
                            To'lovchi
                        </Label>
                        <Input name="application_number" id='application_number' placeholder='ex: Ogabek' />
                    </div>
                    <div className='mb-1'>
                        <Label className='form-label' for='full-name'>
                            Servise
                        </Label>
                        <ReactSelect name="status" />
                    </div>
                    <div className='mb-1'>
                        <Label className='form-label' for='full-name'>
                            To'lov statusi
                        </Label>
                        <ReactSelect name="status" />
                    </div>
                    <div className='mb-1'>
                        <Label className='form-label' for='full-name'>
                            To'lov turi
                        </Label>
                        <ReactSelect name="status" />
                    </div>
                    <Button block color="success">Qidirish</Button>
                </Form>
            </OffcanvasBody>
        </Offcanvas>
    )
}

export default Filter