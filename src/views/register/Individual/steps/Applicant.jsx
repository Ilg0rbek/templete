import * as RS from "reactstrap"
import * as I from "react-feather"
import ReactSelect from "react-select"
import { useDispatch, useSelector } from "react-redux"
import { getRegionsList, getSubRegionsList, getVillageRegionsList, getIndividualDocTypes, getByPassport } from "@store/reducers/System"
import { useFormik } from "formik"
import * as yup from 'yup'
import ReactInputMask from "react-input-mask"
import { unwrapResult } from "@reduxjs/toolkit"
import { createApplicantIndividual } from "@store/reducers/Register"
import { useEffect } from "react"
import { useHistory, useParams } from "react-router-dom"
import moment from "moment"

const ValidSchema = yup.object({
    document_type: yup.number().required(),
    document_serial: yup.string().required(),
    pin: yup.string().required(),
    passport_by: yup.string().required(),
    gender: yup.boolean().required(),
    region_id: yup.string().required(),
    subRegion_id: yup.string().required(),
    village_id: yup.string().required(),
    address: yup.string().required(),
    // postal_code: yup.string().required(),
    passport_given_on: yup.date().required(),
    birthday: yup.date().required(),
    phone: yup.string().required(),
    email: yup.string().email().required()
})

export default ({ nextStep }) => {
    const { id } = useParams()
    const { regions, subRegion, village, inDocTypesList, isLoading } = useSelector(state => state.sys)
    const dispatch = useDispatch()
    const history = useHistory()
    useEffect(() => {
        dispatch(getIndividualDocTypes())
    }, [])
    const options = inDocTypesList?.filter(option => { return option.id !== 2 })
    const formik = useFormik({
        validationSchema: ValidSchema,
        initialValues: {
            fullname: '',
            document_type: '',
            document_serial: '',
            pin: '',
            passport_by: '',
            gender: '',
            region_id: '',
            subRegion_id: '',
            village_id: '',
            address: '',
            passport_given_on: '',
            birthday: '',
            // postal_code: '',
            phone: '',
            email: ''
        },
        onSubmit: (data) => {
            dispatch(createApplicantIndividual({ id, data })).then(unwrapResult).then(() => nextStep())
        }
    })
    const handleFindByPass = () => {
        dispatch(getByPassport({ passport: (formik.values.document_serial)?.toUpperCase() })).then(unwrapResult).then((res) => {
            formik.setFieldValue('pin', res?.pinfl)
            formik.setFieldValue('passport_given_on', moment(res?.passport_given_on, "YYYY-MM-DD").format("YYYY-MM-DD"))
            formik.setFieldValue('birthday', moment(res?.birthday, "YYYY-MM-DD").format("YYYY-MM-DD"))
            formik.setFieldValue('fullname', `${res?.firstname} ${res?.lastname} ${res?.middlename}`)
            formik.setFieldValue('passport_by', res?.passport_given_by)
            res?.gender === 1 ? formik.setFieldValue('gender', true) : formik.setFieldValue('gender', false)
        })
    }
    const valid = () => {
        if (formik.values.document_type === 1) return true
        return false
    }
    return (
        <>
            <RS.Card>
                <RS.CardHeader>
                    <h4>Arizachi to'g'risidagi ma'lumotlar</h4>
                </RS.CardHeader>
                <RS.Form onSubmit={formik.handleSubmit}>
                    <RS.CardBody>
                        <RS.Row sm={2}>
                            <RS.Col className="mb-1">
                                <RS.Label>Hujjat Turi</RS.Label>
                                <ReactSelect
                                    onChange={(option) => formik.setFieldValue('document_type', option.id)}
                                    onBlur={formik.handleBlur}
                                    placeholder='Hujjat turini tanlang...'
                                    options={options}
                                    getOptionLabel={(option) => option.name}
                                    getOptionValue={(option) => option.id}
                                    name="document_type"
                                    className='react-select'
                                    classNamePrefix='select'
                                />
                            </RS.Col>
                            <RS.Col className="mb-1">
                                <RS.Label>Passport seryasi va raqami</RS.Label>
                                <RS.InputGroup>
                                    <RS.Input style={{ textTransform: "uppercase" }} name="document_serial" placeholder="AB0000000" mask="aa9999999" maskChar="" tag={ReactInputMask} onBlur={formik.handleBlur} onChange={(e) => formik.setFieldValue("document_serial", (e.target?.value)?.toUpperCase())} />
                                    {
                                        isLoading ? <RS.Button.Ripple loading={true} outline color="primary">
                                                <I.Loader size={20}/>
                                            </RS.Button.Ripple> : <RS.Button.Ripple loading={true} onClick={handleFindByPass}
                                                              disabled={formik.values.document_serial?.length !== 9 || !valid()}
                                                              outline color="primary">
                                                <I.Search size={15}/>
                                            </RS.Button.Ripple>
                                    }
                                </RS.InputGroup>
                            </RS.Col>
                            <RS.Col className="mb-1">
                                <RS.Label>F.I.O</RS.Label>
                                <RS.Input name="fullname" disabled={valid()} defaultValue={formik.values.fullname} placeholder="Kiriting" onBlur={formik.handleBlur} onChange={formik.handleChange} />
                            </RS.Col>
                            <RS.Col className="mb-1">
                                <RS.Label>Pnfl</RS.Label>
                                <RS.Input name="pin" value={formik.values.pin} placeholder="Kiriting" mask="9 999999 999 999 9" maskChar=" " tag={ReactInputMask} onBlur={formik.handleBlur} onChange={formik.handleChange} />
                            </RS.Col>
                            <RS.Col className="mb-1">
                                <RS.Label>Passport berilgan sana</RS.Label>
                                <RS.Input type="date" disabled={valid()} name="passport_given_on" defaultValue={formik.values.passport_given_on} placeholder="Kiriting" onBlur={formik.handleBlur} onChange={formik.handleChange} />
                            </RS.Col>
                            <RS.Col className="mb-1">
                                <RS.Label>Kim tomonidan berilgan</RS.Label>
                                <RS.Input name="passport_by" defaultValue={formik.values.passport_by} placeholder="Kiriting" onBlur={formik.handleBlur} onChange={formik.handleChange} />
                            </RS.Col>
                            <RS.Col className="mb-1">
                                <RS.Label>Tug'ilgan sana</RS.Label>
                                <RS.Input type="date" disabled={valid()} name="birthday" defaultValue={formik.values.birthday} placeholder="Kiriting" onBlur={formik.handleBlur} onChange={formik.handleChange} />
                            </RS.Col>
                            <RS.Col className="mb-1">
                                <RS.Label>Jinsi</RS.Label>
                                <RS.Row sm={2}>
                                    <RS.Col>
                                        <RS.Input disabled={valid()} type="radio" checked={formik.values.gender === true} onClick={() => formik.setFieldValue("gender", true)} name="gender" id="male" />
                                        <label htmlFor="male" className="ml-1">Erkak</label>
                                    </RS.Col>
                                    <RS.Col>
                                        <RS.Input disabled={valid()} type="radio" onClick={() => formik.setFieldValue("gender", false)} checked={formik.values.gender === false} name="gender" id="famale" />
                                        <label htmlFor="famale" className="ml-1">Ayol</label>
                                    </RS.Col>
                                </RS.Row>
                            </RS.Col>
                            <RS.Col className="mb-1">
                                <RS.Label>Viloyat</RS.Label>
                                <ReactSelect name="region_id" onFocus={() => dispatch(getRegionsList())} options={regions} getOptionValue={option => option.id} getOptionLabel={option => option.name_uz}
                                    onChange={(e) => {
                                        formik.setFieldValue('region_id', e.id)
                                        dispatch(getSubRegionsList({ region_id: e.id }))
                                    }}
                                    placeholder="Viloyatni tanlang..." />
                            </RS.Col>
                            <RS.Col className="mb-1">
                                <RS.Label>Tuman</RS.Label>
                                <ReactSelect name="subRegion_id" options={subRegion} getOptionValue={option => option.id} getOptionLabel={option => option.name_uz} isDisabled={!subRegion?.length} onChange={(e) => {
                                    formik.setFieldValue('subRegion_id', e.id)
                                    dispatch(getVillageRegionsList({ subRegionId: e.id }))
                                }} placeholder="Tumanni tanlang..." />
                            </RS.Col>
                            <RS.Col className="mb-1">
                                <RS.Label>Shaharcha/QFY</RS.Label>
                                <ReactSelect name="village_id" options={village} getOptionValue={option => option.id} getOptionLabel={option => option.name_uz} isDisabled={!village?.length} onChange={(e) => formik.setFieldValue("village_id", e.id)} placeholder="Shaharchani tanlang..." />
                            </RS.Col>
                            <RS.Col className="mb-1">
                                <RS.Label>Ko'cha</RS.Label>
                                <RS.Input name="address" placeholder="Kiriting" onBlur={formik.handleBlur} onChange={formik.handleChange} />
                            </RS.Col>
                            {/* <RS.Col className="mb-1">
                                <RS.Label>Pochta index</RS.Label>
                                <RS.Input name="postal_code" placeholder="Kiriting" onBlur={formik.handleBlur} mask="999999" maskChar="" tag={ReactInputMask} onChange={formik.handleChange} />
                            </RS.Col> */}
                            <RS.Col className="mb-1">
                                <RS.Label>Telefon</RS.Label>
                                <RS.Input name="phone" placeholder="998 00 000 00 00" onBlur={formik.handleBlur} onChange={formik.handleChange} mask="\9\98 99 999 99 99" maskChar=" " tag={ReactInputMask} />
                            </RS.Col>
                            <RS.Col className="mb-1">
                                <RS.Label>Email</RS.Label>
                                <RS.Input type="email" name="email" placeholder="example@gmail.com" onBlur={formik.handleBlur} onChange={formik.handleChange} />
                            </RS.Col>
                        </RS.Row>
                        <div className="d-flex justify-content-end gap-2 mt-2">
                            <RS.Button color="danger" onClick={() => history.push('/')} outline>Bekor qilish</RS.Button>
                            <RS.Button
                                color="success"
                                disabled={!(formik.isValid && formik.dirty)}
                                type="submit"
                            >
                                Keyingisi
                            </RS.Button>
                        </div>
                    </RS.CardBody>
                </RS.Form>
            </RS.Card>
        </>
    )
}
