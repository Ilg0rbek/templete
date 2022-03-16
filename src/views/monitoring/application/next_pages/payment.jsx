import { Fragment } from 'react'
import { Col, Row } from 'reactstrap'
import { CheckCircle } from 'react-feather'
import { useSelector } from 'react-redux'

const Payment = () => {

    const store = useSelector(state => state.monitor)

    return (
        <Fragment>
            <div className='rounded mt-1 mb-2 p-2'>
                <h6 className='mb-1'>{store?.payment?.payer_full_name}</h6>
                <div className='text-center'>
                    <div className='mb-4'>
                        <CheckCircle size={50} color='green' />
                        <h4 className='mt-1'>To'lov amalga oshirildi</h4>
                    </div>
                    <Row>
                        <Col md="6">
                            <h5>To'lov INVOYS raqami:</h5>
                            <span>{store?.payment?.invoice}</span>
                        </Col>
                        <Col md="6">
                            <h5>To‘lov miqdori:</h5>
                            <span>{store?.payment?.amount}</span>
                        </Col>
                    </Row>
                </div>
            </div>
        </Fragment>
    )
}

export default Payment
