import React, { useEffect, useState } from "react"
import { ChevronDown, Check, Filter, Eye, Trash, Edit, Download } from 'react-feather'
import DataTable from 'react-data-table-component'
import ModalComponent from "../../sys/id_gov_members/components/Modal"
import FillterComponent from "./Fillter"
// import Swal from 'sweetalert2'
// import withReactContent from 'sweetalert2-react-content'
import { useDispatch, useSelector } from "react-redux"
import { Card, CardHeader, CardTitle, CardBody, Button, Badge } from 'reactstrap'
import { useHistory, useLocation } from "react-router-dom"
// import * as register from "../../../redux/reducers/Register"
import { legalEntitiesReg } from "../../../redux/reducers/Register"
import TableComponent from "../../../components/Table"
import FileExport from "../../../components/FileExport"
import qs from "qs"
import {
    AiFillCheckSquare,
    AiOutlineCheckCircle,
    AiOutlineFundView,
    BsCheck2Circle,
    BsPatchCheck,
    ImEye,
    ImEyePlus
} from "react-icons/all"
// import qs from "qs"
// import { useHistory, useLocation } from "react-router-dom"
// const MySwal = withReactContent(Swal)

export default () => {
    // const [modalOpen, setModalOpen] = useState(false)
    const location = useLocation()
    const dispatch = useDispatch()
    const history = useHistory()
    console.log(history)
    const store = useSelector(state => state)
    const { legalReg, totalPages, currentPage, perPage } = store.register

    const [modal, setModal] = useState(false)
    const handleModal = () => setModal(!modal)
    const query = qs.parse(location.search, { ignoreQueryPrefix: true })

    useEffect(() => {
        const data = {
            type: 1
        }
        if (location.search) {
            dispatch(legalEntitiesReg({ query, data }))
        } else {
            dispatch(legalEntitiesReg({ data }))
        }
    }, [location])

    const basicColumns = [
        {
            name: 'Ariza',
            maxWidth: '30px',
            selector: row => row.id
        },
        {
            name: 'Sana va Vaqt',
            sortable: true,
            minWidth: '120px',
            selector: row => row.registeredAt
        },
        {
            name: 'Korxona nomi',
            minWidth: '150px',
            selector: row => row.name
        },
        {
            name: 'THSHT',
            sortable: true,
            minWidth: '170px',
            selector: row => row.opf
        },
        {
            name: "Viloyat",
            sortable: true,
            minWidth: '130px',
            selector: row => row.regionId
        },
        {
            name: "Tuman",
            sortable: true,
            minWidth: '130px',
            selector: row => row.subRegionId
        },
        {
            name: "STIR",
            sortable: true,
            minWidth: '100px',
            selector: row => row.tin
        },
        {
            name: "KTUT",
            sortable: true,
            minWidth: '100px',
            selector: row => row.okpo
        },
        {
            name: "Qo`shdi",
            sortable: true,
            minWidth: '200px',
            selector: row => row.createdBy
        },
        {
            name: "Texnologiya",
            sortable: true,
            minWidth: '100px',
            cell: (row) => (
                <span>{row.swcAuthored ? "fo.birdarcha.uz" : "bo.birdarcha.uz"}</span>
            )
        },
        {
            name: "Maqomi",
            sortable: true,
            minWidth: '150px',
            cell: (row) => (
                <Badge
                    color={row.complete ? "success" : "danger"}>{row.complete ? "Tayyor" : "Ro`yxatdan o`tilmoqda"}</Badge>
            )
        },
        {
            name: "To`lov holati",
            sortable: true,
            minWidth: '100px',
            cell: (row) => (
                <div className="d-flex align-items-center">
                    <Badge className={row?.paymentInvoice ? "" : 'd-none'}
                        color={"secondary"}>
                        {row.paymentInvoice}
                    </Badge>
                    <AiOutlineCheckCircle size={20} className={row.paymentType ? "text-primary mx-1" : "d-none"} />
                </div>
            )
        },
        {
            name: "STAT yuborilgan",
            sortable: true,
            minWidth: '200px',
            cell: (row) => (
                <Badge className={row?.notifiedSTATAt ? "" : 'd-none'}
                    color={"primary"}>
                    {row.notifiedSTATAt}
                </Badge>
            )
        },
        {
            wrap: true,
            // minWidth: '30px',
            right: true,
            cell: () => (
                <div className={"d-flex justify-content-center align-items-center"}>
                    <img src="https://id.egov.uz/assets/img/gen-opinion.png" role="button" onClick={() => history.push(`${location.pathname}/new`)} alt="btnEye" width={30} className={"m-1"} />
                </div>
            )
        }
    ]

    return (
        <>
            <h1>Registratsiya Reestri yuridik shaxslar</h1>
            <Card className='overflow-hidden mt-2'>
                <CardHeader className='d-flex items-center justify-content-between'>
                    <CardTitle tag='h4'>Ma'lumotlar</CardTitle>
                    <div className="d-flex gap-1">
                        <FileExport data={legalReg} />
                        <Button.Ripple onClick={handleModal} className='btn-icon' outline color='primary'>
                            <Filter size={16} />
                        </Button.Ripple>
                    </div>
                </CardHeader>
                <CardBody>
                    <div className='react-dataTable'>
                        <TableComponent
                            columns={basicColumns}
                            data={legalReg}
                            totalPages={totalPages}
                            currentPage={currentPage}
                            perPage={perPage}
                        />
                    </div>
                    <FillterComponent open={modal} handleModal={handleModal} />
                    {/* <ModalComponent open={modalOpen} toggle={toggle} /> */}
                </CardBody>
            </Card>
        </>
    )
}
