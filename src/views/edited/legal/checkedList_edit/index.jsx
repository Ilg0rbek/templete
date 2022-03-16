import React, {useEffect, useState} from 'react'
import {Badge, Button, Card, CardBody, CardHeader, CardTitle} from "reactstrap"
import {Filter} from "react-feather"
import {useDispatch, useSelector} from "react-redux"
import Table from "../../../../components/Table"
import * as lePermEdit from "../../../../redux/reducers/Edit_Legal"
// import {useHistory, useLocation} from "react-router-dom"
import FillterComponent from "../../../sys/y_change/components/Fillter"
import ModalComponent from "../../../sys/y_change/components/Modal"
import FileExport from "../../../../components/FileExport"
import {useLocation} from "react-router-dom"
import qs from "qs"

export default () => {

    const dispatch = useDispatch()
    const store = useSelector(state => state.legalPermEdit)

    const [modalOpen, setModalOpen] = useState(false)
    const [modal, setModal] = useState(false)
    const handleModal = () => setModal(!modal)
    const toggle = () => setModalOpen(!modalOpen)
    const location = useLocation()
    const query = qs.parse(location.search, {ignoreQueryPrefix: true})
    // const history = useHistory()

    console.log(dispatch)
    console.log(lePermEdit)

    useEffect(() => {
        if (location.search) {
            dispatch(lePermEdit.getJournalPermissionLegal(query))
        } else {
            dispatch(lePermEdit.getJournalPermissionLegal())
        }
    }, [location])

    console.log(store)

    const basicColumns = [
        {
            name: '№',
            sortable: true,
            maxWidth: '30px',
            selector: row => row.id
        },
        {
            name: 'Holati',
            sortable: true,
            width: '120px',
            cell: row => (
                <Badge color={row.success ? 'success' : 'danger'}>
                    {row.success ? 'Ruxsat berildi' : 'Ruxsat berilmadi'}
                </Badge>
            )
        },
        {
            name: 'Sababi',
            sortable: true,
            width: '300px',
            wrap: true,
            cell: row => (
                <span className={row.success ? 'bg-success rounded text-white' : 'bg-danger rounded text-white'}>
                   {row?.msg}
                </span>
            )
        },
        {
            name: 'Qo`shilgan vaqti',
            sortable: true,
            minWidth: '150px',
            selector: row => row.created
        },
        {
            name: 'Kim tomonidan tekshirilgan',
            sortable: true,
            minWidth: '150px',
            selector: row => row.user
        },
        {
            name: 'STIR',
            sortable: true,
            minWidth: '150px',
            selector: row => row.tin
        }
    ]

    return (
        <>
            <h1 className="mb-2">Yuridik shaxs o'zgartirishlari</h1>
            <Card className='overflow-hidden'>
                <CardHeader className='d-flex items-center justify-content-between'>
                    <CardTitle tag='h4'>Ma'lumotlar</CardTitle>
                    <div className="d-flex gap-1">
                        <FileExport data={store?.checkedList}/>
                        <Button.Ripple onClick={handleModal} className='btn-icon' outline color='primary'>
                            <Filter size={16}/>
                        </Button.Ripple>
                    </div>
                </CardHeader>
                <CardBody>
                    <div className='react-dataTable'>
                        <Table data={store?.checkedList} columns={basicColumns} currentPage={store?.currentPage}
                               totalPages={store?.totalPages}/>
                    </div>
                    <FillterComponent open={modal} handleModal={handleModal}/>
                    <ModalComponent open={modalOpen} toggle={toggle}/>
                </CardBody>
            </Card>
        </>
    )
}
