import React, { useState, useEffect } from 'react'
import { useHistory, useLocation } from 'react-router-dom'
import { Card, CardBody, Nav, NavItem, NavLink, TabContent, TabPane } from "reactstrap"
import Jurnal from "./components/Jurnal"
import Applications from "./components/Applications"

export default () => {
    const history = useHistory()
    const location = useLocation()
    const [active, setActive] = useState('1')

    useEffect(() => {
        history.push(location.pathname)
    }, [active, setActive])

    const toggle = tab => {
        if (active !== tab) {
            setActive(tab)
        }
    }

    return (
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
                            <Applications />
                        </TabPane>
                    </TabContent>
                </CardBody>
            </Card>
        </>
    )
}
