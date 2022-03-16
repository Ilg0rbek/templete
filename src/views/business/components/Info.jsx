import { Row, Col, Card, CardBody, CardText } from "reactstrap"

const dataFake = [
    {
        title: 'Jamiyat to’g’risida ma’lumot',
        content: [
            {
                name: 'Korxona nomi',
                value: "ogabek"
            },
            {
                name: 'Nom qo’shimchasi',
                value: "Mavjud emas"
            },
            {
                name: 'THSH',
                value: "Xususiy korxona"
            },
            {
                name: 'Manzil',
                value: "Sergeli tumani 5-uy"
            },
            {
                name: 'Manzil turi',
                value: "Xususiy"
            },
            {
                name: 'IFUT kodi va nomi',
                value: "1.2.33.1 - Chakana savdo"
            },
            {
                name: 'Tahminiy xodimlar soni',
                value: "1"
            },
            {
                name: 'Telefon raqami',
                value: "99 803 99 19"
            },
            {
                name: 'Elektron pochta',
                value: "ogabek@gmail.com"
            }
        ]
    },
    {
        title: 'Ta’sischi to’g’risida ma’lumot',
        content: [
            {
                name: 'Hujjat turi',
                value: "Fuqaro passporti"
            },
            {
                name: 'Hujjat seriyasi va raqami',
                value: "AA 000000"
            },
            {
                name: 'F.I.O.',
                value: "Ogabek Yuldoshev"
            },
            {
                name: 'PINFL (JSHSHIR)',
                value: "0000 0000 0000 0000"
            },
            {
                name: 'Ustav fondi',
                value: "45"
            },
            {
                name: 'Telefon raqami',
                value: "99 803 99 19"
            },
            {
                name: 'Elektron pochta',
                value: "ogabek@gmail.com"
            }
        ]
    },
    {
        title: 'Rahbar to’g’risida ma’lumot',
        content: [
            {
                name: 'Hujjat turi',
                value: "Fuqaro passporti"
            },
            {
                name: 'Hujjat seriyasi va raqami',
                value: "AA 000000"
            },
            {
                name: 'F.I.O.',
                value: "Ogabek Yuldoshev"
            },
            {
                name: 'PINFL (JSHSHIR)',
                value: "0000 0000 0000 0000"
            }
        ]
    },
    {
        title: 'Benefitsiar to’g’risida ma’lumot',
        content: [
            {
                name: 'F.I.O.',
                value: "Ogabek Yuldoshev"
            },
            {
                name: 'PINFL (JSHSHIR)',
                value: "0000 0000 0000 0000"
            }
        ]
    }
]

const InfoBusiness = () => {
    return (
        <>
            <Card>
                <CardBody>
                    <CardText>
                        {
                            Array.isArray(dataFake) && dataFake.map((data, index) => (
                                <div key={index} className="border rounded mb-2 p-2">
                                    <h4 className='mb-2'>{data.title}</h4>
                                    <Row xl={2}>
                                        {
                                            Array.isArray(data?.content) && data?.content?.map((cd, ind) => (
                                                <Col key={ind} className='d-flex aligin-items-center justify-content-between gap-1 pb-1'>
                                                    <span className="h5 w-50 border-end border-2 ">{cd.name}:</span>
                                                    <span className='w-50'>{cd.value}</span>
                                                </Col>
                                            ))
                                        }
                                    </Row>
                                </div>
                            ))
                        }
                    </CardText>
                </CardBody>
            </Card>

        </>
    )
}

export default InfoBusiness