// ** Redux Imports
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { http } from "@utils"
import { toast } from "react-toastify"

//Aplicatn list started
export const getAplicantAllList = createAsyncThunk('aplicant/getAplicantAllList', async (param, rejectWithValue) => {
    try {
        const response = await http.get('/v1/le_checking/mntr/list?sort=id,desc', {
            params: param
        })
        if (response.data?.data === null) return rejectWithValue(response.data.message)
        return response.data?.data
    } catch (error) {
        return rejectWithValue(error.message)
    }
})

//Aproval types started
export const getAprovalTypes = createAsyncThunk('aplicant/getAprovalTypes', async () => {
    const response = await http.get('/v1/le_checking/mntr/approval_types')
    return response.data?.data
})

//get Legal Entity types started
export const getLegalEntity = createAsyncThunk('aplicant/getLegalEntity', async () => {
    const response = await http.get('/v1/le_checking/legal_entity/reg/check_view?id=60416')
    return response.data?.data
})

// get region started
export const getRegionsList = createAsyncThunk('region/getRegionsList', async () => {
    const response = await http.get('/v1/system/regions')
    return response.data?.data
})

// get sub region started
export const getSubRegionsList = createAsyncThunk('region/getSubRegionsList', async ({ region_id }) => {
    const response = await http.get(`/v1/system/sub_regions`, {
        params: {
            region_id
        }
    })
    return response.data?.data
})

// get checking legal entity wiew user id
export const getCheckingLegalEntity = createAsyncThunk('region/getCheckingLegalEntity', async ({ id }) => {
    const response = await http.get(`/v1/le_checking/legal_entity/change/check_view`, {
        params: {
            id
        }
    })
    return response.data?.data
})

// get legal entites change
export const getLegalEntitesChange = createAsyncThunk('monitor/getLegalEntitesChange', async (query, { rejectWithValue }) => {
    try {
        const response = await http.post(`/v1/process/legal_entities/change`, { type: 0 }, {
            params: query
        })
        if (response.data?.data === null) return rejectWithValue(response.data.message)
        return response.data?.data
    } catch (error) {
        return rejectWithValue(error.message)
    }
})

// get stamp mntr
export const getStampMntr = createAsyncThunk('stamp/getStampMntr', async () => {
    const response = await http.get(`v1/stamp/mntr`)
    return response.data?.data
})


export const sysSlice = createSlice({
    name: 'monitor',
    initialState: {
        single_data: null,
        aplicant: [],
        region: [],
        subregion: [],
        aproval: [],
        aplicantinfo: [],
        charter: [],
        confirming: [],
        legalentity: [],
        changelegalentity: [],
        payment: [],
        afterfounders: [],
        beforefounders: [],
        content: [],
        stamplist: [],
        currentPage: 0,
        totalItem: 0,
        totalPages: 0,
        isLoading: false
    },
    reducers: {},
    extraReducers: {

        //Aplicatn list started
        [getAplicantAllList.fulfilled]: (state, actions) => {
            state.aplicant = actions.payload.br_le_checking_list
            state.totalPages = actions.payload.total_pages
            state.currentPage = actions.payload.current_page
            state.totalPages = actions.payload.total_pages
            state.isLoading = false
        },
        [getAplicantAllList.pending]: (state) => {
            state.isLoading = true
        },
        [getAplicantAllList.rejected]: (state, action) => {
            toast.error(action.payload)
            state.isLoading = false
        },

        //Aproval types started
        [getAprovalTypes.fulfilled]: (state, actions) => {
            state.aproval = actions.payload.aproval_type_list
            state.totalPages = actions.payload.total_pages
            state.isLoading = false
        },
        [getAprovalTypes.pending]: (state) => {
            state.isLoading = true
        },
        [getAprovalTypes.rejected]: (state, action) => {
            toast.error(action.payload)
            state.isLoading = false
        },

        //get Legal Entity types started
        [getLegalEntity.fulfilled]: (state, actions) => {
            state.totalPages = actions.payload.total_pages
            state.isLoading = false
        },
        [getLegalEntity.pending]: (state) => {
            state.isLoading = true
        },
        [getLegalEntity.rejected]: (state, action) => {
            toast.error(action.payload)
            state.isLoading = false
        },

        // get region started
        [getRegionsList.fulfilled]: (state, actions) => {
            state.region = actions.payload.responseDtoList
            state.totalPages = actions.payload.total_pages
            state.isLoading = false
        },
        [getRegionsList.pending]: (state) => {
            state.isLoading = true
        },
        [getRegionsList.rejected]: (state, action) => {
            toast.error(action.payload)
            state.isLoading = false
        },

        // get sub region started
        [getSubRegionsList.fulfilled]: (state, actions) => {
            state.subregion = actions.payload.responseDtoList
            state.totalPages = actions.payload.total_pages
            state.isLoading = false
        },
        [getSubRegionsList.pending]: (state) => {
            state.isLoading = true
        },
        [getSubRegionsList.rejected]: (state, action) => {
            toast.error(action.payload)
            state.isLoading = false
        },

        // get checking legal entity wiew user id started
        [getCheckingLegalEntity.fulfilled]: (state, actions) => {
            state.aplicantinfo = actions.payload.applicant
            state.charter = actions.payload.current_charter_file
            state.confirming = actions.payload.documents_confirming_changes
            state.legalentity = actions.payload.legal_entity
            state.changelegalentity = actions.payload.change_legal_entity
            state.payment = actions.payload.payment
            state.afterfounders = actions.payload.after_founders
            state.beforefounders = actions.payload.before_founders
            state.totalPages = actions.payload.total_pages
            state.isLoading = false
        },
        [getCheckingLegalEntity.pending]: (state) => {
            state.isLoading = true
        },
        [getCheckingLegalEntity.rejected]: (state, action) => {
            toast.error(action.payload)
            state.isLoading = false
        },

        // get legal entites change start
        [getLegalEntitesChange.fulfilled]: (state, actions) => {
            state.content = actions.payload.content
            state.totalPages = actions.payload.total_pages
            state.isLoading = false
        },
        [getLegalEntitesChange.pending]: (state) => {
            state.isLoading = true
        },
        [getLegalEntitesChange.rejected]: (state, action) => {
            toast.error(action.payload)
            state.isLoading = false
        },

        // get stamp mntr started 
        [getStampMntr.fulfilled]: (state, actions) => {
            state.stamplist = actions.payload.stamp_application_list
            state.totalPages = actions.payload.total_pages
            state.isLoading = false
        },
        [getStampMntr.pending]: (state) => {
            state.isLoading = true
        },
        [getStampMntr.rejected]: (state, action) => {
            toast.error(action.payload)
            state.isLoading = false
        }
    }
})

export const { } = sysSlice.actions
export default sysSlice.reducer
