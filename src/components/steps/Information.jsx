import { Row, Col, Button } from "reactstrap"

const individual = [
    {
        title: 'Ixtiyoriy to’xtatish jarayonini kuzatish',
        content: [
            {
                name: 'Kim tomonidan kiritilgan',
                value: "00 - Islombek Atajanov ibragimovich"
            },
            {
                name: 'FIO',
                value: "Atajanov Islombek Ibragimovich"
            },
            {
                name: 'JSH SHIR',
                value: "0000000000000000"
            },
            {
                name: "Ro'yhatdan o'tish boshlangan sana va vaqt",
                value: "17.11.2021 / 07:31:04"
            },
            {
                name: "Ro'yhatdan o'tish tugatilgan sana va vaqt",
                value: "17.11.2021 / 07:41:57"
            },
            {
                name: 'Soliqdan hulosa kelgan sana va vaqti',
                value: "25.11.2021 / 07:41:57"
            },
            {
                name: 'Bankdan hulosa kelgan sana va vaqt',
                value: "25.11.2021 / 07:41:57"
            }
        ]
    },
    {
        title: 'Davlat soliq qo’mitasi hulosasi',
        buttons: ["Ma'lumotnoma olish", "Qarzdorlikni tekshirish"],
        content: [
            {
                name: 'Soliq qarzdorligi',
                value: "Type your text here"
            },
            {
                name: 'Penya',
                value: "Type your text here"
            },
            {
                name: 'Tekshirish holati.',
                value: "Type your text here"
            },
            {
                name: 'Sababi',
                value: "Type your text here"
            },
            {
                name: 'Tekshiruv boshlangan sana',
                value: "Type your text here"
            },
            {
                name: 'Tekshiruv tugash sanasi',
                value: "Type your text here"
            },
            {
                name: 'Buyruq raqami',
                value: "Type your text here"
            },
            {
                name: 'Mas’ul shaxs F.I.O.',
                value: "Type your text here"
            }
        ]
    },
    {
        title: 'Bank ma’lumoti',
        buttons: ["Hisob raqamni tekshirish"],
        content: [
            {
                name: 'Sana',
                value: "Type your text here"
            },
            {
                name: 'Bank nomi',
                value: "Type your text here"
            },
            {
                name: 'Filial nomi',
                value: "Type your text here"
            },
            {
                name: 'Hisob raqami',
                value: "Type your text here"
            },
            {
                name: 'Holati',
                value: "Type your text here"
            }
        ]
    }
]


