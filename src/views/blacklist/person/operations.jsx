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
            <h1 className="mb-2">Qidiruvdagi shaxslarni qo'shish</h1>
            <Card className='overflow-hidden'>
                <CardBody>
                    <Form onSubmit={formik.handleSubmit}>
                        <Row xl={2}>
                            <Col xl="4">
                                <Label className={"mt-1"}>Ismi</Label>
                                <Input
                                    name="name"
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    placeholder="Kiriting..." />
                            </Col>
                            <Col xl="4">
                                <Label className={"mt-1"}>Familyasi</Label>
                                <Input
                                    name="family"
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    placeholder="Kiriting..." />
                            </Col>
                            <Col xl="4">
                                <Label className={"mt-1"}>Otasining ismi</Label>
                                <Input
                                    name='surname'
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    placeholder="Kiriting..." />
                            </Col>
                            <Col>
                                <Label className={"mt-1"}>Tug'ilgan kuni</Label>
                                <Input
                                    name="birthday"
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    type='date' />
                            </Col>
                            <Col>
                                <Label className={"mt-1"}>Tug'ilgan joyi</Label>
                                <Input
                                    name="address"
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    placeholder="Kiriting..." />
                            </Col>
                            <Col xl="4">
                                <Label className={"mt-1"}>Passport Seryasi</Label>
                                <Input
                                    name="passport_series"
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    placeholder="Kiriting..." />
                            </Col>
                            <Col xl="4">
                                <Label className={"mt-1"}>Passport Raqami</Label>
                                <Input
                                    name="passport_numbers"
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    placeholder="Kiriting..." />
                            </Col>
                            <Col xl="4">
                                <Label className={"mt-1"}>Passport berilgan sana</Label>
                                <Input
                                    name="passport_date"
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    type='date' />
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
