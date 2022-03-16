import { Offcanvas, OffcanvasHeader, OffcanvasBody, Label, Input, Form, Button } from "reactstrap"
import ReactSelect from "react-select"

const Filter = ({ open, handleModal }) => {

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
                        <Label className='form-label' for='full-name'>
                            ID
                        </Label>
                        <ReactSelect name="maqom" />
                    </div>
                    <div className='mb-1'>
                        <Label className='form-label' for='activity_type'>
                            Username
                        </Label>
                        <Input name="activity_type" id='full-name' placeholder='ex: Chakana, Dehqon' />
                    </div>
                    <div className='mb-1'>
                        <Label className='form-label' for='full-name'>
                            Roli
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