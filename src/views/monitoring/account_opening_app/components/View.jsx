import React from "react"
import {Card, CardBody, CardHeader, CardTitle} from "reactstrap"

export default () => {
    return (
          <>
              <h1 className="mb-2">Hisob raqam ochish arizalar №</h1>
              <Card className='overflow-hidden'>
                  <CardHeader className='d-flex items-center justify-content-center'>
                      <CardTitle tag='h4'>Bank hisob raqam uchun ariza</CardTitle>
                      {/*<div className="d-flex gap-1">*/}
                      {/*    <Button.Ripple onClick={handleFilter} className='btn-icon' outline color='primary'>*/}
                      {/*        <Filter size={16}/>*/}
                      {/*    </Button.Ripple>*/}
                      {/*</div>*/}
                  </CardHeader>
                  <CardBody>
                      <div className='react-dataTable'>
                          {/*<DataTable*/}
                          {/*    noHeader*/}
                          {/*    pagination*/}
                          {/*    data={store?.appeal}*/}
                          {/*    columns={basicColumns}*/}
                          {/*    className='react-dataTable'*/}
                          {/*    sortIcon={<ChevronDown size={10}/>}*/}
                          {/*    paginationRowsPerPageOptions={[10, 25, 50, 100]}*/}
                          {/*/>*/}
                      </div>
                      {/*<FillterComponent open={openFilter} handleModal={handleFilter}/>*/}
                      {/*<View_Account_Register openModal={openModal} setOpenModal={setOpenModal} toggle={handleModal}/>*/}
                      {/*<ModalComponent open={modalOpen} toggle={toggle}/>*/}
                  </CardBody>
              </Card>
          </>
    )
}
