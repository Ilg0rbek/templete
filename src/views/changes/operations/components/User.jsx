import * as RS from "reactstrap"
import InputMask from "react-input-mask"
import ReactSelect from "react-select"

export default ({ toggle }) => {
    return (
        <>
            <RS.Row xl={2} md={1} >
                <RS.Col className='mb-1'>
                    <RS.Label>Hujjat turi</RS.Label>
                    <ReactSelect
                        className='react-select'
                        classNamePrefix='select'
                    />
                </RS.Col>
                <RS.Col className='mb-1'>
                    <RS.Label>Hujjat seriyasi va raqami</RS.Label>
                    <RS.Input type='text' placeholder='Seriya va raqamini kiriting...' />
                </RS.Col>
                <RS.Col className='mb-1'>
                    <RS.Label>F.I.O.</RS.Label>
                    <RS.Input type='text' placeholder='F.I.O kiriting...' />
                </RS.Col>
                <RS.Col className='mb-1'>
                    <RS.Label>PINFL (JSHSHIR)</RS.Label>
                    <RS.Input type="number" placeholder='0000 0000 0000 0000' type="text" mask="9999 9999 9999 9999"
                        maskChar=" "
                        tag={InputMask} />
                </RS.Col>
            </RS.Row>
            <div className='d-flex justify-content-end gap-1'>
                <RS.Button type='button' color='primary' outline onClick={toggle}>
                    Bekor Qilish
                </RS.Button>
                <RS.Button type='submit' color='success'>
                    Saqlash
                </RS.Button>
            </div>
        </>
    )
}