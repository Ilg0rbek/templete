import { Row, Col, Form, Input, Label, Button, Card, CardBody } from "reactstrap"
import { useFormik } from "formik"
import { uploadDocument, createDocuments, checkApplication } from "@store/reducers/Legal_Cancel"
import { useDispatch, useSelector } from "react-redux"
import { toast } from "react-toastify"
import { unwrapResult } from "@reduxjs/toolkit"
// import ReactInputMask from "react-input-mask"
import UILoader from '@components/ui-loader'
import Spinner from '@components/spinner/Loading-spinner'
import { useState } from "react"

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
    }
]

const Application = ({ query, nextStep, previousStep }) => {
    const dispatch = useDispatch()
    const [loading, setLoading] = useState(false)
    const [text, setText] = useState(true)
    const { isloading } = useSelector(state => state.legal_cancel)
    const checkedApplication = () => {
        dispatch(checkApplication(query?.id)).then(unwrapResult).then(() => nextStep())
    }
    const formik = useFormik({
        initialValues: {
            type: 1,
            basis: "",
            number: "",
            date: ""
        },
        onSubmit: values => {
            dispatch(createDocuments({
                id: query.id,
                data: {
                    basis: values.basis,
                    number: values.number,
                    date: values.date
                }
            })).then(unwrapResult).then(() => checkedApplication())
        }
    })

    const handleUpload = (e) => {
        setLoading(false)
        if (formik.values.type) {
            const data = new FormData()
            data.append('file', e.target?.files[0])
            data.append('type', formik.values.type)
            dispatch(uploadDocument({ id: query.id, data }))
        } else {
            toast.warning("Qaror turini tanlang!")
        }
    }
    console.log(formik.values)
    return (
        <UILoader blocking={isloading || loading} loader={<Spinner />}>
            <Card>
                <CardBody>
                    <h3>
                        Ixtiyoriy to’xtatish sababini ko’rsating
                    </h3>
                    <Form onSubmit={formik.handleSubmit} className="my-2">
                        <Row xl={3} className="my-1">
                            <Col>
                                <Label className='form-label'>
                                    Qaror raqami
                                </Label>
                                <Input
                                    onChange={formik.handleChange}
                                    type="number"
                                    name="number"
                                    placeholder='ex: 123321'
                                    onBlur={formik.handleBlur} />
                            </Col>
                            <Col>
                                <Label className='form-label'>
                                    Qaror sanasi
                                </Label>
                                <Input
                                    onChange={formik.handleChange}
                                    type="date"
                                    name="date"
                                    onBlur={formik.handleBlur} />
                            </Col>
                            <Col>
                                <Label className='form-label'>
                                    File yuklash
                                </Label>
                                <Input
                                    onLoadStart={() => setLoading(true)}
                                    onChange={handleUpload}
                                    type="file"
                                    name="file"
                                />
                            </Col>
                        </Row>
                        <Row sm={2} md={3} className="mb-2">
                            {
                                dataReason.map((item, index) => (
                                    <Col key={index} className="mt-2 gap-1 d-flex">
                                        <Input name="basis" value={item.name} onChange={() => {
                                            formik.setFieldValue('basis', item.name)
                                            setText(true)
                                        }} id={index} type="radio" />
                                        <label htmlFor={index}>{item.name}</label>
                                    </Col>
                                ))
                            }
                            <Col className="mt-2 gap-1 d-flex">
                                <Input name="basis" id='another' onChange={() => setText(false)} type="radio" />
                                <label htmlFor='another'>Boshqa</label>
                            </Col>
                        </Row>
                        <Input disabled={text} name="basis" type="textarea" className="mb-2" placeholder="Sababni korsating..." onChange={formik.handleChange} onBlur={formik.handleBlur} />
                        <div className="d-flex justify-content-end gap-1">
                            <Button type="button" onClick={() => previousStep()} outline>Bekor qilish</Button>
                            <Button color="primary" type="submit">Keyingi</Button>
                        </div>
                    </Form>
                </CardBody>
            </Card>
        </UILoader>

    )
}

export default Application