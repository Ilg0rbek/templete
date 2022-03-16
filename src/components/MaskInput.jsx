import { Label, Input } from "reactstrap"
import PropType from "prop-types"
import InputMask from "react-input-mask"

const MaskInput = ({ label, placeholder, mask, name }) => {
    return (
        <>
            {
                label && <Label>{Label}</Label>
            }
            <Input
                name={name}
                type="text"
                mask={mask}
                maskChar=" "
                tag={InputMask}
                placeholder={placeholder} />
        </>
    )
}

export default MaskInput

MaskInput.propTypes = {
    label: PropType.string || null,
    placeholder: PropType.string || '',
    mask: PropType.string,
    name: PropType.string
}