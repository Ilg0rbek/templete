import React, {useState} from 'react'
import { TabContent, TabPane, Nav, NavItem, NavLink, Card, CardBody, CardHeader, CardTitle, CardText, CardFooter, Button, Row, Col, Label, Input } from 'reactstrap'


export default () => {

  const [active, setActive] = useState('1')

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
                                Hujjatlar
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink
                                active={active === '3'}
                                onClick={() => {
                                    toggle('3')
                                }}
                            >
                                Muddatlar va to'lovlar
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink
                                active={active === '4'}
                                onClick={() => {
                                    toggle('4')
                                }}
                            >
                                Natija
                            </NavLink>
                        </NavItem>
                    </Nav>
                    <TabContent className='py-50' activeTab={active}>
                        <TabPane tabId='1'>
                            <p>
                              page one
                            </p>
                        </TabPane>
                        <TabPane tabId='2'>
                            <p>
                              page two
                            </p>
                        </TabPane>
                        <TabPane tabId='3'>
                            <p>
                               page three
                            </p>
                        </TabPane>
                        <TabPane tabId='4'>
                            <p>
                               page four
                            </p>
                        </TabPane>
                    </TabContent>
                </CardBody>
            </Card>
    </>
  )
}

