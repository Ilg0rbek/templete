import { useState } from "react"
import { ChevronDown, Check, Filter, Eye, Trash, Edit, Download } from 'react-feather'
import DataTable from 'react-data-table-component'
import ModalComponent from "../../sys/id_gov_members/components/Modal"
import FillterComponent from "../../sys/id_gov_members/components/Fillter"
// import Swal from 'sweetalert2'
// import withReactContent from 'sweetalert2-react-content'
import { useSelector } from "react-redux"
import { Card, CardHeader, CardTitle, CardBody, Button, Badge } from 'reactstrap'
import { useHistory, useLocation } from "react-router-dom"
// import { useHistory, useLocation } from "react-router-dom"
// const MySwal = withReactContent(Swal)

export default () => {
    const [modalOpen, setModalOpen] = useState(false)
    const [modal, setModal] = useState(false)
    const store = useSelector(state => state.sys)
    const handleModal = () => setModal(!modal)
    const toggle = () => setModalOpen(!modalOpen)

    const history = useHistory()
    const location = useLocation()

    const basicColumns = [
          {
            name: 'Ariza',
            maxWidth: '30px',
            selector: row => row.id
        },
        {
            name: 'Sana va Vaqt',
            sortable: true,
            minWidth: '120px',
            selector: row => row.type
        },
        {
            name: 'F.I.O.',
            minWidth: '150px',
            selector: row => row.short_discription
        },
        {
            name: 'STIR',
            sortable: true,
            minWidth: '120px',
            selector: row => row.short_discription
        },
        {
            name: "PINFL",
            sortable: true,
            minWidth: '100px',
            selector: row => row.short_discription
        },
        {
            name: "THSHT",
            sortable: true,
            minWidth: '100px',
            selector: row => row.short_discription
        },
        {
            name: "Viloyat",
            sortable: true,
            minWidth: '100px',
            selector: row => row.short_discription
        },
        {
            name: "Tuman",
            sortable: true,
            minWidth: '100px',
            selector: row => row.short_discription
        },
        {
            name: "Qo`shdi",
            sortable: true,
            minWidth: '100px',
            selector: row => row.short_discription
        },
        {
            name: "Texnologiya",
            sortable: true,
            minWidth: '100px',
            selector: row => row.short_discription
        },
        {
          name: "Maqomi",
          sortable: true,
          minWidth: '100px',
          selector: row => row.cell
        },
        {
          name: "To`lov holati",
          sortable: true,
          minWidth: '100px',
          selector: row => row.short_discription
        },
        {
          name: "Soliq",
          sortable: true,
          minWidth: '100px',
          selector: row => row.short_discription
        }, 
        {
            minWidth: '30px',
            right:true,
            cell: () => (
                <div>
                    <Eye color="blue" onClick={() => history.push(`${location.pathname}/new`)} className='me-50' role="button" size={20} />
                    {/* <Edit color="green" onClick={toggle} className='me-50 me-1' role="button" size={20} /> 
                    <Trash color="red" onClick={handleDelete} className='me-50' role="button" size={20} /> */}
                </div>
            )
        }
    ]

    return (
        <>
            <h1>Registratsiya Reestri jismoniy shaxslar</h1>
            <Card className='overflow-hidden mt-2'>
                <CardHeader className='d-flex items-center justify-content-between'>
                    <CardTitle tag='h4'>Ma'lumotlar</CardTitle>
                    <div className="d-flex gap-1">
                    <Button.Ripple onClick={() => alert("Malumot topilmadi")} className='btn-icon' outline color='primary'>
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
