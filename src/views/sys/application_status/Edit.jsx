import { useState } from "react"
import { Search } from 'react-feather'
// import DataTable from 'react-data-table-component'
import ModalComponent from "./components/Modal"
// import Swal from 'sweetalert2'
// import withReactContent from 'sweetalert2-react-content'
// import { useSelector } from "react-redux"
import { Card, CardHeader, CardTitle, CardBody, Button, InputGroup, Input } from 'reactstrap'
// import { useHistory, useLocation } from "react-router-dom"
// const MySwal = withReactContent(Swal)

export default () => {
    const [modalOpen, setModalOpen] = useState(false)
    // const [modal, setModal] = useState(false)
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


    return (
        <>
            <h1 className="mb-2">Arizani qidirish</h1>
            <Card className='overflow-hidden'>
                <CardHeader className='d-flex items-center justify-content-between'>
                    {/* <CardTitle tag='h4'>Ma'lumotlar</CardTitle>
                    <div className="d-flex gap-1">
                        <Button.Ripple onClick={handleModal} className='btn-icon' outline color='primary'>
                            <Filter size={16} />
                        </Button.Ripple>
                        <Button.Ripple onClick={() => {
                            history.push(`${location.pathname}/edit`)
                        }} className='btn-icon' outline color='primary'>
                            <Plus size={16} />
                            <span>Qo'shish</span>
                        </Button.Ripple>
                    </div> */}
                    <InputGroup>
                        <Input placeholder="STIRni kiriting..." />
                        <Button.Ripple color='primary' outline>
                            <Search size={15} />
                        </Button.Ripple>
                    </InputGroup>
                </CardHeader>
                <CardBody>
                    hello
                    <ModalComponent open={modalOpen} toggle={toggle} />
                </CardBody>
            </Card>
        </>
    )
}

