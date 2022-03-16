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
// const MySwal = withReactContent(Swal)

export default () => {
    const [modalOpen, setModalOpen] = useState(false)
    const [modal, setModal] = useState(false)
    const store = useSelector(state => state.sys)
    const handleModal = () => setModal(!modal)
    const toggle = () => setModalOpen(!modalOpen)
    const location = useLocation()
    const history = useHistory()


    const basicColumns = [
          {
            name: '№',
            maxWidth: '30px',
            selector: row => row.id
        },
        {
            name: 'F.I.O.',
            sortable: true,
            minWidth: '120px',
            selector: row => row.type
        },
        {
            name: "STIR",
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
            name: "Sana",
            sortable: true,
            minWidth: '100px',
            selector: row => row.short_discription
        },
        {
            name: "Qo`shdi",
            sortable: true,
            minWidth: '120px',
            selector: row => row.short_discription
        },
        {
            name: "Maqomi",
            sortable: true,
            minWidth: '80px',
            selector: row => row.short_discription
        },
        {
            name: "To`lov holati",
            sortable: true,
            minWidth: '80px',
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
            <h1>brc_transcript.monitoringIndividual</h1>
            <Card className='overflow-hidden mt-2'>
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
