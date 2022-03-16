import React, {Fragment} from 'react'
import {Button, Card, Col, Form, Input, InputGroup, Label, Row} from "reactstrap"
import {useFormik} from "formik"
import {AddressSchema} from "../../../register/utils"
import ReactSelect from "react-select"

const defaultValues = {
    type_prophylactic: null,
    // email: '',
    web_service: '',
    export_excel_free: '',
    export_excel_paid: ''
}

export default () => {

    // const history = useHistory()
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
                <h3 className='mb-1'>LERegRequiriments</h3>
            </div>
            <Card className={"p-2"}>
                <Form onSubmit={formik.handleSubmit}>
                    <Row xl={3} sm={1}>
                        <Col xl={6}>
                            <Label for='opf'>OPF</Label>
                            <ReactSelect name="thsht"/>
                        </Col>
                        <Col xl={6}>
                            <Label for='oked'>okedGroup</Label>
                            <ReactSelect name="thsht"/>
                        </Col>

                        <Col>
                            <Label for='opf'>Тип учредителей Физ.</Label>
                            <ReactSelect name={"name"}/>
                        </Col>
                        <Col>
                            <Label for='opf'>Тип учредителей Гос</Label>
                            <ReactSelect name={"name"}/>
                        </Col>
                        <Col>
                            <Label for='opf'>Тип учредителей ин. Физ.</Label>
                            <ReactSelect name={"name"}/>
                        </Col>
                        <Col>
                            <Label for='opf'>Тип учредителей Юр.</Label>
                            <ReactSelect name={"name"}/>
                        </Col>
                        <Col>
                            <Label for='opf'>Тип учредителей ин. Юр</Label>
                            <ReactSelect name={"name"}/>
                        </Col>
                        <Col>
                            <Label for='opf'>Док. Устав</Label>
                            <ReactSelect name={"name"}/>
                        </Col>
                        <Col>
                            <Label for='opf'>Док. решениями През. и Правительства Республики Узб.</Label>
                            <ReactSelect name={"name"}/>
                        </Col>
                        <Col>
                            <Label for='opf'>Док. Решения хокима выделение земли</Label>
                            <ReactSelect name={"name"}/>
                        </Col>
                        <Col>
                            <Label for='opf'>Док. Учредителный договор</Label>
                            <ReactSelect name={"name"}/>
                        </Col>


                        <Col>
                            <Label for='opf'>Учредители минимум</Label>
                            <Input name={"name12"} type={"text"}/>
                        </Col>
                        <Col>
                            <Label for='opf'>Учредители махимум</Label>
                            <Input name={"name12"} type={"text"}/>
                        </Col>
                        <Col>
                            <Label for='opf'>Стоимость услуги. МРЗП</Label>
                            <Input name={"name12"} type={"text"}/>
                        </Col>
                        <Col>
                            <Label for='opf'>Минимальный Уставной фонд. Сум</Label>
                            <Input name={"name12"} type={"text"}/>
                        </Col>
                        <Col>
                            <Label for='opf'>Минимальный Уставной фонд. Доллар</Label>
                            <Input name={"name12"} type={"text"}/>
                        </Col>
                        <Col>
                            <Label for='opf'>Минимальный Уставной фонд. Eur</Label>
                            <Input name={"name12"} type={"text"}/>
                        </Col>


                        <Col>
                            <InputGroup className="mt-1">
                                <Label htmlFor="backShow">Гос.органы. Мин.Юст</Label>
                                <Input
                                    id={"name5235"}
                                    type="checkbox"
                                    className={"mx-1"}
                                />
                            </InputGroup>
                        </Col>
                        <Col>
                            <InputGroup className="mt-1">
                                <Label htmlFor="backShow">Гос.органы. ЦЕО при Хокимиятах</Label>
                                <Input
                                    id={"name5235"}
                                    type="checkbox"
                                    className={"mx-1"}
                                />
                            </InputGroup>
                        </Col>
                        <Col>
                            <InputGroup className="mt-1">
                                <Label htmlFor="backShow">Гос.органы. ГКС</Label>
                                <Input
                                    id={"name5235"}
                                    type="checkbox"
                                    className={"mx-1"}
                                />
                            </InputGroup>
                        </Col>
                        <Col>
                            <InputGroup className="mt-1">
                                <Label htmlFor="backShow">Гос.органы. МВЭСИТ</Label>
                                <Input
                                    id={"name5235"}
                                    type="checkbox"
                                    className={"mx-1"}
                                />
                            </InputGroup>
                        </Col>
                        <Col>
                            <InputGroup className="mt-1">
                                <Label htmlFor="backShow">Гос.органы. Тер. Управ. Мин.Юст</Label>
                                <Input
                                    id={"name5235"}
                                    type="checkbox"
                                    className={"mx-1"}
                                />
                            </InputGroup>
                        </Col>
                        <Col>
                            <InputGroup className="mt-1">
                                <Label htmlFor="backShow">Гос.органы. ГНК</Label>
                                <Input
                                    id={"name5235"}
                                    type="checkbox"
                                    className={"mx-1"}
                                />
                            </InputGroup>
                        </Col>
                        <Col>
                            <InputGroup className="mt-1">
                                <Label htmlFor="backShow">Гос.органы. Агенство интеллек. собственности</Label>
                                <Input
                                    id={"name5235"}
                                    type="checkbox"
                                    className={"mx-1"}
                                />
                            </InputGroup>
                        </Col>

                        <Col xl={12} className='d-flex justify-content-end mt-1'>
                            <Button type='button' color='outline-danger' className='btn-prev'
                                    onClick={() => history.push('/dashboard')}>
                                <span className='align-middle d-inline-block'>Bekor qilish</span>
                            </Button>
                            <Button type='submit' color='primary' className='btn-next mx-1'>
                                <span className='align-middle d-inline-block'>Saqlash</span>
                            </Button>
                        </Col>
                    </Row>
                </Form>
            </Card>
        </Fragment>
    )
}
