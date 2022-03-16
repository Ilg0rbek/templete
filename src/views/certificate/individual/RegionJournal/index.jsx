import React, { useEffect, useState } from "react"
import { Filter } from 'react-feather'
import { Button, Card, CardBody, CardHeader, CardTitle } from 'reactstrap'
import * as certificate from "../../../../redux/reducers/Certificate"
import { useDispatch, useSelector } from "react-redux"
import Table from "../../../../components/Table"
import FileExport from "../../../../components/FileExport"
import { useLocation } from "react-router-dom"
import qs from "qs"
import FilterComponent from "../../components/Fillter"

export default () => {

    const dispatch = useDispatch()
    const history = useHistory()
    const store = useSelector(state => state.certificate)
    const [modal, setModal] = useState(false)
    const handleModal = () => setModal(!modal)
    const location = useLocation()
    const query = qs.parse(location.search, { ignoreQueryPrefix: true })


    console.log(store?.regionJournalInList)

    useEffect(() => {
        if (location.search) {
            dispatch(certificate.getInRegionJournal(query))
        } else {
            dispatch(certificate.getInRegionJournal())
        }
    }, [location])

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
            selector: row => row.individual_name
        },
        {
            name: 'JSHSHIR',
            sortable: true,
            minWidth: '150px',
            selector: row => row.tin
        },
        {
            name: 'PINFL',
            sortable: true,
            minWidth: '150px',
            selector: row => row.pinfl
        },
        {
            name: 'To\'lov holati',
            sortable: true,
            minWidth: '150px',
            cell: (row) => (
                <Badge className={row.payment === null ? "d-none" : ""}
                    color={row?.payment?.is_payed ? "success" : "danger"}>
                    {row?.payment?.invoice}
                </Badge>
            )
        },
        {
            name: 'Kiritilgan sana',
            sortable: true,
            minWidth: '100px',
            selector: row => row.created_at
        },
        {
            name: "Qo'shdi",
            sortable: true,
            minWidth: '150px',
            selector: row => row.user
        },
        {
            minWidth: '60px',
            right: true,
            cell: (row) => (
                <div>
                    <Eye onClick={() => history.push(`/certificate/subregion_journal/view/${row?.id}`)} color="green"
                        className='me-50' role="button" size={20} />
                </div>
            )
        }
    ]

    function getFilter(data) {
        console.log(data)
        dispatch(certificate.getInRegionJournal(data))
    }

    return (
        <>
            <h1 className="mb-2">Viloyat bo`yicha ro`yxat jurnali</h1>
            <Card className='overflow-hidden'>
                <CardHeader className='d-flex items-center justify-content-between'>
                    <CardTitle tag='h4'>Ma'lumotlar</CardTitle>
                    <div className="d-flex gap-1">
                        <FileExport data={store?.regionJournalInList} />
                        <Button.Ripple onClick={handleModal} className='btn-icon' outline color='primary'>
                            <Filter size={16} />
                        </Button.Ripple>
                    </div>
                </CardHeader>
                <CardBody>
                    <div className='react-dataTable'>
                        <Table data={store?.regionJournalInList} progressPending={store?.isLoading}
                            columns={basicColumns} perPage={store?.perPage} currentPage={store?.currentPage}
                            totalPages={store?.totalPages} />
                    </div>
                    <FilterComponent open={modal} handleModal={handleModal}
                        getFilter={getFilter} />
                    {/* <Modal id={ID} open={open} toggle={toggle} /> */}
                </CardBody>
            </Card>
        </>
    )
}

