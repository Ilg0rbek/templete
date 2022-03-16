import { Offcanvas, OffcanvasHeader, OffcanvasBody, Label, Input, Form, Button } from "reactstrap"

const Filter = ({ open, handleModal }) => {

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
                        <Label className='form-label' for='full-name'>
                            Invoys raqami
                        </Label>
                        <Input name="application_number" id='application_number' placeholder='ex: 123423' />
                    </div>
                    <Button block color="success">Qidirish</Button>
                </Form>
            </OffcanvasBody>
        </Offcanvas>
    )
}

export default Filter