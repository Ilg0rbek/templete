import { useState } from "react"
import { ChevronDown, Filter, Download } from 'react-feather'
import DataTable from 'react-data-table-component'
import FilterComponent from "./components/Fillter"
import { Card, CardHeader, CardTitle, CardBody, Button } from 'reactstrap'


const data = [
    {
        id: 1,
        fullname: 'Ogabek Yuldoshev',
        inn: 123123123132,
        thsht: 'THSHT',
        date: "12.12.2021",
        creator: 'Islombek Atajanov',
        techno: "bo.birdarcha.uz",
        maqom: 'tayyor',
        payment_type: "To'lov holati",
        changes_type: "O'zgartirish turi"
    }
]

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
        name: 'Maqomi',
        sortable: true,
        minWidth: '100px',
        selector: row => row.maqom
    },
    {
        name: "To'lov holati",
        sortable: true,
        minWidth: '100px',
        selector: row => row.payment_type
    },
    {
        name: "O'zgarish turi",
        sortable: true,
        minWidth: '100px',
        selector: row => row.changes_type
    }
]

const TerritoryPage = () => {
    const [modal, setModal] = useState(false)
    const handleModal = () => setModal(!modal)

    return (
        <>
            <h1 className="mb-2">Hudud o’zgarganlar</h1>
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

export default TerritoryPage
