import React, { Fragment, useEffect } from 'react'
import { Card, Col, Form, Input, Label, Row } from "reactstrap"
import { useFormik } from "formik"
import { useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { getViewAllById } from '../../../../../redux/reducers/Certificate'


export default () => {

    const formik = useFormik({
        // initialValues: defaultValues,
        onSubmit: values => {
            alert("ketdi")
            console.log(values)
        }
    })

    const { id } = useParams()
    const dispatch = useDispatch()
    const store = useSelector(state => state.certificate)
    // const defaultValues = {
    //     type_prophylactic: null,
    //     // email: '',
    //     web_service: '',
    //  
    //    export_excel_free: '',
    //     export_excel_paid: ''
    // }

    useEffect(() => {
        dispatch(getViewAllById({ id }))
    }, [])

    return (
        <Fragment>
            <Card className={"p-2"}>
                <Form onSubmit={formik.handleSubmit}>
                    <Row xl={3} sm={1}>
                        <Col xl={6}>
                            <Label for='opf'>Pasport kim tomonidan berilgan</Label>
                            <Input value={store?.viewIndividual?.passport_by_who} name={"name12"} type={"text"} />
                        </Col>
                        <Col xl={6}>
                            <Label for='oked'>Tashkiliy-huquqiy shakli (THSHT)</Label>
                            <Input value={store?.viewIndividual?.opf_name} name={"name12"} type={"text"} />
                        </Col>

                        <Col xl={6}>
                            <Label for='oked'>Yakka tartibdagi tadbirkor nomi</Label>
                            <Input value={store?.viewIndividual?.full_name} name={"name12"} type={"text"} />
                        </Col>
                        <Col xl={6}>
                            <Label for='opf'>Manzili</Label>
                            <Input value={store?.viewIndividual?.activity_address} name={"name12"} type={"text"} />
                        </Col>

                        <Col xl={6}>
                            <Label for='opf'>Turar joy</Label>
                            <Input value={store?.viewIndividual?.home_address} name={"name12"} type={"text"} />
                        </Col>
                        <Col xl={6}>
                            <Label for='opf'>Faoliyat turi</Label>
                            <Input name={"name12"} type={"text"} />
                        </Col>

                        <Col>
                            <Label for='opf'>Faoliyat yo`nalishi</Label>
                            <Input value={store?.viewIndividual?.activity_type_name} name={"name12"} type={"text"} />
                        </Col>
                        <Col>
                            <Label for='opf'>STIR</Label>
                            <Input value={store?.viewIndividual?.pinfl} name={"name12"} type={"text"} />
                        </Col>
                        <Col>
                            <Label for='opf'>Davlat ro'yhatidan o'tgan sanasi</Label>
                            <Input value={store?.viewIndividual?.official_registration_date} name={"name12"} type={"text"} />
                        </Col>
                        <Col>
                            <Label for='opf'>Reesrtdagi ro`yxatdan o`tilgan raqami</Label>
                            <Input value={store?.viewIndividual?.tin} name={"name12"} type={"text"} />
                        </Col>
                        <Col>
                            <Label for='opf'>Pasport seriyasi va raqami</Label>
                            <Input value={store?.viewIndividual?.passport_serial} name={"name12"} type={"text"} />
                        </Col>
                        <Col>
                            <Label for='opf'>Pasport berilgan sanasi</Label>
                            <Input value={store?.viewIndividual?.passport_issue_date} name={"name12"} type={"text"} />
                        </Col>
                    </Row>
                </Form>
            </Card>
        </Fragment>
    )
}
