import * as RS from "reactstrap"
import ReactSelect from "react-select"

export default ({nextStep, previousStep}) => {

    return (
        <>
            <RS.Card>
                <RS.CardHeader>
                    <h4>Arizachi to'g'risidagi ma'lumotlar</h4>
                </RS.CardHeader>
                <RS.CardBody>
                    <RS.Row xl={2}>
                        <RS.Col xl={12} className="mb-3">
                            <RS.Label className="mb-2">Joylashgan joyi</RS.Label>
                            <div className="d-flex">
                                <div className="d-flex align-items-center jusctify-content-end">
                                    <RS.Input id='male' name="gender" type="radio"/>
                                    <RS.Label for="male" className="px-1">Xususiy ko'chmas mulk manzili </RS.Label>
                                </div>
                                <div className="d-flex align-items-center jusctify-content-end">
                                    <RS.Input id="famale" name="gender" type="radio"/>
                                    <RS.Label for="famale" className="px-1"> Ijaraga olingan ko'chmas mulk
                                        manzili</RS.Label>
                                </div>
                            </div>
                        </RS.Col>
                        <RS.Col className="mb-1">
                            <RS.Label>Davlat</RS.Label>
                            <ReactSelect placeholder="Hujjat turini tanlang..."/>
                        </RS.Col>
                        <RS.Col className="mb-1">
                            <RS.Label>Viloyat</RS.Label>
                            <ReactSelect placeholder="Hujjat turini tanlang..."/>
                        </RS.Col>
                        <RS.Col className="mb-1">
                            <RS.Label>Tuman</RS.Label>
                            <ReactSelect placeholder="Hujjat turini tanlang..."/>
                        </RS.Col>
                        <RS.Col className="mb-1">
                            <RS.Label>Shaharcha/QFY</RS.Label>
                            <ReactSelect placeholder="Hujjat turini tanlang..."/>
                        </RS.Col>
                        <RS.Col className="mb-1">
                            <RS.Label>Mahalla</RS.Label>
                            <ReactSelect placeholder="Hujjat turini tanlang..."/>
                        </RS.Col>
                        <RS.Col className="mb-1">
                            <RS.Label>Daha</RS.Label>
                            <RS.Input/>
                        </RS.Col>
                        <RS.Col className="mb-1">
                            <RS.Label>Ko'cha</RS.Label>
                            <RS.Input/>
                        </RS.Col>
                        <RS.Col className="mb-1">
                            <RS.Label>Boshi berk ko'cha/Berk ko'cha/Tor ko'cha</RS.Label>
                            <RS.Input/>
                        </RS.Col>
                        <RS.Col xl={4} className="mb-1">
                            <RS.Label>Uy</RS.Label>
                            <RS.Input type="text"/>
                        </RS.Col>
                        <RS.Col xl={4} className="mb-1">
                            <RS.Label>Xonadon</RS.Label>
                            <RS.Input/>
                        </RS.Col>
                        <RS.Col xl={4} className="mb-1">
                            <RS.Label>Blok</RS.Label>
                            <RS.Input/>
                        </RS.Col>
                        <RS.Col className="mb-1">
                            <RS.Label>Korpus</RS.Label>
                            <RS.Input/>
                        </RS.Col>
                        <RS.Col className="mb-1">
                            <RS.Label>Pochta index</RS.Label>
                            <RS.Input/>
                        </RS.Col>
                        <RS.Col className="mb-1">
                            <RS.Label>Telefon</RS.Label>
                            <RS.Input placeholder=" +998 00 000 00 00"/>
                        </RS.Col>
                        <RS.Col className="mb-1">
                            <RS.Label>Email</RS.Label>
                            <RS.Input type="email" placeholder="example@gmail.com"/>
                        </RS.Col>
                    </RS.Row>
                    <div className="d-flex justify-content-end gap-2 mt-2">
                        <RS.Button color="danger" onClick={() => previousStep()} outline>Bekor qilish</RS.Button>
                        <RS.Button
                            color="success"
                            onClick={() => nextStep()}
                        >
                            Keyingisi
                        </RS.Button>
                    </div>
                </RS.CardBody>
            </RS.Card>
        </>
    )
}
