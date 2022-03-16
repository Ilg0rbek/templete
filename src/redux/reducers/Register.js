// ** Redux Imports
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { http } from '@utils'
import { toast } from 'react-toastify'


export const getSingleIndividualApplication = createAsyncThunk('register/getSingleIndividualApplication', async (id, { rejectWithValue }) => {
    try {
        const response = await http.get(`/v1/process/individual/reg/${id}`)
        return response.data?.data
    } catch (error) {
        return rejectWithValue(error.response.data.message)
    }
})

export const getIndividualApplicationList = createAsyncThunk('register/getIndividualApplicationList', async (query, { rejectWithValue }) => {
    try {
        const response = await http.get(`/v1/process/individual/reg`, {
            params: query
        })
        return response.data?.data
    } catch (error) {
        return rejectWithValue(error.response.data.message)
    }
})


export const confirmOfferIndividual = createAsyncThunk('register/confirmOffer', async (type, { rejectWithValue }) => {
    try {
        const response = await http.post(`/v1/process/individual/reg/start?isConfirmOffered=${type}`)
        return response.data
    } catch (error) {
        return rejectWithValue(error.response.message)
    }
})

export const confirmOfferLegal = createAsyncThunk('register/confirmOffer', async (query, { rejectWithValue }) => {
    try {
        const response = await http.post(`/v1/process/legal_entities/reg/start`, null, {
            params: query
        })
        if (response.data?.data === null) return rejectWithValue(response.data.message)
        return response.data?.data
    } catch (error) {
        return rejectWithValue(response.data?.message)
    }
})

export const createApplicantIndividual = createAsyncThunk('register/createApplicantIndividual', async ({
    id,
    data
}, { rejectWithValue }) => {
    try {
        const response = await http.post(`/v1/process/individual/reg/applicant/${id}`, data)
        return response.data?.data
    } catch (error) {
        return rejectWithValue(error.response.message)
    }
})

export const createApplicantLegal = createAsyncThunk('register/createApplicantIndividual', async ({
    id,
    data
}, { rejectWithValue }) => {
    try {
        const response = await http.post(`/v1/process/legal_entities/reg/applicant/${id}`, data)
        console.log(response)
    } catch (error) {
        return rejectWithValue(error.response.message)
    }
})

export const createOpfIndividual = createAsyncThunk('register/createOpfIndividual', async ({
    id,
    opf
}, { rejectWithValue }) => {
    try {
        const response = await http.post(`/v1/process/individual/reg/step1/${id}`, { opf_choice_id: opf })
        console.log(response)
    } catch (error) {
        return rejectWithValue(error.response.message)
    }
})

export const createAddressIndividual = createAsyncThunk('register/createAddressIndividual', async ({
    id,
    data
}, { rejectWithValue }) => {
    try {
        const response = await http.post(`/v1/process/individual/reg/step2/${id}`, data)
        return response.data?.data
    } catch (error) {
        return rejectWithValue(error.response.message)
    }
})

export const createAddressLegal = createAsyncThunk('register/createAddressLegal', async ({
    id,
    data
}, { rejectWithValue }) => {
    try {
        const response = await http.post(`/v1/process/legal_entities/reg/address/${id}`, data)
        console.log(response)
    } catch (error) {
        return rejectWithValue(error.response.message)
    }
})

export const createActivityIndividual = createAsyncThunk('register/createActivityIndividual', async ({
    id,
    data
}, { rejectWithValue }) => {
    try {
        const response = await http.post(`/v1/process/individual/reg/step3/${id}`, data)
        return response.data?.data
    } catch (error) {
        return rejectWithValue(error.response.message)
    }
})

export const getFamilyMembersIndividual = createAsyncThunk('register/getFamilyMembersIndividual', async (id, { rejectWithValue }) => {
    try {
        const response = await http.get(`/v1/process/individual/reg/members/${id}`)
        return response?.data?.data
    } catch (error) {
        return rejectWithValue(error.response.message)
    }
})

export const createFamilyMembersIndividual = createAsyncThunk('register/createFamilyMembersIndividual', async ({
    id,
    data
}, { rejectWithValue, dispatch }) => {
    try {
        const response = await http.post(`/v1/process/individual/reg/members/${id}`, data)
        dispatch(getFamilyMembersIndividual(id))
        console.log(response)
    } catch (error) {
        return rejectWithValue(error.response.message)
    }
})

export const updateFamilyMembersIndividual = createAsyncThunk('register/updateFamilyMembersIndividual', async ({
    id,
    data
}, { rejectWithValue }) => {
    try {
        const response = await http.put(`/v1/process/individual/reg/members/${id}`, data)
        console.log(response)
    } catch (error) {
        return rejectWithValue(error.response.message)
    }
})

export const deleteFamilyMembersIndividual = createAsyncThunk('register/deleteFamilyMembersIndividual', async (id, { rejectWithValue }) => {
    try {
        const response = await http.delete(`/v1/process/individual/reg/members/${id}`)
        console.log(response)
    } catch (error) {
        return rejectWithValue(error.response.message)
    }
})

export const finishFamilyMembersIndividual = createAsyncThunk('register/finishFamilyMembersIndividual', async (id, { rejectWithValue }) => {
    try {
        const response = await http.post(`/v1/process/individual/reg/members/next/${id}`)
        return response.data
    } catch (error) {
        return rejectWithValue(error.response.message)
    }
})

export const invoicePaymentIndividual = createAsyncThunk('register/invoicePaymentIndividual', async (id, { rejectWithValue }) => {
    try {
        const response = await http.post(`/v1/process/individual/reg/payment/${id}`)
        return response.data
    } catch (error) {
        return rejectWithValue(error.response.message)
    }
})

