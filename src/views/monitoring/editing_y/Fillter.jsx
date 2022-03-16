import { Offcanvas, OffcanvasHeader, OffcanvasBody, Label, Input, Form, Button, Row, Col } from "reactstrap"
import { useLocation, useHistory } from "react-router-dom"
import { useFormik } from "formik"
import qs from 'qs'
import PropTypes from "prop-types"
import ReactSelect from "react-select"
import { useEffect, Fragment } from "react"
import { useDispatch } from "react-redux"
import { getAprovalTypes, getRegionsList, getSubRegionsList, getAplicantAllList } from "../../../redux/reducers/monitoring"
import Flatpickr from 'react-flatpickr'

const Filter = ({ open, handleModal }) => {
    const location = useLocation()
    const history = useHistory()
    const dispatch = useDispatch()

    const defaultValue = qs.parse(location.search, { ignoreQueryPrefix: true })

    useEffect(() => {
        if (defaultValue.region_id) {
            dispatch(getRegionsList())
            dispatch(getAprovalTypes())
            dispatch(getSubRegionsList({ region_id: defaultValue.region_id }))
        } else {
            dispatch(getRegionsList())
            dispatch(getAprovalTypes())
        }
    }, [])

    const formik = useFormik({
        initialValues: {
            ariza_id: defaultValue.ariza_id || '',
            checking_type: defaultValue.checking_type || '',
            sub_region: defaultValue.sub_region || '',
            needs_checking: defaultValue.needsCheck || '',
            name: defaultValue.name || '',
            tin: defaultValue.tin || '',
            start_to_end_date: defaultValue.start_to_end_date || ''
        },
        onSubmit: values => {
            const query = qs.parse(location.search, { ignoreQueryPrefix: true })
            console.log(values)
            console.log(query)
            dispatch(getAplicantAllList(values))
            // history.push({
            //     pathname: location.pathname,
            //     search: qs.stringify({
            //         ...query,
            //         id: values?.id || undefined,
            //         region_id: values?.region_id || undefined,
            //         sub_region: values?.sub_region || undefined
            //     })
            // })
            // handleModal()
        }
    })
    const handleReset = () => {
        history.push(`${location.pathname}`)
        dispatch(getAplicantAllList())
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
                            <Label className='form-label' for='ariza_id'>
                                ID
                            </Label>
                            <Input
                                id='ariza_id'
                                name="ariza_id"
                                placeholder="ID"
                                onChange={formik.handleChange}
                                value={formik.values.id}
                            />
                        </Col>
                        <Col className="mb-1">
                            <Label className='form-label' for='region_id'>
                                STIR
                            </Label>
                          <Input
                                id='ariza_id'
                                name="ariza_id"
                                placeholder="STIR"
                                onChange={formik.handleChange}
                                value={formik.values.id}
                            />
                        </Col>
                        <Col className="mb-1">
                            <Label className='form-label' for='sub_region'>
                                Payment
                            </Label>
                            <Input
                                id='ariza_id'
                                name="ariza_id"
                                placeholder="Payment"
                                onChange={formik.handleChange}
                                value={formik.values.id}
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