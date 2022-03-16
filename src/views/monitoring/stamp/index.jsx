import { useState, useEffect } from "react"
import { ChevronDown, Check, Filter, Eye, Trash, Edit, Download } from 'react-feather'
import ModalComponent from "../../sys/id_gov_members/components/Modal"
import { Card, CardHeader, CardTitle, CardBody, Button, Badge } from 'reactstrap'
import { useHistory, useLocation } from "react-router-dom"
import TableComponent from "../../../components/Table"
import { useDispatch, useSelector } from "react-redux"
import FillterComponent from "./Filter"
import { getStampMntr } from "../../../redux/reducers/monitoring"

// const MySwal = withReactContent(Swal)

export default () => {
    const [modalOpen, setModalOpen] = useState(false)
    const [modal, setModal] = useState(false)
    const handleModal = () => setModal(!modal)
    const toggle = () => setModalOpen(!modalOpen)

    const location = useLocation()
    const history = useHistory()
    const store = useSelector(state => state.monitor)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getStampMntr())
    }, [])

    const view = (id) => {
        history.push(`${location.pathname}/${id}`)
    }

    console.log(store.stamplist)

    const basicColumns = [
        {
            name: '№',
            maxWidth: '30px',
            selector: row => row.id
        },
        {
            name: 'Full Name',
            sortable: true,
            maxWidth: '380px',
            selector: row => row.full_name
        },
        {
            name: 'Phone Number',
            maxWidth: '180px',
            selector: row => row.phone_number
        },
        {
            name: 'Message',
            cell: (row) => (
                <div dangerouslySetInnerHTML={{ __html: row.message }} />
            )
        },
        {
            name: "Created Date",
            sortable: true,
            maxWidth: '220px',
            selector: row => row.created_at
        },
        {
            name: "Complete",
            sortable: true,
            maxWidth: '150px',
            cell: (row) => (
                <Badge color={row.is_complete ? "success" : "warning"} >
                    {row.is_complete ? "Ariza qabul qilindi" : "Ariza qabul jarayonida"}
                </Badge>
            )
        },
        {
            maxWidth: '30px',
            right: true,
            cell: (row) => (
                <div>
                    <Eye color="blue" onClick={() => view(row.id)} className='me-50' role="button" size={20} />
                    {/* <Edit color="green" onClick={toggle} className='me-50 me-1' role="button" size={20} /> 
                    <Trash color="red" onClick={handleDelete} className='me-50' role="button" size={20} /> */}
                </div>
            )
        }
    ]
    return (
        <>
            <h1>Muhr va shtamp yasashga buyurtma berish</h1>
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
                        <TableComponent
                            columns={basicColumns}
                            data={store?.stamplist}
                            totalPages={store?.totalPages}
                            currentPage={store?.currentPage}
                        />
                    </div>
                    <FillterComponent open={modal} handleModal={handleModal} />
                    <ModalComponent open={modalOpen} toggle={toggle} />
                </CardBody>
            </Card>
        </>
    )
}
