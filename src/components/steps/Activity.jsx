// ** React Imports
import { Fragment, useState, useEffect } from 'react'

import Select from 'react-select'
import { useSelector, useDispatch } from "react-redux"

import { addActivity } from '@store/reducers/Register'
import { useParams } from "react-router-dom"

// ** Utils
import { isObjEmpty } from '@utils'
import AddActivity from "./AddActivity"
// ** Third Party Components

import { useForm, Controller } from 'react-hook-form'
import { ArrowLeft, ArrowRight } from 'react-feather'

// ** Reactstrap Imports
import { Form, Row, Col, Button, FormFeedback, Label } from 'reactstrap'

const defaultValues = {
  name: '',
  direction: '',
  expiresDate: '',
  typeTaxs: ''
}

const AccountDetails = ({ nextStep, previousStep }) => {
  const store = useSelector(state => state.register)
  const [active, setActive] = useState(null)
  const [activity, setActivity] = useState(null)
  const [payment, setPayment] = useState(null)
  const [slug, setSlug] = useState(null)
  const dispatch = useDispatch()

  const params = useParams()

  useEffect(() => {
    switch (params.type) {
      case "hunarmand":
        setActive(2)
        setSlug("hunarmand")
        break
      case "dehqon":
        setActive(4)
        setSlug("another")
        break
      default:
        break
    }
  }, [])

  // ** Hooks
  const {
    register,
    setValue,
    handleSubmit,
    formState: { errors }
  } = useForm({
    defaultValues
  })

  const onSubmit = (data) => {
    if (isObjEmpty(errors)) {
      dispatch(addActivity(data))
      nextStep()
    }

  }

  const colourOptions = [
    { value: 'ocean', label: 'Ocean' },
    { value: 'blue', label: 'Blue' },
    { value: 'purple', label: 'Purple' },
    { value: 'red', label: 'Red' },
    { value: 'orange', label: 'Orange' }
  ]

  const dateOptions = [
    { value: 3, label: '3 oy' },
    { value: 6, label: '6 oy' },
    { value: 12, label: '1 yil' },
    { value: 36, label: '3 yil' }
  ]

  const dataFake = [
    {
      id: 1,
      name: "Chakana Savdo",
      slug: 'chakana'
    },
    {
      id: 2,
      name: "Hunarmandchilik Faolyati",
      slug: 'hunarmand'

    },
    {
      id: 3,
      name: "Maishiy xizmatlar",
      slug: 'maishiy'
    },
    {
      id: 4,
      name: "Faolyatning boshqa turlari",
      slug: 'another'
    }
  ]

  const filterData = value => {
    if (params.type === "yatt" || params.type === "oilaviy") {
      return value
    }
    return value.filter(d => d.slug === slug)
  }

  return (
    <Fragment>
      <div className='content-header'>
        <h3 className='mb-0'>Faolyat yo'nalishini tanlang</h3>
      </div>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Row className='justify-content-center'>
          {
            Array.isArray(dataFake) && filterData(dataFake)?.map((data, i) => (
              <Col xl="3" key={i}>
                <Button block outline={active === data.id} className='mb-2' color='primary' onClick={() => {
                  setValue("name", data.name)
                  setActive(data.id)
                }}>
                  {data.name}
                </Button>
              </Col>
            ))
          }
          {errors.name && <FormFeedback>{errors.name.message}</FormFeedback>}
        </Row>
        {
          active && (
            <div className='mb-1 mt-1'>
              <h3 className='mb-1'>Tadbirkorlik faolyati turini tanlang!</h3>
              <Label className='form-label'>{(dataFake.find(d => d.id === active)) ? (dataFake.find(d => d.id === active)).name : null}</Label>
              <Select
                {...register("direction", { required: true })}
                className='react-select'
                classNamePrefix='select'
                options={colourOptions}
                onChange={(e) => {
                  setValue("direction", e.value)
                  setActivity(e.value)
                }}
              />

            </div>
          )
        }
        {
          activity && (
            <>
              {params.type !== 'dehqon' && <AddActivity />}
              <div className='mt-2'>
                {Array.isArray(store.optionalActivity) && store.optionalActivity.map((item, i) => (
                  <div key={i}>
                    <h5>{item.name}</h5>
                    <ul>
                      {Array.isArray(item.child) && item.child.map((ch, index) => (
                        <li key={index}>{ch.label}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
              <div className='mb-1 mt-1'>
                <Row>
                  <Col>
                    <h5>Soliq turini tanlang!</h5>
                    <Row>
                      <Col xl="6" >
                        <Button block outline={payment === 1} className='mb-2' color='primary' onClick={() => { setValue("typeTaxs", "Qatiy belgilangan"); setPayment(1) }}>
                          Qatiy belgilangan
                        </Button>
                      </Col>
                      <Col xl="6" >
                        <Button block outline={payment === 2} className='mb-2' color='primary' onClick={() => { setValue("typeTaxs", "Dekloratsiya asosida"); setPayment(2) }}>
                          Dekloratsiya asosida
                        </Button>
                      </Col>
                    </Row>
                  </Col>
                  <Col>
                    <h5>Faolyatning amal qilish muddati</h5>
                    <Select
                      className='react-select'
                      classNamePrefix='select'
                      options={dateOptions}
                      onChange={(e) => setValue("expiresDate", e.value)}
                    />
                  </Col>
                </Row>
              </div>
            </>
          )
        }
        <div className='d-flex justify-content-between'>
          <Button color='secondary' className='btn-prev' onClick={() => previousStep()} outline>
            <ArrowLeft size={14} className='align-middle me-sm-25 me-0'></ArrowLeft>
            <span className='align-middle d-sm-inline-block d-none'>Orqaga</span>
          </Button>
          <Button type='submit' color='primary' className='btn-next'>
            <span className='align-middle d-sm-inline-block d-none'>Keyingisi</span>
            <ArrowRight size={14} className='align-middle ms-sm-25 ms-0'></ArrowRight>
          </Button>
        </div>
      </Form>
    </Fragment>
  )
}

export default AccountDetails
