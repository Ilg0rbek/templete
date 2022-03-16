// import { useState } from 'react'
import { Row, Col, Button, Label, InputGroup, Input, Form, Card, CardBody } from 'reactstrap'
import InputMask from "react-input-mask"

import { getByTin } from "@store/reducers/System"
import { useDispatch, useSelector } from 'react-redux'
import { useFormik } from 'formik'

import { rmSpace, getDate, legal_status } from '@utils'
import { useHistory, useLocation } from 'react-router-dom'
import qs from 'qs'


const FindByTin = ({ nextStep, handleSubmit = () => null }) => {
    const dispatch = useDispatch()
    const history = useHistory()
    const location = useLocation()
    const single = useSelector(state => state.sys?.single_data)
    const formik = useFormik({
        initialValues: {
            tin: null
        },
        onSubmit: (params) => {
            dispatch(getByTin(rmSpace(params.tin)))
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
    return (
        <Card>
            <CardBody>
                <h3 className="mb-2">Yuridik shaxs ma’lumotini izlash</h3>
                <div className="border rounded mb-2 p-2 shadow bg-white">
                    <Form onSubmit={formik.handleSubmit}>
                        <Label>Stir bilan izlash</Label>
                        <div className='d-flex align-items-center gap-1'>
                            <Input
                                placeholder='000 000 000'
                                type="text"
                                name='tin'
                                mask="999 999 999"
                                maskChar=" "
                                tag={InputMask} onChange={formik.handleChange} />
                            <Button type='submit' disabled={rmSpace(formik.values.tin)?.length !== 9} color='primary' outline>
                                Qidirish
                            </Button>
                        </div>
                    </Form>
                </div >
                {
                    single && (
                        <div className="border rounded mb-2 p-2 shadow bg-white">

                            <Row sm={2} xs={1} className="mb-1">

                                <Col className='d-flex aligin-items-center gap-1 p-1 border'>
                                    <span className="h5">Firma Nomi:</span>
                                    <b>{single.name}</b>
                                </Col>
                                <Col className='d-flex aligin-items-center gap-1 p-1 border'>
                                    <span className="h5">Reesrtdagi ro`yxatdan o`tilgan raqami:</span>
                                    <b>{single.id}</b>
                                </Col>
                                <Col className='d-flex aligin-items-center gap-1 p-1 border'>
                                    <span className="h5">Ro'yxatdan o'tgan sanasi:</span>
                                    <b>{getDate(single.registeredAt)}</b>
                                </Col>
                                <Col className='d-flex aligin-items-center gap-1 p-1 border'>
                                    <span className="h5">STIR:</span>
                                    <b>{single.tin}</b>
                                </Col>
                                <Col className='d-flex aligin-items-center gap-1 p-1 border'>
                                    <span className="h5">Asosiy IFUT kodi:</span>
                                    <b>{single.oked}</b>
                                </Col>
                                <Col className='d-flex aligin-items-center gap-1 p-1 border'>
                                    <span className="h5">OKPO kodi:</span>
                                    <b>{single.okpo}</b>
                                </Col>
                                <Col className='d-flex aligin-items-center gap-1 p-1 border'>
                                    <span className="h5">Tashkiliy-huquqiy shakli (THSHT):</span>
                                    <b>{single.opfId}</b>
                                </Col>
                                <Col className='d-flex aligin-items-center gap-1 p-1 border'>
                                    <span className="h5">Korxona holati:</span>
                                    <b>{legal_status(single.status)}</b>
                                </Col>
                                <Col className='d-flex aligin-items-center gap-1 p-1 border'>
                                    <span className="h5">Yuridik shaxs manzili:</span>
                                    <b>{single.addressStreet}</b>
                                </Col>
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

export default FindByTin
