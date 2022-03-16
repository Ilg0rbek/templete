import { Row, Col, Form, Input, Label, Button } from "reactstrap"
import { useFormik } from "formik"
import InputMask from "react-input-mask"
import Select from "react-select"
// const dataFake = [
//     {
//         name: 'Ariza Raqami',
//         value: "2312331"
//     },
//     {
//         name: 'Ariza sanasi',
//         value: "12.12.2021"
//     },
//     {
//         name: 'Reyesrtdagi ro`yxat raqami',
//         value: "1458321"
//     },
//     {
//         name: 'Davlat ro`yxatidan o`tgan sanasi',
//         value: "30.09.2021"
//     },
//     {
//         name: 'THSHT',
//         value: "YaTT"
//     },
//     {
//         name: 'F.I.Sh',
//         value: "IBROHIM ATAJANOV ISMOILOVICH"
//     },
//     {
//         name: 'JSHSHIR',
//         value: "58745896589654"
//     },
//     {
//         name: 'Faoliyat yuritish muddati',
//         value: "23.09.2021"
//     },
//     {
//         name: 'Faoliyat turi',
//         value: "Chakana savdo"
//     },
//     {
//         name: "Qo'shimcha faoliyat turi",
//         value: "Mavjud emas"
//     },
//     {
//         name: 'Faoliyat joyi',
//         value: "Toshkent shahar, Mirobod tumani Mirzo ko‘chasi 16-uy."
//     },
//     {
//         name: 'Amaldagi status',
//         value: "Vaqtinchalik to’xtatilgan"
//     }
// ]

// const dataReason = [
//     {
//         id: 1,
//         name: 'Boshqa ish faoliyati bilan shug’ullanmoqchiman.'
//     },
//     {
//         id: 2,
//         name: 'Firma tashkil qilmoqchiman.'
//     },
//     {
//         id: 3,
//         name: 'Joy yo‘qligi'
//     },
//     {
//         id: 4,
//         name: 'Kredit ajratilmagan'
//     },
//     {
//         id: 0,
//         name: 'Boshqa'
//     }
// ]

const defaultValues = {
    reason: null,
    reason_text: null
}

const CancelReason = ({ nextStep, previousStep }) => {

    const formik = useFormik({
        initialValues: defaultValues,
        onSubmit: values => {
            console.log(values)
            nextStep()
        }
    })

    return (
        <>
            <Form onSubmit={formik.handleSubmit} className="my-2">

                <Row xl={2} className="my-1">
                    <Col className='mb-1'>
                        <Label>Hujjat turi</Label>
                        <Select
                            onChange={(option) => formik.setFieldValue('document_type', option.value)}
                            onBlur={formik.handleBlur}
                            name="document_type"
                            className='react-select'
                            classNamePrefix='select'
                        />
                        {/* {errors.document_type && touched.document_type && (
                            <span className='text-danger'>{errors.document_type}</span>
                        )} */}
                    </Col>
                    <Col className='mb-1'>
                        <Label>F.I.O.</Label>
                        <Input
                            type='text'
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            name='name'
                            placeholder='F.I.O kiriting...' />
                    </Col>
                    <Col className='mb-1'>
                        <Label>Passport seryasi va raqami</Label>
                        <Input
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            name="stir"
                            placeholder='AB1234567'
                            type="text" />
                    </Col>
                    <Col className='mb-1'>
                        <Label>Passport berilgan sana</Label>
                        <Input
                            type='date'
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            name='document_date' />
                    </Col>
                    <Col className='mb-1'>
                        <Label>PINFL (JSHSHIR)</Label>
                        <Input
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            name="inn"
                            placeholder='0000 0000 0000 0000'
                            type="text"
                            mask="9999 9999 9999 9999"
                            maskChar=" "
                            tag={InputMask} />
                    </Col>

                    <Col className='mb-1'>
                        <Label>Telefon</Label>
                        <Input
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            type="tel"
                            name="phone"
                            placeholder='+998 00 000 00 00'
                            mask="+\9\98 99 999 99 99"
                            maskChar=" "
                            tag={InputMask} />
                    </Col>
                    <Col className='mb-1'>
                        <Label>Email</Label>
                        <Input
                            type='email'
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            name='email'
                            placeholder='example@example.com' />
                    </Col>
                </Row>
                <div className="d-flex justify-content-end gap-1">
                    <Button type="button" onClick={() => previousStep()} outline>Bekor qilish</Button>
                    <Button color="primary" type="submit">Keyingi</Button>
                </div>
            </Form>
        </>
    )
}

export default CancelReason