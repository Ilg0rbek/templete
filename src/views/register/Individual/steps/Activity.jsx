import { useFormik } from 'formik'
import { useEffect, useState } from 'react'
import { ArrowLeft, ArrowRight, Plus, Trash } from 'react-feather'
import { useDispatch, useSelector } from 'react-redux'
import ReactSelect from 'react-select'
import { Form, Button, Row, Col, Label, Accordion, AccordionBody, AccordionHeader, AccordionItem, ListGroup, ListGroupItem, Modal, ModalHeader, ModalBody } from 'reactstrap'
import * as yup from "yup"
import { createActivityIndividual } from "@store/reducers/Register"
import { getOpfActivityIndividual } from "@store/reducers/System"
import { algoritmTree } from "@utils"
import _ from "lodash"
import { unwrapResult } from '@reduxjs/toolkit'
import { useParams } from 'react-router-dom'
const ValidateSchema = yup.object({
  taxSequence_vat: yup.boolean().required(),
  activity_type_id: yup.number().required(),
  additional_activities: yup.array().required(),
  expiry: yup.string().oneOf(['NoChange', 'SixMonth', 'OneYear', 'TwoYear', 'ThreeYear', 'Unlimited']).required()
})

const options = [
  {
    label: '6 oy',
    value: 'SixMonth'
  },
  {
    label: '1 yil',
    value: 'OneYear'
  },
  {
    label: '2 yil',
    value: 'TwoYear'
  },
  {
    label: '3 yil',
    value: 'ThreeYear'
  },
  {
    label: 'Cheklanmagan',
    value: 'Unlimited'
  }
]

