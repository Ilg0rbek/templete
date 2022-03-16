import { useState } from "react"
import { Offcanvas, OffcanvasHeader, OffcanvasBody, Label, Input, Form, Button } from "reactstrap"
import CheckboxBasic from "../../../components/CheckBox"
import ReactSelect from "react-select"
import Flatpickr from 'react-flatpickr'
import Nouislider from 'nouislider-react'
import wNumb from 'wnumb'
import '@styles/react/libs/noui-slider/noui-slider.scss'

const Filter = ({ open, handleModal }) => {
    const [picker, setPicker] = useState(new Date())

    return (

        <Offcanvas
            direction='end'
            isOpen={open}
            toggle={handleModal}
        >
            <OffcanvasHeader toggle={handleModal}>Ma'lumotlarni filter qilish</OffcanvasHeader>
            <OffcanvasBody className='my-auto mx-0 flex-grow-0'>
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
                            F.I.O
                        </Label>
                        <Input name="fullname" id='full-name' placeholder='ex: Ogabek, Ogabek Yuldoshev' />
                    </div>
                    <div className='mb-1'>
                        <Label className='form-label' for='gender'>
                            Jinsi
                        </Label>
                        <div className="d-flex items-center justify-content-between px-4">
                            <CheckboxBasic name="gender" id='gender' label="Erkak" />
                            <CheckboxBasic name="gender" id='gender' label="Ayol" />
                        </div>
                    </div>

                    <div className='mb-1'>
                        <Label className='form-label' for='gender'>
                            Yoshi
                        </Label>
                        <Nouislider
                            name="age"
                            className='range-slider mt-2'
                            start={[18, 70]}
                            connect={true}
                            tooltips={[true, true]}
                            format={wNumb({
                                decimals: 0
                            })}
                            range={{
                                min: 18,
                                max: 70
                            }}
                        />
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
                            Faolyat viloyati
                        </Label>
                        <ReactSelect name="region" />
                    </div>
                    <div className='mb-1'>
                        <Label className='form-label' for='full-name'>
                            Faolyat tumani
                        </Label>
                        <ReactSelect name="district" />
                    </div>
                    <div className='mb-1'>
                        <Label className='form-label' for='full-name'>
                            Texnologiya
                        </Label>
                        <ReactSelect name="techno" />
                    </div>
                    <div className='mb-1'>
                        <Label className='form-label' for='full-name'>
                            To'lov Turi
                        </Label>
                        <ReactSelect name="payment_type" />
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