import { useState } from "react"
import { Modal, ModalBody, ModalHeader, Row, Col, TabContent, TabPane, Nav, NavLink, NavItem, Button } from "reactstrap"
import InfoOrg from "./sub-component/info-organization"
import InfoCourt from "./sub-component/info-court"
import Doc from "./sub-component/doc"

const ModalComponent = ({ open, toggle, id }) => {
    const [active, setActive] = useState(1)

    const setTab = tab => {
        if (active !== tab) {
            setActive(tab)
        }
    }
    const NavTab = [
        {
            id: 1,
            name: "Korxona ma`lumotlari"
        },
        {
            id: 2,
            name: "Suddan kelgan ma`lumotlar"
        },
        {
            id: 3,
            name: "Ilova Hujjatlar"
        }
    ]
    return (
        <>
            <Modal isOpen={open} toggle={toggle} className='modal-dialog-centered modal-lg'>
                <ModalHeader className='bg-transparent' toggle={toggle}>Bankrotlik ariza №{id}</ModalHeader>
                <ModalBody>
                    <Nav tabs className='justify-content-center'>
                        {
                            NavTab?.map((item, index) => (
                                <NavItem key={index}>
                                    <NavLink
                                        active={active === item?.id}
                                        onClick={() => {
                                            setTab(item?.id)
                                        }}
                                    >
                                        {item?.name}
                                    </NavLink>
                                </NavItem>
                            ))
                        }
                    </Nav>
                    <TabContent className='py-50' activeTab={active}>
                        <TabPane tabId={1}>
                            <InfoOrg/>
                        </TabPane>
                        <TabPane tabId={2}>
                            <InfoCourt/>
                        </TabPane>
                        <TabPane tabId={3}>
                            <Doc/>
                        </TabPane>
                    </TabContent>
                </ModalBody>
            </Modal>
        </>
    )
}

export default ModalComponent
