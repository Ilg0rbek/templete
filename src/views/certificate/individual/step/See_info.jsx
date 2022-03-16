import React, {Fragment, useEffect, useState} from 'react'
import {Button, Card, Col, Form, Input, Label, Row} from "reactstrap"
import {useFormik} from "formik"
import {useParams} from 'react-router-dom'
import {useDispatch, useSelector} from 'react-redux'
import CancelModal from "./Components/Modal"
import * as certificate from "../../../../redux/reducers/Certificate"
import {unwrapResult} from "@reduxjs/toolkit"

export default ({ nextStep, type }) => {

    const dispatch = useDispatch()
    const {id} = useParams()

    const [open, setOpen] = useState()
    const toggle = () => setOpen(!open)
    const store = useSelector(state => state)
    const {viewIndividual} = store.certificate

    console.log(type)

    useEffect(() => {
        dispatch(certificate.certificateView({application_id: id}))
    }, [id])

    const formik = useFormik({
        // initialValues: defaultValues,
        onSubmit: values => {
            console.log(values)
        }
    })

    function prePayment() {
        dispatch(certificate.paymentCertificate({id})).then(unwrapResult).then(res => {
            console.log(res)
            nextStep()
        }).catch(err => {
            console.log(err)
        })
    }

    return (
        <Fragment>
            <Card className={"p-2"}>
                <Form onSubmit={formik.handleSubmit}>
                    <Row xl={3} sm={1}>
                        <Col xl={6}>
                            <Label for='opf'>Pasport kim tomonidan berilgan</Label>
                            <Input value={viewIndividual?.passport_by_who} name={"name12"}
                                   type={"text"}/>
                        </Col>
                        <Col xl={6}>
                            <Label for='oked'>Tashkiliy-huquqiy shakli (THSHT)</Label>
                            <Input value={viewIndividual?.opf_name} name={"name12"} type={"text"}/>
                        </Col>

                        <Col xl={6}>
                            <Label for='oked'>Yakka tartibdagi tadbirkor nomi</Label>
                            <Input value={viewIndividual?.full_name} name={"name12"} type={"text"}/>
                        </Col>
                        <Col xl={6}>
                            <Label for='opf'>Ro`yxatdan o`tilgan joy</Label>
                            <Input value={viewIndividual?.registration_address_soato} name={"name12"}
                                   type={"text"}/>
                        </Col>
                        <Col xl={6}>
                            <Label for='opf'>Manzili</Label>
                            <Input value={viewIndividual?.activity_address} name={"name12"}
                                   type={"text"}/>
                        </Col>

                        <Col xl={6}>
                            <Label for='opf'>Turar joy</Label>
                            <Input value={viewIndividual?.home_address} name={"name12"} type={"text"}/>
                        </Col>
                        <Col xl={6}>
                            <Label for='opf'>Faoliyat turi</Label>
                            <Input value={viewIndividual?.activity_type_name} name={"name12"} type={"text"}/>
                        </Col>
                        {/*<Col>*/}
                        {/*    <Label for='opf'>Faoliyat yo`nalishi</Label>*/}
                        {/*    <Input value={viewIndividual?.opfName} name={"name12"} type={"text"}/>*/}
                        {/*</Col>*/}
                        <Col>
                            <Label for='opf'>STIR</Label>
                            <Input value={viewIndividual?.tin} name={"name12"} type={"text"}/>
                        </Col>
                        <Col>
                            <Label for='opf'>Davlat ro'yhatidan o'tgan sanasi</Label>
                            <Input value={viewIndividual?.official_registration_date} name={"name12"} type={"text"}/>
                        </Col>
                        <Col>
                            <Label for='opf'>Pasport seriyasi va raqami</Label>
                            <Input
                                value={viewIndividual?.passport_serial}
                                name={"name12"} type={"text"}/>
                        </Col>
                        <Col>
                            <Label for='opf'>Pasport berilgan sanasi</Label>
                            <Input value={viewIndividual?.passport_issue_date} name={"name12"}
                                   type={"text"}/>
                        </Col>
                    </Row>
                </Form>
                <div className="mt-3 d-flex justify-content-between">
                    <Button className={type === 'see' ? 'd-none' : ''} outline color={"danger"} onClick={toggle}>Bekor qilish</Button>
                    <Button color={"primary"} onClick={prePayment}>Keyingisi</Button>
                </div>
            </Card>
            <CancelModal toggle={toggle} open={open}/>
        </Fragment>
    )
}
