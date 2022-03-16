import React, { useState, useEffect } from 'react'
import { Card, CardBody, Nav, NavItem, NavLink, TabContent, TabPane } from 'reactstrap'
import Documentations from './documentations'
import Information from './Information'
import Inspection from './Inspection'
import Payment from './payment'
import { useParams } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { getCheckingLegalEntity } from "../../../../redux/reducers/monitoring"


export default () => {

    const [active, setActive] = useState('4')
    const { id } = useParams()
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getCheckingLegalEntity({ id }))
    }, [])

    const toggle = tab => {
        if (active !== tab) {
            setActive(tab)
        }
    }

    return (
        <>
            <Card>
                <h3 className='text-center my-1'>Yuridik shaxslar ma'lumotlarini tekshirish</h3>
                <CardBody>
                    <Nav className='justify-content-center' tabs>
                        <NavItem>
                            <NavLink
                                active={active === '1'}
                                onClick={() => {
                                    toggle('1')
                                }}
                            >
                                Malumotlar
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink
                                active={active === '2'}
                                onClick={() => {
                                    toggle('2')
                                }}
                            >
                                To'lov
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink
                                active={active === '3'}
                                onClick={() => {
                                    toggle('3')
                                }}
                            >
                                Hujjatlar
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink
                                active={active === '4'}
                                onClick={() => {
                                    toggle('4')
                                }}
                            >
                                Tekshiruv natijalari
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink
                                active={active === '5'}
                                onClick={() => {
                                    toggle('5')
                                }}
                            >
                                Dasturchilar uchun
                            </NavLink>
                        </NavItem>
                    </Nav>
                    <TabContent className='py-50' activeTab={active}>
                        <TabPane tabId='1'>
                            <Information />
                        </TabPane>
                        <TabPane tabId='2'>
                            <Payment />
                        </TabPane>
                        <TabPane tabId='3'>
                            <Documentations />
                        </TabPane>
                        <TabPane tabId='4'>
                            <Inspection />
                        </TabPane>
                        <TabPane tabId='5'>
                            Dasturchilar uchun
                        </TabPane>
                    </TabContent>
                </CardBody>
            </Card>
        </>
    )
}

