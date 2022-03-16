// ** React Imports
import React, { Fragment, useEffect, useState } from 'react'
import * as I from 'react-feather'
import { ArrowLeft, ArrowRight, Edit, Plus, Trash } from 'react-feather'
import Select from 'react-select'
import { useDispatch, useSelector } from 'react-redux'
import {
    Accordion,
    AccordionBody,
    AccordionHeader,
    AccordionItem,
    Button,
    Card,
    CardBody,
    CardHeader,
    CardTitle,
    Col,
    Form,
    Input,
    InputGroup,
    Label,
    Modal,
    ModalBody,
    ModalFooter,
    ModalHeader,
    Row
} from 'reactstrap'
import * as yup from "yup"
import { useFormik } from 'formik'
import * as systemApies from "../../../../redux/reducers/System"
import * as register from "../../../../redux/reducers/Register"
import ReactInputMask from "react-input-mask"
import { unwrapResult } from "@reduxjs/toolkit"
import { useParams } from "react-router-dom"
import Table from "../../../../components/Table"
import { toast } from "react-toastify"

const ValidateSchema = yup.object({
    document_type: yup.number().required(),
    country_id: yup.number().required(),
    relation_type_id: yup.number().required(),
    document_serial: yup.string().required(),
    pin: yup.number().required(),
    passport_by: yup.string().required()
}).required()