const legal = [
    {
        title: 'Ixtiyoriy to’xtatish jarayonini kuzatish',
        content: [
            {
                name: 'Kim tomonidan kiritilgan',
                value: "00 - Islombek Atajanov ibragimovich"
            },
            {
                name: 'FIO',
                value: "Atajanov Islombek Ibragimovich"
            },
            {
                name: 'JSH SHIR',
                value: "0000000000000000"
            },
            {
                name: "Ro'yhatdan o'tish boshlangan sana va vaqt",
                value: "17.11.2021 / 07:31:04"
            },
            {
                name: "Ro'yhatdan o'tish tugatilgan sana va vaqt",
                value: "17.11.2021 / 07:41:57"
            },
            {
                name: 'Soliqdan hulosa kelgan sana va vaqti',
                value: "25.11.2021 / 07:41:57"
            },
            {
                name: 'Bankdan hulosa kelgan sana va vaqt',
                value: "25.11.2021 / 07:41:57"
            }
        ]
    },
    {
        title: 'Ogabek',
        content: [
            {
                name: 'Reyesrtdagi ro`yxat raqami',
                value: "1458321"
            },
            {
                name: 'Davlat ro`yxatidan o`tgan sanasi',
                value: "30.09.2021"
            },
            {
                name: 'THSHT',
                value: "YaTT"
            },
            {
                name: 'F.I.Sh',
                value: "IBROHIM ATAJANOV ISMOILOVICH"
            },
            {
                name: 'JSHSHIR',
                value: "58745896589654"
            },
            {
                name: 'Faoliyat yuritish muddati',
                value: "23.09.2021"
            },
            {
                name: 'Faoliyat turi',
                value: "Chakana savdo"
            },
            {
                name: "Qo'shimcha faoliyat turi",
                value: "Mavjud emas"
            },
            {
                name: 'Faoliyat joyi',
                value: "Toshkent shahar, Mirobod tumani Mirzo ko‘chasi 16-uy."
            },
            {
                name: 'Amaldagi status',
                value: "Vaqtinchalik to’xtatilgan"
            }
        ]
    },
    {
        title: "Soliq qo'mitasi bilan ma'lumot almashish jarayoni",
        buttons: ["Jarayon tarixi"],
        content: [
            {
                name: 'Sana va vaqt',
                value: "10.02.2022 12:37:20"
            },
            {
                name: "Ma'lumot almashish turi",
                value: "Tugatish jarayoni boshlanganligi to'g'risida ma'lumot"
            }
        ]
    },
    {
        title: "Markaziy bank bilan ma'lumot almashish jarayoni",
        buttons: ["Jarayon tarixi"],
        content: [
            {
                name: 'Sana',
                value: "10.02.2022 12:37:20"
            },
            {
                name: "Ma'lumot almashish turi",
                value: "Tugatish jarayoni boshlanganligi to'g'risida ma'lumot"
            },
            {
                name: "Ma'lumot olingan sana va vaqt",
                value: "10.02.2022 12:37:13"
            },
            {
                name: 'Bank nomi',
                value: "055.'Asia Alliance Bank' ATB"
            },
            {
                name: 'Filial nomi',
                value: "01095.ASIA ALLIANCE BANK bosh ofisi"
            },
            {
                name: 'Hisob raqami',
                value: "20208000905308297001"
            },
            {
                name: 'Hisob raqam holati',
                value: "Faol"
            }
        ]
    },
    {
        title: "MIB bilan ma'lumot almashish jarayoni",
        buttons: ["Jarayon tarixi"],
        content: [
            {
                name: 'Sana va vaqt',
                value: "10.02.2022 12:37:20"
            },
            {
                name: "Ma'lumot almashish turi",
                value: "Tugatish jarayoni boshlanganligi to'g'risida ma'lumot"
            },
            {
                name: "Ma'lumot olingan sana va vaqt",
                value: "10.02.2022 12:37:13"
            },
            {
                name: 'Ijro hujjatining raqami',
                value: ""
            },
            {
                name: 'Ijro hujjatining sanasi',
                value: ""
            },
            {
                name: 'Qarz miqdori',
                value: "MIBda qarzdorlik to'g'risida ma'lumot topilmadi"
            },
            {
                name: 'MIB nomi',
                value: ""
            },
            {
                name: 'F.I.SH davlat ijrochisi',
                value: ""
            },
            {
                name: 'Ijro ishi raqami',
                value: ""
            }
        ]
    },
    {
        title: "STAT bilan ma'lumot almashish jarayoni",
        buttons: ["Jarayon tarixi"],
        content: [
            {
                name: 'Sana va vaqt',
                value: "10.02.2022 12:37:20"
            },
            {
                name: "Ma'lumot almashish turi",
                value: "Tugatish jarayoni boshlanganligi to'g'risida ma'lumot"
            }
        ]
    },
    {
        title: "Sud bilan ma'lumot almashish jarayoni",
        buttons: ["Jarayon tarixi"],
        content: [
            {
                // name: 'So\'rovga javob kutilmoqda'
                value: "So\'rovga javob kutilmoqda"
            }
        ]
    },
    {
        title: "O`zbekiston Respublikasi Moliya vazirligi ma'lumotlari",
        content: [
            {
                name: 'Kelib tushgan sana',
                value: "10.02.2022"
            },
            {
                name: 'Qaror mazmuni',
                value: "Ushbu tashkilotda qimmatli qog'ozlar mavjud emas"
            }
        ]
    },
    {
        title: "Tashkilotga tegishli ko'chmas mulklar(Kadastr) ma'lumotlari",
        content: [
            {
                name: 'Sana va vaqt'
            },
            {
                name: 'Kadastr raqami',
                value: ""
            },
            {
                name: 'Ko\'chmas mulk obyektining nomi',
                value: ""
            },
            {
                name: 'Ko\'chmas mulk obyektining egasi',
                value: ""
            },
            {
                name: 'STIR (Egasi)',
                value: ""
            },
            {
                name: 'Ko\'chmas mulk obyekti joylashgan viloyat',
                value: ""
            },
            {
                name: 'Ko\'chmas mulk obyekti joylashgan tuman',
                value: ""
            },
            {
                name: 'Ko\'chmas mulk obyekti joylashgan ko\'cha',
                value: ""
            }
        ]
    },
    {
        title: "YHXBdan tashkilotga tegishli avtomobillar to'g'risida ma'lumotlari",
        content: [
            {
                name: 'Sana va vaqt'
            },
            {
                name: 'Egasi',
                value: ""
            },
            {
                name: 'STIR (Egasi)',
                value: ""
            },
            {
                name: 'Davlat raqam belgisi',
                value: ""
            },
            {
                name: 'Turi',
                value: ""
            },
            {
                name: 'Rusumi/Modeli',
                value: ""
            },
            {
                name: 'Rangi',
                value: ""
            },
            {
                name: 'Berilgan sana',
                value: ""
            },
            {
                name: 'YHX boshqarmasi bo\'limi',
                value: ""
            }
        ]
    },
    {
        title: "Agrosanoat majmui ustidan nazorat qilish inspeksiyasidan ma'lumot",
        content: [
            {
                name: 'Sana va vaqt',
                value: "10.02.2022 12:37:20"
            },
            {
                name: "Ma'lumot almashish turi",
                value: "Tugatish jarayoni boshlanganligi to'g'risida ma'lumot"
            }
        ]
    }
]

const Information = ({ type, nextStep, previousStep }) => {
    return (
        <>
            {
                (type === 'legal' ? legal : individual).map((data, index) => (
                    <div key={index} className="border rounded mb-2 p-2">
                        <div className="d-flex align-items-center justify-content-between mb-2">
                            <h3>{data.title}</h3>
                            <div className="d-flex align-items-center gap-1">
                                {
                                    data.buttons && data.buttons?.map((name, num) => (<Button key={num} size="sm" color="primary">{name}</Button>))
                                }
                            </div>
                        </div>
                        <Row xl={2}>
                            {
                                Array.isArray(data?.content) && data?.content?.map((cd, ind) => (
                                    <Col key={ind} className='d-flex aligin-items-center gap-1 p-1 border'>
                                        <span className="h5">{cd.name}:</span>
                                        <b>{cd.value}</b>
                                    </Col>
                                ))
                            }
                        </Row>
                    </div>
                ))
            }
            <div className="d-flex justify-content-end gap-1">
                <Button color="danger" size="lg" onClick={() => nextStep()}>Ariza jarayonini to’xtatish</Button>
                <Button color="success" size="lg" onClick={() => previousStep()}>Ariza jarayonini yakunlash</Button>
            </div>
        </>
    )
}

export default Information
