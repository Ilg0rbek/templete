// ** React Imports
import { Fragment } from 'react'
import { useDispatch, useSelector } from "react-redux"

// ** Third Party Components
// import { useForm, Controller } from 'react-hook-form'
import { ArrowLeft, ArrowRight, Search } from 'react-feather'
import { createAddressIndividual } from "@store/reducers/Register"
import InputMask from 'react-input-mask'
import ReactSelect from "react-select"
import { useHistory, useParams } from "react-router-dom"
import { useFormik } from "formik"
import { getRegionsList, getMahallaList, getSubRegionsList, getMarketList, getVillageRegionsList, getByCadastor } from "@store/reducers/System"
import { Button, Col, Form, Input, InputGroup, Label, Row } from 'reactstrap'
import * as yup from "yup"
import { rmSpace } from "@utils"
import { unwrapResult } from '@reduxjs/toolkit'

const ValidateSchema = yup.object({
    region_id: yup.string().required(),
    subRegion_id: yup.string().required(),
    village_id: yup.string(),
    address: yup.string().required(),
    mahalla_id: yup.string(),
    cadastre_number: yup.string().required(),
    // postal_code: yup.string().required(),
    phone: yup.string().required(),
    // email: yup.string().required(),
    market_id: yup.string().required(),
    address_type: yup.string().required()
})

