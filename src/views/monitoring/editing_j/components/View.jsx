import React, {useState} from "react"
import {Card, CardBody, CardHeader, Nav, NavItem, NavLink, TabContent, TabPane} from "reactstrap"
import DataUser from "./data_le_user"
import Certificate from './Certificate'
import AppInformation from "./AppInfo"
import View_App from "./View_App"

export default () => {

    const [active, setActive] = useState('1')

    const toggle = tab => {
        if (active !== tab) {
            setActive(tab)
        }
    }

    return (
        <>
            <h1 className="mb-2">Jismoniy shaxs o'zgartirishlari , №:</h1>
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
                                Hujjatlar
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink
                                active={active === '2'}
                                onClick={() => {
                                    toggle('2')
                                }}
                            >
                                TSYaDR ga o`zgartirish kiritish
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink
                                active={active === '5'}
                                onClick={() => {
                                    toggle('5')
                                }}
                            >
                                To`lovlar
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink
                                active={active === '6'}
                                onClick={() => {
                                    toggle('6')
                                }}
                            >
                               O`zgartirishlar
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink
                                active={active === '8'}
                                onClick={() => {
                                    toggle('8')
                                }}
                            >
                                Developers
                            </NavLink>
                        </NavItem>
                    </Nav>
                    <TabContent className='py-50' activeTab={active}>
                        <TabPane tabId='1'>
                            <div className="print_out">
                                <DataUser/>
                            </div>
                        </TabPane>
                        <TabPane tabId='2'>
                            <AppInformation/>
                        </TabPane>
                        <TabPane tabId='3'>
                            <View_App/>
                        </TabPane>
                        <TabPane tabId='4'>
                            <Certificate/>
                        </TabPane>
                    </TabContent>
                </CardBody>
            </Card>
        </>
    )
}
