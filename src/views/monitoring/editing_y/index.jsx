import React, { useState, useEffect } from 'react'
import { Button, Card, CardBody, CardHeader, CardTitle, Badge } from "reactstrap"
import { ChevronDown, Download, Eye, Filter } from "react-feather"
import DataTable from "react-data-table-component"
import { useSelector, useDispatch } from "react-redux"
import FillterComponent from "./Fillter"
import { useHistory, useLocation } from "react-router-dom"
import { getLegalEntitesChange } from '../../../redux/reducers/monitoring'
import TableComponent from '../../../components/Table'

export default () => {

    const [openFilter, setOpenFilter] = useState(false)
    const store = useSelector(state => state.monitor)
    const handleFilter = () => setOpenFilter(!openFilter)
    const location = useLocation()
    const history = useHistory()
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getLegalEntitesChange())
    }, [])

    const basicColumns = [
        {
            name: '№',
            sortable: true,
            maxWidth: '20px',
            selector: row => row.id
        },
        {
            name: 'Korxona nomi',
            sortable: true,
            minWidth: '200px',
            selector: row => row.name
        },
        {
            name: 'STIR',
            sortable: true,
            minWidth: '60px',
            selector: row => row.tin
        },
        {
            name: 'THSHT',
            sortable: true,
            minWidth: '100px',
            selector: row => row.opf
        },
        {
            name: 'Sana',
            sortable: true,
            minWidth: '100px',
            selector: row => row.registeredAt
        },
        {
            name: 'Qo`shdi',
            sortable: true,
            minWidth: '180px',
            selector: row => row.createdBy
        },
        {
            name: 'Texnologiya',
            minWidth: '110px',
            cell: (row) => (
                <Badge color={row?.swcAuthored ? "success" : "warning"}>
                    {row.swcAuthored ? "Fo.birdarcha" : "Bo.birdarcha"}
                </Badge>
            )
        },
        {
            name: 'Maqomi',
            minWidth: '100px',
            cell: (row) => (
                <Badge color={row?.complete ? "success" : "warning"}>
                    {row.complete ? "o'zgartirildi" : "o'zgarish jarayonida"}
                </Badge>
            )
        },
        {
            name: 'To`lov holati',
            minWidth: '100px',
            selector: row => row.paymentInvoice
        },
        {
            name: 'GNK yuborilgan STAT yuborilgan',
            minWidth: '150px',
            selector: row => row.notifiedGnkAt + row.notifiedSTATAt 
        },
        {
            minWidth: '60px',
            right: true,
            cell: () => (
                <div>
                    <Eye color="blue" onClick={() => history.push(`${location.pathname}/view`)} className='me-50'
                        role="button" size={20} />
                </div>
            )
        }
    ]

    return (
        <>
            <h1 className="mb-2">O'zgarishlar yuridik shahslar</h1>
            <Card className='overflow-hidden'>
                <CardHeader className='d-flex items-center justify-content-between'>
                    <CardTitle tag='h4'>Ma'lumotlar</CardTitle>
                    <div className="d-flex gap-1">
                        <Button.Ripple onClick={() => alert("excelga export qilish")} className='btn-icon' outline
                            color='primary'>
                            <Download size={16} />
                        </Button.Ripple>
                        <Button.Ripple onClick={handleFilter} className='btn-icon' outline color='primary'>
                            <Filter size={16} />
                        </Button.Ripple>
                    </div>
                </CardHeader>
                <CardBody>
                  
                        <TableComponent
                            data={store?.content}
                            columns={basicColumns}
                            totalPages={store?.totalPages}
                            currentPage={store?.currentPage}
                        />
                 
                    <FillterComponent open={openFilter} handleModal={handleFilter} />
                </CardBody>
            </Card>
        </>
    )
}
