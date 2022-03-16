// ** React Imports
import { Fragment, useState } from 'react'
import { useHistory, useParams } from 'react-router-dom'

// ** Third Party Components
import { CheckCircle, ArrowLeft } from 'react-feather'
import { useForm } from 'react-hook-form'
import Select from 'react-select'


import InputMask from 'react-input-mask'
// ** Reactstrap Imports
import { TabContent, TabPane, Nav, Col, Row, Form, Button, Input } from 'reactstrap'

const defaultValues = {
  google: '',
  twitter: '',
  facebook: '',
  linkedin: ''
}

const Payment = ({ previousStep }) => {
  // ** Hooks
  const {
    // control,
    setError,
    handleSubmit
    // formState: { errors }
  } = useForm({ defaultValues })

  const history = useHistory()
  const params = useParams()

  const [active, setActive] = useState('1')
  const [sms, setSms] = useState(false)
  const [paid, setPaid] = useState(false)
  const [openPaid, setOpenPaid] = useState(false)


  const toggle = tab => {
    if (active !== tab) {
      setActive(tab)
    }
  }

  const onSubmit = data => {
    if (Object.values(data).every(field => field.length > 0)) {
      alert('submitted')
    } else {
      for (const key in data) {
        if (data[key].length === 0) {
          setError(key, {
            type: 'manual',
            message: `Please enter a valid ${key}`
          })
        }
      }
    }
  }

  return (
    <Fragment>
      <div className='content-header'>
        <h3 className='mb-0'>To'lov turini tanlang! </h3>
      </div>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Nav className='justify-content-center gap-2' tabs>
          <Button color='primary' outline={active !== '1'} active={active === '1'} onClick={() => {
            toggle('1')
          }}>Online</Button>
          <Button color='primary' outline={active !== '2'} active={active === '2'} onClick={() => {
            toggle('2')
          }}>Bank Orqali</Button>
        </Nav>
        <TabContent className='py-50' activeTab={active}>
          <TabPane tabId='1' >
            <div className='border rounded mb-2 p-2'>
              <Row>
                <Col md="6">
                  <h5>To'lov INVOYS raqami:</h5>
                  <span>00 00 00 0000 0000</span>
                </Col>
                <Col md="6">
                  <h5>To‘lov miqdori:</h5>
                  <span>230 000 so'm</span>
                </Col>
              </Row>
              <Row className='mt-2'>
                <Col md="6">
                  <h5>Kartaga bog’langan Telefon raqami:</h5>
                  <Input
                    type="tel"
                    placeholder='+998 00 000 00 00'
                    mask="+\9\98 99 999 99 99"
                    disabled={paid}
                    maskChar=" "
                    tag={InputMask} />
                </Col>
                <Col md="6">
                  <h5>To‘lov miqdori:</h5>
                  <div className='d-flex align-items-center gap-1'>
                    <Input
                      placeholder='0000 0000 0000 0000'
                      mask="9999 9999 9999 9999"
                      className='w-75'
                      disabled={paid}
                      maskChar=" "
                      tag={InputMask} />
                    <Input
                      placeholder='00/00'
                      className='w-25 text-center'
                      mask="99/99"
                      maskChar=" "
                      disabled={paid}
                      tag={InputMask} />
                  </div>
                </Col>
              </Row>
              <div className='mt-2 d-flex flex-column align-items-center '>
                {
                  paid ? (
                    <>
                      <CheckCircle size={50} color='green' />
                      <h4 className='mt-1'>To'lov amalga oshirildi</h4>
                    </>
                  ) : sms ? (
                    <div className='text-center'>
                      <h5>SMS-kodini kiriting:</h5>
                      <Input
                        placeholder='000 000'
                        className='w-25'
                        mask="999 999"
                        className='mx-auto text-center'
                        maskChar=" "
                        tag={InputMask} />
                      <Button className='justify-self-center mt-1' color='success' onClick={() => { setSms(false); setPaid(true) }}>Tasdiqlash</Button>
                    </div>
                  ) : (
                    <Button className='mx-auto' color='primary' onClick={() => setSms(true)}>Kodni jo'natish</Button>
                  )
                }
              </div>
            </div>
            {
              paid && <div className='border rounded mb-2 p-2'>
                {
                  openPaid ? (
                    <>
                      <h5>Hisob raqam ochish</h5>
                      <Row>
                        <Col md='4'>
                          <Select
                            placeholder="Bankni tanlang"
                            className='react-select'
                            classNamePrefix='select'
                          />
                        </Col>
                        <Col md='4'>
                          <Select
                            placeholder="Viloyatni tanlang"
                            className='react-select'
                            classNamePrefix='select'
                          />
                        </Col>
                        <Col md='4'>
                          <Select
                            placeholder="Tumanni tanlang"
                            className='react-select'
                            classNamePrefix='select'
                          />
                        </Col>
                      </Row>
                    </>
                  ) : (
                    <div>
                      <h4 className='text-center'>Hisob raqam ochasizmi?</h4>
                      <div className='d-flex gap-1 w-25 mx-auto mt-2'>
                        <Button block outline color='danger'>YOQ</Button>
                        <Button block color='primary' onClick={() => setOpenPaid(true)}>HA</Button>
                      </div>
                    </div>
                  )
                }
              </div>
            }
          </TabPane>
          <TabPane tabId='2'>
            invoice
          </TabPane>
        </TabContent>
        <div className='d-flex justify-content-between'>
          <Button color='primary' className='btn-prev' onClick={() => previousStep()}>
            <ArrowLeft size={14} className='align-middle me-sm-25 me-0'></ArrowLeft>
            <span className='align-middle d-sm-inline-block d-none'>Orqaga</span>
          </Button>
          {
            openPaid && (
              <Button type='submit' color='success' className='btn-submit' onClick={() => history.push(`/dashboard/applications/${params.id}`)}>
                Jo`natish
              </Button>
            )
          }
        </div>
      </Form>
    </Fragment>
  )
}

export default Payment
