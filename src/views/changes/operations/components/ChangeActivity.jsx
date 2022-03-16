// import { useState } from "react"
import * as RS from "reactstrap"
import ReactSelect from "react-select"

export default ({ toggle }) => {
    // const [value, setValue] = useState(null)
    return (
        <>
            <div className="mb-2">
                <RS.Label>Faolyat turini tanlang!</RS.Label>
                <ReactSelect placeholder="Tanlang..." />
            </div>
            <div className="mb-2">
                <RS.Label>Yunalishni tanlang!</RS.Label>
                <ReactSelect placeholder="Tanlang..." />
            </div>
            <div className='d-flex justify-content-end gap-1'>
                <RS.Button type='button' color='primary' outline onClick={toggle}>
                    Bekor Qilish
                </RS.Button>
                <RS.Button type='submit' color='success'>
                    Saqlash
                </RS.Button>
            </div>
        </>
    )
}