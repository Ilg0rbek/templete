import { Offcanvas, OffcanvasHeader, OffcanvasBody, Label, Input, Form, Button, Row, Col } from "reactstrap"
import { useLocation, useHistory } from "react-router-dom"
import { useFormik } from "formik"
import qs from 'qs'
import PropTypes from "prop-types"
import { useDispatch } from "react-redux"
import { getInRepublicJournal } from '../../../redux/reducers/Certificate'

const Filter = ({ open, handleModal }) => {
    const location = useLocation()
    const history = useHistory()
    const dispatch = useDispatch()
    // const store = useSelector(state => state.monitor)

    const defaultValue = qs.parse(location.search, { ignoreQueryPrefix: true })

    const formik = useFormik({
        initialValues: {
            pinfl: defaultValue?.pinfl || '',
            tin: defaultValue?.tin || '',
            payment: defaultValue?.payment || ''
        },
        onSubmit: values => {
            const query = qs.parse(location.search, { ignoreQueryPrefix: true })
            console.log(values)
            console.log(query)
            dispatch(getInRepublicJournal(values))
        }
    })
    const handleReset = () => {
        history.push(`${location.pathname}`)
        dispatch(getInRepublicJournal())
        formik.resetForm()
        handleModal()
    }

    return (
        <Offcanvas
            direction='end'
            isOpen={open}
            toggle={handleModal}
        >
            <OffcanvasHeader toggle={handleModal}>Ma'lumotlarni filter qilish</OffcanvasHeader>
            <OffcanvasBody>
                <Form onSubmit={formik.handleSubmit}>
                    <Row sm={1}>
                        <Col className="mb-1">
                            <Label className='form-label' for='pinfl'>
                                PINFL
                            </Label>
                            <Input
                                id='pinfl'
                                name="pinfl"
                                placeholder="PINFL"
                                onChange={formik.handleChange}
                            />
                        </Col>
                        <Col className="mb-1">
                            <Label className='form-label' for='stir'>
                                STIR
                            </Label>
                            <Input
                                id='stir'
                                name="tin"
                                placeholder="STIR"
                                onChange={formik.handleChange}
                            />
                        </Col>
                        <Col className="mb-1">
                            <Label className='form-label' for='payment'>
                                To`lov holati
                            </Label>
                            <Input
                                id="payment"
                                placeholder="To`lov holati"
                                name="payment"
                                onChange={(val) => {
                                    formik.setFieldValue("paymnet", val.target.value)
                                }}
                            />
                        </Col>
                    </Row>
                    <div className="d-flex align-items-center justify-content-center gap-2 mt-2">
                        <Button type="reset" block outline color="primary" onClick={handleReset}>Tozalash</Button>
                        <Button type="submit" block color="success">Qidirish</Button>
                    </div>
                </Form>
            </OffcanvasBody>
        </Offcanvas>
    )
}

export default Filter

Filter.propTypes = {
    open: PropTypes.bool.isRequired,
    handleModal: PropTypes.func.isRequired
}