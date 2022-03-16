import React from "react"
import {Button, Col, Row, Table} from "reactstrap"
import {Edit} from "react-feather"

export default ({nextStep, previousStep}) => {

    const btnEdited = [
        {
            name: "Yuridik shaxs ta`sischilari",
            link: "thsht"
        },
        {
            name: "Yangi hujjatlar(Ustav, ta`sis shartnomasi)",
            link: "name"
        },
        {
            name: "Qo`shimcha hujjatlar",
            link: "tasis"
        }
    ]

    return (
        <>
            <Row xl={2}>
                {
                    btnEdited?.map((route, index) => (
                        <Col key={index} className='pb-1'>
                            <Button color='primary' className='text-center py-2' block >{route.name}</Button>
                        </Col>
                    ))
                }
            </Row>
            <div className="btn_next float-end">
                <Button color={"danger"} className={"mx-2"} onClick={() => previousStep()} outline>Orqaga</Button>
                <Button color={"primary"} onClick={() => nextStep()}>Keyingisi</Button>
            </div>
        </>
    )
}
