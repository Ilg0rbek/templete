import { useState } from "react"
// import { useHistory, useParams, useLocation } from "react-router-dom"
import * as RS from "reactstrap"
import CheckboxBasic from "@cp/CheckBox"
import Uploader from "@cp/Uploader"
import ReactSelect from "react-select"

export default ({ toggle }) => {
    const [active, setActive] = useState('1')
    const [agreement, setAgreement] = useState(false)
    const [document, setDocument] = useState(false)

    const toggleTab = tab => {
        if (active !== tab) {
            setActive(tab)
        }
    }

    return (
        <>
            <RS.Card>
                <RS.CardBody>
                    <RS.Nav className='justify-content-center' tabs>
                        <RS.NavItem>
                            <RS.NavLink
                                active={active === '1'}
                                onClick={() => {
                                    toggleTab('1')
                                }}
                            >
                                Malumotlar
                            </RS.NavLink>
                        </RS.NavItem>
                        <RS.NavItem>
                            <RS.NavLink
                                active={active === '2'}
                                onClick={() => {
                                    toggleTab('2')
                                }}
                            >
                                Hujjatlar
                            </RS.NavLink>
                        </RS.NavItem>
                        <RS.NavItem>
                            <RS.NavLink
                                active={active === '3'}
                                onClick={() => {
                                    toggleTab('3')
                                }}
                            >
                                Muddatlar va to'lovlar
                            </RS.NavLink>
                        </RS.NavItem>
                        <RS.NavItem>
                            <RS.NavLink
                                active={active === '4'}
                                onClick={() => {
                                    toggleTab('4')
                                }}
                            >
                                Natija
                            </RS.NavLink>
                        </RS.NavItem>
                    </RS.Nav>
                    <RS.TabContent className='py-50' activeTab={active}>
                        <RS.TabPane tabId='1'>
                            <p>
                                Pie fruitcake lollipop. Chupa chups apple pie marzipan danish soufflé soufflé oat cake gingerbread. Bonbon
                                jujubes donut gummies sesame snaps cookie gingerbread cotton candy pastry. Biscuit sugar plum jelly-o
                                tootsie roll gummies cookie croissant cotton candy. Bear claw lollipop liquorice chocolate topping dessert
                                macaroon dessert dragée.
                            </p>
                            <p>
                                Pie fruitcake lollipop. Chupa chups apple pie marzipan danish soufflé soufflé oat cake gingerbread. Bonbon
                                jujubes donut gummies sesame snaps cookie gingerbread cotton candy pastry. Biscuit sugar plum jelly-o
                                tootsie roll gummies cookie croissant cotton candy. Bear claw lollipop liquorice chocolate topping dessert
                                macaroon dessert dragée.
                            </p>
                        </RS.TabPane>
                        <RS.TabPane tabId='2'>
                            <p>
                                Lemon drops caramels macaroon muffin. Icing chupa chups cupcake chupa chups cheesecake chocolate cake jelly
                                marzipan. Candy icing apple pie powder dragée bear claw sweet roll. Dragée liquorice ice cream jujubes.
                                Lemon drops lollipop donut cupcake macaroon icing. Wafer lemon drops jelly. Bear claw candy wafer wafer
                                jelly cake biscuit.
                            </p>
                            <p>
                                Liquorice tootsie roll cheesecake muffin chupa chups toffee toffee. Pie sesame snaps biscuit sweet roll.
                                Tiramisu cake oat cake croissant halvah candy brownie croissant. Bonbon sugar plum muffin tart brownie
                                macaroon lollipop dragée. Jujubes halvah cheesecake.
                            </p>
                        </RS.TabPane>
                        <RS.TabPane tabId='3'>
                            <p>
                                Danish tiramisu donut chocolate bar. Toffee oat cake candy toffee pudding soufflé lemon drops. Gummi bears
                                cake oat cake. Tiramisu sugar plum sugar plum cake marzipan cake. Wafer muffin marshmallow biscuit oat cake
                                sweet roll danish. Chocolate jelly topping dessert donut. Cheesecake jelly-o carrot cake carrot cake candy
                                canes jelly.
                            </p>
                            <p>
                                Wafer chocolate caramels jujubes biscuit powder marzipan. Lollipop gingerbread muffin. Tiramisu brownie tart
                                marshmallow wafer sweet caramels croissant chocolate bar. Sweet marzipan toffee muffin sugar plum marzipan.
                                Soufflé bear claw muffin cake powder danish dragée.
                            </p>
                        </RS.TabPane>
                        <RS.TabPane tabId='4'>
                            <p>
                                Danish tiramisu donut chocolate bar. Toffee oat cake candy toffee pudding soufflé lemon drops. Gummi bears
                                cake oat cake. Tiramisu sugar plum sugar plum cake marzipan cake. Wafer muffin marshmallow biscuit oat cake
                                sweet roll danish. Chocolate jelly topping dessert donut. Cheesecake jelly-o carrot cake carrot cake candy
                                canes jelly.
                            </p>
                            <p>
                                Wafer chocolate caramels jujubes biscuit powder marzipan. Lollipop gingerbread muffin. Tiramisu brownie tart
                                marshmallow wafer sweet caramels croissant chocolate bar. Sweet marzipan toffee muffin sugar plum marzipan.
                                Soufflé bear claw muffin cake powder danish dragée.
                            </p>
                            <p>
                                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ratione quidem quae vitae omnis iusto obcaecati amet excepturi voluptatem nesciunt consequuntur.
                            </p>
                        </RS.TabPane>
                    </RS.TabContent>
                </RS.CardBody>
            </RS.Card>
            <RS.Card>
                <RS.CardHeader>
                    <RS.CardTitle className='text-center mx-auto'>
                        Ofertani qabul qilish
                    </RS.CardTitle>
                </RS.CardHeader>
                <RS.CardBody>
                    <CheckboxBasic id={1} label="Yuqoridagi shartlar bilan tanishib chiqqanimni tasdiqlayman" onEvent={() => setAgreement(!agreement)} />
                    <div className="border my-1 py-2 px-3 rounded">
                        <RS.Row xl={1} className='gap-2'>
                            <RS.Col>
                                <RS.Label>Zahiraga olingan login va parolni kiriting. (Mavjud bo’lsa)</RS.Label>
                                <div className='d-flex gap-1 aligin-items-center justify-content-between'>
                                    <RS.Input type="text" placeholder='Loginni kiriting...' />
                                    <RS.Input type="password" placeholder='Parolni kiriting...' />
                                </div>
                            </RS.Col>
                            <RS.Col>
                                <RS.Label>Yoki firma nomini kiriting</RS.Label>
                                <RS.Input type="text" placeholder='Nomini kiriting...' />
                            </RS.Col>
                            <RS.Col>
                                <RS.Label>Nomga qo'shimcha tanlash!</RS.Label>
                                <ReactSelect
                                    className='react-select'
                                    classNamePrefix='select'
                                />
                            </RS.Col>
                        </RS.Row>
                    </div>
                    <CheckboxBasic id={2} label="Tashkil etilayotgan tadbirkorlik subyektining - yuridik shaxsning mulkdori (muassisi)" />
                    <CheckboxBasic id={3} label="Ta'sis hujjatlariga muvofiq tashkil etilayotgan tadbirkorlik subyektining - yuridik shaxsning nomidan harakat qilishga vakolatli bo'lgan boshqa shaxs." onEvent={() => setDocument(!document)} />
                    {
                        document && (
                            <div className="border my-1 py-2 px-3 rounded">
                                <RS.Row xl={1} className='gap-2'>
                                    <RS.Col>
                                        <Uploader />
                                    </RS.Col>
                                    <RS.Col>
                                        <div className='d-flex gap-1 aligin-items-center justify-content-between'>
                                            <RS.Input type="number" placeholder='Hujjat raqami...' />
                                            <RS.Input type="date" placeholder='Sanasi...' />
                                        </div>
                                    </RS.Col>
                                    <RS.Col>
                                        <RS.Input type="text" placeholder='Notarus...' />
                                    </RS.Col>
                                </RS.Row>
                            </div>
                        )
                    }
                </RS.CardBody>
            </RS.Card>
            <div className="mt-2 d-flex justify-content-end gap-1">
                <RS.Button onClick={toggle} outline color="primary">Bekor qilish</RS.Button>
                <RS.Button color="success">Saqlash</RS.Button>
            </div>
        </>
    )
}