import { Row, Col, Button, CardBody, Card } from "reactstrap"
import DataTable from 'react-data-table-component'
import { ChevronDown } from 'react-feather'
import { useSelector } from "react-redux"

const Inspection = () => {

    const store = useSelector(state => state.monitor)
    console.log(store?.beforefounders)
    const individual = [
        {
            title: 'Firmani tekshirish',
            content: [
                {
                    name: 'O`zgarishdan oldin'
                },
                {
                    name: 'O`zgarishdan keyin'
                },
                {
                    name: 'Yuridik shaxsning - tadbirkorlik subyektining nomi',
                    value: store?.legalentity?.ot_name
                },
                {
                    name: 'Yuridik shaxsning - tadbirkorlik subyektining nomi',
                    value: `${store?.changelegalentity?.change_name ? "O'zgardi" : "O'zgarishlarsiz"}`
                },
                {
                    name: 'THSh',
                    value: store?.legalentity?.opf_name
                },
                {
                    name: 'THSh',
                    value: `Oilaviy korxona ${store?.changelegalentity?.change_opf ? "O'zgardi" : "O'zgarishlarsiz"}`
                },
                {
                    name: 'Faoliyat yuritish manzili',
                    value: store?.legalentity?.address_soato
                },
                {
                    name: 'Faoliyat yuritish manzili',
                    value: `${store?.changelegalentity?.change_address_soato ? "O'zgardi" : "O'zgarishlarsiz"}`
                },
                {
                    name: 'IFUT',
                    value: store?.legalentity?.tin
                },
                {
                    name: 'IFUT',
                    value: `${store?.changelegalentity?.change_oked ? "O'zgardi" : "O'zgarishlarsiz"}`
                }
            ]
        }
    ]


    const basicColumns = [
        {
            name: 'Tasischi turi',
            maxWidth: '50px',
            selector: row => row?.id
        },
        {
            name: 'Tasischi STIRi',
            sortable: true,
            minWidth: '60px',
            selector: row => row?.pinfl
        },
        {
            name: 'F.I.SH. /Nomi',
            minWidth: '300px',
            selector: row => row?.full_name
        },
        {
            name: 'Miqdori',
            sortable: true,
            minWidth: '60px',
            selector: row => row?.share_amount
        },
        {
            name: 'Ulushi',
            sortable: true,
            minWidth: '50px',
            selector: row => row.Card
        }
    ]


    return (
        <>
            {
                individual.map((data, index) => (
                    <div key={index} className="rounded mb-2 p-2">
                        <div className="d-flex align-items-center justify-content-between mb-2">
                            <h3>{data.title}</h3>
                        </div>
                        <Row xl={2} xm={1}>
                            {
                                Array.isArray(data?.content) && data?.content?.map((cd, ind) => (
                                    <Col key={ind} className='d-flex aligin-items-center gap-1 p-1 border'>
                                        <span className="h5">{cd.name}:</span>
                                        <b>{cd.value}</b>
                                    </Col>
                                ))
                            }
                        </Row>
                    </div>
                ))
            }

            <Card className='overflow-hidden my-3'>
                <h5 className="text-center">O'zgarishdan oldingi Tasischilar</h5>
                <CardBody>
                    <div className='react-dataTable'>
                        <DataTable
                            data={store?.beforefounders?.founder_individuals}
                            columns={basicColumns}
                            className='react-dataTable'
                            sortIcon={<ChevronDown size={10} />}
                            paginationRowsPerPageOptions={[10, 25, 50, 100]}
                        />
                    </div>
                </CardBody>
            </Card>
            <Card className='overflow-hidden'>
                <h5 className="text-center">Tekshiruv natijasini yuborish</h5>
                <CardBody>
                    <div className='react-dataTable'>
                        <DataTable
                            data={store?.beforefounders?.founder_individuals}
                            columns={basicColumns}
                            className='react-dataTable'
                            sortIcon={<ChevronDown size={10} />}
                            paginationRowsPerPageOptions={[10, 25, 50, 100]}
                        />
                    </div>
                </CardBody>
            </Card>
        </>
    )
}

export default Inspection