export const legalEntitiesReg = createAsyncThunk('register/legalEntitiesReg', async ({
    query,
    data
}, { rejectWithValue }) => {
    try {
        const response = await http.post(`/v1/process/legal_entities/reg`, data, {
            params: query
        })
        if (response.data?.data === null) return rejectWithValue(response.data.message)
        return response.data?.data
    } catch (error) {
        return rejectWithValue(error.message)
    }
})

export const uploadIndividualDoc = createAsyncThunk('register/uploadIndividualDoc', async ({
    id,
    data
}, { rejectWithValue }) => {
    try {
        const response = await http.post(`/v1/process/individual/reg/documents/${id}`, {
            body: data,
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        })
        return response?.data?.data
    } catch (error) {
        return rejectWithValue(error.response)
    }
})

export const doNotOpenIndividualBankAccount = createAsyncThunk('register/doNotOpenIndividualBankAccount', async (id, { rejectWithValue }) => {
    try {
        const response = await http.post(`/v1/process/individual/reg/bank-account/do-not-open/${id}`)
        return response.data
    } catch (error) {
        return rejectWithValue(error.response.message)
    }
})

export const registerSlice = createSlice({
    name: 'register',
    initialState: {
        famliy_members: [],
        application: {},
        applications: null,
        optionalActivity: [],
        activity: {},
        user: {},
        family: [],
        participant: [],
        manager: {},
        legalReg: [],
        totalPages: 0,
        currentPage: 0,
        totalElements: 0,
        perPage: 20
    },
    reducers: {
        addOptionalActivity: (state, action) => {
            state.optionalActivity = action.payload
        },
        addActivity: (state, action) => {
            state.activity = action.payload
        },
        addFamily: (state, action) => {
            state.family.push(action.payload)
        },
        setUserInfo: (state, action) => {
            state.user = action.payload
        },
        setParticipantInfo: (state, action) => {
            state.participant.push(action.payload)
        },
        setManager: (state, action) => {
            state.manager = action.payload
        }
    },
    extraReducers: {
        [getIndividualApplicationList.fulfilled]: (state, action) => {
            state.applications = action.payload
        },
        [getIndividualApplicationList.rejected]: (undefined, action) => {
            toast.error(action.payload)
        },
        [invoicePaymentIndividual.fulfilled]: (state, action) => {
            state.application = action.payload
        },
        [invoicePaymentIndividual.rejected]: (undefined, action) => {
            toast.error(action.payload)
        },
        [getSingleIndividualApplication.fulfilled]: (state, action) => {
            state.application = action.payload
        },
        [getSingleIndividualApplication.rejected]: (undefined, action) => {
            console.log(action)
            toast.error(action.payload)
        },
        [confirmOfferIndividual.fulfilled]: (state, action) => {
            console.log(action.payload)
            state.application = action.payload
        },
        [createApplicantIndividual.fulfilled]: (state, action) => {
            console.log(action.payload)
            state.application = action.payload
        },
        [createOpfIndividual.fulfilled]: (state, action) => {
            console.log(action.payload)
            state.application = action.payload
        },
        [createAddressIndividual.fulfilled]: (state, action) => {
            console.log(action.payload)
            state.application = action.payload
        },
        [createActivityIndividual.fulfilled]: (state, action) => {
            console.log(action.payload)
            state.application = action.payload
        },
        [createFamilyMembersIndividual.fulfilled]: (state, action) => {
            console.log(action.payload)
            state.application = action.payload
        },
        [confirmOfferIndividual.rejected]: (undefined, action) => {
            toast.error(action.payload)
        },
        [uploadIndividualDoc.fulfilled]: (state, action) => {
            toast.success("File yuklandi!")
            state.application = action.payload
        },
        [uploadIndividualDoc.rejected]: (undefined, action) => {
            toast.error(action.payload)
        },
        [confirmOfferLegal.fulfilled]: (state, action) => {
            state.application = action.payload
        },
        [confirmOfferLegal.rejected]: (undefined, action) => {
            toast.error(action.payload)
        },
        [createApplicantIndividual.rejected]: (undefined, action) => {
            toast.error(action.payload)
        },
        [createOpfIndividual.rejected]: (undefined, action) => {
            toast.error(action.payload)
        },
        [createAddressIndividual.rejected]: (undefined, action) => {
            toast.error(action.payload)
        },
        [createActivityIndividual.rejected]: (undefined, action) => {
            toast.error(action.payload)
        },
        [getFamilyMembersIndividual.fulfilled]: (state, action) => {
            state.famliy_members = action.payload
        },
        [getFamilyMembersIndividual.rejected]: (undefined, action) => {
            toast.error(action.payload)
        },
        [createFamilyMembersIndividual.rejected]: (undefined, action) => {
            toast.error(action.payload)
        },
        [updateFamilyMembersIndividual.rejected]: (undefined, action) => {
            toast.error(action.payload)
        },
        [deleteFamilyMembersIndividual.rejected]: (undefined, action) => {
            toast.error(action.payload)
        },
        [finishFamilyMembersIndividual.rejected]: (undefined, action) => {
            toast.error(action.payload)
        },

        [legalEntitiesReg.fulfilled]: (state, action) => {
            console.log(action)
            state.legalReg = action.payload?.content
            state.totalPages = action.payload?.totalPages
            state.totalElements = action.payload?.totalElements
            state.currentPage = action.payload?.number
            state.perPage = action.payload?.size
            state.isLoading = false
        },
        [legalEntitiesReg.rejected]: (state) => {
            state.isLoading = false
        },
        [legalEntitiesReg.pending]: (state) => {
            state.isLoading = true
        }
    }
})

export const {
    addActivity,
    addOptionalActivity,
    setUserInfo,
    addFamily,
    setParticipantInfo,
    setManager
} = registerSlice.actions

export default registerSlice.reducer
