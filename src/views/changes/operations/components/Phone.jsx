import * as RS from "reactstrap"
import InputMask from "react-input-mask"

export default ({ toggle }) => {
    return (
        <>
            <RS.Row xl={2}>
                <RS.Col>
                    <RS.Label>Telfon</RS.Label>
                    <RS.Input
                        type="tel"
                        name="phone"
                        placeholder='+998 00 000 00 00'
                        mask="+\9\98 99 999 99 99"
                        maskChar=" "
                        tag={InputMask} />
                </RS.Col>
                <RS.Col>
                    <RS.Label>E-mail</RS.Label>
                    <RS.Input type="email" placeholder="ex: ogabek@gmail.com" />
                </RS.Col>
            </RS.Row>
            <div className="mt-2 d-flex justify-content-end gap-1">
                <RS.Button onClick={toggle} outline color="primary">Bekor qilish</RS.Button>
                <RS.Button color="success">Saqlash</RS.Button>
            </div>
        </>
    )
}