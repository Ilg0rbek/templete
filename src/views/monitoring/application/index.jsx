import { useState, useEffect } from "react"
import { ChevronDown, Check, Filter, Eye, Trash, Edit, Download } from 'react-feather'
import ModalComponent from "../../sys/id_gov_members/components/Modal"
import FillterComponent from "./Fillter"
import { Card, CardHeader, CardTitle, CardBody, Button, Badge } from 'reactstrap'
import { useHistory, useLocation } from "react-router-dom"
import TableComponent from "../../../components/Table"
import { useDispatch, useSelector } from "react-redux"
import { getAplicantAllList } from "../../../redux/reducers/monitoring"

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
        dispatch(getAplicantAllList())
    }, [])

    const view = (id) => {
        history.push(`${location.pathname}/${id}`)
    }

    console.log(store)

    const basicColumns = [
        {
            name: '№',
            maxWidth: '30px',
            selector: row => row.id
        },
        {
            name: 'Ariza kelib tushgan sana va vaqt',
            sortable: true,
            minWidth: '120px',
            selector: row => row.created_at
        },
        {
            name: 'Viloyat',
            minWidth: '150px',
            selector: row => row.check_soato
        },
        {
            name: 'Tekshiruv turi',
            sortable: true,
            minWidth: '120px',
            selector: row => row.needs_checking
        },
        {
            name: "Ariza raqami",
            sortable: true,
            minWidth: '100px',
            selector: row => row.change_legal_entity + row.le_reg_application
        },
        {
            name: "STIR",
            sortable: true,
            minWidth: '100px',
            selector: row => row.tin
        },
        {
            name: "Korxona nomi",
            sortable: true,
            minWidth: '100px',
            selector: row => row.name
        },
        {
            name: "Tekshiruv natijasi",
            sortable: true,
            minWidth: '100px',
            cell: (row) => (
                <Badge color="success">
                    {row.needs_checking}
                </Badge>
            )
        },
        {
            name: "Tekshirilganlar",
            sortable: true,
            minWidth: '80px',
            selector: row => row.checking_type
        },
        {
            minWidth: '30px',
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
            <h1>Arizalar monitoringi</h1>
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
                            data={store?.aplicant}
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
