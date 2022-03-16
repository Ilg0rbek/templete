import { useState } from "react"
import { ChevronDown, Check, Filter, Eye, Trash, Edit } from 'react-feather'
import DataTable from 'react-data-table-component'
import ModalComponent from "./components/Modal"
import FillterComponent from "./components/Fillter"
import { fCurrency } from "@utils"
// import Swal from 'sweetalert2'
// import withReactContent from 'sweetalert2-react-content'
import { useSelector } from "react-redux"
import { Card, CardHeader, CardTitle, CardBody, Button, Badge } from 'reactstrap'
// import { useHistory, useLocation } from "react-router-dom"
// const MySwal = withReactContent(Swal)

export default () => {
    const [modalOpen, setModalOpen] = useState(false)
    const [modal, setModal] = useState(false)
    const store = useSelector(state => state.sys)
    const handleModal = () => setModal(!modal)
    const toggle = () => setModalOpen(!modalOpen)
    // const location = useLocation()
    // const history = useHistory()

    // const handleDelete = () => {
    //     return MySwal.fire({
    //         title: 'Ishonchingiz komilmi?',
    //         text: "Buni keyin qaytara olmaysiz!",
    //         icon: 'warning',
    //         showCancelButton: true,
    //         confirmButtonText: 'Ha, o\'chiraman',
    //         cancelButtonText: "Bekor qilish",
    //         customClass: {
    //             confirmButton: 'btn btn-success',
    //             cancelButton: 'btn btn-outline-danger ms-1'
    //         },
    //         buttonsStyling: false
    //     }).then(function (result) {
    //         if (result.value) {
    //             MySwal.fire({
    //                 icon: 'success',
    //                 title: 'O\'chirildi!',
    //                 text: 'Sizning murojaatingiz o\'chirildi!',
    //                 customClass: {
    //                     confirmButton: 'btn btn-success'
    //                 }
    //             })
    //         }
    //     })
    // }

    const basicColumns = [
        {
            name: 'ID',
            maxWidth: '30px',
            selector: row => row.id
        },
        {
            name: 'Invoys raqami',
            sortable: true,
            maxWidth: '300px',
            selector: row => row.invoise
        },
        {
            name: 'Umumiy to\'lovlar summasi',
            minWidth: '300px',
            selector: row => fCurrency.format(row.sum)
        },
        {
            name: "Status",
            sortable: true,
            minWidth: '300px',
            cell: (row) => (
                <Badge color="success">{row.status}</Badge>
            )
        },
        {
            name: 'To\'lov turi',
            minWidth: '200px',
            selector: row => row.payment_type
        },
        {
            minWidth: '60px',
            right: true,
            cell: () => (
                <div>
                    <Eye color="blue" onClick={toggle} className='me-50' role="button" size={20} />
                    {/* <Check color="green" onClick={toggle} className='me-50' role="button" size={20} /> */}
                    {/* <Trash color="red" onClick={handleDelete} className='me-50' role="button" size={20} /> */}
                </div>
            )
        }
    ]

    return (
        <>
            <h1 className="mb-2">To'lovlar monitoringi</h1>
            <Card className='overflow-hidden'>
                <CardHeader className='d-flex items-center justify-content-between'>
                    <CardTitle tag='h4'>Ma'lumotlar</CardTitle>
                    <div className="d-flex gap-1">
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
                            data={store?.payment_list}
                            columns={basicColumns}
                            className='react-dataTable'
                            sortIcon={<ChevronDown size={10} />}
                            paginationRowsPerPageOptions={[10, 25, 50, 100]}
                        />
                    </div>
                    <FillterComponent open={modal} handleModal={handleModal} />
                    <ModalComponent open={modalOpen} toggle={toggle} />
                </CardBody>
            </Card>
        </>
    )
}

