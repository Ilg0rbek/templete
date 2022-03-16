import * as RS from "reactstrap"
import * as I from "react-feather"
import ReactSelect from "react-select"
import {useDispatch, useSelector} from "react-redux"
import {
    getByPassport,
    getIndividualDocTypes
} from "@store/reducers/System"
import {useFormik} from "formik"
import * as yup from 'yup'
import ReactInputMask from "react-input-mask"
import {unwrapResult} from "@reduxjs/toolkit"
import {useEffect} from "react"
import {useParams} from "react-router-dom"
import {createApplicantLegal} from "../../../../redux/reducers/Register"

const ValidSchema = yup.object({
    document_serial: yup.string().required(),
    document_type: yup.number().required(),
    pinfl: yup.string().required(),
    first_name: yup.string().required(),
    last_name: yup.string().required(),
    middle_name: yup.string().required(),
    phone: yup.string().required(),
    email: yup.string().email().required()
})

export default ({nextStep}) => {
    const {id} = useParams()
    const dispatch = useDispatch()
    const {isLoading, inDocTypesList} = useSelector(state => state.sys)

    useEffect(() => {
        dispatch(getIndividualDocTypes())
    }, [])

    const options = inDocTypesList?.filter(option => {
        return option.id !== 2
    })

    const formik = useFormik({
        validationSchema: ValidSchema,
        initialValues: {
            document_type: '',
            document_serial: '',
            pinfl: '',
            first_name: '',
            last_name: '',
            middle_name: '',
            phone: '',
            email: ''
        },
        onSubmit: (data) => {
            dispatch(createApplicantLegal({id: parseInt(id), data})).then(unwrapResult).then(() => nextStep())
        }
    })

    const handleFindByPass = () => {
        dispatch(getByPassport({passport: (formik.values.document_serial)?.toUpperCase()})).then(unwrapResult).then((res) => {
            formik.setFieldValue('pinfl', res?.pinfl)
            formik.setFieldValue('first_name', `${res?.firstname}`)
            formik.setFieldValue('last_name', `${res?.lastname}`)
            formik.setFieldValue('middle_name', `${res?.middlename}`)
        })
    }

    return (
        <>
            <RS.Card>
                {/*<RS.CardHeader>*/}
                {/*    /!*<h4>Arizachi to'g'risidagi ma'lumotlar</h4>*!/*/}
                {/*</RS.CardHeader>*/}
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
                                    <RS.Input disabled={!formik.values.document_type}
                                              style={{textTransform: "uppercase"}} name="document_serial"
                                              placeholder="AB0000000" mask="aa9999999" maskChar="" tag={ReactInputMask}
                                              onBlur={formik.handleBlur} onChange={formik.handleChange}/>
                                    {
                                        isLoading ? <RS.Button.Ripple onClick={handleFindByPass} disabled={true} outline
                                                                      color="primary">
                                            <I.Loader size={20}/>
                                        </RS.Button.Ripple> : <RS.Button.Ripple onClick={handleFindByPass}
                                                                                disabled={formik.values.document_serial.length !== 9}
                                                                                outline color="primary">
                                            <I.Search size={20}/>
                                        </RS.Button.Ripple>
                                    }
                                </RS.InputGroup>
                            </RS.Col>
                            <RS.Col className="mb-1">
                                <RS.Label>F.I.O</RS.Label>
                                <RS.Input name="full_name"
                                          value={`${formik.values.first_name} ${formik.values.last_name} ${formik.values.middle_name}`}
                                          // disabled={!formik.values.full_name}
                                          placeholder="Kiriting" onBlur={formik.handleBlur}
                                          onChange={formik.handleChange}/>
                            </RS.Col>
                            <RS.Col className="mb-1">
                                <RS.Label>Pinfl</RS.Label>
                                <RS.Input name="pinfl" value={formik.values.pinfl} placeholder="Kiriting"
                                          mask="9 999999 999 999 9" maskChar=" " tag={ReactInputMask}
                                          onBlur={formik.handleBlur} onChange={formik.handleChange}/>
                            </RS.Col>
                            <RS.Col className="mb-1">
                                <RS.Label>Telefon</RS.Label>
                                <RS.Input name="phone" placeholder="998 00 000 00 00" onBlur={formik.handleBlur}
                                          onChange={formik.handleChange} mask="\9\98 99 999 99 99" maskChar=" "
                                          tag={ReactInputMask}/>
                            </RS.Col>
                            <RS.Col className="mb-1">
                                <RS.Label>Email</RS.Label>
                                <RS.Input type="email" name="email" placeholder="example@gmail.com"
                                          onBlur={formik.handleBlur} onChange={formik.handleChange}/>
                            </RS.Col>
                        </RS.Row>
                        <div className="d-flex justify-content-end gap-2 mt-2">
                            <RS.Button color="danger" onClick={() => previousStep()} outline>Bekor qilish</RS.Button>
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
