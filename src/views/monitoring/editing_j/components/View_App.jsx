import React from "react"
import {ChevronDown, Eye} from "react-feather"
import DataTable from "react-data-table-component"
import {useSelector} from "react-redux"

export default () => {

    const store = useSelector(state => state.sys)

    const basicColumns = [
        {
            name: 'Nomi',
            sortable: true,
            minWidth: '50px',
            selector: row => row.type
        },
        {
            name: 'Manzili',
            sortable: true,
            minWidth: '50px',
            selector: row => row.type
        },
        {
            name: 'STIR',
            sortable: true,
            minWidth: '50px',
            selector: row => row.type
        }
    ]

    const basicColumns2 = [
        {
            name: '№',
            sortable: true,
            minWidth: '20px',
            selector: row => row.type
        },
        {
            name: 'Korxona nomi',
            sortable: true,
            minWidth: '80px',
            selector: row => row.type
        },
        {
            name: 'STIR',
            sortable: true,
            minWidth: '50px',
            selector: row => row.type
        },
        {
            name: 'THShT',
            sortable: true,
            minWidth: '60px',
            selector: row => row.type
        },
        {
            name: 'Manzili',
            sortable: true,
            minWidth: '120px',
            selector: row => row.type
        }
    ]

    return (
        <>
            <div className="head">
                <h3 className="text-center">Qo'shib olishdagi asosiy yuridik shaxs</h3>
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
            </div>
            <div className="head">
                <h3 className="text-center">Asosiy yuridik shaxsga qo'shiladigan yuridik shaxslar</h3>
                <div className='react-dataTable'>
                    <DataTable
                        noHeader
                        pagination
                        data={store?.appeal}
                        columns={basicColumns2}
                        className='react-dataTable'
                        sortIcon={<ChevronDown size={10}/>}
                        paginationRowsPerPageOptions={[10, 25, 50, 100]}
                    />
                </div>
            </div>
        </>
    )
}
