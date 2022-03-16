import { useFormik } from 'formik'
import { useEffect, useState } from 'react'
import { ArrowLeft, ArrowRight, Plus, Search } from 'react-feather'
import { useDispatch, useSelector } from 'react-redux'
import {
    Accordion,
    AccordionBody,
    AccordionHeader,
    AccordionItem,
    Button,
    Col,
    Form,
    Input,
    Label,
    ListGroup,
    ListGroupItem,
    Row
} from 'reactstrap'
import * as yup from "yup"
import { createActivityIndividual } from "@store/reducers/Register"
import { getOkedStepLegal } from "@store/reducers/System"
import { algoritmOkedSpacelTree } from "@utils"
import { unwrapResult } from '@reduxjs/toolkit'
import { useParams } from 'react-router-dom'
import ReactInputMask from "react-input-mask"

const ValidateSchema = yup.object({
    taxSequence_vat: yup.boolean().required(),
    activity_type_id: yup.number().required(),
    additional_activities: yup.array().required(),
    expiry: yup.string().oneOf(['NoChange', 'SixMonth', 'OneYear', 'TwoYear', 'ThreeYear', 'Unlimited']).required()
})

const Activity = ({ previousStep, nextStep }) => {
    const dispatch = useDispatch()
    const { id } = useParams()
    const { okedActivity } = useSelector(state => state.sys)
    const [open, setOpen] = useState('')
    const [selectedActivity, setSelectedActivity] = useState('')

    const toggle = id => {
        open === id ? setOpen() : setOpen(id)
    }
    const activity = algoritmOkedSpacelTree(okedActivity)

    useEffect(() => {
        dispatch(getOkedStepLegal())
    }, [])

    const formik = useFormik({
        validationSchema: ValidateSchema,
        initialValues: {
            taxSequence_vat: '',
            activity_type_id: '',
            additional_activities: [],
            expiry: ''
        },
        onSubmit: (val) => {
            const additional_activities = []
            val?.additional_activities?.forEach((item) => additional_activities.push(item?.id))
            const data = {
                taxSequence_vat: val.taxSequence_vat,
                activity_type_id: val.activity_type_id,
                additional_activities: JSON.stringify(additional_activities),
                expiry: val.expiry
            }
            dispatch(createActivityIndividual({ id, data })).then(unwrapResult).then(() => nextStep())
        }
    })

    return (
        <>
            <Form onSubmit={formik.handleSubmit}>
                <Row sm={2} md={3} className='mb-1'>
                    <Col xl={12} md={12} sm={12} xs={12}
                        className="mt-1 mb-2 d-flex flex-column align-items-center justify-content-center">
                        <b className='mb-1'>Soliq turini tanlang</b>
                        <div className='d-flex justify-content-center gap-4'>
                            <Button color={formik.values.taxSequence_vat === true ? 'primary' : 'secondary'}
                                onClick={() => formik.setFieldValue("taxSequence_vat", true)}>
                                Aylanmadan olinadigan soliq
                            </Button>
                            <Button color={formik.values.taxSequence_vat === false ? 'primary' : 'secondary'}
                                onClick={() => formik.setFieldValue("taxSequence_vat", false)}>
                                Qo`shilgan qiymat solig`i va foyda solig`i
                            </Button>
                        </div>
                    </Col>
                    <Col md={4}>
                        <Label>Tahminiy ishchi sonini kiriting!</Label>
                        <Input
                            type={'text'}
                            name={"memberNumber"}
                            // maxlength={5}
                            placeholder="Ex: 235" mask="99999" maskChar="" tag={ReactInputMask}
                            onChange={formik.handleChange}
                        />
                    </Col>
                    <Col md={8}>
                        <Label>IFUT kodini kiriting</Label>
                        <div className="d-flex align-items-center gap-1">
                            <Input type="text" placeholder="Izlash..." />
                            <Input className="text-center" style={{ width: '100px' }} placeholder="0 0 0 0 0"
                                mask="9 9 9 9 9" maskChar=" " tag={ReactInputMask} />
                            <Button color="primary">
                                <Search size={14} />
                            </Button>
                        </div>
                    </Col>
                    <Col sm={6} md={12} className="mt-1">
                        <div className='d-flex justify-content-between mb-1'>
                            <span className='me-2'>IFUTni aniqlang va tanlang</span>
                            <Button disabled={true} size="sm"
                                color={selectedActivity ? 'success' : 'secondary'}>{selectedActivity ? "Tanlandi" : 'Tanlanmagan'}</Button>
                        </div>
                        {
                            selectedActivity ? (
                                <ListGroup>
                                    <ListGroupItem color='primary'>{selectedActivity?.name}</ListGroupItem>
                                </ListGroup>
                            ) : null
                        }
                    </Col>
                    {
                        !selectedActivity ? (
                            <Col xl={12} md={12} sm={12} xs={12} className="mt-1">
                                {/*<Label>Asosiy faolyat turini tanlang...</Label>*/}
                                <Accordion className='accordion-margin' open={open} toggle={toggle}>
                                    {
                                        activity?.map((item, index) => (
                                            <AccordionItem key={index} className="shadow-lg">
                                                <AccordionHeader targetId={index}>
                                                    <b className='text-center w-100'>{item?.name}</b>
                                                </AccordionHeader>
                                                <AccordionBody accordionId={index}>
                                                    <ListGroup>
                                                        {item?.child?.map((child, index) => (
                                                            <ListGroupItem key={index}>
                                                                <Row sm={2}
                                                                    className=" align-items-center justify-content-between">
                                                                    <Col sm={10}>{child.name}</Col>
                                                                    <Col sm={2} className="d-flex justify-content-end">
                                                                        <Button.Ripple onClick={() => {
                                                                            setSelectedActivity(child)
                                                                            formik.setFieldValue('activity_type_id', child?.id)
                                                                        }} size="sm" color="primary" outline>
                                                                            <Plus size={16} />
                                                                        </Button.Ripple>
                                                                    </Col>
                                                                </Row>
                                                            </ListGroupItem>
                                                        ))}
                                                    </ListGroup>
                                                </AccordionBody>
                                            </AccordionItem>
                                        ))
                                    }
                                </Accordion>
                            </Col>
                        ) : null
                    }
                </Row>
                <div className='d-flex justify-content-between'>
                    <Button color='secondary' className='btn-prev' onClick={() => previousStep()} outline>
                        <ArrowLeft size={14} className='align-middle me-sm-25 me-0' />
                        <span className='align-middle d-sm-inline-block d-none'>Orqaga</span>
                    </Button>
                    <Button type='submit' color='primary' disabled={!(formik.isValid && formik.dirty)}
                        className='btn-next'>
                        <span className='align-middle d-sm-inline-block d-none'>Keyingisi</span>
                        <ArrowRight size={14} className='align-middle ms-sm-25 ms-0' />
                    </Button>
                </div>
            </Form>
        </>
    )
}

export default Activity
