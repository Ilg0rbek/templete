import React from 'react'
import {Card, CardBody, CardHeader, CardTitle} from "reactstrap"
import {ChevronDown, Edit} from "react-feather"
import DataTable from "react-data-table-component"
import {useSelector} from "react-redux"


export default () => {

    const store = useSelector(state => state.sys)

    const basicColumns = [
        {
            name: '#',
            maxWidth: '30px',
            selector: row => row.id
        },
        {
            name: 'Nomi',
            sortable: true,
            minWidth: '150px',
            selector: row => row.type
        },
        {
            minWidth: '60px',
            right: true,
            cell: () => (
                <div>
                    <Edit color="green" className='me-50' role="button" size={20}/>
                </div>
            )
        }
    ]

    return (
        <>
            <h1 className="mb-2">opf choices</h1>
            <Card className='overflow-hidden'>
                <CardHeader className='d-flex items-center justify-content-between'>
                    <CardTitle tag='h4'>Ma'lumotlar</CardTitle>
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
                </CardBody>
            </Card>
        </>
    )
}
