// ** Reactstrap Imports
import { Label, Input } from 'reactstrap'

const CheckboxBasic = ({
    label,
    id,
    onEvent,
    value
}) => {
    return (
        <div className='form-check form-check-inline'>
            <Input type='checkbox' checked={value} id={id} onChange={onEvent} />
            <Label for={id} className='form-check-label'>
                {label}
            </Label>
        </div>
    )
}
export default CheckboxBasic
