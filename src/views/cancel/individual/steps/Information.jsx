import { useState, useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { Row, Col, Button, Input } from "reactstrap"
import { checkApplication, completedApplication } from "@store/reducers/Individual_Cancel"
import { unwrapResult } from "@reduxjs/toolkit"
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
                    value: `${store?.individual?.first_name} ${store?.individual?.last_name} ${store?.individual?.middle_name}`
                },
                {
                    name: "Davlat ro'yhatidan o'tgan sanasi",
                    value: store?.created_at
                },
                {
                    name: 'Reyister raqami',
                    value: store?.id
                },
                {
                    name: "JSHSHIR",
                    value: store?.individual?.pin
                },
                {
                    name: "Tashkiliy-huquqiy shakli (THSHT)",
                    value: store?.individual?.opf
                }
            ]
        },
        {
            title: "Manzili",
            content: [
                {
                    name: 'Viloyat / Hudud',
                    value: store?.individual?.region
                },
                {
                    name: 'Shahar',
                    value: store?.individual?.subRegion
                },
                {
                    name: "Tuman",
                    value: store?.individual?.village
                },
                {
                    name: "Ko'cha",
                    value: store?.individual?.address
                }
            ]
        }
    ]

    const handleDiscomplete = () => {
        dispatch(completedApplication(query?.id)).then(unwrapResult).then(() => history.push(`${location.pathname}/view/${query.id}`))
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
