import React, {useEffect, useState} from "react"
import {Edit, Eye, Filter, Plus} from 'react-feather'
import FilterComponent from "../components/Fillter"
import {Badge, Button, Card, CardBody, CardHeader, CardTitle} from 'reactstrap'
import {useDispatch, useSelector} from "react-redux"
import * as certificate from "../../../redux/reducers/Certificate"
import Table from "../../../components/Table"
import FileExport from "../../../components/FileExport"
import {useHistory, useLocation} from "react-router-dom"
import qs from "qs"

const JurnalPage = () => {

    const dispatch = useDispatch()
    const location = useLocation()
    const history = useHistory()
    const store = useSelector(state => state)

    const {individualUserJournal, totalPages, currentPage, perPage, isLoading} = store.certificate
    const [modal, setModal] = useState(false)

    const handleModal = () => setModal(!modal)
    const query = qs.parse(location.search, {ignoreQueryPrefix: true})

    useEffect(() => {
        if (location.search) {
            dispatch(certificate.userIndividualJournal(query))
        } else {
            dispatch(certificate.userIndividualJournal())
        }
    }, [location])

    const basicColumns = [
        {
            name: 'ID',
            sortable: true,
            maxWidth: '40px',
            selector: row => row.id
        },
        {
            name: 'Sana va vaqt',
            sortable: true,
            minWidth: '200px',
            selector: row => row.created_at
        },
        {
            name: 'Korxona nomi',
            sortable: true,
            minWidth: '150px',
            selector: row => row.individual_name
        },
        {
            name: 'PINFL',
            sortable: true,
            minWidth: '100px',
            selector: row => row.pinfl
        },
        {
            name: 'STIR',
            sortable: true,
            minWidth: '100px',
            selector: row => row.tin
        },
        {
            name: 'Viloyat',
            sortable: true,
            minWidth: '100px',
            selector: row => row.region
        },
        {
            name: 'Tuman',
            sortable: true,
            minWidth: '100px',
            selector: row => row.sub_region
        },
        {
            name: 'Maqomi',
            sortable: true,
            minWidth: '100px',
            cell: row => (
                <Badge color={row?.is_complete ? "success" : "danger"}>
                    {row?.is_complete ? "To`landi" : "O`zgarish jarayonida"}
                </Badge>
            )
        },
        {
            name: 'To`lov holati',
            sortable: true,
            minWidth: '100px',
            cell: row => (
                <Badge className={!row?.payment?.is_payed ? "d-none" : ''} color='primary'>
                    {row?.payment?.invoice}
                </Badge>
            )
        },
        {
            name: "Qo'shdi",
            sortable: true,
            minWidth: '150px',
            selector: row => row.user
        },
        {
            minWidth: '100px',
            cell: (row) => (
                <div>
                    <Eye onClick={() => history.push(`${location.pathname}/view/${row.id}?type=see`)} color="green"
                         className='me-50' role="button" size={20}/>
                    <Edit onClick={() => history.push(`/certificate/reference/${row.id}?type=edit`)} color="blue" className='me-50' role="button" size={20}/>
                </div>
            )
        }
    ]

    function getFilter(data) {
        console.log(data)
        dispatch(certificate.userIndividualJournal(data))
    }


    return (
        <>
            <h1 className="mb-2">Jismoniy Shaxs yangi taxrirdagi guvohnoma berish jurnali</h1>
            <Card className='overflow-hidden'>
                <CardHeader className='d-flex items-center justify-content-between'>
                    <CardTitle tag='h4'>Ma'lumotlar</CardTitle>
                    <div className="d-flex gap-1">
                        <FileExport data={individualUserJournal}/>
                        <Button.Ripple onClick={handleModal} className='btn-icon' outline color='primary'>
                            <Filter size={16}/>
                        </Button.Ripple>
                        <Button.Ripple onClick={() => history.push(`/certificate`)} className='btn-icon' outline color='primary'>
                            <Plus size={16}/>
                        </Button.Ripple>
                    </div>
                </CardHeader>
                <CardBody>
                    <div className='react-dataTable'>
                        <Table data={individualUserJournal} progressPending={isLoading} columns={basicColumns}
                               perPage={perPage} currentPage={currentPage}
                               totalPages={totalPages}/>
                    </div>
                    <FilterComponent open={modal} handleModal={handleModal} getFilter={getFilter}/>
                </CardBody>
            </Card>
        </>
    )
}

export default JurnalPage
