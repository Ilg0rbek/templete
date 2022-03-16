import React, { useEffect } from "react"
// import Modal from "./Modal"
import { Badge, Card, CardBody, CardHeader, CardTitle } from "reactstrap"
import FileExport from "@cp/FileExport"
import Table from "@cp/Table"
import { getApplications } from "@store/reducers/Individual_Cancel"
import { Eye } from "react-feather"
import { useDispatch, useSelector } from "react-redux"
import qs from 'qs'
import { useHistory, useLocation } from "react-router-dom"

export default () => {
    const history = useHistory()
    const location = useLocation()
    const dispatch = useDispatch()
    const store = useSelector(state => state.individual_cancel)
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
            name: 'Korxona nomi',
            sortable: true,
            minWidth: '150px',
            selector: row => `${row.first_name} ${row.last_name} ${row.middle_name}`
        },
        {
            name: 'JSHSHIR',
            sortable: true,
            minWidth: '90px',
            selector: row => row.pin
        },
        {
            name: 'Ariza ochilgan sana',
            sortable: true,
            minWidth: '150px',
            selector: row => row.date
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
                    <Eye onClick={() => history.push(`/cancel/individual/view/${row?.id}`)} color="green" className='me-50' role="button" size={20} />
                </div>
            )
        }
    ]

    return (
        <Card className='overflow-hidden'>
            <CardHeader className='d-flex items-center justify-content-between'>
                <CardTitle tag='h4'>Ma'lumotlar</CardTitle>
                <div className="d-flex gap-1">
                    <FileExport data={store?.applications} />
                </div>
            </CardHeader>
            <CardBody>
                <div className='react-dataTable'>
                    <Table data={store?.applications} progressPending={store?.isLoading} columns={basicColumns} perPage={store?.perPage} currentPage={store?.currentPage}
                        totalPages={store?.totalPages} />
                </div>
            </CardBody>
        </Card>
    )
}