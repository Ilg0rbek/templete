import React from 'react'
import * as RS from "reactstrap"


export default ({nextStep, previousStep}) => {


    return (
        <div className="m-2">
            <h4 className="mb-2">Firma nomini olish</h4>
            <RS.Row xl={2}>
                <RS.Row xl={1} className="w-50">
                    <RS.Col className='my-1'>
                        <RS.Label>Tashkiliy-huquqiy shakli *</RS.Label>
                        <RS.Input type='file' placeholder=" O'zgartirish "/>
                    </RS.Col>
                    <RS.Col className='my-1'>
                        <RS.Label>Agar siz muvaffaqiyatli ravishda korxona nomini zahiraga olib login va parol ga ega
                            bo'lsangiz</RS.Label>
                        <RS.Button
                            className='mt-1'
                            color="success"
                            outline={true}
                        >Tugmani bosing
                        </RS.Button>
                    </RS.Col>
                </RS.Row>
                <RS.Row xl={1} className="w-50">
                    <RS.Col className='my-1'>
                        <RS.Label>Firma nomi *</RS.Label>
                        <RS.Input placeholder=" Typing ... "/>
                    </RS.Col>
                </RS.Row>
            </RS.Row>
            <div className="d-flex justify-content-end gap-2 mt-2">
                <RS.Button color="danger" onClick={() => previousStep()} outline>Bekor qilish</RS.Button>
                <RS.Button
                    color="success"
                    onClick={() => nextStep()}
                >
                    Keyingisi
                </RS.Button>
            </div>
        </div>
    )
}
