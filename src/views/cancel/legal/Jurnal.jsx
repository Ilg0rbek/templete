import React, { useState } from 'react'
import { Card, CardBody, Nav, NavItem, NavLink, TabContent, TabPane } from "reactstrap"
import Jurnal from "./components/Jurnal"
// import MyApplicant from "./component/MyApplicant"

export default () => {

    const [active, setActive] = useState('1')

    const toggle = tab => {
        if (active !== tab) {
            setActive(tab)
        }
    }

    return (
        <>
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
                                    Ixtiyoriy tugatish jurnali
                                </NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink
                                    active={active === '2'}
                                    onClick={() => {
                                        toggle('2')
                                    }}
                                >
                                    Mening arizalarim
                                </NavLink>
                            </NavItem>
                        </Nav>
                        <TabContent className='py-50' activeTab={active}>
                            <TabPane tabId='1'>
                                <Jurnal />
                            </TabPane>
                            <TabPane tabId='2'>
                                {/* <MyApplicant /> */}
                            </TabPane>
                        </TabContent>
                    </CardBody>
                </Card>
            </>
        </>
    )
}