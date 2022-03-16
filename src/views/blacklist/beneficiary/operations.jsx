import React from 'react'
import { Input, Row, Col, Label, Button, Card, CardBody, Form } from "reactstrap"
import { useHistory } from 'react-router-dom'
import { useFormik } from "formik"

const defaultValues = {
    name: '',
    family: '',
    surname: '',
    address: '',
    birthday: '',
    passport_series: '',
    passport_numbers: '',
    passport_date: ''
}

export default () => {
    const history = useHistory()

    const formik = useFormik({
        initialValues: defaultValues,
        onSubmit: values => {
            alert(JSON.stringify(values))
        }
    })

    return (
        <>
            <h1 className="mb-2">Benefitsiar mulkdorlarni qo'shish</h1>
            <Card className='overflow-hidden'>
                <CardBody>
                    <Form onSubmit={formik.handleSubmit}>
                        <Row xl={2}>
                            <Col>
                                <Label className={"mt-1"}>Tashkilot nomi</Label>
                                <Input
                                    name="company_name"
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    placeholder="Kiriting..." />
                            </Col>
                            <Col>
                                <Label className={"mt-1"}>TIN</Label>
                                <Input
                                    name="tin"
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    placeholder="Kiriting..." />
                            </Col>
                            <Col xl="3">
                                <Label className={"mt-1"}>Ismi</Label>
                                <Input
                                    name="name"
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    placeholder="Kiriting..." />
                            </Col>
                            <Col xl="3">
                                <Label className={"mt-1"}>Familyasi</Label>
                                <Input
                                    name="family"
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    placeholder="Kiriting..." />
                            </Col>
                            <Col xl="3">
                                <Label className={"mt-1"}>Otasining ismi</Label>
                                <Input
                                    name='surname'
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    placeholder="Kiriting..." />
                            </Col>
                            <Col xl="3">
                                <Label className={"mt-1"}>Passport Seryasi va Raqami</Label>
                                <Input
                                    name="passport"
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    placeholder="Kiriting..." />
                            </Col>
                        </Row>
                        <div className="d-flex justify-content-end gap-1 mt-2">
                            <Button color="danger" type='button' outline onClick={() => history.goBack()}>Bekor qilish</Button>
                            <Button color="success" type="submit">Saqlash</Button>
                        </div>
                    </Form>
                </CardBody>
            </Card>
        </>
    )
}
