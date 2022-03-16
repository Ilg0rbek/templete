import { Offcanvas, OffcanvasHeader, OffcanvasBody, Label, Input, Form, Button, Row, Col } from "reactstrap"
import { useLocation, useHistory } from "react-router-dom"
import ReactSelect from "react-select"
import qs from 'qs'
import PropTypes from "prop-types"

const Filter = ({ open, toggle, fields }) => {
    const location = useLocation()
    const history = useHistory()
    const defaultValue = qs.parse(location.search, { ignoreQueryPrefix: true })

    const handleSubmit = (event) => {
        event.preventDefault()
        const formData = new FormData(event.target)
        const asString = new URLSearchParams(formData).toString()
        const query = qs.parse(asString, { ignoreQueryPrefix: true })
        Object.keys(query).forEach(key => {
            if (query[key] === '' || query[key] === null || query[key] === undefined) {
                delete query[key]
            }
        })
        const queryUrl = qs.stringify(query)
        history.push(`${location.pathname}?${queryUrl}`)
        // toggle()
    }

    return (
        <Offcanvas
            direction='end'
            isOpen={open}
            toggle={toggle}
        >
            <OffcanvasHeader toggle={toggle}>Ma'lumotlarni filter qilish</OffcanvasHeader>
            <OffcanvasBody>
                <Form onSubmit={handleSubmit}>
                    {
                        fields?.map((field, index) => (
                            <>
                                {
                                    {
                                        INPUT: (
                                            <div key={index} className='mb-1'>
                                                <Label className='form-label' for={field?.props?.name}>
                                                    {field?.label}
                                                </Label>
                                                <Input defaultValue={defaultValue[field?.props?.name]} id={field?.props?.name} {...field?.props} />
                                            </div>
                                        ),
                                        SELECT: (
                                            <div key={index} className='mb-1'>
                                                <Label className='form-label' for={field?.props?.name}>
                                                    {field?.label}
                                                </Label>
                                                <ReactSelect defaultValue={field?.props?.name} id={field?.props?.name} {...field?.props} />
                                            </div>
                                        ),
                                        CHECKBOX: (
                                            <div key={index} className='mb-1'>
                                                <Label className='form-label' for={field?.props?.name}>
                                                    {field?.label}
                                                </Label>
                                                <Row xl={2}>
                                                    {
                                                        field?.options?.map((option, i) => (
                                                            <Col key={i} className="mb-1">
                                                                <Input type="checkbox" id={option?.value} name={option?.value} value={true} />
                                                                <label for={option?.value} className="ml-1">{option?.label}</label>
                                                            </Col>
                                                        ))
                                                    }
                                                </Row>
                                            </div>
                                        ),
                                        RADIO: (
                                            <div key={index} className='mb-1'>
                                                <Label className='form-label' for={field?.props?.name}>
                                                    {field?.label}
                                                </Label>
                                                <Row xl={2}>
                                                    {
                                                        field?.options?.map((option, i) => (
                                                            <Col key={i} className="mb-1">
                                                                <Input type="radio" id={option?.value} {...field?.props} value={option?.value} />
                                                                <label for={option?.value} className="ml-1">{option?.label}</label>
                                                            </Col>
                                                        ))
                                                    }
                                                </Row>
                                            </div>
                                        )
                                    }[field.field_type]
                                }
                            </>
                        ))
                    }
                    <Button block color="success">Qidirish</Button>
                </Form>
            </OffcanvasBody>
        </Offcanvas>
    )
}

export default Filter

Filter.propTypes = {
    open: PropTypes.bool.isRequired,
    toggle: PropTypes.func.isRequired,
    fields: PropTypes.array.isRequired
}