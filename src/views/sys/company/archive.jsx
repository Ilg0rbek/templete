import React, {useState} from 'react'
import {Button, Card, CardBody, CardHeader, CardTitle} from "reactstrap"
import {Filter} from "react-feather"
import FillterComponent from "../id_gov_members/components/Fillter"
import ModalComponent from "../id_gov_members/components/Modal"


export default () => {

    const [modalOpen, setModalOpen] = useState(false)
    const [modal, setModal] = useState(false)
    const handleModal = () => setModal(!modal)
    const toggle = () => setModalOpen(!modalOpen)


    return (
        <>
            <h1 className="mb-2">Nom zahiraga olish
            </h1>
            <Card className='overflow-hidden'>
                <CardHeader className='d-flex items-center justify-content-between'>
                    <CardTitle tag='h4'>Ma'lumotlar</CardTitle>
                    <div className="d-flex gap-1">
                        <Button.Ripple onClick={handleModal} className='btn-icon' outline color='primary'>
                            <Filter size={16}/>
                        </Button.Ripple>
                    </div>
                </CardHeader>
                <CardBody>
                    <div className='react-dataTable'>
                        {/*<DataTable*/}
                        {/*    noHeader*/}
                        {/*    pagination*/}
                        {/*    data={store?.appeal}*/}
                        {/*    columns={basicColumns}*/}
                        {/*    className='react-dataTable'*/}
                        {/*    sortIcon={<ChevronDown size={10}/>}*/}
                        {/*    paginationRowsPerPageOptions={[10, 25, 50, 100]}*/}
                        {/*/>*/}
                    </div>
                    <FillterComponent open={modal} handleModal={handleModal}/>
                    <ModalComponent open={modalOpen} toggle={toggle}/>
                </CardBody>
            </Card>
        </>
    )
}
