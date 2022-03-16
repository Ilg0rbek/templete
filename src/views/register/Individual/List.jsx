import { useState, useEffect } from "react"
import { Filter, Eye, Trash, Edit, Download } from 'react-feather'
// import ModalComponent from "../../sys/id_gov_members/components/Modal"
import FillterComponent from "../../sys/id_gov_members/components/Fillter"
// import Swal from 'sweetalert2'
// import withReactContent from 'sweetalert2-react-content'
import { useSelector, useDispatch } from "react-redux"
import { Card, CardHeader, CardTitle, CardBody, Button, Badge } from 'reactstrap'
import { useHistory, useLocation } from "react-router-dom"
import { getIndividualApplicationList } from "@store/reducers/Register"
// import {  } from "react-redux"
// const MySwal = withReactContent(Swal)
import DataTable from "react-data-table-component"

export default () => {
    const [modal, setModal] = useState(false)
    const { applications } = useSelector(state => state.register)
    const handleModal = () => setModal(!modal)
    const location = useLocation()
    const history = useHistory()
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getIndividualApplicationList({ type: 0 }))
    }, [location])

    const basicColumns = [
        {
            name: 'ID',
            maxWidth: '30px',
            selector: row => row.id
        },
        {
            name: 'F.I.O',
            sortable: true,
            minWidth: '120px',
            selector: row => row.first_name
        },
        {
            name: 'THSHT',
            sortable: true,
            minWidth: '120px',
            selector: row => row.opf
        },
        {
            name: "Pinfl",
            minWidth: "160px",
            sortable: true,
            wrap: true,
            selector: row => row.pin
        },
        {
            name: "Holati",
            sortable: true,
            cell: row => {
                if (row.complete) return <Badge color="success">Yakunlangan</Badge>
                return <Badge color="warning">Yakunlanmagan</Badge>
            }
        },
        {
            name: "Ro'yxatdan o'tgan sana",
            sortable: true,
            selector: row => row.registeredAt
        },
        {
            minWidth: '30px',
            right: true,
            cell: (row) => (
                <div>
                    <Eye color="blue" onClick={() => history.push(`${location.pathname}/view/${row.id}`)} className='me-50' role="button" size={20} />
                </div>
            )
        }
    ]

    return (
        <>
            <h1>Arizalarim</h1>
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
                            pagination
                            data={applications?.content}
                            columns={basicColumns}
                        />
                    </div>
                    <FillterComponent open={modal} handleModal={handleModal} />
                </CardBody>
            </Card>
        </>
    )
}
