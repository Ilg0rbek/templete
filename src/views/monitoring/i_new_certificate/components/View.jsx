import React, { useState } from "react"
import { Card, CardBody, CardHeader, Nav, NavItem, NavLink, TabContent, TabPane } from "reactstrap"
import DataUser from "./data_le_user"
import Certificate from './Certificate'
import Payment from "./payment"
import { useSelector } from 'react-redux'

export default () => {

    const [active, setActive] = useState('1')
    const store = useSelector(state => state.certificate)
    const toggle = tab => {
        if (active !== tab) {
            setActive(tab)
        }
    }

    return (
        <>
            <h1 className="mb-2">Jismoniy shaxs</h1>
            <Card className='overflow-hidden'>
                <CardHeader className='d-flex items-center justify-content-center'>
                </CardHeader>
                <CardBody>
                    <Nav className='justify-content-center' tabs>
                        <NavItem>
                            <NavLink
                                active={active === '1'}
                                onClick={() => {
                                    toggle('1')
                                }}
                            >
                                Ma`lumotlari
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            {store.payment !== null &&
                                <NavLink
                                    active={active === '2'}
                                    onClick={() => {
                                        toggle('2')
                                    }}
                                >
                                    To`lov
                                </NavLink>
                            }
                        </NavItem>
                        <NavItem>
                            {store.certificate_individual !== null && <NavLink
                                active={active === '3'}
                                onClick={() => {
                                    toggle('3')
                                }}
                            >
                                Guvohnoma
                            </NavLink>}
                        </NavItem>
                    </Nav>
                    <TabContent className='py-50' activeTab={active}>
                        <TabPane tabId='1'>
                            <div className="print_out">
                                <DataUser />
                            </div>
                        </TabPane>
                        <TabPane tabId='2'>
                            <Payment />
                        </TabPane>
                        <TabPane tabId='3'>
                            <Certificate />
                        </TabPane>
                    </TabContent>
                </CardBody>
            </Card>
        </>
    )
}
