import React from "react"
import {Col, Row} from "reactstrap"

export default () => {

    const dataFake = [
        {
            name: 'Korxona nomi',
            option: 'HITECH TRADE INVEST'
        },
        {
            name: 'Davlat ro\'yhatidan o\'tgan sanasi',
            option: '17.11.2021'
        },
        {
            name: 'Guvohnoma raqami',
            option: '3274'
        },
        {
            name: 'STIR',
            option: '304658919'
        },
        {
            name: 'Tashkiliy-huquqiy shakli (THSHT)\t',
            option: 'Mas\'uliyati cheklangan jamiyat'
        }
    ]

    const dataFakeAddress = [
        {
            name: 'Viloyat / Hudud',
            option: 'Farg`ona viloyati'
        },
        {
            name: 'Tuman',
            option: 'Beshariq tumani'
        },
        {
            name: 'Shaharcha/QFY',
            option: 'Beshariq'
        },
        {
            name: 'Ko\'cha',
            option: 'ZARQAYNAR QISHLOG\'I,'
        }
    ]

    return (
        <>
            <div className='px-5 py-2'>
                <h3 className='text-center mb-3'>Tugatilayotgan tashkilot ma'lumotlari</h3>
                <Row xl={1}>
                    {
                        Array.isArray(dataFake) && dataFake.map((d, i) => (
                            <Col key={i} className='d-flex aligin-items-center justify-content-between gap-1 pb-1'>
                                <span className="h5 w-50 border-end border-2 float-end">{d.name}:</span>
                                <span className='w-50'><b>{d.option}</b></span>
                            </Col>
                        ))
                    }
                </Row>
            </div>
            <div className='px-5 py-2'>
                <h3 className='text-center mb-3'>Manzili</h3>
                <Row xl={1}>
                    {
                        Array.isArray(dataFakeAddress) && dataFakeAddress.map((d, i) => (
                            <Col key={i} className='d-flex aligin-items-center justify-content-between gap-1 pb-1'>
                                <span className="h5 w-50 border-end border-2 float-end">{d.name}:</span>
                                <span className='w-50'><b>{d.option}</b></span>
                            </Col>
                        ))
                    }
                </Row>
            </div>
        </>
    )
}
