import React, {useState} from "react"
import {Card, CardBody, CardHeader, Nav, NavItem, NavLink, TabContent, TabPane} from "reactstrap"
import DataUser from "./data_le_user"
import Certificate from './Certificate'
import AppInformation from "./AppInfo"
import Amount from "./amount"

export default () => {

    const [active, setActive] = useState('1')

    const toggle = tab => {
        if (active !== tab) {
            setActive(tab)
        }
    }

    return (
          <>
              <h1 className="mb-2">Yuridik shaxs</h1>
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
                              <NavLink
                                  active={active === '2'}
                                  onClick={() => {
                                      toggle('2')
                                  }}
                              >
                                  Ariza ma`lumotlari
                              </NavLink>
                          </NavItem>
                          <NavItem>
                              <NavLink
                                  active={active === '3'}
                                  onClick={() => {
                                      toggle('3')
                                  }}
                              >
                                 To`lov
                              </NavLink>
                          </NavItem>
                          <NavItem>
                              <NavLink
                                  active={active === '4'}
                                  onClick={() => {
                                      toggle('4')
                                  }}
                              >
                                  Guvohnoma
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
                             <Amount/>
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
