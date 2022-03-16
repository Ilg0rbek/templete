import React, { useEffect, useState } from 'react'
import { useHistory, useLocation, useParams } from 'react-router-dom'
import Select from 'react-select'
import {
    Button,
    Card,
    CardBody,
    CardFooter,
    CardHeader,
    CardText,
    CardTitle,
    Col,
    Input,
    Label,
    Nav,
    NavItem,
    NavLink,
    Row,
    TabContent,
    TabPane
} from 'reactstrap'
import CheckboxBasic from '@cp/CheckBox'
import Uploader from "@cp/Uploader"
import { useDispatch, useSelector } from 'react-redux'
import { confirmOfferIndividual, createOpfIndividual } from '@store/reducers/Register'
import QueryString from 'qs'
import { useTranslation } from 'react-i18next'
import { getOpfIndividual, getOpfLegal } from "@store/reducers/System"
import { unwrapResult } from "@reduxjs/toolkit"
import * as registerRed from "../../redux/reducers/Register"

const OfferApplication = () => {
    const [active, setActive] = useState('1')
    const history = useHistory()
    const params = useParams()
    const location = useLocation()
    const dispatch = useDispatch()

    useEffect(() => {
        if (params.who === 'legal') {
            dispatch(getOpfLegal())
        } else {
            dispatch(getOpfIndividual())
        }
    }, [params.who])

    const qs = QueryString.parse(location.search, { ignoreQueryPrefix: true })
    const { opf } = useSelector(state => state.sys)
    const { t } = useTranslation()
    const found = opf?.find(o => o?.id === parseInt(qs.opf))

    useEffect(() => {
        if (params.who !== 'legal' && params.who !== 'individual') {
            history.push('/error')
        }
    }, [])

    const toggle = tab => {
        if (active !== tab) {
            setActive(tab)
        }
    }

    const handleConfirm = (ag) => {
        dispatch(confirmOfferIndividual(ag)).then(unwrapResult).then((res) => {
            dispatch(createOpfIndividual({
                id: res?.data?.id,
                opf: parseInt(qs.opf)
            })).then(unwrapResult).then(() => history.push(location.pathname.replace('/offer', `/applicant/${res?.data?.id}`)))
        })
    }

    return (
        <>
            <Card>
                <CardBody>
                    <Nav className='justify-content-center' tabs>
                        <NavItem>
                            <NavLink
                                active={active === '1'}
                                onClick={() => {
                                    toggle('1')
                                }}
                            >
                                Malumotlar
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink
                                active={active === '2'}
                                onClick={() => {
                                    toggle('2')
                                }}
                            >
                                Hujjatlar
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink
                                active={active === '3'}
                                onClick={() => {
                                    toggle('3')
                                }}
                            >
                                Muddatlar va to'lovlar
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink
                                active={active === '4'}
                                onClick={() => {
                                    toggle('4')
                                }}
                            >
                                Natija
                            </NavLink>
                        </NavItem>
                    </Nav>
                    <TabContent className='py-50' activeTab={active}>
                        <TabPane tabId='1' className='overflow-auto'>
                            <div dangerouslySetInnerHTML={{ __html: t(found && found['general-info-content']) }} />
                        </TabPane>
                        <TabPane tabId='2' className='overflow-auto'>
                            <div dangerouslySetInnerHTML={{ __html: t(found && found['documents-info-content']) }} />
                        </TabPane>
                        <TabPane tabId='3' className='overflow-auto'>
                            <div dangerouslySetInnerHTML={{ __html: t(found && found['deadline-info-content']) }} />
                        </TabPane>
                        <TabPane tabId='4' className='overflow-auto'>
                            <div dangerouslySetInnerHTML={{ __html: t(found && found['results-info-content']) }} />
                        </TabPane>
                    </TabContent>
                </CardBody>
            </Card>
            <Card>
                <CardHeader>
                    <CardTitle className='text-center mx-auto'>
                        Ofertani qabul qilish
                    </CardTitle>
                </CardHeader>
                {
                    params?.who === 'individual' ? (
                        <IndividualOffer handleConfirm={handleConfirm} location={location} history={history} />
                    ) : (
                        <YurOffer opf={parseInt(qs.opf)} location={location} history={history} />
                    )
                }
            </Card>
        </>
    )
}


