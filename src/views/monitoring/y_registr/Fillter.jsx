import {Offcanvas, OffcanvasHeader, OffcanvasBody, Label, Input, Form, Button, Row, Col} from "reactstrap"
import {useLocation, useHistory} from "react-router-dom"
import {useFormik} from "formik"
import qs from 'qs'
import PropTypes from "prop-types"
import ReactSelect from "react-select"
import {useEffect} from "react"
import {useDispatch, useSelector} from "react-redux"
import {
    getRegionsList,
    getSubRegionsList,
    getMahallaList
} from "@store/reducers/System"
import {legalEntitiesReg} from "../../../redux/reducers/Register"

const Filter = ({open, handleModal}) => {
    const location = useLocation()
    const history = useHistory()
    const dispatch = useDispatch()
    const store = useSelector(state => state.sys)

    const defaultValue = qs.parse(location.search, {ignoreQueryPrefix: true})

    useEffect(() => {
        if (defaultValue.region_id) {
            dispatch(getRegionsList())
            dispatch(getSubRegionsList({region_id: defaultValue.region_id}))
        }
    }, [])

    const formik = useFormik({
        initialValues: {
            // id: defaultValue.id || '',
            region_id: defaultValue.region_id || '',
            sub_region: defaultValue.sub_region || ''
        },
        onSubmit: values => {
            const query = qs.parse(location.search, {ignoreQueryPrefix: true})
            const data = {
                type: 0
            }
            history.push({
                pathname: location.pathname,
                search: qs.stringify({
                    ...query,
                    // id: values?.id || undefined,
                    region_id: values?.region_id || undefined,
                    sub_region: values?.sub_region || undefined
                })
            })
            dispatch(legalEntitiesReg({data, query: values}))
            handleModal()
        }
    })
    const handleReset = () => {
        history.push(`${location.pathname}`)
        formik.resetForm()
        handleModal()
    }

    // const sub = store?.subRegion?.find(val => val.id === formik.values.sub_region)
    // const reg = store?.regions?.find(val => val.id === formik.values.region_id)

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
                            <Label className='form-label' for='id'>
                                ID
                            </Label>
                            <Input
                                id='id'
                                name="id"
                                onChange={formik.handleChange}
                                value={formik.values.id}
                            />
                        </Col>
                        {/* <Col className="mb-1">
                            <Label className='form-label' for='bankid'>
                                Banklar
                            </Label>
                            <ReactSelect
                                isSearchable
                                id='bankid'
                                name="bankid"
                                placeholder="Tanlang..."
                                options={bank?.bankTypes}
                                getOptionLabel={option => option.name}
                                getOptionValue={option => option.id}
                                onChange={(val) => {
                                    formik.setFieldValue("bankId", val.id)
                                }}
                                value={bank?.bankTypes?.find(val => val.id === formik.values.bankId)}
                            />
                        </Col> */}
                        <Col className="mb-1">
                            <Label className='form-label' for='region_id'>
                                Viloyat
                            </Label>
                            <ReactSelect
                                isSearchable
                                id='region_id'
                                name="region_id"
                                placeholder="Tanlang..."
                                options={store?.regions}
                                getOptionLabel={option => option.name_uz}
                                getOptionValue={option => option.id}
                                onFocus={() => dispatch(getRegionsList())}
                                onChange={(val) => {
                                    formik.setFieldValue("region_id", val.id)
                                    dispatch(getSubRegionsList({region_id: val.id}))
                                }}
                                // value={reg}
                            />
                        </Col>
                        <Col className="mb-1">
                            <Label className='form-label' for='sub_region'>
                                Tuman
                            </Label>
                            <ReactSelect
                                isSearchable
                                id='sub_region'
                                isDisabled={store?.subRegion?.length === 0}
                                options={store?.subRegion}
                                name="sub_region"
                                placeholder="Tanlang..."
                                getOptionLabel={option => option.name_uz}
                                getOptionValue={option => option.id}
                                onChange={(val) => {
                                    formik.setFieldValue("sub_region", val.id)
                                    dispatch(getMahallaList(val.id))
                                }}
                                // value={sub}
                            />
                        </Col>
                        <Col className="mb-1">
                            <Label className='form-label' for='sub_region'>
                                Mahalla
                            </Label>
                            <ReactSelect
                                isSearchable
                                id='mahalla'
                                isDisabled={store?.mahalla?.length === 0}
                                options={store?.mahalla}
                                name="sub_region"
                                placeholder="Tanlang..."
                                getOptionLabel={option => option.name}
                                getOptionValue={option => option.mahalla_id}
                                onChange={(val) => {
                                    formik.setFieldValue("mahalla", val.mahalla_id)
                                }}
                                // value={sub}
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
