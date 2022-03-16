import { Search } from "react-feather"
import { useHistory } from "react-router-dom"
import { Card, CardBody, Input, Button } from 'reactstrap'

export default () => {
    const history = useHistory()
    // const location = useLocation()
    return (
        <>
            <h1 className="mb-2">Yuridik shaxsni o'zgartirish</h1>
            <Card className='overflow-hidden'>
                <CardBody>
                    <div className="d-flex gap-1">
                        <Input placeholder="Stirni kiriting...." maxLength={9} name="tin" />
                        <Button.Ripple color="primary" outline>
                            <Search size={15} />
                        </Button.Ripple>
                    </div>
                    <div className="d-flex mt-1 justify-content-end gap-1">
                        <Button onClick={() => history.goBack()} outline color="danger">Bekor qilish</Button>
                        <Button onClick={() => alert("Saved")} color="success">Saqlash</Button>
                    </div>
                </CardBody>
            </Card>
        </>
    )
}

