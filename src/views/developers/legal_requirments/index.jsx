import React from 'react'
import {Button, Card, CardBody, CardHeader, CardTitle} from "reactstrap"
import {ChevronDown, Edit, Plus} from "react-feather"
import DataTable from "react-data-table-component"
import {useSelector} from "react-redux"
import {useHistory, useLocation} from "react-router-dom"

export default () => {

    // const [openModal, setOpenModal] = useState(false)
    const store = useSelector(state => state.sys)
    const location = useLocation()
    const history = useHistory()

    const basicColumns = [
        {
            name: 'ID',
            maxWidth: '20px',
            selector: row => row.id
        },
        {
            name: 'opf',
            sortable: true,
            minWidth: '50px',
            selector: row => row.type
        },
        {
            name: 'okedGroup',
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
            <h1 className="mb-2">LERegRequiriments</h1>
            <Card className='overflow-hidden'>
                <CardHeader className='d-flex items-center justify-content-between'>
                    <CardTitle tag='h4'>Ma'lumotlar</CardTitle>
                    <div className="d-flex gap-1">
                        <Button.Ripple onClick={() => history.push(`${location.pathname}/add_new`)} className='btn-icon'
                                       outline color='primary'>
                            <Plus size={16}/>
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
                </CardBody>
            </Card>
        </>
    )
}
