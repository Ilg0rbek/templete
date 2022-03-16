import * as RS from "reactstrap"
import ReactSelect from "react-select"

const fakeData = [
    {
        title: 'I. Qayta tashkil etish to‘g‘risidagi umumiy ma’lumotlar',
        content: [
            {
                name: 'Qayta tashkil etish to‘g‘risidagi xabarnomaning sanasi va tartib raqami',
                type: 'date'
            },
            {
                name: 'Ilgari e’lon qilingan qayta tashkil etish to‘g‘risidagi xabarnoma',
                type: 'input'
            },
            {
                name: 'Qayta tashkil etish shakli (qayta tuzish, ajratib chiqarish, bo‘lish, qo‘shib yuborish, qo‘shib olish)',
                type: 'input'
            },
            {
                name: 'Qayta tashkil etish o‘tkazilgan muddat',
                type: 'date'
            },
            {
                name: 'Qayta tashkil etish to‘g‘risidagi qaror raqami',
                type: 'input'
            },
            {
                name: 'Qaror qabul qilingan hujjatning nomi',
                type: 'select'
            },
            {
                name: 'Qaror qabul qilgan organning nomi',
                type: 'select'
            },
            {
                name: 'Qaror sanasi',
                type: 'select'
            }
        ]
    },
    {
        title: 'II. Tadbirkorlik subyektlari — yuridik shaxslar to‘g‘risidagi ma’lumotlar',
        content: [
            {
                name: 'Qayta tashkil etishda ishtirok etuvchi tadbirkorlik subyektining — yuridik shaxsning',
                type: 'input'
            },
            {
                name: 'To‘liq nomi',
                type: 'input'
            },
            {
                name: 'Soliq to‘lovchining identifikatsiya raqami (STIR)',
                type: 'input'
            },
            {
                name: 'Manzili (joylashgan joyi)',
                type: 'input'
            }
        ]
    }
]

export default ({ toggle }) => {
    return (
        <>
            {
                fakeData.map((ct, index) => (
                    <div key={index}>
                        <h4 className="mb-2 bold">{ct?.title}</h4>
                        <RS.Card>
                            <RS.CardBody>
                                <RS.Row xl={1}>
                                    {
                                        ct?.content?.map((data, i) => (
                                            <RS.Col className="mb-2" key={i}>
                                                <RS.Label>{data?.name}</RS.Label>
                                                {
                                                    {
                                                        input: <RS.Input type="text" />,
                                                        date: <RS.Input type="date" />,
                                                        select: <ReactSelect />
                                                    }[data?.type] || <div>{data?.type}</div>
                                                }
                                            </RS.Col>
                                        ))
                                    }
                                </RS.Row>
                            </RS.CardBody>
                        </RS.Card>
                    </div>
                ))
            }

            <div className="mt-2 d-flex justify-content-end gap-1">
                <RS.Button onClick={toggle} outline color="primary">Bekor qilish</RS.Button>
                <RS.Button color="success">Saqlash</RS.Button>
            </div>
        </>
    )
}