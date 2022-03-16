// ** Redux Imports
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { http } from "@utils"
import { toast } from "react-toastify"

export const getInRepublicJournal = createAsyncThunk('certificate/getInRepublicJournal', async (query, { rejectWithValue }) => {
    try {
        const response = await http.get(`/v1/i_new_certificate/republic/journal?sort=id,desc`, {
            params: query
        })
        if (response.data?.data === null) return rejectWithValue(response.data.message)
        return response.data?.data
    } catch (error) {
        return rejectWithValue(error.message)
    }
})

export const getInRegionJournal = createAsyncThunk('certificate/getInRegionJournal', async (query, { rejectWithValue }) => {
    try {
        const response = await http.get(`/v1/i_new_certificate/region/journal?sort=id,desc`, {
            params: query
        })
        if (response.data?.data === null) return rejectWithValue(response.data.message)
        return response.data?.data
    } catch (error) {
        return rejectWithValue(error.message)
    }
})

export const getInSubRegionJournal = createAsyncThunk('certificate/getInSubRegionJournal', async (query, { rejectWithValue }) => {
    try {
        const response = await http.get(`/v1/i_new_certificate/sub_region/journal?sort=id,desc`, {
            params: query
        })
        if (response.data?.data === null) return rejectWithValue(response.data.message)
        return response.data?.data
    } catch (error) {
        return rejectWithValue(error.message)
    }
})

export const getInUserJournal = createAsyncThunk('certificate/getInUserJournal', async (query, { rejectWithValue }) => {
    try {
        const response = await http.get(`/v1/i_new_certificate/user/journal`, {
            params: query
        })
        if (response.data?.data === null) return rejectWithValue(response.data.message)
        return response.data?.data
    } catch (error) {
        return rejectWithValue(error.message)
    }
})

export const getViewAllById = createAsyncThunk('certificate/getViewAllById', async (query, { rejectWithValue }) => {
    try {
        const response = await http.get(`/v1/i_new_certificate/view_all`, {
            params: query
        })
        if (response.data?.data === null) return rejectWithValue(response.data.message)
        return response.data?.data
    } catch (error) {
        return rejectWithValue(error.message)
    }
})

export const searchCertificate = createAsyncThunk('certificate/searchCertificate', async (query, { rejectWithValue }) => {
    try {
        const response = await http.get(`/v1/i_new_certificate/search`, {
            params: query
        })
        if (response.data?.data === null) return rejectWithValue(response.data.message)
        return response.data?.data
    } catch (error) {
        return rejectWithValue(error.message)
    }
})

export const nextStepCertificate = createAsyncThunk('certificate/nextStepCertificate', async (query, { rejectWithValue }) => {
    try {
        const response = await http.get(`/v1/i_new_certificate/start`, {
            params: query
        })
        if (response.data?.data === null) return rejectWithValue(response.data.message)
        return response.data?.data
    } catch (error) {
        return rejectWithValue(error.message)
    }
})

export const certificateView = createAsyncThunk('certificate/certificateView', async (query, { rejectWithValue }) => {
    try {
        const response = await http.get(`/v1/i_new_certificate/view`, {
            params: query
        })
        if (response.data?.data === null) return rejectWithValue(response.data.message)
        return response.data?.data
    } catch (error) {
        return rejectWithValue(error.message)
    }
})

export const cancelCertificate = createAsyncThunk('certificate/cancelCertificate', async (query, { rejectWithValue }) => {
    try {
        const response = await http.get(`/v1/i_new_certificate/cancel`, {
            params: query
        })
        if (response.data?.data === null) return rejectWithValue(response.data.message)
        return response.data?.data
    } catch (error) {
        return rejectWithValue(error.message)
    }
})

export const paymentCertificate = createAsyncThunk('certificate/paymentCertificate', async (query, { rejectWithValue }) => {
    try {
        const response = await http.get(`/v1/i_new_certificate/prepayment`, {
            params: query
        })
        if (response.data?.data === null) return rejectWithValue(response.data.message)
        return response.data?.data
    } catch (error) {
        return rejectWithValue(error.message)
    }
})

