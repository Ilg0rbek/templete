import { useState, useEffect } from 'react'
import { Clipboard } from 'react-feather'
// import Uploader from "@cp/Uploader"
import { Row, Col, TabContent, TabPane, Nav, NavItem, NavLink } from 'reactstrap'
import {
    // uploadIndividualDoc,
    getSingleIndividualApplication
} from "@store/reducers/Register"
import { useSelector, useDispatch } from 'react-redux'
import { useParams } from 'react-router-dom'
import Empty from "@cp/Empty"
const View = () => {
    const [active, setActive] = useState('1')
    const dispatch = useDispatch()
    const { application } = useSelector(state => state.register)
    const { id } = useParams()
    useEffect(() => {
        dispatch(getSingleIndividualApplication(id))
    }, [id])

    if (Object.keys(application).length === 0) {
        return <Empty label="Hechnarsa topilmadi" button={{ name: 'Bosh sahifaga qaytish', link: '/' }} />
    }

    const dataFake = [
        {
            title: "Arizachining pasport va boshqa ma'lumotlari",
            content: [
                {
                    name: 'F.I.O',
                    value: `${application?.applicant?.first_name} ${application?.applicant?.last_name} ${application?.applicant?.middle_name}`
                },
                {
                    name: "Tug'ilgan sanasi",
                    value: application?.applicant?.birthday
                },
                {
                    name: "Jinsi",
                    value: application?.applicant?.gender ? 'Erkak' : 'Ayol'
                },
                {
                    name: 'Pasport seriyasi',
                    value: application?.applicant?.document_serial
                },
                {
                    name: 'Berilgan sanasi',
                    value: application?.applicant?.passport_date_issue
                },
                {
                    name: 'Pasport kim tomondan berilgan',
                    value: application?.applicant?.passport_by
                },
                {
                    name: 'Pnfl',
                    value: application?.applicant?.pin
                },
                {
                    name: 'Telfon raqam',
                    value: application?.applicant?.phone
                },
                {
                    name: 'Email',
                    value: application?.applicant?.email
                }
            ]
        },
        {
            title: 'Arizachining uy manzili',
            content: [
                {
                    name: 'Davlat',
                    value: application?.applicant?.country?.nam
                },
                {
                    name: 'Viloyat',
                    value: application?.applicant?.region?.nam
                },
                {
                    name: 'Tuman',
                    value: application?.applicant?.sub_region?.nam
                },
                {
                    name: 'Shahar/qishloq',
                    value: application?.applicant?.village?.nam
                },
                {
                    name: 'Manzil',
                    value: application?.applicant?.address
                }
            ]
        },
        {
            title: 'Tadbirkorlik faoliyat joyi',
            content: [
                {
                    name: 'Manzil Turi',
                    value: "uy manzili bo'yicha"
                },
                {
                    name: 'Viloyat',
                    value: application?.address?.region?.nam
                },
                {
                    name: 'Tuman',
                    value: application?.address?.region?.nam
                },
                {
                    name: 'Shahar/qishloq',
                    value: application?.address?.region?.nam
                },
                {
                    name: 'Manzil',
                    value: application?.address?.region?.nam
                },
                {
                    name: 'Kadastor raqami',
                    value: "45"
                }
            ]
        },
        {
            title: "Tadbirkorlik faoliyati yo'nalishi va turi",
            content: [
                {
                    name: "Tadbirkorlikning faoliyati yo'nalishi",
                    value: "uy manzili bo'yicha"
                },
                {
                    name: "Tadbirkorlikning asosiy faoliyati turi",
                    value: "Fuqaro passporti"
                },
                {
                    name: "Tadbirkorlikning qo'shimcha faoliyati turlari",
                    value: "AA 000000"
                },
                {
                    name: "Soliq turi",
                    value: "Fuqaro passporti"
                },
                {
                    name: "Faolyat muddati",
                    value: "AA 000000"
                }
            ]
        }
    ]

    const toggle = tab => {
        if (active !== tab) {
            setActive(tab)
        }
    }
    return (
        <>
            <div className='content-header d-flex align-items-center gap-1 my-1'>
                <Clipboard />
                <h4 className='mb-0'>Kiritilgan malumotlar to'g'riligini tekshiring!</h4>
            </div>
            <>
                <Nav tabs>
                    <NavItem>
                        <NavLink
                            active={active === '1'}
                            onClick={() => {
                                toggle('1')
                            }}
                        >
                            Ma’lumotlar
                        </NavLink>
                    </NavItem>
                    {/* <NavItem>
                        <NavLink
                            active={active === '2'}
                            onClick={() => {
                                toggle('2')
                            }}
                        >
                            Hujjatlar
                        </NavLink>
                    </NavItem> */}
                </Nav>
                <TabContent className='py-50' activeTab={active}>
                    <TabPane tabId='1'>
                        <TabInfo data={dataFake} />
                    </TabPane>
                    {/* <TabPane tabId='2'>
                        <TabUploader id={id} />
                    </TabPane> */}
                </TabContent>
            </>

            {/* <div className='d-flex justify-content-between'>
                <Button type='button' color='primary' className='btn-prev' onClick={() => previousStep()}>
                    <ArrowLeft size={14} className='align-middle me-sm-25 me-0'></ArrowLeft>
                    <span className='align-middle d-sm-inline-block d-none'>Orqaga</span>
                </Button>
                <Button type='submit' color='primary' className='btn-next' onClick={() => nextStep()}>
                    <span className='align-middle d-sm-inline-block d-none'>Keyingisi</span>
                    <ArrowRight size={14} className='align-middle ms-sm-25 ms-0'></ArrowRight>
                </Button>
            </div> */}
        </>
    )
}


const TabInfo = ({ data }) => {
    return (
        <>
            {
                data.map((item, index) => (
                    <div key={index} className="border rounded mb-2 p-2 bg-white">
                        <div className="d-flex align-items-center justify-content-between mb-2">
                            <h3>{item.title}</h3>
                        </div>
                        <Row xl={2} sm={2}>
                            {
                                Array.isArray(item?.content) && item?.content?.map((cd, ind) => (
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

// const TabUploader = ({ id }) => {
//     const [files, setFiles] = useState([])
//     const dispatch = useDispatch()
//     const handleUpload = (acceptedFiles) => {
//         setFiles([...files, ...acceptedFiles.map(file => Object.assign(file))])
//         dispatch(uploadIndividualDoc({ id, data: Object.assign(acceptedFiles[0]) }))
//     }
//     return (
//         <Row xl={2}>
//             <Col>
//                 <Uploader handleUpload={handleUpload} files={files} setFiles={setFiles} />
//             </Col>
//             <Col>
//                 <span>
//                     Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odit a vel quibusdam quam porro et ratione quidem ipsum consequuntur? Repudiandae quam voluptas facilis ratione, ipsum sunt laboriosam magni! Dolorem, ipsa harum doloribus ducimus architecto alias, magni, nam impedit quod nesciunt unde. Omnis consequuntur hic facere error eos corporis fugit qui?
//                 </span>
//             </Col>
//         </Row>
//     )
// }

export default View
