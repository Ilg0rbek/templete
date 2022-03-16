import React, { useEffect, useState } from 'react'
import { Card, CardBody, Nav, NavItem, NavLink, TabContent, TabPane } from "reactstrap"
import Journal from "./components/Journal"
import Monitoring from "./components/Monitoring"
import { useHistory, useLocation } from "react-router-dom"

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
                                    Bankrotlik jurnali
                                </NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink
                                    active={active === '2'}
                                    onClick={() => {
                                        toggle('2')
                                    }}
                                >
                                    Monitoring
                                </NavLink>
                            </NavItem>
                        </Nav>
                        <TabContent className='py-50' activeTab={active}>
                            <TabPane tabId='1'>
                                <Journal />
                            </TabPane>
                            <TabPane tabId='2'>
                                <Monitoring />
                            </TabPane>
                        </TabContent>
                    </CardBody>
                </Card>
            </>
        </>
    )
}