export const userIndividualJournal = createAsyncThunk('certificate/userIndividualJournal', async (query, { rejectWithValue }) => {
    try {
        const response = await http.get(`/v1/i_new_certificate/user/journal`, {
            params: query
        })
        if (response.data?.data === null) return rejectWithValue(response.data.message)
        return response.data?.data
    } catch (error) {
        return rejectWithValue(error.message)
    }
})


export const certificateSlice = createSlice({
    name: 'certificate',
    initialState: {
        republicJournalInList: [],
        regionJournalInList: [],
        subRegionJournalInList: [],
        userJournalInList: [],
        searchResult: [],
        individualUserJournal: [],
        paymentInfo: null,
        payment: null,
        applicantId: null,
        familyMember: null,
        viewIndividual: null,
        certificate_individual: null,
        in_photo: null,
        payment: null,
        totalPages: 0,
        currentPage: 0,
        totalElements: 0,
        perPage: 20
    },
    reducers: {},
    extraReducers: {

        // Republic Individual Journal
        [getInRepublicJournal.fulfilled]: (state, action) => {
            state.republicJournalInList = action.payload?.new_certificate_individual_list
            state.totalPages = action.payload?.total_pages
            state.currentPage = action.payload?.current_page
            state.perPage = action.payload?.total_items
            state.isLoading = false
        },
        [getInRepublicJournal.pending]: (state) => {
            state.isLoading = true
        },
        [getInRepublicJournal.rejected]: (state, action) => {
            toast.error(action.payload)
            state.isLoading = false
        },

        // Region Individual Journal
        [getInRegionJournal.fulfilled]: (state, action) => {
            console.log(action.payload, 'acitons')
            state.regionJournalInList = action.payload?.new_certificate_individual_list
            state.totalPages = action.payload?.total_pages
            state.currentPage = action.payload?.current_page
            state.perPage = action.payload?.total_items
            state.isLoading = false
        },
        [getInRegionJournal.pending]: (state) => {
            state.isLoading = true
        },
        [getInRegionJournal.rejected]: (state, action) => {
            toast.error(action.payload)
            state.isLoading = false
        },

        // SubRegion Individual Journal
        [getInSubRegionJournal.fulfilled]: (state, action) => {
            state.subRegionJournalInList = action.payload?.new_certificate_individual_list
            state.totalPages = action.payload?.total_pages
            state.currentPage = action.payload?.current_page
            state.perPage = action.payload?.total_items
            state.isLoading = false
        },
        [getInSubRegionJournal.pending]: (state) => {
            state.isLoading = true
        },
        [getInSubRegionJournal.rejected]: (state, action) => {
            toast.error(action.payload)
            state.isLoading = false
        },

        // User Individual Journal
        [getInUserJournal.fulfilled]: (state, action) => {
            state.userJournalInList = action.payload?.new_certificate_individual_list
            state.totalPages = action.payload?.total_pages
            state.currentPage = action.payload?.current_page
            state.perPage = action.payload?.total_items
            state.isLoading = false
        },
        [getInUserJournal.pending]: (state) => {
            state.isLoading = true
        },
        [getInUserJournal.rejected]: (state, action) => {
            toast.error(action.payload)
            state.isLoading = false
        },

        // View all By Id Journal
        [getViewAllById.fulfilled]: (state, action) => {
            console.log(action.payload)
            state.payment = action.payload?.payment
            state.familyMember = action.payload?.family_members_list
            state.viewIndividual = action.payload?.individual
            state.certificate_individual = action.payload?.individual_certificate
            state.in_photo = action.payload?.individual_photo
            state.isLoading = false
        },
        [userIndividualJournal.pending]: (state) => {
            state.isLoading = true
        },
        [userIndividualJournal.rejected]: (state, action) => {
            toast.error(action.payload)
            state.isLoading = false
        }
    }
})

export const { } = certificateSlice.actions
export default certificateSlice.reducer
