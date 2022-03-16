import { useState } from "react"
import { Row, Col, Button, TabContent, TabPane, CardBody, Card } from "reactstrap"
import CheckboxBasic from '@cp/CheckBox'
import { createApplication } from "@store/reducers/Individual_Cancel"
import { useDispatch } from "react-redux"
import { unwrapResult } from "@reduxjs/toolkit"
import { useHistory } from "react-router-dom"
import QueryString from "qs"

const dataButton = [
    {
        id: 1,
        name: 'Malumotlar'
    },
    {
        id: 2,
        name: 'Hujjatlar'
    },
    {
        id: 3,
        name: 'Muddatlar va to\'lov'
    },
    {
        id: 4,
        name: 'Natija'
    }
]

const Oferta = ({ onEvent = () => null, check }) => {
    return (
        <div className="my-2">
            <h4 className="py-1 text-center">Quyidagilarni tasdiqlayman:</h4>
            <div>
                <p>1.1. Davlat ro'yhatidan o'tkazish uchun taqdim etilgan hujjatlardagi (ariza va boshqa hujjatlar) ma'lumotlar to'g'ri va ishonchli;</p>
                <p>
                    1.2. Davlat ro'yhatidan o'tkazish hujjatlari tayyorlanayotganda va taqdim etilganda tegishli tadbirkorlik foliyati turlari bo'yicha o'rnatilgan tartib nazoratga olingan;
                </p>
                <p>
                    2. Yakka tartibdagi tadbirkor sifatida davlat ro‘yxatidan o‘tkazish uchun ro‘yxatdan o‘tkazuvchi organga soxta shaxslar orqali yolg‘on ma’lumotlar, hujjatlar taqdim etilgan, pul mablag‘lari yoki boshqa mol-mulk bilan bog‘liq bo‘lgan bitta yohud bir nechta moliyaviy operatsiyalarni amalga oshirish maqsadlarida yakka tartibdagi tadbirkor sifatida davlat ro‘yxatidan o‘tish uchun shaxsni tasdiqlovchi hujjatni taqdim etilgan, yakka tartibdagi tadbirkor sifatida davlat ro‘yxatidan o‘tish uchun noqonuniy yo‘l bilan olingan shaxsiy ma’lumotlardan foydalanilgan taqdirda O‘zbekiston Respublikasining qonun hujjatlarida belgilangan tartibda javobgarlikka tortilishimdan xabardorman.
                </p>
            </div>
            <CheckboxBasic label="Yuqoridagi shartlar bilan tanishib chiqqanimni tasdiqlayman" onEvent={onEvent} value={check} />
        </div>
    )
}

const OfertaPage = ({ query, nextStep, previousStep }) => {
    const [active, setActive] = useState(1)
    const [check, setCheck] = useState(false)
    const history = useHistory()
    const dispatch = useDispatch()
    const nextPage = () => {
        dispatch(createApplication(query?.id)).then(unwrapResult).then((data) => {
            const finalQuery = {
                ...query,
                id: data?.id
            }
            history.push({
                pathname: location.pathname,
                search: `?${QueryString.stringify(finalQuery)}`
            })
            nextStep()
        }).catch(() => {
            const finalQuery = { step: 1 }
            history.push({
                pathname: location.pathname,
                search: `?${QueryString.stringify(finalQuery)}`
            })
            previousStep()
        })
    }

    const toggle = tab => {
        if (active !== tab) {
            setActive(tab)
        }
    }

    return (
        <Card>
            <CardBody>
                <Row>
                    {
                        dataButton.map((btn, index) => (
                            <Col key={index}>
                                <Button color={active === btn.id ? 'primary' : 'secondary'} className="py-1" onClick={() => toggle(btn.id)} block>{btn.name}</Button>
                            </Col>
                        ))
                    }
                </Row>
                <TabContent className='py-50' activeTab={active}>
                    <TabPane tabId={1}>
                        <Oferta onEvent={() => setCheck(val => !val)} value={check} />
                    </TabPane>

                </TabContent>
                <div className="d-flex justify-content-between">
                    <Button color="primary" className="text-center" outline onClick={previousStep}>Orqaga</Button>
                    <Button color="primary" className="text-center" disabled={!check} onClick={nextPage}>Keyingisi</Button>
                </div>
            </CardBody>
        </Card>
    )
}

export default OfertaPage