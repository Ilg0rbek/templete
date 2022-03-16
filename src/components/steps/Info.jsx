// ** React Imports
import { Fragment } from 'react'
import { useSelector } from "react-redux"
import { useParams } from "react-router-dom"
import { ArrowLeft, ArrowRight, Clipboard } from 'react-feather'

// ** Reactstrap Imports
import { Table, Row, Col, Button, Badge } from 'reactstrap'

const PersonalInfo = ({ nextStep, previousStep }) => {
  const store = useSelector(state => state.register)
  const params = useParams()

  return (
    <Fragment>
      <div className='content-header d-flex align-items-center gap-1'>
        <Clipboard />
        <h4 className='mb-0'>Kiritilgan malumotlar to'g'riligini tekshiring!</h4>
      </div>
      <div className="border rounded mb-2 p-2">
        <Row xl={2}>
          <Col className='d-flex aligin-items-center justify-content-between gap-1 pb-1'>
            <span className="h5 w-50 border-end border-2 ">Ismingiz:</span>
            <span className='w-50'>Ogabek Yuldoshev</span>
          </Col>
          <Col className='d-flex aligin-items-center justify-content-between gap-1 pb-1'>
            <span className="h5 w-50 border-end border-2 ">JSH SHIR:</span>
            <span className='w-50'>{store.user.cadastor_number}</span>
          </Col>
          <Col className='d-flex aligin-items-center justify-content-between gap-1 pb-1'>
            <span className="h5 w-50 border-end border-2 ">Telefon raqami:</span>
            <span className='w-50'>{store.user.phone}</span>
          </Col>
          <Col className='d-flex aligin-items-center justify-content-between gap-1 pb-1'>
            <span className="h5 w-50 border-end border-2 ">Elektron pochta:</span>
            <span className='w-50'>{store.user.email}</span>
          </Col>
          <Col className='d-flex aligin-items-center justify-content-between gap-1 pb-1'>
            <span className="h5 w-50 border-end border-2 ">Manzil turi:</span>
            <span className='w-50'>{store.user.address_type}</span>
          </Col>
          <Col className='d-flex aligin-items-center justify-content-between gap-1 pb-1'>
            <span className="h5 w-50 border-end border-2 ">Manzil:</span>
            <span className='w-50'>{store.user.address}</span>
          </Col>
          <Col className='d-flex aligin-items-center justify-content-between gap-1 pb-1'>
            <span className="h5 w-50 border-end border-2 ">Soliq turi:</span>
            <span className='w-50'>{store.activity.typeTaxs}</span>
          </Col>
          <Col className='d-flex aligin-items-center justify-content-between gap-1 pb-1'>
            <span className="h5 w-50 border-end border-2 ">Muddat:</span>
            <span className='w-50'>{store.activity.expiresDate}</span>
          </Col>
          <Col className='d-flex aligin-items-center justify-content-between gap-1 pb-1'>
            <span className="h5 w-50 border-end border-2 ">Faoliyat turi:</span>
            <span className='w-50'>{store.activity.name},{' '}{store.activity.direction}</span>
          </Col>
          <Col className='d-flex aligin-items-center justify-content-between gap-1 pb-1'>
            <span className="h5 w-50 border-end border-2 ">Qo‘shimcha faoliyat turi:</span>
            <span className='w-50'>
              {
                Array.isArray(store.optionalActivity) && store.optionalActivity.length ? (
                  <div>
                    {Array.isArray(store.optionalActivity) && store.optionalActivity.map((item, i) => (
                      <div key={i}>
                        <p>{item.name}</p>
                        {Array.isArray(item.child) && item.child.map((ch, index) => (
                          <span key={index}>{ch.label}</span>
                        ))}
                      </div>
                    ))}
                  </div>
                ) : "Mavjud emas"}
            </span>
          </Col>
        </Row>
      </div>
      {
        params.type === 'oilaviy' && (<Members data={store.family} />)
      }
      <div className='d-flex justify-content-between'>
        <Button type='button' color='primary' className='btn-prev' onClick={() => previousStep()}>
          <ArrowLeft size={14} className='align-middle me-sm-25 me-0'></ArrowLeft>
          <span className='align-middle d-sm-inline-block d-none'>Orqaga</span>
        </Button>
        <Button type='submit' color='primary' className='btn-next' onClick={() => nextStep()}>
          <span className='align-middle d-sm-inline-block d-none'>Keyingisi</span>
          <ArrowRight size={14} className='align-middle ms-sm-25 ms-0'></ArrowRight>
        </Button>
      </div>
    </Fragment>
  )
}


const Members = ({ data }) => {
  return (
    <>
      <h3 className='text-center bg-warning py-1 text-white'>
        Oila a'zolarini roziligi kutilmoqda!
      </h3>
      <Table striped responsive>
        <thead>
          <tr>
            <th>A'zosi</th>
            <th>F.I.O</th>
            <th>Hujjat raqami</th>
            <th>JSH SHIR</th>
          </tr>
        </thead>
        <tbody>
          {
            Array.isArray(data) && data.map((d, i) => (
              <tr key={i}>
                <td>
                  <span className='align-middle fw-bold'>{d.member?.toUpperCase()}</span>
                </td>
                <td>{d.fullname}</td>
                <td>
                  {d.document_number}
                </td>
                <td>
                  {d.INN}
                </td>
              </tr>
            ))
          }
        </tbody>
      </Table>
    </>
  )
}

export default PersonalInfo
