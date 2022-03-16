import React, {useEffect, useState} from 'react'
import {Badge, Button, Card, CardBody, CardHeader, CardTitle} from "reactstrap"
import {ChevronDown, Download, Edit, Eye, Filter, Plus} from "react-feather"
import DataTable from "react-data-table-component"
import {useDispatch, useSelector} from "react-redux"
import Table from "../../../../components/Table"
import * as leCanceled from "../../../../redux/reducers/Legal_Cancel"
// import {useHistory, useLocation} from "react-router-dom"
import FillterComponent from "../../../sys/y_change/components/Fillter"
import ModalComponent from "../../../sys/y_change/components/Modal"

export default () => {

    const dispatch = useDispatch()
    const store = useSelector(state => state.le_canceled)

    const [modalOpen, setModalOpen] = useState(false)
    const [modal, setModal] = useState(false)
    const handleModal = () => setModal(!modal)
    const toggle = () => setModalOpen(!modalOpen)
    // const location = useLocation()
    // const history = useHistory()

    useEffect(() => {
        dispatch(leCanceled.getLegalJournalEntity())
    }, [])

    console.log(store)

    const basicColumns = [
        {
            name: 'Ariza',
            maxWidth: '30px',
            selector: row => row.id
        },
        {
            name: 'Ariza ochilgan sana',
            sortable: true,
            minWidth: '150px',
            selector: row => row.date
        },
        {
            name: 'Korxona nomi',
            sortable: true,
            minWidth: '150px',
            selector: row => row.name
        },
        {
            name: 'STIR',
            sortable: true,
            minWidth: '90px',
            selector: row => row.tin
        },
        {
            name: 'THShT',
            sortable: true,
            minWidth: '150px',
            selector: row => row.opf
        },
        {
            name: 'Viloyat',
            sortable: true,
            minWidth: '150px',
            selector: row => row.region
        },
        {
            name: 'Tuman',
            sortable: true,
            minWidth: '150px',
            selector: row => row.subRegion
        },
        {
            name: 'Maqomi',
            sortable: true,
            minWidth: '300px',
            cell: row => (
                <Badge className={row?.status?.color}>
                    {row.status?.name}
                </Badge>
            )
        },
        {
            name: 'Qo`shdi',
            sortable: true,
            minWidth: '150px',
            selector: row => row.createdBy
        },
        {
            minWidth: '60px',
            right: true,
            cell: () => (
                <div>
                    <Eye color="green" className='me-50' role="button" size={20}/>
                </div>
            )
        }
    ]

    return (
        <>
            <h1 className="mb-2">Ixtiyoriy tugatish jurnali</h1>
            <Card className='overflow-hidden'>
                <CardHeader className='d-flex items-center justify-content-between'>
                    <CardTitle tag='h4'>Ma'lumotlar</CardTitle>
                    <div className="d-flex gap-1">
                        <Button.Ripple onClick={handleModal} className='btn-icon' outline color='primary'>
                            <Filter size={16}/>
                        </Button.Ripple>
                        <Button.Ripple onClick={() => alert("Downloading....")} className='btn-icon' outline color='primary'>
                            <Download size={16} />
                        </Button.Ripple>
                    </div>
                </CardHeader>
                <CardBody>
                    <div className='react-dataTable'>
                        <Table data={store?.journalList} columns={basicColumns} currentPage={0}
                               totalPages={store?.totalPages}/>
                    </div>
                    <FillterComponent open={modal} handleModal={handleModal} />
                    <ModalComponent open={modalOpen} toggle={toggle} />
                </CardBody>
            </Card>
        </>
    )
}
