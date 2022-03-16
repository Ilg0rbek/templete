import React, {Fragment} from 'react'
import {Card, Col, Form, Input, Label, Row} from "reactstrap"
import {useFormik} from "formik"
import {AddressSchema} from "../../../register/utils"

const defaultValues = {
    type_prophylactic: null,
    // email: '',
    web_service: '',
    export_excel_free: '',
    export_excel_paid: ''
}

export default () => {

    const formik = useFormik({
        initialValues: defaultValues,
        validationSchema: AddressSchema,
        onSubmit: values => {
            alert("ketdi")
            console.log(values)
        }
    })

    return (
        <Fragment>
             <h3 className='mb-2'>Tashkilotlar va korxonalar davlat yagona registridan yuridik shaxs haqida MA'LUMOT</h3>
            <Card className={"p-2"}>
                <Form onSubmit={formik.handleSubmit}>
                    <Row xl={3} sm={1}>
                        <Col xl={6}>
                            <Label for='opf'>Korxona nomi</Label>
                            <Input name={"name12"} type={"text"}/>
                        </Col>
                        <Col xl={6}>
                            <Label for='oked'>Tashkiliy-huquqiy shakli (THSHT)</Label>
                            <Input name={"name12"} type={"text"}/>
                        </Col>

                        <Col>
                            <Label for='opf'>OKPO kodi</Label>
                            <Input name={"name12"} type={"text"}/>
                        </Col>
                        <Col>
                            <Label for='opf'>STIR</Label>
                            <Input name={"name12"} type={"text"}/>
                        </Col>
                        <Col>
                            <Label for='opf'>Davlat ro'yhatidan o'tgan sanasi</Label>
                            <Input name={"name12"} type={"text"}/>
                        </Col>
                        <Col>
                            <Label for='opf'>Manzili</Label>
                            <Input name={"name12"} type={"text"}/>
                        </Col>
                        <Col>
                            <Label for='opf'>Reesrtdagi ro`yxatdan o`tilgan raqami</Label>
                            <Input name={"name12"} type={"text"}/>
                        </Col>
                        <Col>
                            <Label for='opf'>Ro'yhatdan o'tilgan joy</Label>
                            <Input name={"name12"} type={"text"}/>
                        </Col>
                        <Col>
                            <Label for='opf'>Elektron pochta manzili</Label>
                            <Input name={"name12"} type={"text"}/>
                        </Col>
                        <Col>
                            <Label for='opf'>Telefon raqami</Label>
                            <Input name={"name12"} type={"text"}/>
                        </Col>
                        <Col>
                            <Label for='opf'>Ta'sischilar</Label>
                            <Input name={"name12"} type={"text"}/>
                        </Col>
                    </Row>
                </Form>
            </Card>
        </Fragment>
    )
}