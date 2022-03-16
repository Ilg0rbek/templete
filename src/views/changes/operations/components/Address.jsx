// ** Third Party Components
// import { useForm, Controller } from 'react-hook-form'
import { Search } from 'react-feather'

import InputMask from 'react-input-mask'

import { useFormik } from "formik"
// import { AddressSchema } from "../utils"
// ** Reactstrap Imports
import { Label, Row, Col, Button, Form, Input, InputGroup } from 'reactstrap'

const defaultValues = {
  cadastor_number: '',
  email: '',
  address_type: '',
  address: '',
  phone: ''
}

export default ({ toggle }) => {

  const formik = useFormik({
    initialValues: defaultValues,
    // validationSchema: AddressSchema,
    onSubmit: values => {
      alert(values)
    }
  })

  return (
    <>
      <Form onSubmit={formik.handleSubmit}>
        <div className='mt-2 mb-1'>
          <Label for='numeral-formatting'>Kadastir raqami bo'yicha izlash</Label>
          <InputGroup>
            <Input name='cadastor_number' type="text" placeholder='00 00 00 00 00 00 0000 0000' type="text" mask="99 99 99 99 99 9999 9999 99"
              maskChar=" "
              tag={InputMask}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur} />
            <Button.Ripple
              className='btn-icon'
              disabled={formik.values?.cadastor_number?.replace(/ /g, "").length !== 20}
              color={formik.values?.cadastor_number?.replace(/ /g, "").length === 20 ? 'success' : 'secondary'}
            >
              <Search size={16} />
            </Button.Ripple>
          </InputGroup>
          {formik.errors.cadastor_number && formik.touched.cadastor_number && (
            <span className='text-danger'>{formik.errors.cadastor_number}</span>
          )}
        </div>
        <Row xl={1} className='mb-1'>
          <Col className='mb-2'>
            <Label className='form-label' for='address'>
              Manzil
            </Label>
            <Input name='address' type="text" placeholder='98  Borough bridge Road, Birmingham' onChange={formik.handleChange} onBlur={formik.handleBlur} />
            {formik.errors.address && formik.touched.address && (
              <span className='text-danger'>{formik.errors.address}</span>
            )}
          </Col>
          <Col>
            <Label className='form-label'>
              Ko'rsatilgan manzil turini tanlang
            </Label>
            <Row className='mt-1'>
              <Col>
                <Input name="address_type" type="radio" id="address_type_1" value="Xususiy" onChange={formik.handleChange} /> <Label className='form-label mr-1' for='address_type_1'>
                  Xususiy ko'chmas mulk manzili
                </Label>
              </Col>

              <Col>
                <Input name="address_type" type="radio" id="address_type_2" value="Ijara" onChange={formik.handleChange} />
                <Label className='form-label mr-1' for='address_type_2'>
                  Ijaraga olingan mulk manzili
                </Label>
              </Col>
            </Row>
            {formik.errors.address_type && formik.touched.address_type && (
              <span className='text-danger'>{formik.errors.address_type}</span>
            )}
          </Col>
        </Row>
        <div className='d-flex justify-content-end gap-1'>
          <Button type='button' color='primary' outline onClick={toggle}>
            Bekor Qilish
          </Button>
          <Button type='submit' color='success'>
            Saqlash
          </Button>
        </div>
      </Form>
    </>
  )
}
