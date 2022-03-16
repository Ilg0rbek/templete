import React, {useState} from 'react'
import {Button, Card, CardBody, CardHeader, CardTitle} from "reactstrap"
import {ChevronDown, Eye, Filter} from "react-feather"
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
            name: 'Qayta tashkil etish shakli',
            sortable: true,
            minWidth: '50px',
            selector: row => row.type
        },
        {
            name: 'Xabarnoma boshlanish sanasi',
            sortable: true,
            minWidth: '60px',
            selector: row => row.type
        },
        {
            name: 'Xabarnoma tugash sanasi',
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
            name: 'Soliq',
            // minWidth: '60px',
            selector: row => row.type
        },
        {
            minWidth: '60px',
            right: true,
            cell: () => (
                <div>
                    <Eye color="blue" onClick={() => history.push(`${location.pathname}/view`)} className='me-50' role="button" size={20}/>
                </div>
            )
        }
    ]

    return (
        <>
            <h1 className="mb-2">Qayta tashkil etish monitoringi</h1>
            <Card className='overflow-hidden'>
                <CardHeader className='d-flex items-center justify-content-between'>
                    <CardTitle tag='h4'>Ma'lumotlar</CardTitle>
                    <div className="d-flex gap-1">
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
