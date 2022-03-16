import { Row, Col, Form, Input, Label, Button } from "reactstrap"
import { useFormik } from "formik"
import InputMask from "react-input-mask"

const dataFake = [
    {
        name: 'Ariza Raqami',
        value: "2312331"
    },
    {
        name: 'Ariza sanasi',
        value: "12.12.2021"
    },
    {
        name: 'Reyesrtdagi ro`yxat raqami',
        value: "1458321"
    },
    {
        name: 'Davlat ro`yxatidan o`tgan sanasi',
        value: "30.09.2021"
    },
    {
        name: 'THSHT',
        value: "YaTT"
    },
    {
        name: 'F.I.Sh',
        value: "IBROHIM ATAJANOV ISMOILOVICH"
    },
    {
        name: 'JSHSHIR',
        value: "58745896589654"
    },
    {
        name: 'Faoliyat yuritish muddati',
        value: "23.09.2021"
    },
    {
        name: 'Faoliyat turi',
        value: "Chakana savdo"
    },
    {
        name: "Qo'shimcha faoliyat turi",
        value: "Mavjud emas"
    },
    {
        name: 'Faoliyat joyi',
        value: "Toshkent shahar, Mirobod tumani Mirzo ko‘chasi 16-uy."
    },
    {
        name: 'Amaldagi status',
        value: "Vaqtinchalik to’xtatilgan"
    }
]

const dataReason = [
    {
        id: 1,
        name: 'Tadbirkorlikni rivojlantirmoqchiman'
    },
    {
        id: 3,
        name: 'Joy agratilganligi'
    },
    {
        id: 4,
        name: 'Kredit ajratilganligi'
    },
    {
        id: 0,
        name: 'Boshqa'
    }
]

const defaultValues = {
    reason: null,
    reason_text: null
}

const Reason = ({ nextStep, previousStep }) => {

    const formik = useFormik({
        initialValues: defaultValues,
        onSubmit: values => {
            console.log(values)
            nextStep()
        }
    })

    return (
        <>
            <Row xl={2} className="my-2">
                {
                    Array.isArray(dataFake) && dataFake.map((cd, ind) => (
                        <Col key={ind} className='d-flex aligin-items-center gap-1 p-1 border'>
                            <span className="h5">{cd.name}:</span>
                            <b>{cd.value}</b>
                        </Col>
                    ))
                }
            </Row>
            <hr className="my-2" />
            <h3>
                Faolyatni tiklash sababini ko’rsating
            </h3>
            <Form onSubmit={formik.handleSubmit} className="my-2">
                <Row xl={2}>
                    {
                        dataReason?.map((reason, i) => (
                            <Col key={i} className="mb-1">
                                <div className="d-flex items-center gap-1">
                                    <Input id={reason.id} type="radio" name="reason" value={reason.id} onChange={formik.handleChange} onBlur={formik.handleBlur} />
                                    <Label for={reason.id}>
                                        <h5>{reason.name}</h5>
                                    </Label>
                                </div>
                            </Col>
                        ))
                    }
                </Row>
                <Input disabled={formik.values?.reason !== '0'} name="reason_text" type="textarea" placeholder="Sababni korsating..." onChange={formik.handleChange} onBlur={formik.handleBlur} />
                <Row xl={2} className="my-1">
                    <Col>
                        <Label className='form-label' for='phone'>
                            Telfon Raqam
                        </Label>
                        <Input
                            onChange={formik.handleChange}
                            type="tel"
                            name="phone"
                            placeholder='+998 00 000 00 00'
                            mask="+\9\98 99 999 99 99"
                            maskChar=" "
                            onBlur={formik.handleBlur}
                            tag={InputMask} />
                    </Col>
                    <Col>
                        <Label className='form-label'>
                            Elektron pochta
                        </Label>
                        <Input
                            onChange={formik.handleChange}
                            type="email"
                            name="email"
                            placeholder='example@example.com'
                            onBlur={formik.handleBlur} />
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

export default Reason