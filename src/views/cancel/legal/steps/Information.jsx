import { useState, useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { Row, Col, Button, Input } from "reactstrap"
import { checkApplication } from "@store/reducers/Legal_Cancel"
import { useHistory, useLocation } from "react-router-dom"

const Information = ({ query, previousStep }) => {
    const [aggrement, setAggrement] = useState(false)
    const dispatch = useDispatch()
    const location = useLocation()
    const history = useHistory()
    const store = useSelector(state => state.legal_cancel?.application)
    useEffect(() => {
        if (query.id) {
            dispatch(checkApplication(query?.id))
        }
    }, [dispatch])

    const individual = [
        {
            title: "Tugatilayotgan tashkilot ma'lumotlari",
            content: [
                {
                    name: 'Kim tomonidan kiritilgan',
                    value: store?.created_by
                },
                {
                    name: 'Korxona nomi',
                    value: store?.legal_entity?.name
                },
                {
                    name: "Davlat ro'yhatidan o'tgan sanasi",
                    value: store?.legal_entity?.registrationDate
                },
                {
                    name: 'Reyister raqami',
                    value: store?.id
                },
                {
                    name: "STIR",
                    value: store?.legal_entity?.tin
                },
                {
                    name: "Tashkiliy-huquqiy shakli (THSHT)",
                    value: store?.legal_entity?.opf
                }
            ]
        },
        {
            title: "Manzili",
            content: [
                {
                    name: 'Viloyat / Hudud',
                    value: store?.legal_entity?.region
                },
                {
                    name: "Tuman",
                    value: store?.legal_entity?.village
                },
                {
                    name: 'Shahar',
                    value: store?.legal_entity?.subRegion
                },
                {
                    name: "Ko'cha",
                    value: store?.legal_entity?.address
                }
            ]
        },
        {
            title: "Tugatuvchi vakolatiga ega shaxs ma'lumotlari",
            content: [
                {
                    name: 'Hujjat turi',
                    value: store?.liquidator?.document_type
                },
                {
                    name: 'F.I.O',
                    value: `${store?.liquidator?.first_name} ${store?.liquidator?.last_name} ${store?.liquidator?.middle_name}`
                },
                {
                    name: 'PINFL',
                    value: store?.liquidator?.pin
                },
                {
                    name: 'Pasport seriyasi va raqami',
                    value: (store?.liquidator?.passport_serial_number)?.toUpperCase()
                },
                {
                    name: 'Pasport berilgan sanasi',
                    value: store?.liquidator?.passport_issue_date
                },
                {
                    name: 'Pasport kim tomonidan berilgan',
                    value: store?.liquidator?.passport_by
                },
                {
                    name: 'Telfon raqami',
                    value: store?.liquidator?.phone
                },
                {
                    name: 'Email',
                    value: store?.liquidator?.email
                }
            ]
        }
    ]
    const handleDiscomplete = () => {
        history.push(`${location.pathname}/view/${query.id}`)
    }
    return (
        <>
            {
                individual.map((data, index) => (
                    <div key={index} className="border rounded mb-2 p-2 bg-white">
                        <div className="d-flex align-items-center justify-content-between mb-2">
                            <h3>{data.title}</h3>
                        </div>
                        <Row xl={2}>
                            {
                                Array.isArray(data?.content) && data?.content?.map((cd, ind) => (
                                    <Col key={ind} className='d-flex aligin-items-center gap-1 p-1 border'>
                                        <span className="h5">{cd.name}:</span>
                                        <b>{cd.value}</b>
                                    </Col>
                                ))
                            }
                        </Row>
                    </div>
                ))
            }
            <div className="d-flex flex-column align-items-center justify-content-center gap-1">
                <div>
                    Ma'lumotlarni to'g'riligini tekshiring va tasdiqlab <b className="text-warning">E’lon berish va tegishli organlarni xabardor qilish</b> tugmasini bosing
                </div>
                <div>
                    <div className="d-flex align-items-center gap-1">
                        <Input id='aggrement' type="checkbox" checked={aggrement} onChange={() => setAggrement(current => !current)} />
                        <label htmlFor="aggrement">Ma'lumotlar to'g'riligini tekshirdim, tasdiqlayman</label>
                    </div>
                </div>
                <div className="d-flex justify-content-center gap-1">
                    <Button color="primary" outline onClick={() => previousStep()}>Orqaga</Button>
                    <Button color="success" disabled={!aggrement} onClick={handleDiscomplete}>E'lon berish va tegishli organlarga</Button>
                </div>
            </div>
        </>
    )
}

export default Information
