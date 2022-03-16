import React, { useState } from 'react'
import { Badge, Button, Card, CardBody, CardHeader, CardTitle } from "reactstrap"
import { ChevronDown, Eye, Filter, Trash } from "react-feather"
import DataTable from "react-data-table-component"
import FillterComponent from "./components/Fillter"
import ModalComponent from "./components/Modal"
import { useSelector } from "react-redux"
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'

const MySwal = withReactContent(Swal)

export default () => {

    const [modalOpen, setModalOpen] = useState(false)
    const [modal, setModal] = useState(false)
    const store = useSelector(state => state.sys)
    const handleModal = () => setModal(!modal)
    const toggle = () => setModalOpen(!modalOpen)

    const handleDelete = () => {
        return MySwal.fire({
            title: 'Ishonchingiz komilmi?',
            text: "Buni keyin qaytara olmaysiz!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonText: 'Ha, o\'chiraman',
            cancelButtonText: "Bekor qilish",
            customClass: {
                confirmButton: 'btn btn-success',
                cancelButton: 'btn btn-outline-danger ms-1'
            },
            buttonsStyling: false
        }).then(function (result) {
            if (result.value) {
                MySwal.fire({
                    icon: 'success',
                    title: 'O\'chirildi!',
                    text: 'Sizning murojaatingiz o\'chirildi!',
                    customClass: {
                        confirmButton: 'btn btn-success'
                    }
                })
            }
        })
    }

    const basicColumns = [
        {
            name: 'ID',
            maxWidth: '30px',
            selector: row => row.id
        },
        {
            name: 'Korxona nomi',
            sortable: true,
            minWidth: '150px',
            selector: row => row.type
        },
        {
            minWidth: '60px',
            right: true,
            cell: () => (
                <div>
                    {/*<Eye color="blue" onClick={toggle} className='me-50' role="button" size={20}/>*/}
                    {/* <Check color="green" onClick={toggle} className='me-50' role="button" size={20} /> */}
                    <Trash color="red" onClick={handleDelete} className='me-50' role="button" size={20} />
                </div>
            )
        }
    ]

    return (
        <>
            <h1 className="mb-2">Saqlangan arizalardagi korhona nomlari</h1>
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
                            data={store?.appeal}
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
