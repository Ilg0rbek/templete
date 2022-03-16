// ** Redux Imports
import { createSlice } from '@reduxjs/toolkit'

export const applicationSlice = createSlice({
    name: 'application',
    initialState: {
        applications: []
    },
    reducers: {
        createApplication: (state, action) => {
            state.optionalActivity = action.payload
        }
    }
})

export const { createApplication } = applicationSlice.actions

export default applicationSlice.reducer
