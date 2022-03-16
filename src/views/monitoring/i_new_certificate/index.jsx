import React, { useState, useEffect } from 'react'
import { Button, Card, CardBody, CardHeader, CardTitle, Badge } from "reactstrap"
import { ChevronDown, Eye, Filter } from "react-feather"
import { useSelector, useDispatch } from "react-redux"
import FillterComponent from "./Fillter"
import { useHistory, useLocation } from "react-router-dom"
import { getInRepublicJournal } from '../../../redux/reducers/Certificate'
import TableComponent from '../../../components/Table'
import qs from "qs"

export default () => {

    const [openFilter, setOpenFilter] = useState(false)
    const store = useSelector(state => state.certificate)
    const dispatch = useDispatch()
    const handleFilter = () => setOpenFilter(!openFilter)
    const location = useLocation()
    const history = useHistory()
    const query = qs.parse(location.search, { ignoreQueryPrefix: true })

    useEffect(() => {
        if (location.search) {
            dispatch(getInRepublicJournal(query))
        } else {
            dispatch(getInRepublicJournal())
        }
    }, [location])


    const basicColumns = [
        {
            name: '№',
            sortable: true,
            maxWidth: '5px',
            selector: row => row.id
        },
        {
            name: 'Sana va Vaqt',
            sortable: true,
            minWidth: '80px',
            selector: row => row.created_at
        },
        {
            name: 'F.I.SH',
            sortable: true,
            minWidth: '160px',
            selector: row => row.individual_name
        },
        {
            name: 'STIR',
            sortable: true,
            minWidth: '60px',
            selector: row => row.tin
        },
        {
            name: 'Viloyat',
            sortable: true,
            minWidth: '60px',
            selector: row => row.region
        },
        {
            name: 'Tuman',
            minWidth: '60px',
            selector: row => row.sub_region
        },
        {
            name: 'Maqomi',
            sortable: true,
            minWidth: '80px',
            cell: (row) => (
                <Badge className={row.is_complete === null ? "d-none" : ""}
                    color={row?.is_complete ? "success" : "warning"}>
                    {row.is_complete ? "o'zgartirildi" : "o'zgarish jarayonida"}
                </Badge>
            )
        },
        {
            name: 'To`lov holati',
            sortable: true,
            minWidth: '60px',
            selector: row => row.payment
        },
        {
            name: 'Kiritdi',
            minWidth: '160px',
            selector: row => row.user
        },
        {
            minWidth: '60px',
            right: true,
            cell: (row) => (
                <div>
                    <Eye color="blue" onClick={() => history.push(`${location.pathname}/${row.id}`)} className='me-50'
                        role="button" size={20} />
                </div>
            )
        }
    ]

    return (
        <>
            <h1 className="mb-2">Jismoniy Shaxs yangi taxrirdagi guvohnoma berish jurnali</h1>
            <Card className='overflow-hidden'>
                <CardHeader className='d-flex items-center justify-content-between'>
                    <CardTitle tag='h4'>Ma'lumotlar</CardTitle>
                    <div className="d-flex gap-1">
                        <Button.Ripple onClick={handleFilter} className='btn-icon' outline color='primary'>
                            <Filter size={16} />
                        </Button.Ripple>
                    </div>
                </CardHeader>
                <CardBody>
                    <div className='react-dataTable'>
                        <TableComponent
                            columns={basicColumns}
                            data={store?.republicJournalInList}
                            totalPages={store?.totalPages}
                            currentPage={store?.currentPage}
                        />
                    </div>
                    <FillterComponent open={openFilter} handleModal={handleFilter} />
                    {/*<View_Account_Register openModal={openModal} setOpenModal={setOpenModal} toggle={handleModal}/>*/}
                    {/*<ModalComponent open={modalOpen} toggle={toggle}/>*/}
                </CardBody>
            </Card>
        </>
    )
}
