// ** React Imports
import { Fragment, useState } from 'react'
// import { useSelector } from "react-redux"
// import { useParams } from "react-router-dom"
import { ArrowLeft, ArrowRight, Clipboard } from 'react-feather'
import Uploader from "@cp/Uploader"
// ** Reactstrap Imports
import { Table, Row, Col, Button, TabContent, TabPane, Nav, NavItem, NavLink } from 'reactstrap'

const YurInfo = ({ nextStep, previousStep }) => {
  const [active, setActive] = useState('1')

  const toggle = tab => {
    if (active !== tab) {
      setActive(tab)
    }
  }
  return (
    <Fragment>
      <div className='content-header d-flex align-items-center gap-1'>
        <Clipboard />
        <h4 className='mb-0'>Kiritilgan malumotlar to'g'riligini tekshiring!</h4>
      </div>
      <>
        <Nav tabs>
          <NavItem>
            <NavLink
              active={active === '1'}
              onClick={() => {
                toggle('1')
              }}
            >
              Ma’lumotlar
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              active={active === '2'}
              onClick={() => {
                toggle('2')
              }}
            >
              Hujjatlar
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              active={active === '3'}
              onClick={() => {
                toggle('3')
              }}
            >
              Mulkdor roziligi
            </NavLink>
          </NavItem>
        </Nav>
        <TabContent className='py-50' activeTab={active}>
          <TabPane tabId='1'>
            <TabInfo />
          </TabPane>
          <TabPane tabId='2'>
            <TabUploader />
          </TabPane>
          <TabPane tabId='3'>
            <TabMember />
          </TabPane>
        </TabContent>
      </>

      <div className='d-flex justify-content-between'>
        <Button type='button' color='primary' className='btn-prev' onClick={() => previousStep()}>
          <ArrowLeft size={14} className='align-middle me-sm-25 me-0'></ArrowLeft>
          <span className='align-middle d-sm-inline-block d-none'>Orqaga</span>
        </Button>
        <Button type='submit' color='primary' className='btn-next' onClick={() => nextStep()}>
          <span className='align-middle d-sm-inline-block d-none'>Keyingisi</span>
          <ArrowRight size={14} className='align-middle ms-sm-25 ms-0'></ArrowRight>
        </Button>
      </div>
    </Fragment>
  )
}

const dataFake = [
  {
    title: 'Jamiyat to’g’risida ma’lumot',
    content: [
      {
        name: 'Korxona nomi',
        value: "ogabek"
      },
      {
        name: 'Nom qo’shimchasi',
        value: "Mavjud emas"
      },
      {
        name: 'THSH',
        value: "Xususiy korxona"
      },
      {
        name: 'Manzil',
        value: "Sergeli tumani 5-uy"
      },
      {
        name: 'Manzil turi',
        value: "Xususiy"
      },
      {
        name: 'IFUT kodi va nomi',
        value: "1.2.33.1 - Chakana savdo"
      },
      {
        name: 'Tahminiy xodimlar soni',
        value: "1"
      },
      {
        name: 'Telefon raqami',
        value: "99 803 99 19"
      },
      {
        name: 'Elektron pochta',
        value: "ogabek@gmail.com"
      }
    ]
  },
  {
    title: 'Ta’sischi to’g’risida ma’lumot',
    content: [
      {
        name: 'Hujjat turi',
        value: "Fuqaro passporti"
      },
      {
        name: 'Hujjat seriyasi va raqami',
        value: "AA 000000"
      },
      {
        name: 'F.I.O.',
        value: "Ogabek Yuldoshev"
      },
      {
        name: 'PINFL (JSHSHIR)',
        value: "0000 0000 0000 0000"
      },
      {
        name: 'Ustav fondi',
        value: "45"
      },
      {
        name: 'Telefon raqami',
        value: "99 803 99 19"
      },
      {
        name: 'Elektron pochta',
        value: "ogabek@gmail.com"
      }
    ]
  },
  {
    title: 'Rahbar to’g’risida ma’lumot',
    content: [
      {
        name: 'Hujjat turi',
        value: "Fuqaro passporti"
      },
      {
        name: 'Hujjat seriyasi va raqami',
        value: "AA 000000"
      },
      {
        name: 'F.I.O.',
        value: "Ogabek Yuldoshev"
      },
      {
        name: 'PINFL (JSHSHIR)',
        value: "0000 0000 0000 0000"
      }
    ]
  },
  {
    title: 'Benefitsiar to’g’risida ma’lumot',
    content: [
      {
        name: 'F.I.O.',
        value: "Ogabek Yuldoshev"
      },
      {
        name: 'PINFL (JSHSHIR)',
        value: "0000 0000 0000 0000"
      }
    ]
  }
]

const TabInfo = () => {
  return (
    <>
      {
        Array.isArray(dataFake) && dataFake.map((data, index) => (
          <div key={index} className="border rounded mb-2 p-2">
            <h4 className='mb-2'>{data.title}</h4>
            <Row xl={2}>
              {
                Array.isArray(data?.content) && data?.content?.map((cd, ind) => (
                  <Col key={ind} className='d-flex aligin-items-center justify-content-between gap-1 pb-1'>
                    <span className="h5 w-50 border-end border-2 ">{cd.name}:</span>
                    <span className='w-50'>{cd.value}</span>
                  </Col>
                ))
              }
            </Row>
          </div>
        ))
      }
    </>
  )
}

const TabMember = () => {
  return (
    <>
      <div className="border rounded mb-2 p-2">
        <Row xl={2}>
          <Col className='d-flex aligin-items-center justify-content-between gap-1 pb-1'>
            <span className="h5 w-50 border-end border-2 ">Tasischi:</span>
            <span className='w-50'>Ogabek Yuldoshev</span>
          </Col>
        </Row>
      </div>
    </>
  )
}

const TabUploader = () => {
  return (
    <Row xl={2}>
      <Col>
        <Uploader />
      </Col>
      <Col>
        <span>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odit a vel quibusdam quam porro et ratione quidem ipsum consequuntur? Repudiandae quam voluptas facilis ratione, ipsum sunt laboriosam magni! Dolorem, ipsa harum doloribus ducimus architecto alias, magni, nam impedit quod nesciunt unde. Omnis consequuntur hic facere error eos corporis fugit qui?
        </span>
      </Col>
    </Row>
  )
}

export default YurInfo
