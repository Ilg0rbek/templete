import {Fragment} from 'react'
import {useDispatch, useSelector} from "react-redux"
import {ArrowLeft, ArrowRight, Search} from 'react-feather'
import InputMask from 'react-input-mask'
import ReactSelect from "react-select"
import {useParams} from "react-router-dom"
import {useFormik} from "formik"
import {
    getByCadastor,
    getMahallaList,
    getMarketList,
    getRegionsList,
    getSubRegionsList,
    getVillageRegionsList
} from "@store/reducers/System"
import {Button, Col, Form, Input, InputGroup, Label, Row} from 'reactstrap'
import * as yup from "yup"
import {rmSpace} from "@utils"
import {unwrapResult} from '@reduxjs/toolkit'
import {createAddressLegal} from "../../../../redux/reducers/Register"

const ValidateSchema = yup.object({
    email: yup.string().required(),
    mahalla_id: yup.string(),
    phone: yup.string().required(),
    region_id: yup.string().required(),
    subRegion_id: yup.string().required(),
    isOwned: yup.boolean().required(),
    village: yup.string()
})

const Address = ({nextStep, previousStep}) => {
    const {id} = useParams()
    const dispatch = useDispatch()
    const {regions, subRegion, village, mahalla} = useSelector(state => state.sys)

    const formik = useFormik({
        validationSchema: ValidateSchema,
        initialValues: {
            email: "",
            mahalla_id: '',
            phone: "",
            region_id: '',
            subRegion_id: '',
            village: '',
            cadaster_number: '',
            isOwned: null
        },
        onSubmit: data => {
            dispatch(createAddressLegal({id: parseInt(id), data})).then(unwrapResult).then(() => nextStep())
        }
    })

    const handleFindByCadastor = () => {
        dispatch(getByCadastor(rmSpace(formik.values.cadaster_number))).then(unwrapResult).then((res) => console.log(res))
    }

    return (
        <Fragment>
            <div className='content-header'>
                <h3 className='mb-0'>Joylashgan Joyi </h3>
            </div>
            <Form onSubmit={formik.handleSubmit}>
                <Row sm={2} md={3} className='mb-1'>
                    <Col xl={12} md={12} sm={12} xs={12}
                         className="mt-1 d-flex flex-column align-items-center justify-content-center">
                        <b className='mb-1'>Ko'rsatilgan manzil turini tanlang</b>
                        <div className='d-flex justify-content-center gap-4'>
                            <Button color={formik.values.isOwned === true ? 'primary' : 'secondary'}
                                    onClick={() => formik.setFieldValue("isOwned", true)}>
                                Xususiy ko'chmas mulk manzili
                            </Button>
                            <Button color={formik.values.isOwned === false ? 'primary' : 'secondary'}
                                    onClick={() => formik.setFieldValue("isOwned", false)}>
                                Ijaraga olingan mulk manzili
                            </Button>
                        </div>
                    </Col>
                    <Col className="mt-1">
                        <Label for='numeral-formatting'>Kadastir raqami bo'yicha izlash</Label>
                        <InputGroup>
                            <Input name='cadaster_number' placeholder='00 00 00 00 00 00 0000' type="text"
                                   mask="99 99 99 99 99 9999"
                                   maskChar=" "
                                   tag={InputMask}
                                   onChange={(e) => formik.setFieldValue('cadaster_number', rmSpace(e.target.value))}
                                   onBlur={formik.handleBlur}/>
                            <Button.Ripple
                                className='btn-icon'
                                onClick={handleFindByCadastor}
                                disabled={rmSpace(formik.values?.cadastor_number)?.length !== 14}
                                color={rmSpace(formik.values?.cadastor_number)?.length === 14 ? 'success' : 'secondary'}
                            >
                                <Search size={16}/>
                            </Button.Ripple>
                        </InputGroup>
                    </Col>
                    <Col className="mt-1">
                        <Label className='form-label' for='region_id'>
                            Viloyat
                        </Label>
                        <ReactSelect name="region_id" onFocus={() => dispatch(getRegionsList())} options={regions}
                                     getOptionValue={option => option.id} getOptionLabel={option => option.name_uz}
                                     onChange={(e) => {
                                         formik.setFieldValue('region_id', e.id)
                                         dispatch(getSubRegionsList({region_id: e.id}))
                                     }}
                                     placeholder="Viloyatni tanlang..."/>
                    </Col>
                    <Col className="mt-1">
                        <Label className='form-label' for='subRegion_id'>
                            Tuman
                        </Label>
                        <ReactSelect name="subRegion_id" options={subRegion} getOptionValue={option => option.id}
                                     getOptionLabel={option => option.name_uz} isDisabled={!subRegion?.length}
                                     onChange={(e) => {
                                         formik.setFieldValue('subRegion_id', e.id)
                                         dispatch(getVillageRegionsList({subRegionId: e.id}))
                                         dispatch(getMahallaList(e.id))
                                         dispatch(getMarketList(e.id))
                                     }} placeholder="Tumanni tanlang..."/>
                    </Col>
                    {
                        village?.length ? (
                            <Col className="mt-1">
                                <Label className='form-label' for='village'>
                                    Shaharcha
                                </Label>
                                <ReactSelect name="village" options={village} getOptionValue={option => option.id}
                                             getOptionLabel={option => option.name_uz} onChange={(e) => {
                                    formik.setFieldValue("village", e.id)
                                }} placeholder="Shaharchani tanlang..."/>

                            </Col>
                        ) : null
                    }
                    {
                        mahalla?.length ? (
                            <Col className="mt-1">
                                <Label className='form-label' for='mahalla_id'>
                                    Mahalla
                                </Label>
                                <ReactSelect name="mahalla_id" options={mahalla}
                                             getOptionValue={option => option.mahalla_id}
                                             getOptionLabel={option => option.name} onChange={(e) => {
                                    formik.setFieldValue('mahalla_id', e.mahalla_id)
                                }} placeholder="Tumanni tanlang..."/>
                            </Col>
                        ) : null
                    }

                    <Col className="mt-1">
                        <Label className='form-label' for='address'>
                            Manzil
                        </Label>
                        <Input name='address' type="text" placeholder='Kiriting...'
                               onChange={formik.handleChange} onBlur={formik.handleBlur}/>
                    </Col>
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
                            tag={InputMask}/>
                    </Col>
                    <Col className="mt-1">
                        <Label className='form-label' for='phone'>
                            Pochta manzili
                        </Label>
                        <Input name='email' type="email" placeholder='example@example.com'
                               onChange={formik.handleChange} onBlur={formik.handleBlur}/>
                    </Col>
                </Row>
                <div className='d-flex justify-content-between'>
                    <Button type='button' color='primary' className='btn-prev'
                            onClick={() => previousStep()}>
                        <ArrowLeft size={14} className='align-middle me-sm-25 me-0'/>
                        <span className='align-middle d-sm-inline-block d-none'>Orqaga</span>
                    </Button>
                    <Button disabled={!(formik.isValid && formik.dirty)} type='submit' color='primary'
                            className='btn-next'>
                        <span className='align-middle d-sm-inline-block d-none'>Keyingisi</span>
                        <ArrowRight size={14} className='align-middle ms-sm-25 ms-0'/>
                    </Button>
                </div>
            </Form>
        </Fragment>
    )
}

export default Address
