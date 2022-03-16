import React, { useEffect } from "react"
// import Modal from "./Modal"
import { Badge, Card, CardBody, CardHeader, CardTitle } from "reactstrap"
import FileExport from "@cp/FileExport"
import Table from "@cp/Table"
import { getApplications } from "@store/reducers/Legal_Cancel"
import { Eye } from "react-feather"
import { useDispatch, useSelector } from "react-redux"
import qs from 'qs'
import { useHistory, useLocation } from "react-router-dom"

export default () => {
    // const [open, setModal] = useState(false)
    // const toggle = () => setModal(current => !current)
    const history = useHistory()
    const location = useLocation()
    const dispatch = useDispatch()
    const store = useSelector(state => state.legal_cancel)
    const query = qs.parse(location.search, { ignoreQueryPrefix: true })
    useEffect(() => {
        if (location.search) {
            dispatch(getApplications(query))
        } else {
            dispatch(getApplications())
        }
    }, [])


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
            cell: (row) => (
                <div>
                    <Eye onClick={() => history.push(`/cancel/legal/view/${row?.id}`)} color="green" className='me-50' role="button" size={20} />
                </div>
            )
        }
    ]

    return (
        <Card className='overflow-hidden'>
            <CardHeader className='d-flex items-center justify-content-between'>
                <CardTitle tag='h4'>Ma'lumotlar</CardTitle>
                <div className="d-flex gap-1">
                    {/*<Button.Ripple onClick={handleModal} className='btn-icon' outline color='primary'>*/}
                    {/*    <Filter size={16}/>*/}
                    {/*</Button.Ripple>*/}
                    <FileExport data={store?.applications} />
                </div>
            </CardHeader>
            <CardBody>
                <div className='react-dataTable'>
                    <Table data={store?.applications} progressPending={store?.isLoading} columns={basicColumns} perPage={store?.perPage} currentPage={store?.currentPage}
                        totalPages={store?.totalPages} />
                </div>
                {/*<FilterComponent open={modal} handleModal={handleModal}/>*/}
                {/* <Modal id={ID} open={open} toggle={toggle} /> */}
            </CardBody>
        </Card>
    )
}