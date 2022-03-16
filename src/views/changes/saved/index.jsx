import { useState } from "react"
import { ChevronDown, Filter, Download, Eye, Trash, Edit } from 'react-feather'
import DataTable from 'react-data-table-component'
import FilterComponent from "./Fillter"
import { Card, CardHeader, CardTitle, CardBody, Button, Badge } from 'reactstrap'
import { useHistory } from "react-router-dom"

const data = [
    {
        id: 1,
        name: 'Chakana Savdo',
        status: 'Jarayonda',
        date: '12/12/2021'
    }
]

const SavedPage = () => {

    const [modal, setModal] = useState(false)
    const handleModal = () => setModal(!modal)
    const history = useHistory()

    const basicColumns = [
        {
            name: 'ID',
            sortable: true,
            maxWidth: '40px',
            selector: row => row.id
        },
        {
            name: 'Faolyat yunalishi',
            sortable: true,
            minWidth: '200px',
            selector: row => row.name
        },
        {
            name: 'Holati',
            minWidth: '100px',
            cell: row => (
                <Badge color='warning'>
                    {row.status}
                </Badge>
            )
        },
        {
            name: 'Sanasi',
            minWidth: '200px',
            selector: row => row.date
        },
        {
            minWidth: '100px',
            cell: () => (
                <div>
                    <Edit color="green" onClick={() => history.push(`/changes/info/individual/edit`)} className='me-50' role="button" size={20} />
                    <Trash color="red" className='me-50' role="button" size={20} />
                </div>
            )
        }
    ]

    return (
        <>
            <h1 className="mb-2">O’zgarishlar</h1>
            <Card className='overflow-hidden'>
                <CardHeader className='d-flex items-center justify-content-between'>
                    <CardTitle tag='h4'>Ma'lumotlar</CardTitle>
                    <div className="d-flex gap-1">
                        <Button.Ripple onClick={() => alert("Downloading....")} className='btn-icon' outline color='primary'>
                            <Download size={16} />
                        </Button.Ripple>
                        <Button.Ripple onClick={handleModal} className='btn-icon' outline color='primary'>
                            <Filter size={16} />
                        </Button.Ripple>
                    </div>
                </CardHeader>
                <CardBody>
                    <div className='react-dataTable'>
                        <DataTable
                            noHeader
                            pagination
                            data={data}
                            columns={basicColumns}
                            className='react-dataTable'
                            sortIcon={<ChevronDown size={10} />}
                            paginationRowsPerPageOptions={[10, 25, 50, 100]}
                        />
                    </div>
                    <FilterComponent open={modal} handleModal={handleModal} />
                </CardBody>
            </Card>
        </>
    )
}

export default SavedPage