const Address = ({ nextStep }) => {
    const history = useHistory()
    const dispatch = useDispatch()
    const { regions, subRegion, village, mahalla, market } = useSelector(state => state.sys)
    const { id } = useParams()
    // const location = useLocation()
    const formik = useFormik({
        validationSchema: ValidateSchema,
        initialValues: {
            cadastre_number: '',
            region_id: '',
            subRegion_id: '',
            village_id: '',
            address: '',
            mahalla_id: '',
            // postal_code: '',
            // phone: "",
            // email: "",
            address_type: '',
            market_id: ''
        },
        onSubmit: data => {
            console.log(data)
            dispatch(createAddressIndividual({ id, data })).then(unwrapResult).then(() => nextStep())
        }
    })

    const handleFindByCadastor = () => {
        dispatch(getByCadastor(rmSpace(formik.values.cadastor_number))).then(unwrapResult).then((res) => console.log(res))
    }

    return (
        <Fragment>
            <div className='content-header'>
                <h3 className='mb-0'>Joylashgan Joyi </h3>
            </div>
            <Form onSubmit={formik.handleSubmit}>
                <Row sm={2} md={3} className='mb-1'>
                    <Col xl={12} md={12} sm={12} xs={12} className="mt-1 d-flex flex-column align-items-center justify-content-center">
                        <b className='mb-1'>Ko'rsatilgan manzil turini tanlang</b>
                        <div className='d-flex justify-content-center gap-4'>
                            <Button color={formik.values.address_type === 0 ? 'primary' : 'secondary'} onClick={() => formik.setFieldValue("address_type", 0)}>
                                Xususiy ko'chmas mulk manzili
                            </Button>
                            <Button color={formik.values.address_type === 1 ? 'primary' : 'secondary'} onClick={() => formik.setFieldValue("address_type", 1)}>
                                Ijaraga olingan mulk manzili
                            </Button>
                        </div>
                    </Col>
                    <Col className="mt-1">
                        <Label for='numeral-formatting'>Kadastir raqami bo'yicha izlash</Label>
                        <InputGroup>
                            <Input name='cadastre_number' type="text" placeholder='00 00 00 00 00 00 0000' type="text"
                                mask="99 99 99 99 99 9999"
                                maskChar=" "
                                tag={InputMask}
                                onChange={(e) => formik.setFieldValue('cadastre_number', rmSpace(e.target.value))}
                                onBlur={formik.handleBlur} />
                            <Button.Ripple
                                className='btn-icon'
                                onClick={handleFindByCadastor}
                                disabled={rmSpace(formik.values?.cadastre_number)?.length !== 14}
                                color={rmSpace(formik.values?.cadastre_number)?.length === 14 ? 'success' : 'secondary'}
                            >
                                <Search size={16} />
                            </Button.Ripple>
                        </InputGroup>
                    </Col>
                    <Col className="mt-1">
                        <Label className='form-label' for='region'>
                            Viloyat
                        </Label>
                        <ReactSelect name="region_id" onFocus={() => dispatch(getRegionsList())} options={regions} getOptionValue={option => option.id} getOptionLabel={option => option.name_uz}
                            onChange={(e) => {
                                formik.setFieldValue('region_id', e.id)
                                dispatch(getSubRegionsList({ region_id: e.id }))
                            }}
                            placeholder="Viloyatni tanlang..." />
                    </Col>
                    <Col className="mt-1">
                        <Label className='form-label' for='district'>
                            Tuman
                        </Label>
                        <ReactSelect name="subRegion_id" options={subRegion} getOptionValue={option => option.id} getOptionLabel={option => option.name_uz} isDisabled={!subRegion?.length} onChange={(e) => {
                            formik.setFieldValue('subRegion_id', e.id)
                            dispatch(getVillageRegionsList({ subRegionId: e.id }))
                            dispatch(getMahallaList(e.id))
                            dispatch(getMarketList(e.id))
                        }} placeholder="Tumanni tanlang..." />
                    </Col>
                    {
                        village?.length ? (
                            <Col className="mt-1">
                                <Label className='form-label' for='address'>
                                    Shaharcha
                                </Label>
                                <ReactSelect name="village_id" options={village} getOptionValue={option => option.id} getOptionLabel={option => option.name_uz} onChange={(e) => {
                                    formik.setFieldValue("village_id", e.id)
                                }} placeholder="Shaharchani tanlang..." />

                            </Col>
                        ) : null
                    }
                    {
                        mahalla?.length ? (
                            <Col className="mt-1">
                                <Label className='form-label' for='district'>
                                    Mahalla
                                </Label>
                                <ReactSelect name="mahalla_id" options={mahalla} getOptionValue={option => option.mahalla_id} getOptionLabel={option => option.name} onChange={(e) => {
                                    formik.setFieldValue('mahalla_id', e.mahalla_id)
                                }} placeholder="Tumanni tanlang..." />
                            </Col>
                        ) : null
                    }

                    {
                        market?.length ? (
                            <Col className="mt-1">
                                <Label className='form-label' for='district'>
                                    Bozor
                                </Label>
                                <ReactSelect name="market_id" options={market} getOptionValue={option => option.mahalla_id} getOptionLabel={option => option.name} onChange={(e) => {
                                    formik.setFieldValue('market_id', e.id)
                                }} placeholder="Bozorni tanlang..." />
                            </Col>
                        ) : null
                    }

                    <Col className="mt-1">
                        <Label className='form-label' for='phone'>
                            Manzil
                        </Label>
                        <Input name='address' type="text" placeholder='Kiriting...'
                            onChange={formik.handleChange} onBlur={formik.handleBlur} />
                    </Col>
                    {/* <Col className="mt-1">
                        <Label>Pochta index</Label>
                        <Input name="postal_code" placeholder="Kiriting" onBlur={formik.handleBlur} mask="999999" maskChar="" tag={InputMask} onChange={formik.handleChange} />
                    </Col> */}
                    <Col className="mt-1">
                        <Label className='form-label' for='phone'>
                            Telefon Raqam
                        </Label>
                        <Input
                            onChange={(e) => formik.setFieldValue('phone', rmSpace(e.target.value))}
                            type="tel"
                            name="phone"
                            placeholder='998 00 000 00 00'
                            mask="\9\98 99 999 99 99"
                            maskChar=" "
                            onBlur={formik.handleBlur}
                            tag={InputMask} />
                    </Col>
                    {/* <Col className="mt-1">
                        <Label className='form-label' for='phone'>
                            Pochta manzili
                        </Label>
                        <Input name='email' type="email" placeholder='example@example.com'
                            onChange={formik.handleChange} onBlur={formik.handleBlur} />
                    </Col> */}
                </Row>
                <Row className='mb-1'>
                    {/* <Col md='6'>
                        <Label className='form-label'>
                            Ko'rsatilgan manzil turini tanlang
                        </Label>
                        <Row className='mt-1'>
                            <Col md='6'>
                                <Input name="address_type" type="radio" id="address_type_1" value="Xususiy"
                                    onChange={formik.handleChange} /> <Label className='form-label mr-1'
                                        for='address_type_1'>
                                    Xususiy ko'chmas mulk manzili
                                </Label>
                            </Col>

                            <Col md='6'>
                                <Input name="address_type" type="radio" id="address_type_2" value="Ijara"
                                    onChange={formik.handleChange} />
                                <Label className='form-label mr-1' for='address_type_2'>
                                    Ijaraga olingan mulk manzili
                                </Label>
                            </Col>
                        </Row>
                        {formik.errors.address_type && formik.touched.address_type && (
                            <span className='text-danger'>{formik.errors.address_type}</span>
                        )}
                    </Col> */}
                </Row>
                <div className='d-flex justify-content-between'>
                    <Button type='button' color='primary' className='btn-prev'
                        onClick={() => history.push('/dashboard')}>
                        <ArrowLeft size={14} className='align-middle me-sm-25 me-0' />
                        <span className='align-middle d-sm-inline-block d-none'>Orqaga</span>
                    </Button>
                    <Button disabled={!(formik.isValid && formik.dirty)} type='submit' color='primary' className='btn-next'>
                        <span className='align-middle d-sm-inline-block d-none'>Keyingisi</span>
                        <ArrowRight size={14} className='align-middle ms-sm-25 ms-0' />
                    </Button>
                </div>
            </Form>
        </Fragment>
    )
}

export default Address
