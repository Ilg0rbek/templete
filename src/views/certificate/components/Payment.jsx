import React, {Fragment} from 'react'
import {Button, Col, Row} from 'reactstrap'
import {CheckCircle} from 'react-feather'
import {useSelector} from 'react-redux'

export default ({nextStep}) => {

    const store = useSelector(state => state)
    const {paymentInfo} = store.certificate

    console.log(paymentInfo)
    // const dispatch = useDispatch()
    // console.log(store.payment, "store")
    // const { id } = useParams()
    // useEffect(() => {
    //     dispatch(getViewAllById({ id }))
    // }, [])

    return (
        <Fragment>
            <div className='rounded mt-1 mb-2 p-2'>
                <h6 className='mb-1'>{paymentInfo?.payee}</h6>
                <div className='text-center'>
                    <div className='mb-4'>
                        <CheckCircle size={50} color='green'/>
                        <h4 className='mt-1'>To'lov amalga oshirildi</h4>
                    </div>
                    <Row>
                        <Col md="6">
                            <h5>To'lov INVOYS raqami:</h5>
                            <span>{paymentInfo?.invoice}</span>
                        </Col>
                        <Col md="6">
                            <h5>To‘lov miqdori:</h5>
                            <span>{paymentInfo?.amount}</span>
                        </Col>
                    </Row>
                </div>
            </div>
            <div className={paymentInfo?.is_payed ? "mt-3 d-flex justify-content-end" : "d-none"}>
                {/*<Button outline color={"danger"} onClick={() => previousStep()}>Bekor qilish</Button>*/}
                <Button color={"primary"} onClick={() => nextStep()}>Keyingisi</Button>
            </div>
        </Fragment>
    )
}
