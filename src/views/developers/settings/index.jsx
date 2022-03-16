import React, {Fragment} from 'react'
import {Button, Card, Col, Form, Input, InputGroup, Label, Row} from "reactstrap"
import {useHistory} from "react-router-dom"
import {useFormik} from "formik"
import {AddressSchema} from "../../register/utils"

const defaultValues = {
    type_prophylactic: null,
    // email: '',
    web_service: '',
    export_excel_free: '',
    export_excel_paid: ''
}

export default () => {

    const history = useHistory()
    // const dispatch = useDispatch()

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
            <div className='content-header'>
                <h3 className='mb-1'>Umumiy sozlamalar</h3>
            </div>
            <Card className={"p-2"}>
                <Form onSubmit={formik.handleSubmit}>
                    <Row className='mb-1'>
                        <Col md='6'>
                            <Row>
                                <Label for='numeral-formatting'>Profilaktika rejimi</Label>
                                <InputGroup>
                                    <Input name='type_prophylactic' type="select">
                                        <option value={true}>Enable</option>
                                        <option value={false}>Disable</option>
                                    </Input>
                                </InputGroup>
                                {formik.errors.type_prophylactic && formik.touched.type_prophylactic && (
                                    <span className='text-danger'>{formik.errors.type_prophylactic}</span>
                                )}
                            </Row>
                            <Row>
                                <Label for='numeral-formatting'>"id.gov.uz" orqali kirish</Label>
                                <InputGroup>
                                    <Input name='type_prophylactic' type="select">
                                        <option value={true}>Enable</option>
                                        <option value={false}>Disable</option>
                                    </Input>
                                </InputGroup>
                                {formik.errors.type_prophylactic && formik.touched.type_prophylactic && (
                                    <span className='text-danger'>{formik.errors.type_prophylactic}</span>
                                )}
                            </Row>
                            <Row>
                                <Label for='numeral-formatting'>Tax services</Label>
                                <InputGroup>
                                    <Input name='type_prophylactic' type="select">
                                        <option value={true}>Enable</option>
                                        <option value={false}>Disable</option>
                                    </Input>
                                </InputGroup>
                                {formik.errors.type_prophylactic && formik.touched.type_prophylactic && (
                                    <span className='text-danger'>{formik.errors.type_prophylactic}</span>
                                )}
                            </Row>
                        </Col>
                        <Col md='6'>
                            <Row>
                                <Label for='numeral-formatting'>"ЭЦП" orqali kirish</Label>
                                <InputGroup>
                                    <Input name='type_prophylactic' type="select">
                                        <option value={true}>Enable</option>
                                        <option value={false}>Disable</option>
                                    </Input>
                                </InputGroup>
                                {formik.errors.type_prophylactic && formik.touched.type_prophylactic && (
                                    <span className='text-danger'>{formik.errors.type_prophylactic}</span>
                                )}
                            </Row>
                            <Row>
                                <Label for='numeral-excel-free'>Excelga export qilish limit</Label>
                                <InputGroup>
                                    <Input name='export_excel_free' type="text" onChange={formik.handleChange}
                                           onBlur={formik.handleBlur}/>
                                </InputGroup>
                                {formik.errors.export_excel_free && formik.touched.export_excel_free && (
                                    <span className='text-danger'>{formik.errors.export_excel_free}</span>
                                )}
                            </Row>
                            <Row>
                                <Label for='numeral-excel-paid'>Excelga export qilish limit(Pullik xizmat)</Label>
                                <InputGroup>
                                    <Input name='export_excel_paid' type="text" onChange={formik.handleChange}
                                           onBlur={formik.handleBlur}/>
                                </InputGroup>
                                {formik.errors.export_excel_paid && formik.touched.export_excel_paid && (
                                    <span className='text-danger'>{formik.errors.export_excel_paid}</span>
                                )}
                            </Row>
                        </Col>
                    </Row>

                    <Row className='mb-1'>
                        <Col md='12'>
                            <Label className='form-label' for='web_service'>
                                Ulangan web - servis
                            </Label>
                            <Input name='web_service' type="textarea"
                                   onChange={formik.handleChange} onBlur={formik.handleBlur}/>
                            {formik.errors.web_service && formik.touched.web_service && (
                                <span className='text-danger'>{formik.errors.web_service}</span>
                            )}
                        </Col>
                    </Row>
                    <div className='d-flex justify-content-end'>
                        <Button type='button' color='outline-danger' className='btn-prev'
                                onClick={() => history.push('/dashboard')}>
                            <span className='align-middle d-inline-block'>Bekor qilish</span>
                        </Button>
                        <Button type='submit' color='primary' className='btn-next mx-1'>
                            <span className='align-middle d-inline-block'>Saqlash</span>
                        </Button>
                    </div>
                </Form>
            </Card>
        </Fragment>
    )
}
