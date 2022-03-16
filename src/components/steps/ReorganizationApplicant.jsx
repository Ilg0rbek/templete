import {ChevronDown, Eye} from 'react-feather'
import DataTable from 'react-data-table-component'
import {useSelector} from "react-redux"
import {Card, CardHeader, CardTitle, CardBody, Button} from 'reactstrap'

export default ({nextStep, previousStep}) => {

    const store = useSelector(state => state.sys)

    const basicColumns = [
        {
            name: "Qayta tashkil etish to'g'risidagi umumiy ma'lumotlar",
            maxWidth: '150px',
            selector: row => row.short_discription
        },
        {
            name: "Tadbirkorlik subyektlari - yuridik shaxslar to'g'risidagi ma'lumotlar",
            sortable: true,
            minWidth: '150px',
            selector: row => row.short_discription
        },
        {
            name: "Kreditorlar talablarini ko'rib chiqish to'g'risidagi ma'lumotlar",
            minWidth: '150px',
            selector: row => row.short_discription
        }
    ]

    return (
        <>
            <h3>MChJ "SAFFIAGENCY" ni qayta tashkil etish (qayta tashkil etilayotgan tadbirkorlik subyekti - yuridik
                shaxs)</h3>
            <Card className='overflow-hidden mt-2'>
                <CardHeader className='d-flex items-center justify-content-between'>
                    <CardTitle tag='h4'>Qayta tashkil etish to'grisidagi XABARNOMA</CardTitle>
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
