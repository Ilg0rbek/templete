import { useState } from 'react'
import { Row, Col, Label, Accordion, AccordionBody, AccordionHeader, AccordionItem, Button, Modal, ModalBody } from 'reactstrap'
import Select from "react-select"
import { selectThemeColors } from '@utils'
import { Plus, X } from "react-feather"
import { useDispatch } from 'react-redux'
import { addOptionalActivity } from "@store/reducers/Register"

import _ from "lodash"

const AddActivityComponent = () => {
    const dispatch = useDispatch()
    const [modal, setModal] = useState(false)
    const [selected, setSelected] = useState([])
    const handleModal = () => {
        setSelected([])
        setModal(!modal)
    }

    const handleAdd = () => {
        dispatch(addOptionalActivity(selected))
        handleModal()
    }
    const addArray = (data) => {
        const foundData = selected.find((f) => f.id === data.id)
        if (foundData) {
            foundData.child = data.child
            if (foundData.child.length === 0) {
                console.log('delete')
                _.remove(selected, (e) => {
                    return e.id === foundData.id
                })
            }
        } else {
            setSelected([...selected, data])
        }
    }

    const [open, setOpen] = useState(null)

    const toggle = id => {
        open === id ? setOpen() : setOpen(id)
    }

    const colourOptions = [
        { value: 'ocean', label: 'Ocean' },
        { value: 'blue', label: 'Blue' },
        { value: 'purple', label: 'Purple' },
        { value: 'red', label: 'Red' },
        { value: 'orange', label: 'Orange' }
    ]

    const dataFake = [
        {
            id: 1,
            name: "Chakana Savdo"
        },
        {
            id: 2,
            name: "Hunarmandchilik Faolyati"
        },
        {
            id: 3,
            name: "Maishiy xizmatlar"
        },
        {
            id: 4,
            name: "Faolyatning boshqa turlari"
        }
    ]

    return (
        <>
            <div className='d-flex align-items-center justify-content-between'>
                <h3>Qo'shimcha faolyat turi</h3>
                <Button.Ripple className='btn-icon' outline color='primary' onClick={handleModal}>
                    <Plus size={16} />
                </Button.Ripple>
            </div>
            <Modal
                isOpen={modal}
                toggle={handleModal}
                className='sidebar-lg'
                contentClassName='p-0'
                modalClassName='modal-slide-in sidebar-todo-modal'>
                <div className='modal-header d-flex align-items-center justify-content-between mb-1'>
                    <h4 className='modal-title'>Faolyat turini tanlang!</h4>
                    <X className='fw-normal mt-25' size={20} onClick={handleModal} />
                </div>
                <ModalBody className='flex-grow-1 pb-sm-0 pb-3'>
                    <Accordion open={open} toggle={toggle}>
                        {Array.isArray(dataFake) && dataFake.map((data, i) => (
                            <AccordionItem key={i}>
                                <AccordionHeader targetId={data.id}>{data.name}</AccordionHeader>
                                <AccordionBody accordionId={data.id}>
                                    <Select
                                        className='react-select'
                                        classNamePrefix='select'
                                        options={colourOptions}
                                        theme={selectThemeColors}
                                        onChange={(e) => addArray({
                                            id: data.id,
                                            name: data.name,
                                            child: e
                                        })}
                                        isMulti
                                    />
                                </AccordionBody>
                            </AccordionItem>
                        ))}
                    </Accordion>
                    <div className='mt-2'>
                        {Array.isArray(selected) && selected.map((item, i) => (
                            <div key={i}>
                                <h5>{item.name}</h5>
                                <ul>
                                    {Array.isArray(item.child) && item.child.map((ch, index) => (
                                        <li key={index}>{ch.label}</li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </ModalBody>
                <div className='modal-footer'>
                    <Button color='primary' onClick={handleAdd} disabled={!selected.length}>Saqlash</Button>
                    <Button color='primary' outline onClick={handleModal}>Bekor Qilish</Button>
                </div>
            </Modal>
        </>
    )
}

export default AddActivityComponent