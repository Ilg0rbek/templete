import { useState } from "react"
import { Card, CardBody, Row, Col, TabPane, TabContent, Button, UncontrolledButtonDropdown, DropdownMenu, DropdownItem, DropdownToggle } from 'reactstrap'
import { User, Briefcase } from "react-feather"
import { useHistory } from "react-router-dom"

const dataUrl = [
  {
    id: 1,
    name: "Jismoniy shaxs",
    icon: <User className="mb-1" size={50} />
  },
  {
    id: 2,
    name: "Yuridik shaxs",
    icon: <Briefcase className="mb-1" size={50} />
  }
]


const dataChildUrl = [
  {
    id: 1,
    content: [
      {
        id: 1,
        name: "Ro'yxatdan o'tish",
        link: '/register/individual'
        // url: [
        //   {
        //     name: 'Jismoniy shaxs',

        //   },
        //   {
        //     name: 'Yuridik shaxs',
        //     link: '/register/yur'
        //   }
        // ]
      },
      {
        id: 2,
        name: "O'zgartirish",
        url: [
          {
            name: 'Ma\'lumotlarni o\'zgartirish',
            link: '/changes/inform'
          },
          {
            name: 'Statusni o\'zgartirish',
            link: '/changes/status'
          },
          {
            name: 'Jurnal',
            link: '/changes/jurnal'
          },
          {
            name: "Saqlab qo‘yilgan o‘zgartirishlar",
            link: '/changes/saved'
          }
        ]
      },
      {
        id: 3,
        name: "Ko'chirma berish",
        url: [
          {
            name: 'Ariza ochish',
            link: '/copy'
          },
          {
            name: 'Arizalarim',
            link: '/copy/applications'
          },
          {
            name: 'Jurnal',
            link: '/copy/jurnal'
          }
        ]
      },
      {
        id: 4,
        name: "Yangi namunadagi guvohnoma",
        url: [
          {
            name: 'Ariza ochish',
            link: '/certificate'
          },
          {
            name: 'Arizalarim',
            link: '/certificate/individual/jurnal'
          },
          {
            name: 'Viloyat Jurnali',
            link: '/certificate/region_jurnal'
          },
          {
            name: 'Tuman Jurnali',
            link: '/certificate/subregion_journal'
          }
        ]
      },
      {
        id: 5,
        name: "Hudud o'zgarishlar",
        link: "/territory"
      },
      {
        id: 6,
        name: "Reyestr",
        link: "/registry"
      },
      {
        id: 7,
        name: "Tugatish",
        url: [
          {
            name: 'Arizani ixtiyoriy tugatish',
            link: '/cancel'
          },
          {
            name: 'Arizalar',
            link: '/cancel/applications'
          },
          {
            name: 'Online arizalar',
            link: '/cancel/online-applications'
          },
          {
            name: 'Jurnal',
            link: '/cancel/jurnal'
          }
        ]
      },
      {
        id: 8,
        name: "Hisob raqam",
        url: [
          {
            name: 'hisob raqam ochish',
            link: '/payments'
          },
          {
            name: 'Saqlangan ma\'lumotlar',
            link: '/payments/info'
          },
          {
            name: 'Jurnal',
            link: '/payments/jurnal'
          }
        ]
      }
    ]
  },
  {
    id: 2,
    content: [
      {
        id: 1,
        name: "Ro'yxatdan o'tish",
        link: '/register/legal'
      },
      {
        id: 2,
        name: "O'zgartirish",
        url: [
          // {
          //   name: 'Ariza ochish',
          //   link: '/dashboard'
          // },
          // {
          //   name: 'Arizalarim',
          //   link: '/dashboard'
          // },
          {
            name: 'Yuridik shahs o`zgartirishlari',
            link: '/edit_legal/search'
          },
          {
            name: 'Saqlab qo`ygan o`zgartirishlarim',
            link: '/edit_legal/saved'
          },
          {
            name: 'O`zgartirishlar jurnali',
            link: '/edit_legal/list'
          },
          {
            name: 'Tekshirish',
            link: '/edit_legal/checked'
          },
          {
            name: 'Tekshirishlar jurnali',
            link: '/edit_legal/checked_list'
          }
        ]
      },
      {
        id: 3,
        name: "Ko'chirma berish",
        url: [
          {
            name: 'Ariza ochish',
            link: '/dashboard'
          },
          {
            name: 'Arizalarim',
            link: '/dashboard'
          }
        ]
      },
      {
        id: 4,
        name: "Yangi namunadagi guvohnoma",
        url: [
          {
            name: 'Ariza ochish',
            link: '/dashboard'
          },
          {
            name: 'Arizalarim',
            link: '/dashboard'
          }
        ]
      },
      {
        id: 10,
        name: "Online tushgan arizalar",
        link: "/dashboard"
      },
      {
        id: 5,
        name: "Hudud o'zgarishlar",
        link: "/dashboard"
      },
      {
        id: 6,
        name: "Reystr",
        link: "/dashboard"
      },
      {
        id: 7,
        name: "Tugatish",
        link: "/cancel"
      },
      {
        id: 8,
        name: "Hisob raqam",
        url: [
          {
            name: 'Ariza ochish',
            link: '/dashboard'
          },
          {
            name: 'Arizalarim',
            link: '/dashboard'
          }
        ]
      },
      {
        id: 11,
        name: "Qayta tiklash",
        url: [
          {
            name: 'Ariza ochish',
            link: '/dashboard'
          },
          {
            name: 'Arizalarim',
            link: '/dashboard'
          }
        ]
      }
    ]
  }
]

const Home = () => {
  const [active, setActive] = useState(1)
  const history = useHistory()

  const toggle = tab => {
    if (active !== tab) {
      setActive(tab)
    }
  }

  return (
    <>
      <Row xl={2}>
        {
          dataUrl?.map((p, index) => (
            <Col key={index}>
              <Card onClick={() => toggle(p.id)} color={active === p.id && 'primary'} className={`mb-2 cursor-pointer ${active === p.id && 'text-white'}`}>
                <CardBody className='text-center'>
                  {p.icon}
                  <h2 className={active === p.id && 'text-white'}>{p.name}</h2>
                </CardBody>
              </Card>
            </Col>
          ))
        }
      </Row>
      <Card>
        <CardBody>
          <TabContent className='py-50' activeTab={active}>
            {
              dataChildUrl.map((ch, index) => (
                <TabPane key={index} tabId={ch.id}>
                  <Row xl={5}>
                    {
                      ch?.content?.map((c, i) => (
                        <Col key={i} className="mb-1">
                          <UncontrolledButtonDropdown className="w-100">
                            <Button color='primary' onClick={() => c?.link && history.push(c.link)} block>{c.name}</Button>
                            {
                              c?.url &&
                              <>
                                <DropdownToggle className='dropdown-toggle-split' color='primary' caret></DropdownToggle>
                                <DropdownMenu>
                                  {
                                    c?.url?.map((u, n) => (
                                      <DropdownItem key={n} tag="a" onClick={() => history.push(u.link)}>
                                        {u.name}
                                      </DropdownItem>
                                    ))
                                  }
                                </DropdownMenu>
                              </>
                            }
                          </UncontrolledButtonDropdown>
                        </Col>
                      ))
                    }
                  </Row>
                </TabPane>
              ))
            }
          </TabContent>
        </CardBody>
      </Card>
    </>
  )
}

export default Home
