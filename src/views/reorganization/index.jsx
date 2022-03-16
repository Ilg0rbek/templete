import * as RS from "reactstrap"
import ReactSelect from "react-select"
import {useHistory, useParams} from "react-router-dom"
import {useEffect, useState} from "react"

export default () => {

    const params = useParams()
    const [words, setWords] = useState('')
    const history = useHistory()

    useEffect(() => {
        if (params.type === "segregation") {
            setWords("Ajratib chiqish  №:")
        } else if (params.type === "joining") {
            setWords("Qo'shib yuborish  №:")
        } else if (params.type === "marge") {
            setWords("Birlashtirish  №:")
        } else if (params.type === "division") {
            setWords("Bo`lish  №:")
        }
    }, [params])

    console.log(params)

    return (
        <>
            <h2 className="mb-1">{words}</h2>
            <RS.Card>
                <RS.CardHeader>
                    <h4>Arizachi to'g'risidagi ma'lumotlar</h4>
                </RS.CardHeader>
                <RS.CardBody>
                    <RS.Row xl={2}>
                        <RS.Col className="mb-1">
                            <RS.Label>Hujjat Turi</RS.Label>
                            <ReactSelect placeholder="Hujjat turini tanlang..."/>
                        </RS.Col>
                        <RS.Col className="mb-1">
                            <RS.Label>Passport seriyasi va raqami</RS.Label>
                            <RS.Input placeholder="ex: AA0000001"/>
                        </RS.Col>
                        <RS.Col className="mb-1">
                            <RS.Label>PINFL</RS.Label>
                            <RS.Input placeholder="ex: 12345678912345"/>
                        </RS.Col>
                        <RS.Col className="mb-1">
                            <RS.Label>Pasport berilgan sanasi</RS.Label>
                            <RS.Input type="date" placeholder="Hujjat turini tanlang..."/>
                        </RS.Col>
                        <RS.Col xl={4} className="mb-1">
                            <RS.Label>Familyasi</RS.Label>
                            <RS.Input type="text" placeholder="ex: Yuldoshev"/>
                        </RS.Col>
                        <RS.Col xl={4} className="mb-1">
                            <RS.Label>Ismi</RS.Label>
                            <RS.Input type="text" placeholder="ex: Og'abek"/>
                        </RS.Col>
                        <RS.Col xl={4} className="mb-1">
                            <RS.Label>Otasining ismi</RS.Label>
                            <RS.Input type="text" placeholder="ex: Temir o'g'li"/>
                        </RS.Col>
                        <RS.Col className="mb-1">
                            <RS.Label>Jinsi</RS.Label>
                            {/* <RS.Input type="date" placeholder="Hujjat turini tanlang..." /> */}
                            <div className="d-flex align-items-center gap-5">
                                <div>
                                    <RS.Input id='male' name="gender" type="radio"/>
                                    <label for="male" className="px-1">Erkak</label>
                                </div>
                                <div>
                                    <RS.Input id="famale" name="gender" type="radio"/>
                                    <label for="famale" className="px-1">Ayol</label>
                                </div>
                            </div>
                        </RS.Col>
                        <RS.Col className="mb-1">
                            <RS.Label>Tug'ilgan sanasi</RS.Label>
                            <RS.Input type="date" placeholder="Hujjat turini tanlang..."/>
                        </RS.Col>
                    </RS.Row>
                    <div className="d-flex justify-content-end gap-2 mt-2">
                        <RS.Button color="danger" outline>Bekor qilish</RS.Button>
                        <RS.Button
                            color="success"
                            onClick={() => history.push(`/reorganization/${params.type}/applicant`)}
                        >
                            Keyingisi
                        </RS.Button>
                    </div>
                </RS.CardBody>
            </RS.Card>
        </>
    )
}