const IndividualOffer = ({ history, handleConfirm }) => {
    const [agreement, setAgreement] = useState(false)
    return (
        <>
            <CardBody>
                <CardText>
                    <p>Quyidagilarni tasdiqlayman:</p>
                    <p>1.1. Davlat ro'yhatidan o'tkazish uchun taqdim etilgan hujjatlardagi (ariza va boshqa hujjatlar)
                        ma'lumotlar to'g'ri va ishonchli;</p>
                    <p>
                        1.2. Davlat ro'yhatidan o'tkazish hujjatlari tayyorlanayotganda va taqdim etilganda tegishli
                        tadbirkorlik foliyati turlari bo'yicha o'rnatilgan tartib nazoratga olingan;
                    </p>
                    <p>
                        2. Yakka tartibdagi tadbirkor sifatida davlat ro‘yxatidan o‘tkazish uchun ro‘yxatdan o‘tkazuvchi
                        organga soxta shaxslar orqali yolg‘on ma’lumotlar, hujjatlar taqdim etilgan, pul mablag‘lari
                        yoki
                        boshqa mol-mulk bilan bog‘liq bo‘lgan bitta yohud bir nechta moliyaviy operatsiyalarni amalga
                        oshirish maqsadlarida yakka tartibdagi tadbirkor sifatida davlat ro‘yxatidan o‘tish uchun
                        shaxsni
                        tasdiqlovchi hujjatni taqdim etilgan, yakka tartibdagi tadbirkor sifatida davlat ro‘yxatidan
                        o‘tish
                        uchun noqonuniy yo‘l bilan olingan shaxsiy ma’lumotlardan foydalanilgan taqdirda O‘zbekiston
                        Respublikasining qonun hujjatlarida belgilangan tartibda javobgarlikka tortilishimdan
                        xabardorman.
                    </p>
                </CardText>
                <CheckboxBasic label="Yuqoridagi shartlar bilan tanishib chiqqanimni tasdiqlayman"
                    onEvent={() => setAgreement(!agreement)} />

            </CardBody>
            <CardFooter>
                <Row xl={6} md={12} className='gap-1 justify-content-between'>
                    <Col>
                        <Button.Ripple outline color='primary' onClick={() => history.goBack()}>
                            Ortga
                        </Button.Ripple>
                    </Col>
                    <Col className='d-grid mb-1 mb-lg-0'>
                        <Button.Ripple color='success'
                            onClick={() => handleConfirm(agreement)}
                            disabled={!agreement}>Keyingisi</Button.Ripple>
                    </Col>
                </Row>
            </CardFooter>
        </>
    )
}


const colourOptions = [
    { value: 'ocean', label: 'Ocean' },
    { value: 'blue', label: 'Blue' },
    { value: 'purple', label: 'Purple' },
    { value: 'red', label: 'Red' },
    { value: 'orange', label: 'Orange' }
]

const YurOffer = ({ history }) => {

    const dispatch = useDispatch()
    const store = useSelector(state => state)
    const { application } = store.register
    // const { agreement, setAgreement, history } = props
    const [document, setDocument] = useState(false)
    const [agreement, setAgreement] = useState(false)

    console.log(application)

    function confirmOfferLegalFunc() {
        dispatch(registerRed.confirmOfferLegal({
            isConfirmOffered: agreement,
            opfChoiceId: 1
        })).then(unwrapResult).then((res) => {
            console.log(res)
            history.push(`/register/legal/applicant/${res?.id}`)
        })
    }

    return (
        <>
            <CardBody>
                <CheckboxBasic id={1} label="Yuqoridagi shartlar bilan tanishib chiqqanimni tasdiqlayman"
                    onEvent={() => setAgreement(!agreement)} />
                <div className="border my-1 py-2 px-3 rounded">
                    <Row xl={1} className='gap-2'>
                        <Col>
                            <Label>Zahiraga olingan login va parolni kiriting. (Mavjud bo’lsa)</Label>
                            <div className='d-flex gap-1 aligin-items-center justify-content-between'>
                                <Input type="text" placeholder='Loginni kiriting...' />
                                <Input type="password" placeholder='Parolni kiriting...' />
                            </div>
                        </Col>
                        <Col>
                            <Label>Nomga qo'shimcha tanlash!</Label>
                            <Select
                                className='react-select'
                                classNamePrefix='select'
                                options={colourOptions}
                            />
                        </Col>
                    </Row>
                </div>
                <CheckboxBasic id={2}
                    label="Tashkil etilayotgan tadbirkorlik subyektining - yuridik shaxsning mulkdori (muassisi)" />
                <CheckboxBasic id={3} label="Ta'sis hujjatlariga muvofiq tashkil etilayotgan tadbirkorlik subyektining - yuridik shaxsning
nomidan harakat qilishga vakolatli bo'lgan boshqa shaxs." onEvent={() => setDocument(!document)} />
                {
                    document && (
                        <div className="border my-1 py-2 px-3 rounded">
                            <Row xl={1} className='gap-2'>
                                <Col>
                                    <Uploader />
                                </Col>
                                <Col>
                                    <div className='d-flex gap-1 aligin-items-center justify-content-between'>
                                        <Input type="number" placeholder='Hujjat raqami...' />
                                        <Input type="date" placeholder='Sanasi...' />
                                    </div>
                                </Col>
                                <Col>
                                    <Input type="text" placeholder='Notarus...' />
                                </Col>
                            </Row>
                        </div>
                    )
                }

            </CardBody>
            <CardFooter>
                <Row xl={6} md={12} className='gap-1 justify-content-between'>
                    <Col>
                        <Button.Ripple outline color='primary' onClick={() => history.goBack()}>
                            Ortga
                        </Button.Ripple>
                    </Col>
                    <Col className='d-grid mb-1 mb-lg-0'>
                        <Button.Ripple color='success'
                            onClick={confirmOfferLegalFunc}
                            disabled={!agreement}>Keyingisi</Button.Ripple>
                    </Col>
                </Row>
            </CardFooter>
        </>
    )
}
export default OfferApplication