const Activity = ({ previousStep, nextStep }) => {
  const dispatch = useDispatch()
  const { id } = useParams()
  const { opfActivity } = useSelector(state => state.sys)
  const [open, setOpen] = useState('')
  const [selectedActivity, setSelectedActivity] = useState('')
  const toggle = id => {
    open === id ? setOpen() : setOpen(id)
  }
  const [modal, setModal] = useState(false)
  const handleModal = () => setModal(current => !current)

  const activity = algoritmTree(opfActivity)

  useEffect(() => {
    dispatch(getOpfActivityIndividual(16))
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

  console.log(activity)

  const handleSubmit = (data) => {
    handleModal()
    formik.setFieldValue("additional_activities", data)
  }

  return (
    <>
      <h3 className='mb-2'>Faolyat yo'nalishini tanlang</h3>
      <Form onSubmit={formik.handleSubmit}>
        <Row sm={2} md={3} className='mb-1'>
          <Col xl={12} md={12} sm={12} xs={12} className="mt-1 mb-2 d-flex flex-column align-items-center justify-content-center">
            <b className='mb-1'>Daromad solig'ini to'lash tartibi (Soliq kodeksining 385-moddasiga asosan)</b>
            <div className='d-flex justify-content-center gap-4'>
              <Button color={formik.values.taxSequence_vat === true ? 'primary' : 'secondary'} onClick={() => formik.setFieldValue("taxSequence_vat", true)}>
                Qat’iy belgilangan (Soliq kodeksining 392-moddasi)
              </Button>
              <Button color={formik.values.taxSequence_vat === false ? 'primary' : 'secondary'} onClick={() => formik.setFieldValue("taxSequence_vat", false)}>
                Deklaratsiya asosida (Soliq kodeksining 397-moddasi)
              </Button>
            </div>
          </Col>
          <Col xl={6} md={12} className="mt-1">
            <div className='d-flex justify-content-between mb-1'>
              <span className='me-2'>Asosiy faolyat turi:</span>
              <Button onClick={handleModal} disabled={true} size="sm" color={selectedActivity ? 'success' : 'secondary'}>{selectedActivity ? "Tanlandi" : 'Tanlanmagan'}</Button>
            </div>
            {
              selectedActivity ? (
                <ListGroup>
                  <ListGroupItem color='primary'>{selectedActivity?.name}</ListGroupItem>
                </ListGroup>
              ) : null
            }
          </Col>
          <Col xl={6} md={12} className="mt-1">
            <div className='d-flex justify-content-between mb-1'>
              <span className='me-2'>Qo'shimcha faolyat turlari:</span>
              <Button onClick={handleModal} disabled={!selectedActivity} size="sm" color={selectedActivity ? 'success' : 'secondary'}>{selectedActivity ? "Qo'shish" : 'Tanlanmagan'}</Button>
            </div>
            <ListGroup numbered>
              {
                formik.values.additional_activities?.map((item, index) => (
                  <ListGroupItem ke={index}>{item.name}</ListGroupItem>
                ))
              }
            </ListGroup>
            {/* <b>{selectedActivity ? selectedActivity?.name : "Tanlanmagan"}</b> */}
          </Col>
          {
            !selectedActivity ? (
              <Col xl={12} md={12} sm={12} xs={12} className="mt-1">
                <Label>Asosiy faolyat turini tanlang...</Label>
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
                                <Row sm={2} className=" align-items-center justify-content-between">
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

          <Col className="mt-1">
            <div>
              <Label>Amal qilish muddati</Label>
              <ReactSelect
                name="expiry"
                placeholder="Muddatni tanlang..."
                onChange={(e) => formik.setFieldValue('expiry', e.value)}
                options={options} />
            </div>
          </Col>
        </Row>
        <div className='d-flex justify-content-between'>
          <Button color='secondary' className='btn-prev' onClick={() => previousStep()} outline>
            <ArrowLeft size={14} className='align-middle me-sm-25 me-0'></ArrowLeft>
            <span className='align-middle d-sm-inline-block d-none'>Orqaga</span>
          </Button>
          <Button type='submit' color='primary' disabled={!(formik.isValid && formik.dirty)} className='btn-next'>
            <span className='align-middle d-sm-inline-block d-none'>Keyingisi</span>
            <ArrowRight size={14} className='align-middle ms-sm-25 ms-0'></ArrowRight>
          </Button>
        </div>
        <ModalComponent main_activity={formik.values.activity_type_id} handleSubmit={handleSubmit} activity={activity} modal={modal} handleModal={handleModal} />
      </Form>
    </>
  )
}

const ModalComponent = ({ modal, activity, handleModal, handleSubmit, main_activity }) => {
  const [selected, setSelected] = useState([])
  const [open, setOpen] = useState('')
  const toggle = id => {
    open === id ? setOpen() : setOpen(id)
  }
  return (
    <Modal isOpen={modal} toggle={handleModal} className='modal-dialog-centered modal-lg'>
      <ModalHeader className='bg-transparent' toggle={handleModal}>
        <h3>Qo'shimcha Faolyat turlari</h3>
      </ModalHeader>
      <ModalBody>
        {
          selected.length ? (
            <div className='my-2'>
              <Label>Tanlanganlar</Label>
              <div className='d-flex gap-1 flex-wrap'>
                {
                  selected?.map((item, index) => (
                    <span style={{ fontSize: '14px', padding: '5px' }} className='rounded bg-primary text-white' key={index} color='primary'>
                      {item?.name}
                      <Trash size={15} className="ms-1" color="red" onClick={() => setSelected(selected.filter(a => a?.id !== item?.id))} />
                    </span>
                  ))
                }
              </div>
            </div>
          ) : null
        }
        <Accordion className='accordion-margin' open={open} toggle={toggle}>
          {
            activity?.map((item, index) => (
              <AccordionItem key={index} className="shadow-lg">
                <AccordionHeader targetId={index}>
                  <b>{item?.name}</b>
                </AccordionHeader>
                <AccordionBody accordionId={index}>
                  <ListGroup>
                    {item?.child?.map((child, index) => {
                      if (_.includes(selected, child) || main_activity === child.id) return null
                      return (
                        <ListGroupItem key={index}>
                          <Row sm={2} className=" align-items-center justify-content-between">
                            <Col sm={10}>{child.name}</Col>
                            <Col sm={2} className="d-flex justify-content-end">
                              <Button.Ripple onClick={() => {
                                toggle()
                                setSelected([...selected, child])
                              }} size="sm" color="primary" outline>
                                <Plus size={16} />
                              </Button.Ripple>
                            </Col>
                          </Row>
                        </ListGroupItem>
                      )

                    })}
                  </ListGroup>
                </AccordionBody>
              </AccordionItem>
            ))
          }
        </Accordion>
        <div className='mt-2 d-flex justify-content-end gap-2 align-items-center'>
          <Button color='danger' outline>
            Bekor qilish
          </Button>
          <Button color='success' disabled={!selected.length} onClick={() => handleSubmit(selected)}>
            Saqlash
          </Button>
        </div>
      </ModalBody>
    </Modal>
  )
}

export default Activity
