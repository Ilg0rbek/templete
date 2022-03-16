import { useHistory, useLocation } from "react-router-dom"
import ReactSelect from "react-select"
import { Card, CardBody, Row, Col, Label, Input, ListGroup, ListGroupItem, Button } from 'reactstrap'

export default () => {
    const history = useHistory()
    const location = useLocation()
    return (
        <>
            <h1 className="mb-2">{location.pathname.endsWith('/edit') ? 'Guruhni tahrirlash' : 'Foydalanuvchi guruhini yaratish'}</h1>
            <Card className='overflow-hidden'>
                <CardBody>
                    <Row xl={2}>
                        <Col className="mb-1">
                            <Label>
                                Kategoriya turi
                            </Label>
                            <ReactSelect placeholder="Tanlang..." />
                        </Col>
                        <Col className="mb-1">
                            <Label>
                                Nomi
                            </Label>
                            <Input type="text" placeholder="Nomini kiriting..." />
                        </Col>
                        <Col className="mb-1">
                            <Label>
                                Bog`langan hudud
                            </Label>
                            <ReactSelect placeholder="Tanlang..." />
                        </Col>
                        <Col className="mb-1">
                            <Label>
                                Bog`langan tuman
                            </Label>
                            <ReactSelect placeholder="Tanlang..." />
                        </Col>
                        <Col className="mb-1">
                            <h5 className="border-bottom mb-1 py-1">
                                Dasturchilar uchun - Begonalarga berish ta'qiqlanadi
                            </h5>
                            <ListGroup>
                                <ListGroupItem className="d-flex align-items-center gap-1">
                                    <Input id="id" type="checkbox" />
                                    <label for="id" className="cursor-pointer">
                                        <h6 className="mb-0">ManageUserCategories</h6>
                                        <em >Lorem ipsum dolor sit amet.</em>
                                    </label>
                                </ListGroupItem>
                            </ListGroup>
                        </Col>
                    </Row>
                    <div className="d-flex mt-1 justify-content-end gap-1">
                        <Button onClick={() => history.goBack()} outline color="danger">Bekor qilish</Button>
                        <Button onClick={() => alert("Saved")} color="success">Saqlash</Button>
                    </div>
                </CardBody>
            </Card>
        </>
    )
}

