import { Download } from 'react-feather'

import { Card, CardHeader, CardTitle, CardBody, Button, Badge, Row, Col } from 'reactstrap'
import { useSelector } from 'react-redux'

export default () => {

    const store = useSelector(state => state.monitor)

    return (
        <>

            <Card className='overflow-hidden '>
                <CardBody className="border my-3">
                    <Row xl={4}>
                        <Col xl={2}> Nomi </Col>
                        <Col xl={3}> Sanasi </Col>
                        <Col xl={4}> File nomi</Col>
                        <Col xl={3}> Qo'shimcha ma'lumot</Col>
                    </Row>
                    <Row xl={4} className="mt-1 pt-1 border-top">
                        <Col xl={2}>
                            {store?.charter?.name_tag}
                        </Col>
                        <Col xl={3}>
                            {store?.charter?.date}
                        </Col>
                        <Col xl={4}>
                            <a href={`http://reg.admin.davxizmat.uz${store?.charter?.file?.download_url}`} download target="_blank"><Download className="me-1" /></a>
                            {store?.charter?.file?.name}
                        </Col>
                        <Col xl={3}>
                            {store?.charter?.description}
                        </Col>
                    </Row>
                </CardBody>
                <CardBody className="border mt-2">
                    <Row xl={4}>
                        <Col xl={3}> Nomi </Col>
                        <Col xl={3}> Sanasi </Col>
                        <Col xl={3}> File nomi</Col>
                        <Col xl={3}> Qo'shimcha ma'lumot</Col>
                    </Row>
                    {
                        store?.confirming.map((v, i) => (
                            <div key={i}>
                                <Row xl={2} className="mt-1 pt-1 border-top">
                                    <Col xl={3}>
                                        {v.name_tag}
                                    </Col>
                                    <Col xl={3}>
                                        {v.date}
                                    </Col>
                                    <Col xl={3}>
                                        <a href={`http://reg.admin.davxizmat.uz${v.file?.download_url}`} download target="_blank"><Download className="me-1" /></a>
                                        {v.file?.name}
                                    </Col>
                                    <Col xl={3}>
                                        {v.description}
                                    </Col>
                                </Row>
                            </div>
                        ))
                    }
                </CardBody>
            </Card>
        </>
    )
}
