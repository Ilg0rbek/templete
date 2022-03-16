import {useState} from "react"
import {ChevronDown, Edit, Eye, Plus} from 'react-feather'
import DataTable from 'react-data-table-component'
import ModalComponent from "../../sys/id_gov_members/components/Modal"
import FillterComponent from "../../sys/id_gov_members/components/Fillter"
import {useSelector} from "react-redux"
import {Button, Card, CardBody, CardHeader, CardTitle} from 'reactstrap'


export default () => {
    const [modalOpen, setModalOpen] = useState(false)
    const [modal, setModal] = useState(false)
    const store = useSelector(state => state.sys)
    const handleModal = () => setModal(!modal)
    const toggle = () => setModalOpen(!modalOpen)

    const basicColumns = [
        {
            name: 'ID',
            maxWidth: '100px',
            selector: row => row.id
        },
        {
            name: 'Name',
            sortable: true,
            minWidth: '300px',
            selector: row => row.type
        },
        {
            minWidth: '60px',
            right:true,
            cell: () => (
                <div>
                    <Eye color="blue" onClick={toggle} className='me-50' role="button" size={20} />
                    <Edit color="green" onClick={toggle} className='me-50 me-1' role="button" size={20} />
                    {/* <Trash color="red" onClick={handleDelete} className='me-50' role="button" size={20} /> */}
                </div>
            )
        }
    ]

    return (
        <>
            <h1>activityTypeGroupslist</h1>
            <Card className='overflow-hidden mt-2'>
                <CardHeader className='d-flex items-center justify-content-between'>
                    <CardTitle tag='h4'>Ma'lumotlar</CardTitle>
                    <div className="d-flex gap-1">
                        <Button.Ripple onClick={toggle} className='btn-icon' outline color='primary'>
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
                            sortIcon={<ChevronDown size={10} />}
                            paginationRowsPerPageOptions={[10, 25, 50, 100]}
                        />
                    </div>
                    <FillterComponent open={modal} handleModal={handleModal} />
                    <ModalComponent open={modalOpen} toggle={toggle} />
                </CardBody>
            </Card>
        </>
    )
}
