import React, {useState} from 'react'
import {Button, Card, CardBody, CardHeader, CardTitle} from "reactstrap"
import {ChevronDown, Edit, Filter, Plus, Trash} from "react-feather"
import DataTable from "react-data-table-component"
import {useSelector} from "react-redux"
import AddNewsModal from "./components/Modal"
import FillterComponent from "../../sys/id_gov_members/components/Fillter"

export default () => {

    const [openModal, setOpenModal] = useState(false)
    const store = useSelector(state => state.sys)
    const handleModal = () => setOpenModal(!openModal)


    const basicColumns = [
        {
            name: 'ID',
            sortable: true,
            maxWidth: '20px',
            selector: row => row.id
        },
        {
            name: 'Xizmat ID',
            sortable: true,
            minWidth: '50px',
            selector: row => row.type
        },
        {
            name: 'Xizmat nomi',
            sortable: true,
            minWidth: '150px',
            selector: row => row.type
        },
        {
            name: 'Toshkent shahri',
            sortable: true,
            minWidth: '60px',
            selector: row => row.type
        },
        {
            name: 'Viloyat markazi',
            sortable: true,
            minWidth: '60px',
            selector: row => row.type
        },
        {
            name: 'Shahar/Tuman',
            sortable: true,
            minWidth: '60px',
            selector: row => row.type
        },
        {
            minWidth: '60px',
            right: true,
            cell: () => (
                <div>
                    {/*<Eye color="blue" onClick={toggle} className='me-50' role="button" size={20}/>*/}
                    {/* <Check color="green" onClick={toggle} className='me-50' role="button" size={20} /> */}
                    <Edit color="green" onClick={handleModal} className='me-50' role="button" size={20}/>
                    <Trash color="red" onClick={() => alert("delete....")} className='me-50' role="button" size={20}/>
                </div>
            )
        }
    ]

    return (
        <>
            <h1 className="mb-2">Pullik xizmatlar</h1>
            <Card className='overflow-hidden'>
                <CardHeader className='d-flex items-center justify-content-between'>
                    <CardTitle tag='h4'>Ma'lumotlar</CardTitle>
                    <div className="d-flex gap-1">
                        <Button.Ripple onClick={handleModal} className='btn-icon' outline color='primary'>
                            <Plus size={16}/>
                        </Button.Ripple>
                    </div>
                </CardHeader>
                <CardBody>
                    <div className='react-dataTable'>
                        <DataTable
                            noHeader
                            pagination
                            data={store?.appeal}
                            columns={basicColumns}
                            className='react-dataTable'
                            sortIcon={<ChevronDown size={10}/>}
                            paginationRowsPerPageOptions={[10, 25, 50, 100]}
                        />
                    </div>
                    {/*<FillterComponent open={openFilter} handleModal={handleFilter}/>*/}
                    <AddNewsModal openModal={openModal} setOpenModal={setOpenModal} toggle={handleModal}/>
                    {/*<ModalComponent open={modalOpen} toggle={toggle}/>*/}
                </CardBody>
            </Card>
        </>
    )
}
