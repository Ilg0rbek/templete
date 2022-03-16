import { Row, Col, Button } from "reactstrap"
import { useSelector } from "react-redux"

const Information = () => {

    const store = useSelector(state => state.monitor)
    const individual = [

        {
            title: 'Arizachi ma\'lumotlari',
            content: [
                {
                    name: 'Pasport seriyasi va raqami',
                    value: store?.aplicantinfo?.passport_serial
                },
                {
                    name: 'PINFL',
                    value: store?.aplicantinfo?.pinfl
                },
                {
                    name: 'Pasport berilgan sanasi',
                    value: store?.aplicantinfo?.passport_issue_date
                },
                {
                    name: 'Pasport kim tomonidan berilgan',
                    value: store?.aplicantinfo?.tin
                },
                {
                    name: 'Familiya',
                    value: store?.aplicantinfo?.last_name
                },
                {
                    name: 'Ism',
                    value: store?.aplicantinfo?.first_name
                },
                {
                    name: 'Otasini ismi',
                    value: store?.aplicantinfo?.middle_name
                },
                {
                    name: 'Jinsi',
                    value: store?.aplicantinfo?.gender ? "Erkak" : "Ayol"
                },
                {
                    name: 'Tug\'ilgan kun',
                    value: store?.aplicantinfo?.birth_day
                }
            ]
        }
    ]

    return (
        <>
            {
                individual.map((data, index) => (
                    <div key={index} className="rounded mb-2 p-2">
                        <div className="d-flex align-items-center justify-content-between mb-2">
                            <h3>{data.title}</h3>
                        </div>
                        <Row lg={2} xs={1}>
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

export default Information
