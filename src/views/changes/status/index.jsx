import { useState } from "react"
import { Button, Card, CardBody, TabContent, TabPane, Input, Row, Col } from "reactstrap"
import Select from "react-select"
import { selectThemeColors } from '@utils'
import { Download } from "react-feather"
import ErrorProgress from "../../../components/ErrorProgress"
import { useHistory } from "react-router-dom"

const options = [
    { value: 'expired', label: 'Vaqtincha To\'xtatish' },
    { value: 'return', label: 'Qayta Tiklash' }
]

const Status = () => {
    const [active, setActive] = useState(1)
    const history = useHistory()

    const toggle = tab => {
        if (active !== tab) {
            setActive(tab)
        }
    }
    const handleClose = () => {
        history.push('/dashboard')
    }
    const handleSubmit = () => {
        alert("Submit")
    }
    return (
        <>
            <h1 className="mb-2">Statusni o'zgartirish</h1>
            <Card>
                <CardBody>
                    <div className="d-flex gap-1">
                        <Button color={active === 1 ? 'primary' : 'secondary'} onClick={() => toggle(1)}>Jarayondagi</Button>
                        <Button color={active === 2 ? 'primary' : 'secondary'} onClick={() => toggle(2)}>Tugatilgan</Button>
                    </div>
                    <TabContent activeTab={active} className="mt-2">
                        <TabPane tabId={1}>
                            <Row xl={2}>
                                <Col>
                                    <Select
                                        placeholder="Statusni Tanlang!"
                                        className='react-select mb-1'
                                        classNamePrefix='select'
                                        options={options}
                                        theme={selectThemeColors}
                                    />
                                </Col>
                                <Col>
                                    <Input type="date" />
                                </Col>
                            </Row>
                            <hr className="my-2" />
                            <div className="d-flex gap-1 justify-content-end">
                                <Button onClick={handleClose} color="danger">Bekor Qilish</Button>
                                <Button onClick={handleSubmit} color="success">Saqlash</Button>
                            </div>
                        </TabPane>
                        <TabPane tabId={2}>
                            <div className="d-flex justify-content-end">
                                <Download size={30} />
                            </div>
                            <ErrorProgress />
                        </TabPane>
                    </TabContent>
                </CardBody>
            </Card>
        </>
    )
}

export default Status