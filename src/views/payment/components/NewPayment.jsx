// ** Third Party Components
import { CheckCircle, ArrowLeft } from 'react-feather'
import { useForm } from 'react-hook-form'
import Select from 'react-select'
import { useHistory } from "react-router-dom"

// ** Reactstrap Imports
import { Col, Row, Form, Button } from 'reactstrap'

const defaultValues = {
    region: '',
    district: '',
    bank: ''
}

const Payment = () => {

    const history = useHistory()
    // ** Hooks
    const {
        // control,
        setError,
        handleSubmit
        // formState: { errors }
    } = useForm({ defaultValues })

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
        <>
            <h5>Hisob raqam ochish</h5>
            <Form onSubmit={handleSubmit(onSubmit)}>
                <div className="border rounded my-2 p-2 bg-white">
                    <Row xl={2}>
                        <Col className='d-flex aligin-items-center justify-content-between gap-1'>
                            <span className="h5 w-50 border-end border-2 ">F.I.SH:</span>
                            <span className='w-50'>IBROHIM ATAJANOV ISMOILOVICH</span>
                        </Col>
                        <Col className='d-flex aligin-items-center justify-content-between gap-1'>
                            <span className="h5 w-50 border-end border-2 ">JSHSHIR:</span>
                            <span className='w-50'>58745896589654</span>
                        </Col>
                    </Row>
                </div>
                <>
                    <Row xl={3}>
                        <Col>
                            <Select
                                name="bank"
                                placeholder="Bankni tanlang"
                                className='react-select'
                                classNamePrefix='select'
                            />
                        </Col>
                        <Col>
                            <Select
                                name="region"
                                placeholder="Viloyatni tanlang"
                                className='react-select'
                                classNamePrefix='select'
                            />
                        </Col>
                        <Col>
                            <Select
                                name="district"
                                placeholder="Tumanni tanlang"
                                className='react-select'
                                classNamePrefix='select'
                            />
                        </Col>
                    </Row>
                </>
                <div className="d-flex items-center justify-content-end gap-1 mt-2">
                    <Button color='primary' outline onClick={() => history.push('/dashboard')}>Bekor qilish</Button>
                    <Button color='success' onClick={() => alert("In progressing by developers!")}>Tasdiqlash</Button>
                </div>
            </Form>
        </>

    )
}

export default Payment
