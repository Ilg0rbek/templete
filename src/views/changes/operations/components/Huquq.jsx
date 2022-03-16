import * as RS from "reactstrap"
import ReactSelect from "react-select"

export default ({ toggle }) => {
    return (
        <>
            <ReactSelect placeholder="Tashkiliy-huquqiy shaklni tanlash" />
            <div className="mt-2 d-flex justify-content-end gap-1">
                <RS.Button onClick={toggle} outline color="primary">Bekor qilish</RS.Button>
                <RS.Button color="success">Saqlash</RS.Button>
            </div>
        </>
    )
}