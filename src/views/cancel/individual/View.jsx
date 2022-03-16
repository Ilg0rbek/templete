import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { TabContent, TabPane, Nav, NavLink, NavItem, CardBody, Card, Row, Col, Badge, Button } from "reactstrap"
import { getSingleApplication } from "@store/reducers/Individual_Cancel"
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
        name: "Ilova hujjatlari"
    },
    {
        id: 4,
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
    const store = useSelector(state => state.individual_cancel?.single_application)
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
                        <Empty label="Bunaqa malumot topilmadi!" button={{ name: 'Jurnalga qaytish', link: '/cancel/individual_jurnal' }} />
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