const Family = ({ nextStep, previousStep }) => {

    const { id } = useParams()
    const dispatch = useDispatch()
    const [modal, setModal] = useState(false)
    const handleModal = () => setModal(cur => !cur)
    const { faRelationType, inDocTypesList, isLoading, countrys } = useSelector(state => state.sys)
    const { famliy_members } = useSelector(state => state.register)

    const formik = useFormik({
        validationSchema: ValidateSchema,
        initialValues: {
            document_type: 0,
            country_id: 0,
            relation_type_id: 0,
            first_name: '',
            last_name: '',
            middle_name: '',
            document_serial: "",
            pin: "",
            passport_by: "",
            passport_given_on: '',
            gender: "",
            notary_certificate: "",
            notary_certificate_date: ""
        },
        onSubmit: (val) => {
            dispatch(register.createFamilyMembersIndividual({ id, data: val })).then(unwrapResult).then(() => {
                formik.resetForm()
                handleModal()
            })
        }
    })

    useEffect(() => {
        dispatch(systemApies.getRelationTypeList())
        dispatch(systemApies.getIndividualDocTypes())
        dispatch(register.getFamilyMembersIndividual(id))
    }, [id])

    const options = inDocTypesList?.filter(option => {
        return option.id !== 2
    })

    const handleFindByPass = () => {
        dispatch(systemApies.getByPassport({ passport: (formik.values.document_serial)?.toUpperCase() })).then(unwrapResult).then((res) => {
            formik.setFieldValue('pin', res?.pinfl)
            formik.setFieldValue('first_name', `${res?.firstname}`)
            formik.setFieldValue('last_name', `${res?.lastname}`)
            formik.setFieldValue('middle_name', `${res?.middlename}`)
            formik.setFieldValue('birthday', `${res?.birthday}`)
            formik.setFieldValue('passport_given_on', `${res?.passport_given_on}`)
            formik.setFieldValue('passport_by', `${res?.passport_given_by}`)
            res?.gender === 1 ? formik.setFieldValue('gender', true) : formik.setFieldValue('gender', false)
        })
    }


    function deleteFamilyMember(familyMemberId) {
        dispatch(register.deleteFamilyMembersIndividual(familyMemberId)).then(unwrapResult).then(() => {
            dispatch(register.getFamilyMembersIndividual(id))
            toast.success("O`chirildi")
        })
    }

    const basicColumns = [
        {
            name: 'F.I.O',
            sortable: true,
            minWidth: '150px',
            cell: (row) => (
                <div>
                    <span>{row?.first_name} {row?.last_name} {row?.middle_name}</span>
                </div>
            )
        },
        {
            name: 'PINFL',
            sortable: true,
            minWidth: '150px',
            selector: row => row.pin
        },
        {
            name: 'Passport berilgan joy',
            sortable: true,
            minWidth: '200px',
            selector: row => row.passportBy
        },
        {
            name: 'Passport berilgan sana',
            sortable: true,
            minWidth: '100px',
            selector: row => row.passport_given_on
        },
        {
            name: 'Oiladagi lavozimi',
            sortable: true,
            minWidth: '160px',
            selector: row => row.relationType
        },
        {
            name: 'Respublikasi',
            sortable: true,
            minWidth: '160px',
            selector: row => row.country
        },
        {
            minWidth: '60px',
            right: true,
            cell: (row) => (
                <div>
                    <Trash color="red" className='me-50' role="button" size={20}
                        onClick={() => deleteFamilyMember(row.id)} />
                </div>
            )
        }
    ]

    const handleNext = () => {
        dispatch(register.finishFamilyMembersIndividual(id)).then(unwrapResult).then(() => nextStep())
    }

    return (
        <Fragment>
            <h1 className="mb-2">Oila a'zolari</h1>
            <Card className='overflow-hidden'>
                <CardHeader className='d-flex items-center justify-content-between'>
                    <CardTitle tag='h4'>Ma'lumotlar</CardTitle>
                    <div className="d-flex gap-1">
                        {/*<FileExport data={famliy_members}/>*/}
                        <Button.Ripple onClick={handleModal} className='btn-icon' outline color='primary'>
                            <Plus size={16} />
                        </Button.Ripple>
                    </div>
                </CardHeader>
                <CardBody>
                    <div className='react-dataTable'>
                        <Table noDataComponent="Ma'lumotlar yo'q" data={famliy_members}
                            progressPending={isLoading}
                            columns={basicColumns}
                        />
                    </div>
                    <Modal
                        isOpen={modal}
                        toggle={handleModal}
                        className='modal-dialog-centered modal-lg'>
                        <Form onSubmit={formik.handleSubmit} className='mb-1'>
                            <ModalHeader className='bg-transparent' toggle={handleModal}></ModalHeader>
                            <ModalBody className='flex-grow-1 pb-sm-0 pb-3'>
                                <h2 className='text-center mb-1'>Oila a'zolarini tanlang</h2>
                                <Row sm={2}>
                                    <Col>
                                        <Label>Oila azolari</Label>
                                        <Select name="relation_type_id"
                                            options={faRelationType}
                                            getOptionValue={option => option.id}
                                            getOptionLabel={option => option.name}
                                            onChange={(e) => {
                                                formik.setFieldValue('relation_type_id', e.id)
                                            }}
                                            placeholder="Tanlang..." />
                                    </Col>
                                    <Col>
                                        <Label>Hujjat Turi</Label>
                                        <Select
                                            onChange={(option) => {
                                                formik.setFieldValue('document_type', option.id)
                                                dispatch(systemApies.getCountryList())
                                            }}
                                            onBlur={formik.handleBlur}
                                            placeholder='Hujjat turini tanlang...'
                                            options={options}
                                            getOptionLabel={(option) => option.name}
                                            getOptionValue={(option) => option.id}
                                            name="document_type"
                                            className='react-select'
                                            classNamePrefix='select'
                                        />
                                    </Col>
                                    <Col>
                                        <Label>Passport seryasi va raqami</Label>
                                        <InputGroup>
                                            <Input disabled={!formik.values.document_type}
                                                style={{ textTransform: "uppercase" }} name="document_serial"
                                                placeholder="AB0000000" mask="aa9999999" maskChar=""
                                                tag={ReactInputMask}
                                                onBlur={formik.handleBlur} onChange={formik.handleChange} />
                                            {
                                                isLoading ? <Button.Ripple onClick={handleFindByPass} disabled={true} outline
                                                    color="primary">
                                                    <I.Loader size={20} />
                                                </Button.Ripple> : <Button.Ripple onClick={handleFindByPass}
                                                    disabled={formik.values.document_serial.length !== 9}
                                                    outline color="primary">
                                                    <I.Search size={20} />
                                                </Button.Ripple>
                                            }
                                        </InputGroup>
                                    </Col>
                                    <Col>
                                        <Label>F.I.O</Label>
                                        <Input name="full_name"
                                            disabled={true}
                                            value={`${formik.values?.first_name} ${formik.values?.last_name} ${formik.values?.middle_name}`}
                                            // disabled={!formik.values.full_name}
                                            placeholder="Kiriting" onBlur={formik.handleBlur}
                                            onChange={formik.handleChange} />
                                    </Col>
                                    <Col>
                                        <Label>Pinfl</Label>
                                        <Input name="pin" disabled={true} value={formik.values.pin}
                                            placeholder="Kiriting"
                                            mask="9 999999 999 999 9" maskChar=" " tag={ReactInputMask}
                                            onBlur={formik.handleBlur} onChange={formik.handleChange} />
                                    </Col>
                                    <Col>
                                        <Label>Passport berilgan joy</Label>
                                        <Input name="passport_by" value={formik.values.passport_by}
                                            placeholder="Kiriting"
                                            onBlur={formik.handleBlur} onChange={formik.handleChange} />
                                    </Col>
                                    <Col>
                                        <Label>Passport berilgan sana</Label>
                                        <Input name="passport_given_on" disabled={true}
                                            value={formik.values.passport_given_on} placeholder="Kiriting"
                                            onBlur={formik.handleBlur} onChange={formik.handleChange} />
                                    </Col>
                                    {
                                        formik.values.document_type === 5 && <Col>
                                            <Label>Respublikasi</Label>
                                            <Select name="country_id"
                                                options={countrys}
                                                defaultValue={860}
                                                value={formik.values.country_id}
                                                getOptionValue={option => option.id}
                                                getOptionLabel={option => option.fullName}
                                                onChange={(e) => {
                                                    formik.setFieldValue('country_id', e.id)
                                                }}
                                                placeholder="tanlang..." />
                                        </Col>
                                    }
                                </Row>
                                <ModalFooter>
                                    <Button color='primary' outline onClick={handleModal}>Bekor Qilish</Button>
                                    <Button type='submit' color='primary'>Saqlash</Button>
                                </ModalFooter>

                            </ModalBody>
                        </Form>
                    </Modal>
                </CardBody>
            </Card>
            {/*<ShowCase/>*/}
            <div className='d-flex justify-content-between mt-1'>
                <Button color='secondary' className='btn-prev' onClick={() => previousStep()} outline>
                    <ArrowLeft size={14} className='align-middle me-sm-25 me-0'></ArrowLeft>
                    <span className='align-middle d-sm-inline-block d-none'>Orqaga</span>
                </Button>
                <Button color='primary' onClick={handleNext} className='btn-next'>
                    <span className='align-middle d-sm-inline-block d-none'>Keyingisi</span>
                    <ArrowRight size={14} className='align-middle ms-sm-25 ms-0'></ArrowRight>
                </Button>
            </div>
        </Fragment>
    )
}


const ShowCase = () => {
    const [open, setOpen] = useState('1')
    const family = useSelector(state => state.register?.family)


    const toggle = id => {
        open === id ? setOpen() : setOpen(id)
    }

    return family.length ? (
        <Accordion className='accordion-margin' open={open} toggle={toggle}>
            {
                Array.isArray(family) && family.map((f, index) => (
                    <AccordionItem key={index}>
                        <AccordionHeader targetId={index.toString()}>{f.fullname}</AccordionHeader>
                        <AccordionBody accordionId={index.toString()}>
                            <Row>
                                <Col md="4">
                                    <h6>Oila A'zosi:</h6>
                                    <p className='font-weight-bold'>{f.member}</p>
                                </Col>
                                <Col md="4">
                                    <h6>Hujjat yoki passport Raqami:</h6>
                                    <p className='font-weight-bold'>{f.document_number}</p>
                                </Col>
                                <Col md="4">
                                    <h6>Inn Raqami:</h6>
                                    <p className='font-weight-bold'>{f.INN}</p>
                                </Col>
                            </Row>
                        </AccordionBody>
                    </AccordionItem>
                ))
            }
        </Accordion>
    ) : (
        <h1>Empty</h1>
    )
}


export default Family
