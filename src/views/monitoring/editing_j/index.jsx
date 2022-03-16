import React, {useState} from 'react'
import {Button, Card, CardBody, CardHeader, CardTitle} from "reactstrap"
import {ChevronDown, Download, Eye, Filter} from "react-feather"
import DataTable from "react-data-table-component"
import {useSelector} from "react-redux"
import FillterComponent from "../../sys/id_gov_members/components/Fillter"
import {useHistory, useLocation} from "react-router-dom"

export default () => {

    const [openFilter, setOpenFilter] = useState(false)
    const store = useSelector(state => state.sys)
    const handleFilter = () => setOpenFilter(!openFilter)
    const location = useLocation()
    const history = useHistory()

    const basicColumns = [
        {
            name: '№',
            sortable: true,
            maxWidth: '20px',
            selector: row => row.id
        },
        {
            name: 'G№',
            sortable: true,
            minWidth: '50px',
            selector: row => row.type
        },
        {
            name: 'F.I.O',
            sortable: true,
            minWidth: '150px',
            selector: row => row.type
        },
        {
            name: 'STIR',
            sortable: true,
            minWidth: '60px',
            selector: row => row.type
        },
        {
            name: 'PINFL',
            sortable: true,
            minWidth: '60px',
            selector: row => row.type
        },
        {
            name: 'THSHT',
            sortable: true,
            minWidth: '60px',
            selector: row => row.type
        },
        {
            name: 'Sana',
            sortable: true,
            minWidth: '60px',
            selector: row => row.type
        },
        {
            name: 'Qo`shdi',
            sortable: true,
            minWidth: '60px',
            selector: row => row.type
        },
        {
            name: 'Texnologiya',
            minWidth: '60px',
            selector: row => row.type
        },
        {
            name: 'Maqomi',
            minWidth: '60px',
            selector: row => row.type
        },
        {
            name: 'To`lov holati',
            minWidth: '60px',
            selector: row => row.type
        },
        {
            name: 'O`zgartirish turi',
            minWidth: '60px',
            selector: row => row.type
        },
        {
            name: 'GNK yuborilgan',
            minWidth: '60px',
            selector: row => row.type
        },
        {
            minWidth: '60px',
            right: true,
            cell: () => (
                <div>
                    <Eye color="blue" onClick={() => history.push(`${location.pathname}/view`)} className='me-50'
                         role="button" size={20}/>
                </div>
            )
        }
    ]

    return (
        <>
            <h1 className="mb-2">O'zgarishlar jismoniy shahslar</h1>
            <Card className='overflow-hidden'>
                <CardHeader className='d-flex items-center justify-content-between'>
                    <CardTitle tag='h4'>Ma'lumotlar</CardTitle>
                    <div className="d-flex gap-1">
                        <Button.Ripple onClick={() => alert("excelga export qilish")} className='btn-icon' outline
                                       color='primary'>
                            <Download size={16}/>
                        </Button.Ripple>
                        <Button.Ripple onClick={handleFilter} className='btn-icon' outline color='primary'>
                            <Filter size={16}/>
                        </Button.Ripple>
                    </div>
                </CardHeader>
                <CardBody>
                    <div className='react-dataTable'>
                        <DataTable
                            noHeader
                            pagination
                            data={store?.appeal}
                            columns={basicColumns}
                            className='react-dataTable'
                            sortIcon={<ChevronDown size={10}/>}
                            paginationRowsPerPageOptions={[10, 25, 50, 100]}
                        />
                    </div>
                    <FillterComponent open={openFilter} handleModal={handleFilter}/>
                </CardBody>
            </Card>
        </>
    )
}
