import { useState } from "react"
import { ChevronDown, Filter, Download, Eye, Trash, Edit } from 'react-feather'
import DataTable from 'react-data-table-component'
import FilterComponent from "./components/Fillter"
import ModalComponent from "./components/Modal"

import { Card, CardHeader, CardTitle, CardBody, Button } from 'reactstrap'
// import { useHistory, useLocation } from "react-router-dom"

const data = [
    {
        id: 1,
        fullname: 'Ogabek Yuldoshev',
        inn: 123123123132,
        thsht: 'THSHT',
        date: "12.12.2021",
        creator: 'Islombek Atajanov',
        techno: "bo.birdarcha.uz",
        payment_type: "To'lov holati"
    }
]

const ApplicationsPage = () => {

    const [modal, setModal] = useState(false)
    const [modalOpen, setModalOpen] = useState(false)

    const toggle = () => setModalOpen(!modalOpen)
    const handleModal = () => setModal(!modal)
    // const location = useLocation()
    // const history = useHistory()

    const basicColumns = [
        {
            name: 'ID',
            sortable: true,
            maxWidth: '40px',
            selector: row => row.id
        },
        {
            name: 'F.I.O',
            sortable: true,
            minWidth: '200px',
            selector: row => row.fullname
        },
        {
            name: 'JSHSHIR',
            sortable: true,
            minWidth: '150px',
            selector: row => row.inn
        },
        {
            name: 'THSHT',
            sortable: true,
            minWidth: '100px',
            selector: row => row.thsht
        },
        {
            name: 'Sana',
            sortable: true,
            minWidth: '100px',
            selector: row => row.date
        },
        {
            name: "Qo'shdi",
            sortable: true,
            minWidth: '150px',
            selector: row => row.creator
        },
        {
            name: 'Texnologiya',
            sortable: true,
            minWidth: '100px',
            selector: row => row.techno
        },
        {
            name: "To'lov holati",
            sortable: true,
            minWidth: '100px',
            selector: row => row.payment_type
        },
        {
            minWidth: '100px',
            cell: () => (
                <div>
                    <Eye color="green" onClick={toggle} className='me-50' role="button" size={20} />
                    {/* <Edit color="blue" className='me-50' role="button" size={20} />
                    <Trash color="red" className='me-50' role="button" size={20} /> */}
                </div>
            )
        }
    ]

    return (
        <>
            <h1 className="mb-2">Hisob Raqamlar Jurnali</h1>
            <Card className='overflow-hidden'>
                <CardHeader className='d-flex items-center justify-content-between'>
                    <CardTitle tag='h4'>Ma'lumotlar</CardTitle>
                    <div className="d-flex gap-1">
                        <Button.Ripple onClick={() => alert("Downloading....")} className='btn-icon' outline color='primary'>
                            <Download size={16} />
                        </Button.Ripple>
                        <Button.Ripple onClick={handleModal} className='btn-icon' outline color='primary'>
                            <Filter size={16} />
                        </Button.Ripple>
                    </div>
                </CardHeader>
                <CardBody>
                    <div className='react-dataTable'>
                        <DataTable
                            noHeader
                            pagination
                            data={data}
                            columns={basicColumns}
                            className='react-dataTable'
                            sortIcon={<ChevronDown size={10} />}
                            paginationRowsPerPageOptions={[10, 25, 50, 100]}
                        />
                    </div>
                    <FilterComponent open={modal} handleModal={handleModal} />
                    <ModalComponent open={modalOpen} toggle={toggle} />
                </CardBody>
            </Card>
        </>
    )
}

export default ApplicationsPage
