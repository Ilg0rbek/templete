// ** Redux Imports
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { http } from "@utils"
import {toast} from "react-toastify"

export const getJournalPermissionLegal = createAsyncThunk('edit_legal_permission/getJournalPermissionLegal', async (query, { rejectWithValue }) => {
    try {
        const response = await http.get(`/v1/check-to-move/journal/permission_to_change/legal_entities`, {
            params: query
        })
        if (response.data?.data === null) return rejectWithValue(response.data.message)
        return response.data?.data
    } catch (error) {
        return rejectWithValue(error.message)
    }
})

export const getPermissionLegalCheck = createAsyncThunk('edit_legal_permission/getPermissionLegalCheck', async (query, { rejectWithValue }) => {
    try {
        const response = await http.get(`/v1/check-to-move/permission_to_change/legal_entity`, {
            params: query
        })
        if (response.data?.data === null) return rejectWithValue(response.data.message)
        return response.data?.data
    } catch (error) {
        return rejectWithValue(error.message)
    }
})

export const editLegalPermissionSlice = createSlice({
    name: 'editLegalPermission',
    initialState: {
       checkedList: [],
        checkedMsg: '',
        checkedErrors: [],

        totalPages: 0,
        currentPage: 0,
        totalElements: 0,
        perPage: 20
    },
    reducers: {},
    extraReducers: {
        // Journal permission list get
        [getJournalPermissionLegal.fulfilled]: (state, action) => {
            console.log(action)
            state.checkedList = action.payload?.permission_to_change_list
            state.totalPages = action.payload?.total_pages
            state.currentPage = action.payload?.current_page
            // state.totalElements = action.payload?.totalElements
            state.perPage = action.payload?.total_items
            state.isLoading = false
        },
        [getJournalPermissionLegal.pending]: (state) => {
            state.isLoading = true
        },
        [getJournalPermissionLegal.rejected]: (state, action) => {
            toast.error(action.payload)
            state.isLoading = false
        },

        // get
        [getPermissionLegalCheck.fulfilled]: (state, action) => {
            console.log(action)
            state.checkedMsg = action.payload?.reason
            state.isLoading = false
        },
        [getPermissionLegalCheck.pending]: (state) => {
            state.isLoading = true
        },
        [getPermissionLegalCheck.rejected]: (state, action) => {
            state.checkedErrors = action.payload?.errors
            state.isLoading = false
        }
    }
    //   extraReducers: builder => {
    //     builder.addCase(getTasks.fulfilled, (state, action) => {
    //       state.activity = action.payload.data
    //     })
    //   }
})

export const { } = editLegalPermissionSlice.actions
export default editLegalPermissionSlice.reducer
