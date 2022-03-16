import React, {useEffect} from "react"

import {Badge, Card, CardBody, CardHeader, CardTitle} from "reactstrap"
import Table from "@cp/Table"
import * as leCanceled from "../../../../../redux/reducers/Legal_Cancel"
import {Eye} from "react-feather"
import {useDispatch, useSelector} from "react-redux"
import FileExport from "../../../../../components/FileExport"
import qs from "qs"
import {useLocation} from "react-router-dom"

export default () => {

    const dispatch = useDispatch()
    const location = useLocation()
    const store = useSelector(state => state.legal_cancel)
    const query = qs.parse(location.search, { ignoreQueryPrefix: true })

    useEffect(() => {
        if (location.search) {
            dispatch(leCanceled.getLegalBankruptMonitoringList(query))
        } else {
            dispatch(leCanceled.getLegalBankruptMonitoringList())
        }
    }, [location])

    const basicColumns = [
        {
            name: 'ID',
            maxWidth: '30px',
            selector: row => row.id
        },
        {
            name: 'Ariza ochilgan sana',
            sortable: true,
            minWidth: '200px',
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
        <Card className='overflow-hidden'>
            <CardHeader className='d-flex items-center justify-content-between'>
                <CardTitle tag='h4'>Ma'lumotlar</CardTitle>
                <div className="d-flex gap-1">
                    {/*<Button.Ripple onClick={handleModal} className='btn-icon' outline color='primary'>*/}
                    {/*    <Filter size={16}/>*/}
                    {/*</Button.Ripple>*/}
                    <FileExport data={store?.bankruptMonitoring}/>
                </div>
            </CardHeader>
            <CardBody>
                <div className='react-dataTable'>
                    <Table data={store?.bankruptMonitoring} progressPending={store?.isLoading}
                           columns={basicColumns} perPage={store?.perPage} currentPage={store?.currentPage}
                           totalPages={store?.totalPages} />
                </div>
                {/*<FilterComponent open={modal} handleModal={handleModal}/>*/}
                {/*<ModalComponent open={modalOpen} toggle={toggle}/>*/}
            </CardBody>
        </Card>
    )
}
