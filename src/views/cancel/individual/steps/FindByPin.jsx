// import { useState } from 'react'
import { Row, Col, Button, Label, InputGroup, Input, Form, Card, CardBody } from 'reactstrap'
import InputMask from "react-input-mask"

import { getByPin } from "@store/reducers/System"
import { useDispatch, useSelector } from 'react-redux'
import { useFormik } from 'formik'

import { rmSpace, getDate } from '@utils'
import { useHistory, useLocation } from 'react-router-dom'
import qs from 'qs'


const FindByPin = ({ nextStep, handleSubmit = () => null }) => {
    const dispatch = useDispatch()
    const history = useHistory()
    const location = useLocation()
    const single = useSelector(state => state.sys?.single_individual)
    const formik = useFormik({
        initialValues: {
            pin: null
        },
        onSubmit: (params) => {
            dispatch(getByPin(rmSpace(params?.pin)))
        }
    })

    const nextPage = () => {
        const query = qs.parse(location.search, { ignoreQueryPrefix: true })
        const finalQuery = {
            ...query,
            id: single.id
        }
        history.push({
            pathname: location.pathname,
            search: `${qs.stringify(finalQuery)}`
        })
        handleSubmit()
        nextStep()
    }

    const individual = [
        {
            name: 'Kim tomonidan kiritilgan',
            value: single?.createdBy?.fullName
        },
        {
            name: 'FIO',
            value: single?.fullName
        },
        {
            name: 'THSHT',
            value: single?.opf?.shortName
        },
        {
            name: 'JSH SHIR',
            value: single?.pinfl
        },
        {
            name: "Davlat tomonidan ro'yxatdan o'tgan sanasi",
            value: getDate(single?.officialRegistrationDate)
        },
        {
            name: "Ro'yhatdan o'tish tugatilgan sana va vaqt",
            value: getDate(single?.registeredAt)
        },
        {
            name: 'Faolyati holati',
            value: single?.individualsStatus?.name
        }
    ]

    return (
        <Card>
            <CardBody>
                <h3 className="mb-2">Jismoniy shaxs ma’lumotini izlash</h3>
                <div className="border rounded mb-2 p-2 shadow bg-white">
                    <Form onSubmit={formik.handleSubmit}>
                        <Label>JSHSHIR bilan izlash</Label>
                        <div className='d-flex align-items-center gap-1'>
                            <Input
                                placeholder='0000 0000 00 0000'
                                type="text"
                                name='pin'
                                mask="9999 9999 99 9999"
                                maskChar=" "
                                tag={InputMask} onChange={formik.handleChange} />
                            <Button type='submit' disabled={rmSpace(formik.values.pin)?.length !== 14} color='primary' outline>
                                Qidirish
                            </Button>
                        </div>
                    </Form>
                </div >
                {
                    single && (
                        <div className="border rounded mb-2 p-2 shadow bg-white">

                            <Row sm={2} xs={1} className="mb-1">
                                {
                                    individual?.map((item, index) => (
                                        <Col key={index} className='d-flex aligin-items-center gap-1 p-1 border'>
                                            <span className="h5">{item.name}:</span>
                                            <b>{item.value}</b>
                                        </Col>
                                    ))
                                }
                            </Row>
                            <div className="d-flex items-center justify-content-end">
                                <Button onClick={nextPage} color='primary' className='text-center' >O'zgartirish</Button>
                            </div>
                        </div>
                    )
                }
            </CardBody>
        </Card>
    )
}

export default FindByPin