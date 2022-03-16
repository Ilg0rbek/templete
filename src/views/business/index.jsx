import { useState } from "react"
import { Row, Col, TabContent, TabPane } from "reactstrap"
import InfoBusiness from "./components/Info"
import SideBar from "./components/Sidebar"

const Business = () => {
    const [active, setActive] = useState('1')

    const toggle = tab => {
        if (active !== tab) {
            setActive(tab)
        }
    }

    return (
        <>
            <h1 className="text-center my-2">“Islombek ATAJANOV” MCHJ</h1>
            <Row>
                <Col xs={9}>
                    <TabContent className='py-50' activeTab={active}>
                        <TabPane tabId='1'>
                            <InfoBusiness />
                        </TabPane>
                        <TabPane tabId='2'>
                            <h1>Guvohnoma</h1>
                        </TabPane>
                        <TabPane tabId='3'>
                            <h1>O‘zgartirishlar tarixi</h1>
                        </TabPane>

                    </TabContent>
                </Col>
                <Col>
                    <SideBar onToggle={toggle} active={active} />
                </Col>
            </Row>
        </>
    )
}

export default Business