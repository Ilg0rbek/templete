import { ChevronDown, Plus, Eye, Edit, Trash } from 'react-feather'
import DataTable from 'react-data-table-component'
import {useSelector} from "react-redux"
import {Card, CardHeader, CardTitle, CardBody, Button} from 'reactstrap'

export default ({nextStep, previousStep}) => {

    const store = useSelector(state => state.sys)

    const basicColumns = [
        {
            name: "№",
            maxWidth: '30px',
            selector: row => row.id
        },
        {
            name: "Nomi",
            sortable: true,
            minWidth: '100px',
            selector: row => row.basicColumns
        },
        {
            name: "Tshkiliy huquqiy shakl",
            minWidth: '100px',
            selector: row => row.basicColumns
        },
        {
            name: "Ro`yxatdan o`tish sanasi",
            minWidth: '100px',
            selector: row => row.basicColumns
        },
        {
            name: "Maqomi",
            minWidth: '100px',
            selector: row => row.basicColumns
        },
        {
            name: "To`lov holati",
            minWidth: '100px',
            selector: row => row.basicColumns
        },
        {
            minWidth: '30px',
            right: true,
            cell: () => (
                <div>
                    <Eye color="blue" className='me-50' role="button" size={20} />
                    <Edit color="green" className='me-50 me-1' role="button" size={20} />
                    <Trash color="red" className='me-50' role="button" size={20} />
                </div>
            )
        }
    ]

    return (
        <>
            <h3>Ajralib chiqayotgan korxonalar</h3>
            <Card className='overflow-hidden mt-2'>
                <CardHeader className='d-flex items-center justify-content-between'>
                    <CardTitle tag='h4'>Ma'lumotlar</CardTitle>
                    <div className="d-flex gap-1">
                        <Button.Ripple onClick={() => alert("Malumot topilmadi")} className='btn-icon' outline color='primary'>
                            <span>Korxona qo'shish </span>
                            <Plus size={16} />
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
            <div className="d-flex justify-content-end gap-2 mt-2">
                <Button color="danger" onClick={() => previousStep()} outline>Bekor qilish</Button>
                <Button
                    color="success"
                    onClick={() => nextStep()}
                >
                    Keyingisi
                </Button>
            </div>
        </>
    )
}
