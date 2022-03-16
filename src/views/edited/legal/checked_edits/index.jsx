import {Button, Form, Input, InputGroup, Label, Table} from 'reactstrap'
import InputMask from "react-input-mask"
import {Search} from "react-feather"
import React, {useState} from "react"
import {useFormik} from "formik"
import {toast} from "react-toastify"

export default () => {

    // const dispatch = useDispatch()
    // const store = useSelector(state => state.legalPermEdit)
    const [booleanMy, setBooleanMy] = useState(false)

    const formik = useFormik({
        initialValues: {
            tin: null
        },
        onSubmit: (params) => {
            console.log(params)
            setBooleanMy(true)
            toast.success("Ruxsat beriladi")
        }
    })

    const dataFake = [
        {
            code: 14,
            message: "Soliq hisbotlarini topshirmagan",
            details: [
                {
                    code: 100,
                    name: "Aylanmadan olinadigan soliq"
                },
                {
                    code: 46,
                    name: "Jismoniy shaxslar daromadidan olinadigan soliq"
                }
            ]
        }
    ]

    return (
        <>
            <h1 className="mb-2">Yuridik shaxs o’zgartirishlari</h1>
            <div className="border rounded mb-2 p-2 bg-white shadow">
                <Form onSubmit={formik.handleSubmit}>
                    <Label>STIRni kiriting</Label>
                    <InputGroup>
                        <Button color='primary' outline>
                            <Search size={12}/>
                        </Button>
                        <Input
                            placeholder='000 000 000'
                            type="text"
                            mask="999 999 999"
                            maskChar=" "
                            name={"tin"}
                            tag={InputMask}
                            onChange={formik.handleChange}
                        />
                        <Button type='submit' color='primary' outline>
                            Qidirish
                        </Button>
                    </InputGroup>
                </Form>
                {booleanMy && <>
                    <Table className={"mt-2"}>
                        <thead>
                        <tr>
                            <th width={25}>Kod</th>
                            <th>Kamchiligi</th>
                            <th>Tavsilotlar</th>
                        </tr>
                        </thead>
                        <tbody>
                        {
                            dataFake.map((element) => <>
                                <td className={"text-center"}>{element.code}</td>
                                <td>{element.message}</td>
                                <td>{element.details?.map((value) => (
                                        <div>
                                            <span>{value.code}: <b>{value.name}</b></span>
                                        </div>
                                    )
                                )}</td>
                            </>)
                        }
                        </tbody>
                    </Table>
                </>
                }
            </div>
        </>
    )
}
