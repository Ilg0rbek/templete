import {Button, Col, Container, Form, Input, InputGroup} from "reactstrap"
import {Search} from "react-feather"
import InputMask from "react-input-mask"

import {useFormik} from "formik"
import {useDispatch, useSelector} from "react-redux"
import * as certificate from "../../redux/reducers/Certificate"
import {rmSpace} from '@utils'
import TableComponent from "../../components/Table"
import {useHistory, useLocation} from "react-router-dom"
import {unwrapResult} from "@reduxjs/toolkit"
import {toast} from "react-toastify"

const CertificteWizzard = () => {

    return (
        <div className='horizontal-wizard'>
            <h1 className='mb-2'>Jismoniy Shaxs yangi taxrirdagi guvohnoma berish</h1>
            <InfoPage/>
        </div>
    )
}

const InfoPage = () => {

    const dispatch = useDispatch()
    const location = useLocation()
    const history = useHistory()
    const store = useSelector(state => state)
    const {searchResult} = store.certificate

    const formik = useFormik({
        initialValues: {
            pinfl: null,
            tin: null
        },
        onSubmit: values => {
            const data = {
                pinfl: rmSpace(values?.pinfl),
                tin: rmSpace(values?.tin)
            }
            dispatch(certificate.searchCertificate(data))
        }
    })

    function getApplicantId(id) {
        dispatch(certificate.nextStepCertificate({id})).then(unwrapResult).then(res => {
            if (res?.notify_type === "ERROR") {
                toast.error(res?.message)
            } else {
                console.log(res)
                history.push(`${location.pathname}/${res?.application_id}`)
            }
        }).catch(err => {
            console.log(err)
        })
    }

    const basicColumns = [
        {
            name: '№',
            maxWidth: '30px',
            selector: row => row.id
        },
        {
            name: 'F.I.Sh',
            sortable: true,
            minWidth: '120px',
            selector: row => row.full_name
        },
        {
            name: 'Ro`yxatdan o`tgan sanasi',
            minWidth: '150px',
            selector: row => row.official_registration_date
        },
        {
            name: 'Faoliyat yuritish muddati',
            sortable: true,
            minWidth: '120px',
            selector: row => row.official_expiry_date
        },
        {
            name: "THShT",
            sortable: true,
            minWidth: '100px',
            selector: row => row.opf_short_name
        },
        {
            name: "Faoliyat holati",
            sortable: true,
            minWidth: '100px',
            selector: row => row.status
        },
        {
            minWidth: '30px',
            cell: (row) => (
                <div>
                    <Button onClick={() => getApplicantId(row.id)} outline
                            color={'primary'}>Keyingisi</Button>
                </div>
            )
        }
    ]

    return (
        <>
            <Container>
                <Form onSubmit={formik.handleSubmit} className="my-2 row justify-content-between align-items-center">
                    <Col>
                        <InputGroup>
                            <Button color='primary' outline>
                                <Search size={12}/>
                            </Button>
                            <Input
                                placeholder='PINFL ni izlash'
                                type="text"
                                name={"pinfl"}
                                mask="99 99 99 99 99 9999 9999 99"
                                maskChar=" "
                                onChange={formik.handleChange}
                                tag={InputMask}/>
                        </InputGroup>
                    </Col>
                    <Col>
                        <InputGroup>
                            <Button color='primary' outline>
                                <Search size={12}/>
                            </Button>
                            <Input
                                placeholder='INN ni izlash'
                                type="text"
                                name={"tin"}
                                mask="999 999 999"
                                maskChar=" "
                                onChange={formik.handleChange}
                                tag={InputMask}/>
                        </InputGroup>
                    </Col>
                    <Col>
                        <Button type={"submit"} color='primary' outline>
                            Qidirish
                        </Button>
                    </Col>
                </Form>
            </Container>
            <div className="border rounded my-2 p-2 bg-white">
                <div className='react-dataTable'>
                    <TableComponent
                        columns={basicColumns}
                        data={searchResult}
                    />
                </div>
            </div>
        </>
    )
}

export default CertificteWizzard
