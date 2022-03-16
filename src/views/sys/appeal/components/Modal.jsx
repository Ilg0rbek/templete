// import { useState } from "react"
import { Modal, ModalBody, ModalHeader, Row, Col } from "reactstrap"

export default ({ open, toggle }) => {
    return (
        <>
            <Modal isOpen={open} toggle={toggle} className='modal-dialog-centered modal-xl'>
                <ModalHeader className='bg-transparent' toggle={toggle}></ModalHeader>
                <ModalBody>
                    <h3 className="mb-2">Murojaat raqami: 652563</h3>
                    <Row xl={2} className="border rounded m-1 p-1">
                        <Col className='d-flex aligin-items-center justify-content-between gap-1 pb-1'>
                            <span className="h5 w-50 border-end border-2 ">Murojaat turi:</span>
                            <span className='w-50'>Yuridik shaxs ma'lumotlarini o'zgartirish</span>
                        </Col>
                        <Col className='d-flex aligin-items-center justify-content-between gap-1 pb-1'>
                            <span className="h5 w-50 border-end border-2 ">Murojaatning qisqacha mazmuni::</span>
                            <span className='w-50'>Ариза рад қилинган. Кўрсатилган важлар эса қонунчиликка тўғри келмайди</span>
                        </Col>

                        <Col className='d-flex aligin-items-center justify-content-between gap-1 pb-1'>
                            <span className="h5 w-50 border-end border-2 ">Murojaatchi:</span>
                            <span className='w-50'>ELMONOV ABDULLOH SHOKIRJON O‘G‘LI</span>
                        </Col>
                        <Col className='d-flex aligin-items-center justify-content-between gap-1 pb-1'>
                            <span className="h5 w-50 border-end border-2 ">Murojaat holati:</span>
                            <span className='w-50'>Navbatda</span>
                        </Col>
                        <Col className='d-flex aligin-items-center justify-content-between gap-1 pb-1'>
                            <span className="h5 w-50 border-end border-2 ">Ariza raqami:</span>
                            <span className='w-50'>455051</span>
                        </Col>
                        <Col className='d-flex aligin-items-center justify-content-between gap-1 pb-1'>
                            <span className="h5 w-50 border-end border-2 ">STIR:</span>
                            <span className='w-50'>306789492</span>
                        </Col>
                        <Col className='d-flex aligin-items-center justify-content-between gap-1 pb-1'>
                            <span className="h5 w-50 border-end border-2 ">Telefon raqami:</span>
                            <span className='w-50'>+998945360773</span>
                        </Col>
                        <Col className='d-flex aligin-items-center justify-content-between gap-1 pb-1'>
                            <span className="h5 w-50 border-end border-2 ">Manzil:</span>
                            <span className='w-50'>Samarkand</span>
                        </Col>
                        <Col className='d-flex aligin-items-center justify-content-between gap-1 pb-1'>
                            <span className="h5 w-50 border-end border-2 ">Texnologiya:</span>
                            <span className='w-50'>fo.birdarcha.uz</span>
                        </Col>
                    </Row>

                    <div className="border rounded m-1 p-1">
                        <span className="h5 mb-2">Murojaat matni</span>
                        <p>
                            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Adipisci cupiditate hic magnam natus nemo, quidem sit debitis et. Assumenda nulla molestiae quos, maxime ut quod provident nemo natus ad quia! Nihil, officia magnam natus fugiat voluptates quo sapiente est in animi ratione quidem illo quas quia voluptatem facere recusandae placeat repellat, nisi dolorum dolores. Quaerat corporis dolor veritatis, tempora fuga, recusandae necessitatibus enim vitae eius facere veniam maiores itaque laborum. Doloribus blanditiis necessitatibus, perferendis incidunt rem assumenda consequuntur animi repellat pariatur dolorum laborum, facilis quo fuga dicta cupiditate! Veritatis modi libero consectetur tempora nam fugiat aliquam atque nobis nemo eaque reiciendis magni possimus sit nesciunt sapiente expedita doloribus sequi, vero numquam id culpa voluptatem dignissimos laboriosam. Similique, blanditiis sequi non quod quisquam eos beatae, neque magni at cumque quaerat id provident ipsum quidem! Quae tempora odit et consectetur deserunt numquam eos asperiores, nostrum, temporibus eveniet at sed porro debitis laudantium nam ab, eaque alias optio! Corrupti, alias nostrum neque beatae fugiat sunt nihil accusantium numquam dicta, laborum quos commodi ipsum doloremque rem? Molestiae suscipit aperiam nulla aliquid mollitia quia reprehenderit cum non labore laboriosam hic odit deserunt corrupti minus quas, quis accusamus explicabo asperiores dolore. Neque placeat nobis recusandae unde!
                        </p>
                    </div>
                </ModalBody>
            </Modal>
        </>
    )
}