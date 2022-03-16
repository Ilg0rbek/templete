import { useState } from "react"
import * as RS from "reactstrap"
import DataTable from 'react-data-table-component'
import { ChevronDown, Edit, Plus } from "react-feather"
import { useHistory, useLocation } from "react-router-dom"
import ReactSelect from "react-select"
import InputMask from "react-input-mask"
import Uploader from '@cp/Uploader'

const data = [
    {
        id: 1,
        fullname: 'Ogabek Yuldoshev',
        inn: 123123123132,
        type: 'Jismoniy',
        fond: 40
    }
]

export default ({ toggle }) => {
    const [modal, setModal] = useState(false)
    const history = useHistory()
    const location = useLocation()

    const toggleModal = (id) => {
        setModal(!modal)
        if (modal) {
            history.push(`${location.pathname}`)
        } else {
            history.push(`${location.pathname}?id=${id}`)
        }
    }


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
            name: 'Tipi',
            sortable: true,
            minWidth: '100px',
            selector: row => row.type
        },
        {
            name: 'INN',
            sortable: true,
            minWidth: '150px',
            selector: row => row.inn
        },
        {
            name: 'Ustaf fondi',
            sortable: true,
            minWidth: '80px',
            cell: row => (<span>{row.fond}%</span>)
        },
        {
            name: "",
            minWidth: '50px',
            cell: (row) => (
                <>
                    <Edit onClick={() => { toggleModal(row?.id) }} size={20} className="cursor-pointer" />
                </>
            )
        }
    ]
    return (
        <>
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
            <RS.Modal isOpen={modal} toggle={toggleModal} className='modal-dialog-centered modal-lg'>
                <RS.ModalHeader className='bg-transparent' toggle={toggleModal}></RS.ModalHeader>
                <RS.ModalBody>
                    <UstavFondi toggle={toggleModal} />
                </RS.ModalBody>
            </RS.Modal>
            <div className="mt-2 d-flex justify-content-end gap-1">
                <RS.Button onClick={toggle} outline color="primary">Bekor qilish</RS.Button>
                <RS.Button color="success">Saqlash</RS.Button>
            </div>
        </>
    )
}

const UstavFondi = ({ toggle }) => {

    const [isOpen, setIsOpen] = useState(false)

    const toggleCollapse = () => setIsOpen(!isOpen)

    const fields = [
        {
            label: 'Hujjat Turi',
            type: 'select',
            props: {
                placeholder: 'Tanlang...'
            }
        },
        {
            label: 'Hujjat seriyasi va raqami',
            type: 'input',
            props: {
                placeholder: 'ex: AB1234567'
            }
        },
        {
            label: 'F.I.O.',
            type: 'input',
            props: {
                placeholder: 'ex: Ogabek Yuldoshev'
            }
        },
        {
            label: 'PINFL (JSHSHIR)',
            type: 'input',
            props: {
                placeholder: 'ex: 00 00 00 00 00 00 0000 0000',
                mask: '99 99 99 99 99 9999 9999 99',
                maskChar: " ",
                tag: InputMask
            }
        },
        {
            label: 'Ustav fondi',
            type: 'input',
            props: {
                type: 'number',
                placeholder: 'Ustav fondini kiriting'
            }
        }
    ]

    return (
        <>
            <h3 className="mb-2">Ogabek Yuldoshev</h3>
            <RS.Row xl={2}>
                <RS.Col className="mb-2">
                    <RS.Label>Ustav turi</RS.Label>
                    <ReactSelect placeholder='Tanlang...' />
                </RS.Col>
                <RS.Col className="mb-2">
                    <RS.Label>Ustav yo'nalishlari</RS.Label>
                    <ReactSelect placeholder='Tanlang...' />
                </RS.Col>
                {
                    fields.map((f, i) => (
                        <RS.Col className="mb-2" key={i}>
                            <RS.Label>{f?.label}</RS.Label>
                            {
                                {
                                    input: <RS.Input {...f?.props} />,
                                    select: <ReactSelect {...f?.props} />
                                }[f.type]
                            }
                        </RS.Col>
                    ))
                }
            </RS.Row>
            <div className="border rounded p-2">
                <div onClick={toggleCollapse} className="d-flex items-center justify-content-between">
                    <h4 >Xodim Qo'shish</h4>
                    <Plus />
                </div>
                <RS.Collapse isOpen={isOpen}>
                    <RS.Row xl={2}>
                        <RS.Col className="mb-2">
                            <RS.Label>Shaxslar</RS.Label>
                            <ReactSelect placeholder='Tanlang...' />
                        </RS.Col>
                        {
                            fields.map((f, i) => (
                                <RS.Col className="mb-2" key={i}>
                                    <RS.Label>{f?.label}</RS.Label>
                                    {
                                        {
                                            input: <RS.Input {...f?.props} />,
                                            select: <ReactSelect {...f?.props} />
                                        }[f.type]
                                    }
                                </RS.Col>
                            ))
                        }
                    </RS.Row>
                </RS.Collapse>
            </div>
            <div className="mt-2">
                <Uploader />
            </div>
            <div className="mt-2 d-flex justify-content-end gap-1">
                <RS.Button onClick={toggle} outline color="primary">Bekor qilish</RS.Button>
                <RS.Button color="success">Saqlash</RS.Button>
            </div>
        </>
    )
}