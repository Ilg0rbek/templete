import React, { useState } from 'react'
import { Button, Card, CardBody, CardHeader, CardTitle } from "reactstrap"
import { ChevronDown, Edit, Plus, Trash, Filter } from "react-feather"
import DataTable from "react-data-table-component"
import { useSelector } from "react-redux"
import AddNewsModal from "./components/Modal"
import FillterComponent from "./components/Fillter"
import { useLocation, useHistory } from "react-router-dom"

export default () => {

    const [filter, setFilter] = useState(false)
    const [openModal, setOpenModal] = useState(false)
    const store = useSelector(state => state.sys)
    const handleModal = () => setOpenModal(!openModal)
    const handleFilter = () => setFilter(!filter)
    const location = useLocation()
    const history = useHistory()

    const basicColumns = [
        {
            name: 'ID',
            maxWidth: '20px',
            selector: row => row.id
        },
        {
            name: 'Xabarlar turi',
            sortable: true,
            minWidth: '50px',
            selector: row => row.type
        },
        {
            // name: 'Xabarlar turi',
            // sortable: true,
            minWidth: '60px',
            selector: row => row.type
        },
        {
            // name: 'Xabarlar turi',
            // sortable: true,
            minWidth: '100px',
            selector: row => row.type
        },
        {
            // name: 'Xabarlar turi',
            // sortable: true,
            minWidth: '60px',
            selector: row => row.type
        },
        {
            name: 'Muallif',
            // sortable: true,
            minWidth: '60px',
            selector: row => row.type
        },
        {
            name: 'Ko`rsatish',
            // sortable: true,
            minWidth: '60px',
            selector: row => row.type
        },
        {
            name: 'Faol',
            sortable: true,
            minWidth: '60px',
            selector: row => row.type
        },
        {
            minWidth: '60px',
            right: true,
            cell: () => (
                <div>
                    <Edit onClick={() => history.push(`${location.pathname}/add_new`)} color="green" className='me-50' role="button" size={20} />
                </div>
            )
        }
    ]

    return (
        <>
            <h1 className="mb-2">Qidiruvdagi shaxslar</h1>
            <Card className='overflow-hidden'>
                <CardHeader className='d-flex items-center justify-content-between'>
                    <CardTitle tag='h4'>Ma'lumotlar</CardTitle>
                    <div className="d-flex gap-1">
                        <Button.Ripple onClick={handleFilter} className='btn-icon' outline color='primary'>
                            <Filter size={16} />
                        </Button.Ripple>
                        <Button.Ripple onClick={handleModal} className='btn-icon' outline color='primary'>
                            <Plus size={16} />
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
                            sortIcon={<ChevronDown size={10} />}
                            paginationRowsPerPageOptions={[10, 25, 50, 100]}
                        />
                    </div>
                    <FillterComponent open={filter} handleModal={handleFilter} />
                    <AddNewsModal openModal={openModal} setOpenModal={setOpenModal} toggle={handleModal} />
                    {/*<ModalComponent open={modalOpen} toggle={toggle}/>*/}
                </CardBody>
            </Card>
        </>
    )
}
