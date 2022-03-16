// ** Redux Imports
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { http } from "@utils"
import { toast } from "react-toastify"

export const getJurnal = createAsyncThunk('cancel/getJurnal', async (query, { rejectWithValue }) => {
    try {
        const response = await http.get(`/v1/liquidation/legal_entities/journal`, {
            params: query
        })
        if (response.data?.data === null) return rejectWithValue(response.data.message)
        return response.data?.data
    } catch (error) {
        return rejectWithValue(error.message)
    }
})

export const getApplications = createAsyncThunk('cancel/getApplications', async (query, { rejectWithValue }) => {
    try {
        const response = await http.get(`/v1/liquidation/legal_entities`, {
            params: query
        })
        if (response.data?.data === null) return rejectWithValue(response.data.message)
        return response.data?.data
    } catch (error) {
        return rejectWithValue(error.message)
    }
})

export const getSingleApplication = createAsyncThunk('cancel/getSingleApplication', async (id, { rejectWithValue }) => {
    try {
        const response = await http.get(`/v1/liquidation/legal_entities/${id}`)
        if (response.data?.data === null) return rejectWithValue(response.data.message)
        return response.data?.data
    } catch (error) {
        return rejectWithValue(error.message)
    }
})

export const createApplication = createAsyncThunk('cancel/createApplication', async (id, { rejectWithValue }) => {
    try {
        const response = await http.post(`/v1/liquidation/legal_entities?id=${id}`)
        console.log(response)

        if (response.data?.data === null) return rejectWithValue(response.data.message)
        return response.data?.data
    } catch (error) {
        console.log(error)
        return rejectWithValue(error.message)
    }
})

export const createPerson = createAsyncThunk('cancel/createPerson', async (option, { rejectWithValue }) => {
    const response = await http.post(`/v1/liquidation/legal_entities/liquidator/${option?.id}`, option?.data)
    if (response.data?.data === null) return rejectWithValue(response.data.message)
    return response.data?.data
})

export const changePerson = createAsyncThunk('cancel/createPerson', async (option, { rejectWithValue }) => {
    try {
        const response = await http.post(`/v1/liquidation/legal_entities/liquidator/change/${option?.id}`, option?.data)
        if (response.data?.data === null) return rejectWithValue(response.data.message)
        return response.data?.data
    } catch (error) {
        return rejectWithValue(error.message)
    }
})

export const uploadDocument = createAsyncThunk('cancel/uploadDocument', async (option, { rejectWithValue }) => {
    const response = await http.post(`/v1/liquidation/legal_entities/documents/upload/${option.id}`, option.data, {
        header: {
            'Content-Type': 'multipart/form-data'
        }
    })
    if (response.data?.data === null) return rejectWithValue(response.data.message)
    return response.data?.data
})

export const createDocuments = createAsyncThunk('cancel/createDocuments', async (option, { rejectWithValue }) => {
    const response = await http.post(`/v1/liquidation/legal_entities/documents/${option?.id}`, option?.data)
    if (response.data?.data === null) return rejectWithValue(response.data.message)
    return response.data?.data
})

export const checkApplication = createAsyncThunk('cancel/checkApplication', async (id, { rejectWithValue }) => {
    const response = await http.post(`/v1/liquidation/legal_entities/checked/${id}`)
    if (response.data?.data === null) return rejectWithValue(response.data.message)
    return response.data?.data
})

export const cancelApplication = createAsyncThunk('cancel/cancelApplication', async (req, { rejectWithValue }) => {
    const response = await http.post(`/v1/liquidation/legal_entities/cancel/${req.id}`, req?.data)
    if (response.data?.data === null) return rejectWithValue(response.data.message)
    return response.data?.data
})
export const completedApplication = createAsyncThunk('cancel/completedApplication', async ({ id, data }, { rejectWithValue }) => {
    try {
        const response = await http.post(`/v1/liquidation/legal_entities/discomplete/${id}`, data)
        return response.data?.data
    } catch (error) {
        rejectWithValue(error.response?.data?.message)
    }
})

export const dxmApplication = createAsyncThunk('cancel/dxmApplication', async ({ id, data }, { rejectWithValue }) => {
    try {
        const response = await http.post(`/v1/liquidation/legal_entities/resolution/${id}`, data)
        return response.data?.data
    } catch (error) {
        rejectWithValue(error.response?.data?.message)
    }
})

// export const getLegalJournalEntity = createAsyncThunk('filter/getLegalJournalEntity', async () => {
//     const response = await http.get('/v1/liquidation/legal_entities/journal')
//     return response.data?.data
// })

/* Bankrotlik jurnal listi */
export const getLegalBankruptList = createAsyncThunk('cancel/getLegalBankruptList', async (query, { rejectWithValue }) => {
    try {
        const response = await http.get(`/v1/liquidation/bankruptcies/journal`, {
            params: query
        })
        if (response.data?.data === null) return rejectWithValue(response.data.message)
        return response.data?.data
    } catch (error) {
        return rejectWithValue(error.message)
    }
})

