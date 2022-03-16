// ** Redux Imports
import { createSlice } from '@reduxjs/toolkit'

// ** Axios Imports
// import axios from 'axios'

// export const getTasks = createAsyncThunk('appTodo/getTasks', async params => {
//   const response = await axios.get('/apps/todo/tasks', { params })

//   return {
//     params,
//     data: response.data
//   }
// })


export const SysSlice = createSlice({
    name: 'sys',
    initialState: {
        appeal: [
            {
                id: 1,
                type: 'Qayta tashkil qilish',
                short_discription: "Mening Murojaatim",
                sender: 'ELMONOV ABDULLOH SHOKIRJON O‘G‘LI',
                address: 'Samarkand',
                date: "12.12.2021",
                tech: 'fo.birdarcha.uz',
                status: 'Yangi',
                comments: 32
            }
        ],
        payment_list: [
            {
                id: 1,
                invoise: 12345,
                sum: 12344556,
                status: 'Yangi',
                payment_type: 'Bank'
            }
        ],
        user_role: [
            {
                id: 1,
                fullname: "Ogabek Yuldoshev",
                login: "@ogabekyuldoshev",
                role: 'YDM: Farg`ona viloyati, Marg`ilon shahri'
            }
        ],
        user_connection: [
            {
                id: 1,
                fullname: "Ogabek Yuldoshev",
                address: "Samarkand",
                ip: '192.168.23.213'
            }
        ],
        banks: [
            {
                id: 1,
                name: "Poytaxt Bank",
                address: "100170, Toshkent shahri, Mirzo Ulugʻbek tumani, Sayram 5-tor koʻchasi, 4 uy",
                phone: '998555030000',
                site: 'www.anorbank.uz',
                status: true
            }
        ],
        branch: [
            {
                id: 1,
                name: "Poytaxt Bank",
                address: "100170, Toshkent shahri, Mirzo Ulugʻbek tumani, Sayram 5-tor koʻchasi, 4 uy",
                phone: '998555030000',
                site: 'www.pb.uz',
                status: true
            },
            {
                id: 2,
                name: "Anor Bank",
                address: "100170, Toshkent shahri, Mirzo Ulugʻbek tumani, Sayram 5-tor koʻchasi, 4 uy",
                phone: '998555030000',
                site: 'www.anorbank.uz',
                status: true
            }
        ]
    },
    reducers: {
        createAppeal: (state, action) => {
            state.appeal.push(action.payload)
        }
    }
    //   extraReducers: builder => {
    //     builder.addCase(getTasks.fulfilled, (state, action) => {
    //       state.activity = action.payload.data
    //     })
    //   }
})

export const { createAppeal } = SysSlice.actions

export default SysSlice.reducer
