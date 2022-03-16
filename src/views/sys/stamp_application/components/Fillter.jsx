import { useState } from "react"
import { Offcanvas, OffcanvasHeader, OffcanvasBody, Label, Input, Form, Button } from "reactstrap"
import ReactSelect from "react-select"
import Flatpickr from 'react-flatpickr'


const Filter = ({ open, handleModal }) => {
    const [picker, setPicker] = useState(new Date())

    return (

        <Offcanvas
            direction='end'
            isOpen={open}
            toggle={handleModal}
        >
            <OffcanvasHeader toggle={handleModal}>Ma'lumotlarni filter qilish</OffcanvasHeader>
            <OffcanvasBody className='mx-0 flex-grow-0'>
                <Form>
                    <div className='mb-1'>
                        <Label className='form-label' for='inn'>
                            JSHSHIR
                        </Label>
                        <Input name="inn" id='inn' placeholder='0000 0000 0000 0000' />
                    </div>
                    <div className='mb-1'>
                        <Label className='form-label' for='application_number'>
                            Ariza Raqami
                        </Label>
                        <Input name="application_type" id='application_number' placeholder='ex: 1234' />
                    </div>
                    <div className='mb-1'>
                        <Label className='form-label' for='full-name'>
                            THSHT
                        </Label>
                        <ReactSelect name="thsht" />
                    </div>
                    <div className='mb-1'>
                        <Label className='form-label' for='full-name'>
                            Maqomi
                        </Label>
                        <ReactSelect name="maqom" />
                    </div>
                    <div className='mb-1'>
                        <Label className='form-label' for='date'>
                            Sanasi
                        </Label>
                        <Flatpickr
                            value={picker}
                            id='range-picker'
                            name="start_to_end_date"
                            className='form-control'
                            onChange={date => setPicker(date)}
                            options={{
                                mode: 'range',
                                defaultDate: ['2020-02-01', '2020-02-15']
                            }}
                        />
                    </div>
                    <div className='mb-1'>
                        <Label className='form-label' for='activity_type'>
                            Faolyat Turi
                        </Label>
                        <Input name="activity_type" id='full-name' placeholder='ex: Chakana, Dehqon' />
                    </div>
                    <div className='mb-1'>
                        <Label className='form-label' for='full-name'>
                            Status
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