/* Bankrotlik jurnal listi */
export const getLegalBankruptMonitoringList = createAsyncThunk('cancel/getLegalBankruptMonitoringList', async (query, { rejectWithValue }) => {
    try {
        const response = await http.get(`/v1/liquidation/bankruptcies/monitoring`, {
            params: query
        })
        if (response.data?.data === null) return rejectWithValue(response.data.message)
        return response.data?.data
    } catch (error) {
        return rejectWithValue(error.message)
    }
})

export const getLegalJournalEntity = createAsyncThunk('filter/getLegalJournalEntity', async () => {
    const response = await http.get('/v1/liquidation/legal_entities/journal')
    return response.data?.data
})


export const legalCancelSlice = createSlice({
    name: 'legal_cancel',
    initialState: {
        jurnal: [],
        applications: [],
        isloading: false,
        application: null,
        single_data: null,
        journalList: [],
        bankruptJournal: [],
        bankruptMonitoring: [],
        totalPages: 0,
        currentPage: 0,
        totalElements: 0,
        perPage: 20
    },
    reducers: {},
    extraReducers: {
        [getJurnal.pending]: (state) => {
            state.isloading = true
        },
        [getJurnal.fulfilled]: (state, action) => {
            state.jurnal = action.payload?.content
            state.totalPages = action.payload?.totalPages
            state.currentPage = action.payload?.number
            state.totalElements = action.payload?.totalElements
            state.perPage = action.payload?.size
            state.isloading = false
        },
        [getJurnal.rejected]: (undefined, action) => {
            state.isloading = false
            toast.error(action.payload)
        },
        [getApplications.pending]: (state) => {
            state.isloading = true
        },
        [getApplications.fulfilled]: (state, action) => {
            state.applications = action.payload?.content
            state.totalPages = action.payload?.totalPages
            state.currentPage = action.payload?.number
            state.totalElements = action.payload?.totalElements
            state.perPage = action.payload?.size
            state.isloading = false
        },
        [getApplications.rejected]: (undefined, action) => {
            state.isloading = false
            toast.error(action.payload)
        },
        [createApplication.rejected]: (undefined, action) => {
            toast.error(action.payload)
        },
        [createPerson.rejected]: (undefined, action) => {
            toast.error(action.payload)
        },
        [changePerson.fulfilled]: () => {
            toast.success("Muvaffaqiyatli o'zgartirildi")
        },
        [changePerson.rejected]: (undefined, action) => {
            toast.error(action.payload)
        },
        [dxmApplication.rejected]: (undefined, action) => {
            toast.error(action.payload)
        },
        [uploadDocument.fulfilled]: () => {
            toast.success("File Yuklandi")
        },
        [uploadDocument.rejected]: (undefined, action) => {
            console.log(action.payload)
            toast.error(action.payload)
        },
        [createDocuments.rejected]: (undefined, action) => {
            toast.error(action.payload)
        },
        [checkApplication.pending]: (state) => {
            state.isloading = true
        },
        [checkApplication.fulfilled]: (state, action) => {
            state.application = action.payload
            state.isloading = false
        },
        [checkApplication.rejected]: (state, action) => {
            toast.error(action.payload)
            state.isloading = false
        },
        [getSingleApplication.fulfilled]: (state, action) => {
            state.single_application = action.payload
        },
        [getSingleApplication.rejected]: (state, action) => {
            toast.error(action.payload)
        },

        [getLegalBankruptMonitoringList.fulfilled]: (state, action) => {
            state.bankruptMonitoring = action.payload?.content
            state.totalPages = action.payload?.totalPages
            state.currentPage = action.payload?.number
            state.totalElements = action.payload?.totalElements
            state.perPage = action.payload?.size
            state.isloading = false
        },
        [getLegalBankruptMonitoringList.rejected]: (undefined, action) => {
            state.isloading = false
            toast.error(action.payload)
        },
        [getLegalBankruptMonitoringList.pending]: (state) => {
            state.isloading = true
        },

        [getLegalBankruptList.fulfilled]: (state, action) => {
            state.bankruptJournal = action.payload?.content
            state.totalPages = action.payload?.totalPages
            state.currentPage = action.payload?.number
            state.totalElements = action.payload?.totalElements
            state.perPage = action.payload?.size
            state.isloading = false
        },
        [getLegalBankruptList.rejected]: (undefined, action) => {
            state.isloading = false
            toast.error(action.payload)
        },
        [getLegalBankruptList.pending]: (state) => {
            state.isloading = true
        }

        // // Journal get
        // [getLegalJournalEntity.fulfilled]: (state, actions) => {
        //     state.journalList = actions.payload?.content
        //     state.totalPages = actions.payload?.totalPages
        //     state.totalSize = actions.payload?.size
        //     state.totalElements = actions.payload?.totalElements
        //     state.isLoading = false
        // },
        // [getLegalJournalEntity.pending]: (state) => {
        //     state.isLoading = true
        // },
        // [getLegalJournalEntity.rejected]: (state, action) => {
        //     toast.error(action.payload)
        //     state.isLoading = false
        // }

    }
})

export const { } = legalCancelSlice.actions
export default legalCancelSlice.reducer
