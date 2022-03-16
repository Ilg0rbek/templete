import { Row, Col, Form, Input, Label, Button } from "reactstrap"
import { useFormik } from "formik"
import InputMask from "react-input-mask"

const dataReason = [
    {
        id: 1,
        name: 'Boshqa ish faoliyati bilan shug’ullanmoqchiman.'
    },
    {
        id: 2,
        name: 'Firma tashkil qilmoqchiman.'
    },
    {
        id: 3,
        name: 'Joy yo‘qligi'
    },
    {
        id: 4,
        name: 'Kredit ajratilmagan'
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

const Application = ({ nextStep, previousStep }) => {

    const formik = useFormik({
        initialValues: defaultValues,
        onSubmit: values => {
            console.log(values)
            nextStep()
        }
    })

    return (
        <>
            <h3>
                Ixtiyoriy to’xtatish sababini ko’rsating
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
                <Row xl={3} className="my-1">
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
                    <Col>
                        <Label className='form-label'>
                            File yuklash
                        </Label>
                        <Input
                            onChange={formik.handleChange}
                            type="file"
                            name="file"
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

export default Application