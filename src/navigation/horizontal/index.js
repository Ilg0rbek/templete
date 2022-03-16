import { Edit, Grid, Home, DollarSign, Command, Briefcase, Circle, List } from 'react-feather'

export default [
  {
    id: 'home',
    title: 'Bosh sahifa',
    icon: <Home size={20} />,
    navLink: '/dashboard'
  },
  {
    id: 'applications',
    title: 'Mening Arizalarim',
    icon: <Grid size={20} />,
    children: [
      {
        id: 'jis',
        title: 'Jismoniy shaxs',
        icon: <Circle size={20} />,
        navLink: '/dashboard/applications/individual'
      },
      {
        id: 'yur',
        title: 'Yuridik shaxs',
        icon: <Circle size={20} />,
        navLink: '/dashboard/applications/yur'
      }
    ]
  },
  // {
  //   id: 'business',
  //   title: 'Mening Biznesslarim',
  //   icon: <Briefcase size={20} />,
  //   navLink: '/dashboard/business'
  // },
  {
    id: 'registration',
    title: 'Ro\'yxatdan o\'tkazish',
    icon: <Edit size={20} />,
    children: [
      {
        id: 'jis',
        title: 'Jismoniy shaxs',
        icon: <Circle size={20} />,
        navLink: '/register/individual'
      },
      {
        id: 'yur',
        title: 'Yuridik shaxs',
        icon: <Circle size={20} />,
        navLink: '/register/yur'
      }
    ]
  },
  {
    id: 'blacklist',
    title: 'Qora Ro\'yxat',
    icon: <List size={20} />,
    children: [
      {
        id: 'farm',
        title: 'Firma nomlari',
        icon: <Circle size={20} />,
        navLink: '/blacklist/farm'
      },
      {
        id: 'company',
        title: 'Ta\'qiqlangan tashkilotlar',
        icon: <Circle size={20} />,
        navLink: '/blacklist/company'
      },
      {
        id: 'person',
        title: 'Qidiruvdagi shaxslar',
        icon: <Circle size={20} />,
        navLink: '/blacklist/person'
      },
      {
        id: 'beneficiary',
        title: 'Benefitsiar mulkdorlar',
        icon: <Circle size={20} />,
        navLink: '/blacklist/beneficiary'
      }
    ]
  },
  // // {
  // //   id: 'developers_panel',
  // //   title: 'Dasturchilar paneli',
  // //   icon: <Edit size={20} />,
  // //   children: [
  // //     {
  // //       id: 'translets',
  // //       title: 'Tarjimalar',
  // //       icon: <Circle size={20} />,
  // //       navLink: '/dev/translets'
  // //     },
  // //     {
  // //       id: 'settings',
  // //       title: 'Sozlanmalar',
  // //       icon: <Circle size={20} />,
  // //       navLink: '/dev/settings'
  // //     },
  // //     {
  // //       id: 'response',
  // //       title: 'mgmt_gnk_response',
  // //       icon: <Circle size={20} />,
  // //       navLink: '/dev/response'
  // //     },
  // //     {
  // //       id: 'ifutgroup',
  // //       title: 'IFUT guruhlari',
  // //       icon: <Circle size={20} />,
  // //       navLink: '/dev/ifutgroups'
  // //     },
  // //     {
  // //       id: 'services',
  // //       title: 'Biling tizimi instrumentlari',
  // //       icon: <Circle size={20} />,
  // //       navLink: '/dev/services'
  // //     },
  // //     {
  // //       id: 'activitytype',
  // //       title: 'Faoliyat turi guruhlari ',
  // //       icon: <Circle size={20} />,
  // //       navLink: '/dev/activitytype'
  // //     },
  // //     {
  // //       id: 'requirement',
  // //       title: 'Jismoniy shaxsni ro`yhatdan o`tkazish mantig`i',
  // //       icon: <Circle size={20} />,
  // //       navLink: '/dev/requirement'
  // //     },
  // //     {
  // //       id: 'legalentities',
  // //       title: 'Yuridik sh. O\'zgarishlar qismini boshqarish',
  // //       icon: <Circle size={20} />,
  // //       navLink: '/dev/legalentities'
  // //     },
  // //     {
  // //       id: 'answer_question',
  // //       title: 'Savol-Javob',
  // //       icon: <Circle size={20} />,
  // //       navLink: '/dev/answer_question'
  // //     },
  // //     {
  // //       id: 'le_opf_choice_settings',
  // //       title: 'THSh insturmentlari',
  // //       icon: <Circle size={20} />,
  // //       navLink: '/dev/le_opf_choice_settings'
  // //     },
  // //     {
  // //       id: 'br_le_reg_requiriments',
  // //       title: 'Yuridik shaxs tashkil etgan tadbirkorlik subyektini ro\'yxatdan o\'tkazish mantig\'i',
  // //       icon: <Circle size={20} />,
  // //       navLink: '/dev/br_le_reg_requiriments'
  // //     },
  // //     {
  // //       id: 'static_page',
  // //       title: 'Sahifa insturmentlari',
  // //       icon: <Circle size={20} />,
  // //       navLink: '/dev/static_page'
  // //     },
  // //     {
  // //       id: 'fixed_service',
  // //       title: 'Pullik xizmatlar',
  // //       icon: <Circle size={20} />,
  // //       navLink: '/dev/fixed_service'
  // //     },
  // //     {
  // //       id: 'fixed_service_amount',
  // //       title: 'Pullik xizmatlar narxlari',
  // //       icon: <Circle size={20} />,
  // //       navLink: '/dev/fixed_service_amount'
  // //     }
  // //   ]
  // // },
  // // {
  // //   id: 'control_panel',
  // //   title: 'Boshqaruv paneli',
  // //   icon: <Edit size={20} />,
  // //   children: [
  // //     {
  // //       id: 'appeal',
  // //       title: 'Murojaatlar',
  // //       icon: <Circle size={20} />,
  // //       navLink: '/sys/appeal'
  // //     },
  // //     {
  // //       id: 'stamp_application',
  // //       title: 'Muhr va shtamp',
  // //       icon: <Circle size={20} />,
  // //       navLink: '/sys/stamp_application'
  // //     },
  // //     {
  // //       id: 'id_gov_members',
  // //       title: 'One ID Foydalanuvchilari',
  // //       icon: <Circle size={20} />,
  // //       navLink: '/sys/id_gov_members'
  // //     },
  // //     {
  // //       id: 'members',
  // //       title: 'Foydalanuvchilar',
  // //       icon: <Circle size={20} />,
  // //       navLink: '/sys/members'
  // //     },
  // //     {
  // //       id: 'user_ip',
  // //       title: 'Ulanishlar',
  // //       icon: <Circle size={20} />,
  // //       navLink: '/sys/user_ip'
  // //     },
  // //     {
  // //       id: 'user_group',
  // //       title: 'Foydalanuvchilarni guruhlash',
  // //       icon: <Circle size={20} />,
  // //       navLink: '/sys/user_group'
  // //     },
  // //     {
  // //       id: 'changes_company',
  // //       title: 'O\'zgarishlar',
  // //       icon: < Circle size={20} />,
  // //       children: [
  // //         {
  // //           id: 'i_change',
  // //           title: 'Jismoniy shaxslar',
  // //           navLink: '/sys/i_change'
  // //         },
  // //         {
  // //           id: 'y_change',
  // //           title: 'Yuridik shaxslar',
  // //           navLink: '/sys/y_change'
  // //         },
  // //         {
  // //           id: 'application_status',
  // //           title: 'Ariza Holati',
  // //           navLink: '/sys/application_status'
  // //         }
  // //       ]
  // //     },
  // //     {
  // //       id: 'bank',
  // //       title: 'Banklar ro\'yxati',
  // //       icon: < Circle size={20} />,
  // //       navLink: '/sys/bank'
  // //     },
  // //     {
  // //       id: 'payment_list',
  // //       title: 'To\'lovlar ro\'yxati',
  // //       icon: < Circle size={20} />,
  // //       navLink: '/sys/payment_list'
  // //     },
  // //     {
  // //       id: 'company',
  // //       title: 'Korxona nomlari',
  // //       icon: < Circle size={20} />,
  // //       children: [
  // //         {
  // //           id: 'rezervCompany',
  // //           title: 'Rezevga olingan korxona nomlari',
  // //           navLink: '/sys/rezerv_company'
  // //         },
  // //         {
  // //           id: 'catchCompany',
  // //           title: 'Kechdagi zaxiraga olingan kompanya nomlar',
  // //           navLink: '/sys/catch_company'
  // //         },
  // //         {
  // //           id: 'saveCompany',
  // //           title: 'Saqlangan arizalardagi korxonalar nomlari',
  // //           navLink: '/sys/save_company'
  // //         },
  // //         {
  // //           id: 'archive',
  // //           title: 'Korxona nomlarini zahiraga olish',
  // //           navLink: '/sys/archive'
  // //         }
  // //       ]
  // //     },
  //     {
  //       id: 'new',
  //       title: 'Xabarlar',
  //       icon: < Circle size={20} />,
  //       navLink: '/sys/news'
  //     },
  //     {
  //       id: 'permits',
  //       title: 'Ruxsatnomalar',
  //       icon: < Circle size={20} />,
  //       navLink: '/sys/permits'
  //     }
  //   ]
  // },
  {
    id: 'monitoring',
    title: 'Monitoring',
    icon: <Edit size={20} />,
    children: [
      {
        id: 'y_registr',
        title: 'Registratsiya Reestri yuridik shaxslar',
        icon: <Circle size={20} />,
        navLink: '/monitoring/y_registr'
      },
      {
        id: 'j_registr',
        title: 'Registratsiya Reestri jismoniy shaxslar',
        icon: <Circle size={20} />,
        navLink: '/monitoring/j_registr'
      },
      {
        id: 'editing_j',
        title: 'O`zgarishlar jismoniy shaxslar',
        icon: <Circle size={20} />,
        navLink: '/monitoring/editing_j'
      },
      {
        id: 'editing_yur',
        title: 'O`zgarishlar yuridik shaxslar',
        icon: <Circle size={20} />,
        navLink: '/monitoring/editing_yur'
      },
      {
        id: 'reorganization_monitor',
        title: 'Qayta tashkil etish monitoringi',
        icon: <Circle size={20} />,
        navLink: '/monitoring/reorganization_monitor'
      },
      {
        id: 'reorganization_monitor_company',
        title: 'Qayta tashkil etish monitoringi (Korxonalar)',
        icon: <Circle size={20} />,
        navLink: '/monitoring/reorganization_monitor_company'
      },
      {
        id: 'account_register',
        title: 'Hisob raqam ochish arizalar monitoringi',
        icon: <Circle size={20} />,
        navLink: '/monitoring/account_register'
      },
      {
        id: 'account_register_individual',
        title: 'Hisob raqam ochish arizalar monitoringi (Jismoniy shaxs)',
        icon: <Circle size={20} />,
        navLink: '/monitoring/account_register_individual'
      },
      {
        id: 'i_new_certificate',
        title: 'Guvohnomalar monitoringi (Jismoniy shaxs)',
        icon: <Circle size={20} />,
        navLink: '/monitoring/i_new_certificate'
      },
      {
        id: 'le_new_certificate',
        title: 'Guvohnomalar monitoringi (Yuridik shaxs)',
        icon: <Circle size={20} />,
        navLink: '/monitoring/le_new_certificate'
      },
      {
        id: 'y_reestr',
        title: 'Yuridik shaxslar reestiri',
        icon: <Circle size={20} />,
        navLink: '/monitoring/y_reestr'
      },
      {
        id: 'j_reestr',
        title: 'Jismoniy shaxslar reestiri',
        icon: <Circle size={20} />,
        navLink: '/monitoring/j_reestr'
      },
      {
        id: 'application',
        title: 'Arizalar monitoringi',
        icon: <Circle size={20} />,
        navLink: '/monitoring/application'
      },
      {
        id: 'copy_monitorings_jis',
        title: 'Ko`chirmalar monitoringi jis.sh',
        icon: <Circle size={20} />,
        navLink: '/monitoring/copy_monitorings_jis'
      },
      {
        id: 'copy_monitorings_yur',
        title: 'Ko`chirmalar monitoringi jis.sh',
        icon: <Circle size={20} />,
        navLink: '/monitoring/copy_monitorings_yur'
      }
    ]
  },
  {
    id: 'changes',
    title: "O'zgartirish",
    icon: <Command size={20} />,
    children: [
      {
        id: 'inform',
        title: 'Ma\'lumotlar',
        icon: <Circle size={20} />,
        children: [
          {
            id: 'jismoniy',
            title: 'Jismoniy shaxs',
            navLink: '/changes/info/individual'
          },
          {
            id: 'yuridik',
            title: 'Yuridik shaxs',
            navLink: '/changes/info/yur'
          }
        ]
      },
      {
        id: 'status',
        title: 'Status',
        icon: <Circle size={20} />,
        navLink: '/changes/status'
      },
      {
        id: 'jurnal',
        title: 'Jurnal',
        icon: <Circle size={20} />,
        navLink: '/changes/jurnal'
      },
      {
        id: 'saved',
        title: 'Saqlab qo‘yilgan o‘zgartirishlar',
        icon: <Circle size={20} />,
        navLink: '/changes/saved'
      }
    ]
  },
  {
    id: 'copy',
    title: "Ko\'chirma",
    icon: <Command size={20} />,
    children: [
      {
        id: 'start-copy-application',
        title: 'Ariza Berish',
        icon: <Circle size={20} />,
        navLink: '/copy'
      },
      {
        id: 'copy-application',
        title: 'Arizalarim',
        icon: <Circle size={20} />,
        navLink: '/copy/applications'
      },
      {
        id: 'copy-jurnal',
        title: 'Jurnal',
        icon: <Circle size={20} />,
        navLink: '/copy/jurnal'
      }
    ]
  },
  {
    id: 'certificate',
    title: "Yangi namunadagi guvohnoma",
    icon: <Command size={20} />,
    children: [
      {
        id: 'start-certificate-application',
        title: 'Ariza Berish',
        icon: <Circle size={20} />,
        navLink: '/certificate'
      },
      {
        id: 'certificate-application',
        title: 'Arizalarim',
        icon: <Circle size={20} />,
        navLink: '/certificate/applications'
      },
      {
        id: 'certificate-jurnal',
        title: 'Jurnal',
        icon: <Circle size={20} />,
        navLink: '/certificate/jurnal'
      }
    ]
  },
  {
    id: 'reorganization',
    title: "Qayta tashkil etish",
    icon: <Command size={20} />,
    children: [
      {
        id: 'reorganization-1',
        title: 'Ajratib chiqarish',
        icon: <Circle size={20} />,
        navLink: '/reorganization/segregation'
      },
      {
        id: 'reorganization-2',
        title: 'Qo\'shib yuborish',
        icon: <Circle size={20} />,
        navLink: '/reorganization/joining'
      },
      {
        id: 'reorganization-3',
        title: 'Birlashtirish',
        icon: <Circle size={20} />,
        navLink: '/reorganization/marge'
      },
      {
        id: 'reorganization-4',
        title: 'Bo\'lish',
        icon: <Circle size={20} />,
        navLink: '/reorganization/division'
      },
      {
        id: 'reorganization-jurnal',
        title: 'Jurnal',
        icon: <Circle size={20} />,
        navLink: '/reorganization/jurnal'
      }
    ]
  },
  {
    id: 'registry',
    title: "Reyester",
    icon: <Command size={20} />,
    navLink: '/registry'
  },
  {
    id: 'end',
    title: "Tugatish",
    icon: <Command size={20} />,
    children: [
      {
        id: 'end',
        title: 'Arizani tugatish',
        icon: <Circle size={20} />,
        navLink: '/cancel'
      },
      {
        id: 'end-application',
        title: 'Arizalar',
        icon: <Circle size={20} />,
        navLink: '/cancel/application'
      },
      {
        id: 'end-online',
        title: 'Online Arizalar',
        icon: <Circle size={20} />,
        navLink: '/cancel/online-application'
      },
      {
        id: 'end-jurnal',
        title: 'Jurnal',
        icon: <Circle size={20} />,
        navLink: '/cancel/jurnal'
      }
    ]
  },
  {
    id: 'payment',
    title: "To'lovlar",
    icon: <DollarSign size={20} />,
    children: [
      {
        id: 'payments',
        title: 'Hisob raqam ochish',
        icon: <Circle size={20} />,
        navLink: '/payments'
      },
      {
        id: 'payments-application',
        title: 'Saqlangan ma\'lumotlar',
        icon: <Circle size={20} />,
        navLink: '/payments/info'
      },
      {
        id: 'payments-jurnal',
        title: 'Jurnal',
        icon: <Circle size={20} />,
        navLink: '/payments/jurnal'
      }
    ]
  }
]

