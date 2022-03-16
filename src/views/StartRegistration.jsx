import {
  Card,
  CardHeader,
  CardBody,
  CardTitle,
  CardText,
  CardFooter,
  Col,
  Row,
  Button
} from "reactstrap"
import {Briefcase, User, CheckCircle} from "react-feather"
import {useHistory} from "react-router-dom"

const StartRegister = () => {
  const history = useHistory()

  const dataReg = [
    {
      key: "individual",
      name: "Jismoniy shaxs bo'lgan tadbirkorlik subyektlarini ro'yhatdan o'tkazish",
      rules: ["Fuqaro yakka tadbirkor sifatida davlat ro‘yxatidan o‘tkazilgan paytdan boshlab tadbirkorlik faoliyati bilan shug‘ullanishga haqlidir.", "Fuqarolarning yuridik shaxs tashkil etmasdan amalga oshiriladigan tadbirkorlik faoliyatiga nisbatan, agar qonun hujjatlaridan yoki huquqiy munosabat mohiyatidan boshqacha tartib anglashilmasa, O'zbekiston Respublikasi Fuqarolik Kodeksining qoidalari qo‘llaniladi.", "Yuridik shaxs tashkil etmasdan birinchi qism talablarini buzgan holda tadbirkorlik faoliyatini amalga oshirayotgan fuqaro tuzgan bitimlar xususida o‘zining tadbirkor emasligini vaj qilib ko‘rsatishga haqli emas."]
    },
    {
      key: 'yur',
      name: "Yuridik shaxs bo'lgan tadbirkorlik subyektlarini ro'yhatdan o'tkazish",
      rules: ["O‘z mulkida, xo‘jalik yuritishida yoki operativ boshqaruvida alohida mol-mulkka ega bo‘lgan hamda o‘z majburiyatlari yuzasidan ushbu mol-mulk bilan javob beradigan, o‘z nomidan mulkiy yoki shaxsiy nomulkiy huquqlarga ega bo‘la oladigan va ularni amalga oshira oladigan, majburiyatlarni bajara oladigan, sudda da’vogar va javobgar bo‘la oladigan tashkilot yuridik shaxs hisoblanadi.", "Foyda olishni o‘z faoliyatining asosiy maqsadi qilib olgan (tijoratchi tashkilot) yoki foyda olishni ana shunday maqsad qilib olmagan tashkilot (tijoratchi bo‘lmagan tashkilot) yuridik shaxs bo‘lishi mumkin.", "Tijoratchi tashkilot bo‘lgan yuridik shaxs xo‘jalik shirkati va jamiyati, ishlab chiqarish kooperativi, unitar korxona va qonunlarda nazarda tutilgan boshqacha shaklda tuzilishi mumkin"]
    }
  ]
  return (
    <>
      <Row>
        {Array.isArray(dataReg) && dataReg.map((d, i) => (
          <Col key={i} xl='6' md='6' sm='2'>
            <Card>
              <CardHeader>
              <CardTitle className="text-center text-sm">
                {d.key === 'yur' ? <Briefcase /> : <User /> } {d.name}
              </CardTitle>
              </CardHeader>
              <CardBody>
                {
                  Array.isArray(d.rules) && d.rules.map((rule, ig) => (
                    <CardText key={ig}>
                      <CheckCircle color="green" /> {rule}
                    </CardText>
                  ))
                }
              </CardBody>
              <CardFooter>
                <Button onClick={() => history.push(`/register/${d.key}`)} color='success' block >Ro'yxatdan o'tkazishni boshlash</Button>
              </CardFooter>
            </Card>
          </Col>
        ))}
      </Row>
    </>
  )
}

export default StartRegister
