import { useState } from "react"
import { ChevronDown, Filter, Download, Eye, Trash, Edit } from 'react-feather'
import DataTable from 'react-data-table-component'
import FilterComponent from "components/Filter"
import { Card, CardHeader, CardTitle, CardBody, Button } from 'reactstrap'
import { useHistory, useLocation, useParams } from "react-router-dom"

const data = [
    {
        id: 1,
        fullname: 'Ogabek Yuldoshev',
        inn: 123123123132,
        thsht: 'THSHT',
        date: "12.12.2021",
        creator: 'Islombek Atajanov',
        techno: "bo.birdarcha.uz",
        payment_type: "To'lov holati"
    }
]

const fields = [
    {
        field_type: 'INPUT',
        label: 'Shahar',
        props: {
            name: 'inn',
            type: 'text',
            placeholder: 'hello'
        }
    },
    {
        field_type: 'INPUT',
        label: 'option',
        props: {
            name: "input",
            type: 'text',
            placeholder: 'helclo'
        }
    },
    {
        field_type: 'CHECKBOX',
        label: 'Ususllar',
        options: [
            {
                label: 'Hello',
                value: 'hello'
            },
            {
                label: 'Hello1',
                value: 'hello1'
            }
        ],
        props: {
            name: "checkbox"
        }
    },
    {
        field_type: 'RADIO',
        label: 'Radio',
        options: [
            {
                label: 'Helwerwlo',
                value: 'hellwero'
            },
            {
                label: 'Helwerlo1',
                value: 'helwerlo1'
            }
        ],
        props: {
            name: "box"
        }
    },
    {
        field_type: 'SELECT',
        label: 'Select',
        props: {
            name: 'select',
            placeholder: 'Topish',
            options: [
                {
                    label: 'Hello',
                    value: 'hello'
                },
                {
                    label: 'Hello1',
                    value: 'hello1'
                }
            ]
        }
    }
]

const ApplicationsPage = () => {

    const [modal, setModal] = useState(false)
    const handleModal = () => setModal(!modal)
    const location = useLocation()
    const history = useHistory()
    const params = useParams()

    const basicColumns = [
        {
            name: 'ID',
            sortable: true,
            maxWidth: '40px',
            selector: row => row.id
        },
        {
            name: 'F.I.O',
            sortable: true,
            minWidth: '200px',
            selector: row => row.fullname
        },
        {
            name: 'JSHSHIR',
            sortable: true,
            minWidth: '150px',
            selector: row => row.inn
        },
        {
            name: 'THSHT',
            sortable: true,
            minWidth: '100px',
            selector: row => row.thsht
        },
        {
            name: 'Sana',
            sortable: true,
            minWidth: '100px',
            selector: row => row.date
        },
        {
            name: "Qo'shdi",
            sortable: true,
            minWidth: '150px',
            selector: row => row.creator
        },
        {
            name: 'Texnologiya',
            sortable: true,
            minWidth: '100px',
            selector: row => row.techno
        },
        {
            name: "To'lov holati",
            sortable: true,
            minWidth: '100px',
            selector: row => row.payment_type
        },
        {
            minWidth: '100px',
            cell: row => (
                <div>
                    <Eye color="green" onClick={() => history.push(`${location.pathname}/view/}${row.id}`)} className='me-50' role="button" size={20} />
                    <Edit color="blue" onClick={() => history.push(`${location.pathname}/edit/${row.id}`)} className='me-50' role="button" size={20} />
                    <Trash color="red" className='me-50' role="button" size={20} />
                </div>
            )
        }
    ]

    return (
        <>
            <h1 className="mb-2">Mening arizalarim ({params.type === 'yur' ? 'Yuridik shaxs' : 'Jismoniy shaxs'})</h1>
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
                    <FilterComponent fields={fields} open={modal} toggle={handleModal} />
                </CardBody>
            </Card>
        </>
    )
}

export default ApplicationsPage
