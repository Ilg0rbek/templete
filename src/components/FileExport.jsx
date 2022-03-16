// ** React Imports
import { useState } from 'react'
import { DownloadCloud } from "react-feather"
import XLSX from 'xlsx'
import ReactSelect from 'react-select'

import {
    Modal,
    Input,
    Button,
    ModalBody,
    ModalHeader,
    ModalFooter
} from 'reactstrap'

const FileExport = ({ data }) => {
    // ** States
    const [modal, setModal] = useState(false)
    const [fileName, setFileName] = useState('')
    const [fileFormat, setFileFormat] = useState('xlsx')

    const toggleModal = () => {
        setModal(!modal)
    }


    const handleExport = () => {
        toggleModal()
        const name = fileName.length ? `${fileName}.${fileFormat}` : `excel-sheet.${fileFormat}`
        const wb = XLSX.utils.json_to_sheet(data)
        const wbout = XLSX.utils.book_new()
        XLSX.utils.book_append_sheet(wbout, wb, 'test')
        XLSX.writeFile(wbout, name)
    }

    return (
        <>
            <Button.Ripple onClick={() => toggleModal()} className='btn-icon' outline color='primary'>
                <DownloadCloud size={16} />
            </Button.Ripple>
            <Modal
                isOpen={modal}
                toggle={() => toggleModal()}
                className='modal-dialog-centered'
                onClosed={() => setFileName('')}
            >
                <ModalHeader toggle={() => toggleModal()}>Ma'lumotlarni yuklab olish!</ModalHeader>
                <ModalBody>
                    <div className='mb-2'>
                        <Input
                            type='text'
                            value={fileName}
                            onChange={e => setFileName(e.target.value)}
                            placeholder='File nomini kiriting...'
                        />
                    </div>
                    <div>
                        <ReactSelect
                            placeholder="File turini tanlang..."
                            onChange={e => setFileFormat(e.value)}
                            options={[
                                { label: 'XLSX', value: 'xlsx' },
                                { label: 'CSV', value: 'csv' },
                                { label: 'TXT', value: 'txt' }
                            ]}
                        />
                    </div>
                </ModalBody>
                <ModalFooter>
                    <Button color='danger' outline onClick={() => toggleModal()}>
                        Bekor qilish
                    </Button>
                    <Button color='primary' onClick={() => handleExport()}>
                        Yuklab olish
                    </Button>
                </ModalFooter>
            </Modal>
        </>
    )
}
export default FileExport