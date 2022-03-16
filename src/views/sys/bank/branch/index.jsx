import { useState } from "react"
import { ChevronDown, Filter, Eye, Trash, Edit, List, Plus } from 'react-feather'
import DataTable from 'react-data-table-component'
import ModalComponent from "./components/Modal"
import FillterComponent from "./components/Fillter"
// import Swal from 'sweetalert2'
// import withReactContent from 'sweetalert2-react-content'
import { useSelector } from "react-redux"
import { Card, CardHeader, CardTitle, CardBody, Button } from 'reactstrap'
import Avatar from '@components/avatar'
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
            width: '70px',
            selector: row => row.id
        },
        {
            name: 'Bank nomi',
            cell: row => (
                <div className='d-flex align-items-center gap-1'>
                    {/* {row.avatar === '' ? ( */}
                    <Avatar color={`green`} content={row.name} initials />
                    {/* // ) : ( */}
                    {/* //     <Avatar img={require(`@src/assets/images/portrait/small/avatar-s-${row.avatar}`).default} /> */}
                    {/* // )} */}
                    <span className='d-block fw-bold text-truncate'>{row.name}</span>
                </div>
            )
        },
        {
            name: 'Manzili',
            sortable: true,
            cell: row => (
                <p>{row.address}</p>
            )
        },
        {
            name: 'Telfon',
            sortable: true,
            selector: row => row.phone
        },
        {
            name: 'Web Sayti',
            sortable: true,
            selector: row => row.site
        },
        {
            name: 'Status',
            sortable: true,
            selector: row => row.status
        },
        {
            minWidth: '60px',
            right: true,
            cell: () => (
                <div>
                    {/* <Eye color="blue" onClick={toggle} className='me-50' role="button" size={20} /> */}
                    <Edit color="green" onClick={toggle} className='me-50' role="button" size={20} />
                    {/* <List color="blue" className='me-50' role="button" size={20} /> */}
                </div>
            )
        }
    ]

    return (
        <>
            <h1 className="mb-2">Bank filiallari ro'yxati</h1>
            
            <Card className='overflow-hidden'>
                <CardHeader className='d-flex items-center justify-content-between'>
                    <CardTitle tag='h4'>Ma'lumotlar</CardTitle>
                    <div className="d-flex gap-1">
                        <Button.Ripple onClick={handleModal} className='btn-icon' outline color='primary'>
                            <Filter size={16} />
                        </Button.Ripple>
                        <Button onClick={toggle} color='success'>
                            <Plus size={16} />
                            <span>Qo'shish</span>
                        </Button>
                    </div>
                </CardHeader>
                <CardBody>
                    <div className='react-dataTable'>
                        <DataTable
                            noHeader
                            pagination
                            data={store?.branch}
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

