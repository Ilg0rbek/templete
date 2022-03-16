import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { TabContent, TabPane, Nav, NavLink, NavItem, CardBody, Card, Row, Col, Badge, Button } from "reactstrap"
import { getSingleApplication } from "@store/reducers/Legal_Cancel"
import { useDispatch, useSelector } from "react-redux"
import ModalComponent from "./components/Modal"
import Empty from "@cp/Empty"
const NavTab = [
    {
        id: 1,
        name: "Tugatish jaryoni"
    },
    {
        id: 2,
        name: "Tugatilayotgan tashkilot ma'lumotlari"
    },
    {
        id: 3,
        name: "Tugatuvchi vakolatiga ega shaxs ma'lumotlari"
    },
    {
        id: 4,
        name: "Ilova hujjatlari"
    },
    {
        id: 5,
        name: "Malumot almashish tarixi"
    }
]

const View = () => {
    const [active, setActive] = useState(1)
    const [modal, setModal] = useState({
        open: false,
        type: null
    })

    const { id } = useParams()
    const dispatch = useDispatch()
    const store = useSelector(state => state.legal_cancel?.single_application)
    const setTab = tab => {
        if (active !== tab) {
            setActive(tab)
        }
    }
    useEffect(() => {
        dispatch(getSingleApplication(id))
    }, [dispatch])

    const company = {
        title: "Tugatilayotgan tashkilot ma'lumotlari",
        content: [
            {
                name: 'Kim tomonidan kiritilgan',
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
            },
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
    }

    const applicant = {

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

    return (
        <>
            <div className="d-flex align-items-end justify-content-between mb-2">
                <h3>Ixtiyoriy tugatish ariza №{id}</h3>
                <Badge className={store?.status?.color}>{store?.status?.name}</Badge>
            </div>
            <Card>
                {
                    store ? (
                        <CardBody>
                            <Nav tabs className='justify-content-center'>
                                {
                                    NavTab?.map((item, index) => (
                                        <NavItem key={index}>
                                            <NavLink
                                                active={active === item?.id}
                                                onClick={() => {
                                                    setTab(item?.id)
                                                }}
                                            >
                                                {item?.name}
                                            </NavLink>
                                        </NavItem>
                                    ))
                                }
                            </Nav>
                            <TabContent className='py-50' activeTab={active}>
                                <TabPane tabId={1}>
                                    <InfoTab store={store} />
                                </TabPane>
                                <TabPane tabId={2}>
                                    <div className="border rounded mb-2 p-2 bg-white">
                                        <div className="d-flex align-items-center justify-content-between mb-2">
                                            <h3>{company.title}</h3>
                                        </div>
                                        <Row xl={2}>
                                            {
                                                Array.isArray(company?.content) && company?.content?.map((cd, ind) => (
                                                    <Col key={ind} className='d-flex aligin-items-center gap-1 p-1 border'>
                                                        <span className="h5">{cd.name}:</span>
                                                        <b>{cd.value}</b>
                                                    </Col>
                                                ))
                                            }
                                        </Row>
                                    </div>
                                </TabPane>
                                <TabPane tabId={3}>
                                    <div className="border rounded mb-2 p-2 bg-white">
                                        <div className="d-flex flex-sm-row flex-column align-items-center justify-content-between mb-2">
                                            <h3>{applicant.title}</h3>
                                            <Button size="sm" color="primary" onClick={() => setModal({ open: true, type: 2 })}>Tugatuvchi vakolatiga ega shaxs ma'lumotlarini o'zartirish</Button>
                                        </div>
                                        <Row lg={2} xs={1}>
                                            {
                                                Array.isArray(applicant?.content) && applicant?.content?.map((cd, ind) => (
                                                    <Col key={ind} className='d-flex aligin-items-center gap-1 p-1 border'>
                                                        <span className="h5">{cd.name}:</span>
                                                        <b>{cd.value}</b>
                                                    </Col>
                                                ))
                                            }
                                        </Row>
                                    </div>
                                </TabPane>
                                <TabPane tabId={4}>
                                    hello
                                </TabPane>
                                <TabPane tabId={5}>
                                    hello
                                </TabPane>
                            </TabContent>
                            <div className="d-flex align-items-center justify-content-end gap-1">
                                {
                                    store.status?.id === 1 ? (
                                        <Button color="danger" outline onClick={() => setModal({ open: true, type: 0 })} >Tugatishni bekor qilish</Button>
                                    ) : (
                                        <>
                                            <Button color="primary" outline onClick={() => setModal({ open: true, type: 1 })}>Ariza jarayonini to'xtatish</Button>
                                            <Button color="success" onClick={() => setModal({ open: true, type: 3 })}>Tugatishni yakunlash</Button>
                                        </>
                                    )
                                }

                            </div>
                            <ModalComponent modal={modal} toggle={() => setModal({ open: false, type: modal?.type })} />
                        </CardBody>
                    ) : (
                        <Empty label="Bunaqa malumot topilmadi!" button={{ name: 'Jurnalga qaytish', link: '/cancel/legal_jurnal' }} />
                    )
                }
            </Card>
        </>
    )
}

const InfoTab = ({ store }) => {
    const application = [
        {
            title: "Ariza ma'lumotlari",
            content: [
                {
                    name: 'Ariza raqami',
                    value: store?.id
                },
                {
                    name: 'Ariza ochilgan sana',
                    value: store?.created_at
                },
                {
                    name: 'Tugatish jarayoni boshlangan sana',
                    value: store?.start_date
                },
                {
                    name: 'Tugatish jarayoni tugashining oxigi muddati',
                    value: store?.end_date
                },
                {
                    name: 'Maqomi',
                    value: store?.status?.name
                },
                {
                    name: 'Tugatish arizasini kiritayotgan xodim',
                    value: store?.created_by
                }
            ]
        }
    ]
    return (
        <>
            {
                application.map((data, index) => (
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
        </>
    )
}

export default View