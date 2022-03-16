import { Button, Col, Form, Input, Label, Offcanvas, OffcanvasBody, OffcanvasHeader, Row } from "reactstrap"
import { useHistory, useLocation } from "react-router-dom"
import { useFormik } from "formik"
import qs from 'qs'
import PropTypes from "prop-types"
import InputMask from "react-input-mask"
import { rmSpace } from "../../../utility/Utils"

const Filter = ({ open, handleModal, getFilter }) => {

    const location = useLocation()
    const history = useHistory()

    const defaultValue = qs.parse(location.search, { ignoreQueryPrefix: true })

    const formik = useFormik({
        initialValues: {
            pinfl: defaultValue?.pinfl || '',
            tin: defaultValue?.tin || '',
            paymentType: defaultValue?.paymentType || ''
        },
        onSubmit: values => {
            const data = {
                paymentType: values?.paymentType,
                pinfl: rmSpace(values?.pinfl),
                tin: rmSpace(values?.tin)
            }
            console.log(data)
            getFilter(data)
        }
    })
    const handleReset = () => {
        history.push(`${location.pathname}`)
        getFilter()
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