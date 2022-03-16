// ** Redux Imports
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { http } from "@utils"
import { toast } from "react-toastify"

export const getJurnal = createAsyncThunk('cancel/getJurnal', async (query, { rejectWithValue }) => {
    try {
        const response = await http.get(`/v1/liquidation/individuals/journal`, {
            params: query
        })
        if (response.data?.data === null) return rejectWithValue(response.data.message)
        return response.data?.data
    } catch (error) {
        return rejectWithValue(response.data?.message)
    }
})

export const getApplications = createAsyncThunk('cancel/getApplications', async (query, { rejectWithValue }) => {
    try {
        const response = await http.get(`/v1/liquidation/individuals`, {
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
        const response = await http.get(`/v1/liquidation/individuals/${id}`)
        if (response.data?.data === null) return rejectWithValue(response.data.message)
        return response.data?.data
    } catch (error) {
        return rejectWithValue(error.message)
    }
})

export const createApplication = createAsyncThunk('cancel/createApplication', async (id, { rejectWithValue }) => {
    try {
        const response = await http.post(`/v1/liquidation/individuals?id=${id}`)
        if (response.data?.data === null) return rejectWithValue(response.data.message)
        return response.data?.data
    } catch (error) {
        return rejectWithValue(error.response?.data?.message)
    }
})

export const uploadDocument = createAsyncThunk('cancel/uploadDocument', async (option, { rejectWithValue }) => {
    const response = await http.post(`/v1/liquidation/individuals/documents/upload/${option.id}`, option.data, {
        header: {
            'Content-Type': 'multipart/form-data'
        }
    })
    if (response.data?.data === null) return rejectWithValue(response.data.message)
    return response.data?.data
})

export const createDocuments = createAsyncThunk('cancel/createDocuments', async (option, { rejectWithValue }) => {
    const response = await http.post(`/v1/liquidation/individuals/documents/${option?.id}`, option?.data)
    if (response.data?.data === null) return rejectWithValue(response.data.message)
    return response.data?.data
})

export const checkApplication = createAsyncThunk('cancel/checkApplication', async (id, { rejectWithValue }) => {
    const response = await http.post(`/v1/liquidation/individuals/checked/${id}`)
    if (response.data?.data === null) return rejectWithValue(response.data.message)
    return response.data?.data
})

export const cancelApplication = createAsyncThunk('cancel/cancelApplication', async (req, { rejectWithValue }) => {
    const response = await http.post(`/v1/liquidation/individuals/cancel/${req.id}`, req?.data)
    if (response.data?.data === null) return rejectWithValue(response.data.message)
    return response.data?.data
})

export const completedApplication = createAsyncThunk('cancel/completedApplication', async (req, { rejectWithValue }) => {
    try {
        const response = await http.post(`/v1/liquidation/individuals/discomplete/${req.id}`, req.data)
        if (response.data?.data === null) return rejectWithValue(response.data.message)
        return response.data?.data
    } catch (error) {
        rejectWithValue(error.message)
    }
})

export const dxmApplication = createAsyncThunk('cancel/dxmApplication', async ({ id, data }, { rejectWithValue }) => {
    try {
        const response = await http.post(`/v1/liquidation/individuals/resolution/${id}`, data)
        return response.data?.data
    } catch (error) {
        rejectWithValue(error.response?.data?.message)
    }
})

export const individualCancelSlice = createSlice({
    name: 'individual_cancel',
    initialState: {
        jurnal: [],
        applications: [],
        isloading: false,
        application: null,
        single_data: null,
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
        [uploadDocument.fulfilled]: () => {
            toast.success("File Yuklandi")
        },
        [uploadDocument.rejected]: (undefined, action) => {
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
        [checkApplication.rejecteds]: (state, action) => {
            toast.error(action.payload)
            state.isloading = false
        },
        [dxmApplication.rejected]: (undefined, action) => {
            toast.error(action.payload)
        },
        [getSingleApplication.fulfilled]: (state, action) => {
            state.single_application = action.payload
        },
        [getSingleApplication.rejected]: (state, action) => {
            toast.error(action.payload)
        }
    }
})

export const { } = individualCancelSlice.actions
export default individualCancelSlice.reducer
