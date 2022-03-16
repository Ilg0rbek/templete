// ** Redux Imports
import {createSlice, createAsyncThunk} from '@reduxjs/toolkit'
import {http} from "@utils"
import {toast} from "react-toastify"

export const getByTin = createAsyncThunk('sys/getByTin', async (tin, {rejectWithValue}) => {
    try {
        const response = await http.get('v1/register/legal_entities/by_tin', {
            params: {
                tin
            }
        })
        if (response.data?.data === null) return rejectWithValue(response.data.message)
        return response.data?.data
    } catch (error) {
        return rejectWithValue(error.message)
    }
})

export const getByPin = createAsyncThunk('sys/getByPin', async (pin, {rejectWithValue}) => {
    try {
        const response = await http.get('/v1/register/individuals/by_pin', {
            params: {
                pin
            }
        })
        if (response.data?.data === null) return rejectWithValue(response.data.message)
        return response.data?.data
    } catch (error) {
        return rejectWithValue(error.response?.data?.message)
    }
})

export const getByPassport = createAsyncThunk('sys/getByPassport', async (data, {rejectWithValue}) => {
    try {
        const response = await http.post('/v1/system/individual_info', null, {
            params: {
                pinfl: 0,
                passport_serial: data.passport
            }
        })
        if (response.data?.data === null) return rejectWithValue(response.data.message)
        else if (response.data?.data?.found === false) return rejectWithValue('Hechnarsa Topilmadi')
        return response.data?.data
    } catch (error) {
        return rejectWithValue(error.message)
    }
})

// Find By Cadator Number
export const getByCadastor = createAsyncThunk('sys/getByCadastor', async (number, {rejectWithValue}) => {
    try {
        const res = await http.post(`/v1/system/cadastr_address/info?cadastr_number=${number}`)
        if (res.data?.data?.found === false) return rejectWithValue(res.data?.data?.msg)
    } catch (error) {
        return rejectWithValue(error.response.message)
    }
})

export const getCountryList = createAsyncThunk('sys/getCountryList', async (undefined, {rejectWithValue}) => {
    try {
        const response = await http.get('/v1/system/countries')
        return response.data?.data
    } catch (error) {
        return rejectWithValue(error.message)
    }
})

export const getRegionsList = createAsyncThunk('sys/getRegionsList', async () => {
    const response = await http.get('/v1/system/regions')
    return response.data?.data
})

export const getSubRegionsList = createAsyncThunk('filter/getSubRegionsList', async ({region_id}) => {
    const response = await http.get(`/v1/system/sub_regions`, {
        params: {
            region_id
        }
    })
    return response.data?.data
})

export const getVillageRegionsList = createAsyncThunk('filter/getVillageRegionsList', async ({subRegionId}) => {
    const response = await http.get(`/v1/system/villages`, {
        params: {
            sub_region_id: subRegionId
        }
    })
    return response.data?.data?.responseDtoList
})

export const getMahallaList = createAsyncThunk('sys/getMahallaList', async (id) => {
    const response = await http.get(`/v1/system/get_mahalla`, {
        params: {
            sub_region: id
        }
    })
    return response.data?.data?.mahallaResponseDtoList
})

export const getMarketList = createAsyncThunk('sys/getMarketList', async (id) => {
    const response = await http.get(`/v1/system/market`, {
        params: {
            sub_region_id: id
        }
    })
    return response.data?.data
})

/* Jismoniy shaxslarning hujjat turlari listini olib kelish */
export const getIndividualDocTypes = createAsyncThunk('sys/getIndividualDocTypes', async () => {
    const response = await http.get(`/v1/system/individual_document_types`)
    return response.data?.data
})

/* Jismoniy shaxslarning hujjat turlarini ID si bo`yicha olib kelish */
export const getIndividualDocTypeById = createAsyncThunk('sys/getIndividualDocTypeById', async (id) => {
    const response = await http.get(`/v1/system/individual_document_type`, {
        params: {
            okedFront: id
        }
    })
    return response.data?.data
})

/* Jismoniy shaxs korxonalarining holati */
export const getIndividualStatusList = createAsyncThunk('sys/getIndividualStatusList', async () => {
    const response = await http.get(`/v1/system/individuals_status`)
    return response.data?.data
})

/* Jimoniy shaxs korxona holati */
export const getIndividualStatusById = createAsyncThunk('sys/getIndividualStatusById', async (statusId) => {
    const response = await http.get(`/v1/system/individual_status`, {
        params: {
            id: statusId
        }
    })
    return response.data?.data
})

/* Yuridik shaxs korxonalarining holati */
export const getLegalEntitiesStatusList = createAsyncThunk('sys/getLegalEntityStatusList', async () => {
    const response = await http.get(`/v1/system/legal_entities_status`)
    return response.data?.data
})

/* Yuridik shaxsning korxona holati turi */
export const getLegalEntityStatus = createAsyncThunk('sys/getLegalEntityStatus', async (entityStatusId) => {
    const response = await http.get(`/v1/system/legal_entity_status`, {
        params: {
            id: entityStatusId
        }
    })
    return response.data?.data
})

/* Oked step API */
export const getOkedStepLegal = createAsyncThunk('system/getOkedStepLegal', async (query, {rejectWithValue}) => {
    try {
        const response = await http.get(`/v1/system/oked_steps`, {
            params: query
        })
        if (response.data?.data === null) return rejectWithValue(response.data.message)
        return response.data?.data
    } catch (error) {
        return rejectWithValue(error.message)
    }
})

/* Oked tree font API */
export const getOketTreeFond = createAsyncThunk('oked/getOketTreeFond', async () => {
    const response = await http.get(`/v1/system/oked_tree_front`)
    return response.data?.data
})

/*OkedId API */
export const getOkedId = createAsyncThunk('oked/getOkedId', async (okedId) => {
    const response = await http.get(`/v1/system/oked`, {
        params: {
            id: okedId
        }
    })
    return response.data?.data
})

// Opf
export const getOpfIndividual = createAsyncThunk('sys/getOpfIndividual', async (undefined, {rejectWithValue}) => {
    try {
        const response = await http.get(`/v1/system/individuals/opf`)
        return response.data?.data
    } catch (error) {
        return rejectWithValue(error.response.message)
    }
})

export const getOpfActivityIndividual = createAsyncThunk('sys/getOpfActivityIndividual', async (id, {rejectWithValue}) => {
    try {
        const response = await http.get(`/v1/system/activity_type`, {
            params: {
                opf_choice_id: id
            }
        })
        return response.data?.data
    } catch (error) {
        return rejectWithValue(error.response.message)
    }
})

export const getOpfLegal = createAsyncThunk('sys/getOpfLegal', async (undefined, {rejectWithValue}) => {
    try {
        const response = await http.get(`/v1/system/legal_entities/opf`)
        return response.data?.data
    } catch (error) {
        return rejectWithValue(error.response.message)
    }
})

export const getRelationTypeList = createAsyncThunk('sys/getRelationTypeList', async (undefined, {rejectWithValue}) => {
    try {
        const response = await http.get(`/v1/system/family_relation_types`)
        return response.data?.data
    } catch (error) {
        return rejectWithValue(error.response.message)
    }
})

export const sysSlice = createSlice({
    name: 'sys',
    initialState: {
        single_data: null,
        single_individual: null,
        passport_data: null,
        countrys: [],
        regions: [],
        subRegion: [],
        village: [],
        mahalla: [],
        market: [],
        inDocTypesList: [],
        inDocType: [],
        inStatusList: [],
        inStatus: [],
        le_entities: [],
        le_entity: [],
        opf: [],
        opfActivity: [],
        okedActivity: [],
        okedFront: [],
        faRelationType: [],
        currentPage: 0,
        totalItem: 0,
        totalPages: 0,
        isLoading: false
    },
    reducers: {},
    extraReducers: {
        // Countiries start
        [getByTin.fulfilled]: (state, actions) => {
            state.single_data = actions.payload
            state.isLoading = false
        },
        [getByTin.pending]: (state) => {
            state.isLoading = true
        },
        [getByTin.rejected]: (state, action) => {
            console.log(action)
            toast.error(action.payload)
            state.isLoading = false
        },
        [getByPin.fulfilled]: (state, actions) => {
            state.single_individual = actions.payload
            state.isLoading = false
        },
        [getByPin.pending]: (state) => {
            state.isLoading = true
        },
        [getByPin.rejected]: (state, action) => {
            toast.error(action.payload)
            state.isLoading = false
        },
        [getByPassport.fulfilled]: (state, actions) => {
            state.passport_data = actions.payload
            state.isLoading = false
        },
        [getByPassport.pending]: (state) => {
            state.isLoading = true
        },
        [getByPassport.rejected]: (state, action) => {
            toast.error(action.payload)
            state.isLoading = false
        },
        [getByCadastor.fulfilled]: (state) => {
            state.isLoading = false
        },
        [getByCadastor.pending]: (state) => {
            state.isLoading = true
        },
        [getByCadastor.rejected]: (state, action) => {
            toast.error(action.payload)
            state.isLoading = false
        },
        // opf
        [getOpfIndividual.fulfilled]: (state, actions) => {
            state.opf = actions.payload
            state.isLoading = false
        },
        [getOpfIndividual.pending]: (state) => {
            state.isLoading = true
        },
        [getOpfIndividual.rejected]: (state, action) => {
            state.isLoading = false
            toast.error(action.payload)
        },
        [getOpfActivityIndividual.fulfilled]: (state, actions) => {
            state.opfActivity = actions.payload
            state.isLoading = false
        },
        [getOpfActivityIndividual.pending]: (state) => {
            state.isLoading = true
        },
        [getOpfActivityIndividual.rejected]: (state, action) => {
            state.isLoading = false
            toast.error(action.payload)
        },
        [getOkedStepLegal.fulfilled]: (state, actions) => {
            state.okedActivity = actions.payload
            state.isLoading = false
        },
        [getOkedStepLegal.pending]: (state) => {
            state.isLoading = true
        },
        [getOkedStepLegal.rejected]: (state, action) => {
            state.isLoading = false
            toast.error(action.payload)
        },
        [getOpfLegal.fulfilled]: (state, actions) => {
            state.opf = actions.payload
            state.isLoading = false
        },
        [getOpfLegal.pending]: (state) => {
            state.isLoading = true
        },
        [getOpfLegal.rejected]: (state, action) => {
            state.isLoading = false
            toast.error(action.payload)
        },
        // Countiries end
        [getRegionsList.fulfilled]: (state, actions) => {
            state.regions = actions.payload?.responseDtoList
            state.isLoading = false
        },
        [getRegionsList.pending]: (state) => {
            state.isLoading = true
        },
        [getRegionsList.rejected]: (state, actions) => {
            console.log(actions.payload)
            toast.error("Error")
            state.isLoading = false
        },
        [getCountryList.fulfilled]: (state, actions) => {
            state.countrys = actions.payload
        },
        [getCountryList.rejected]: (state, actions) => {
            toast.error(actions.payload)
        },
        [getSubRegionsList.fulfilled]: (state, actions) => {
            state.subRegion = actions.payload?.responseDtoList
            state.isLoading = false
        },
        [getSubRegionsList.pending]: (state) => {
            state.isLoading = true
        },
        [getSubRegionsList.rejected]: (state, actions) => {
            console.log(actions.payload)
            toast.error("Error")
            state.isLoading = false
        },

        [getVillageRegionsList.fulfilled]: (state, actions) => {
            console.log(actions.payload)
            state.village = actions.payload
            state.isLoading = false
        },
        [getVillageRegionsList.pending]: (state) => {
            state.isLoading = true
        },
        [getVillageRegionsList.rejected]: (state, actions) => {
            console.log(actions.payload)
            toast.error("Error")
            state.isLoading = false
        },

        [getMahallaList.fulfilled]: (state, actions) => {
            state.mahalla = actions.payload
            state.isLoading = false
        },
        [getMahallaList.pending]: (state) => {
            state.isLoading = true
        },
        [getMahallaList.rejected]: (state) => {
            toast.error("Error")
            state.isLoading = false
        },

        [getMarketList.fulfilled]: (state, actions) => {
            state.market = actions.payload
            state.isLoading = false
        },
        [getMarketList.pending]: (state) => {
            state.isLoading = true
        },
        [getMarketList.rejected]: (state) => {
            toast.error("Error")
            state.isLoading = false
        },
        /* Jismoniy shaxslarning hujjat turlari listini olib kelish  start */
        [getIndividualDocTypes.fulfilled]: (state, actions) => {
            state.inDocTypesList = actions.payload?.document_type_list
            state.isLoading = false
        },
        [getIndividualDocTypes.pending]: (state) => {
            state.isLoading = true
        },
        [getIndividualDocTypes.rejected]: (state, actions) => {
            console.log(actions.payload)
            toast.error("Error")
            state.isLoading = false
        },
        // [getOkedFront.pending]: (state) => {
        //     state.isLoading = true
        // },
        // [getOkedFront.rejected]: (state, actions) => {
        //     console.log(actions.payload)
        //     toast.error("Error")
        //     state.isLoading = false
        // },
        /* Jismoniy shaxslarning hujjat turlari listini olib kelish  end */

        /* Jismoniy shaxslarning hujjat turlarini ID si bo`yicha olib kelish  start*/
        [getIndividualDocTypeById.fulfilled]: (state, actions) => {
            state.inDocType = actions.payload
            state.isLoading = false
        },
        [getOkedId.pending]: (state) => {
            state.isLoading = true
        },
        [getIndividualDocTypeById.rejected]: (state) => {
            toast.error("Error")
            state.isLoading = false
        },
        /* Jismoniy shaxslarning hujjat turlarini ID si bo`yicha olib kelish end */

        /* Jismoniy shaxs korxonalarining holati start */
        [getIndividualStatusList.fulfilled]: (state, actions) => {
            console.log(actions)
            state.inStatusList = actions.payload?.individuals_status_list
            state.isLoading = false
        },
        [getIndividualStatusList.pending]: (state) => {
            state.isLoading = true
        },
        [getIndividualStatusList.rejected]: (state) => {
            toast.error("Error")
            state.isLoading = false
        },
        /* Jismoniy shaxs korxonalarining holati  end*/

        /* Jimoniy shaxs korxona holati start */
        [getIndividualStatusById.fulfilled]: (state, actions) => {
            state.inStatus = actions.payload
            state.isLoading = false
        },
        [getIndividualStatusById.pending]: (state) => {
            state.isLoading = true
        },
        [getIndividualStatusById.rejected]: (state) => {
            toast.error("Error")
            state.isLoading = false
        },
        /* Jimoniy shaxs korxona holati end */

        /* Yuridik shaxs korxonalarining holati start*/
        [getLegalEntitiesStatusList.fulfilled]: (state, actions) => {
            state.le_entities = actions.payload?.entityStatusDtoList
            state.isLoading = false
        },
        [getLegalEntitiesStatusList.pending]: (state) => {
            state.isLoading = true
        },
        [getLegalEntitiesStatusList.rejected]: (state) => {
            toast.error("Error")
            state.isLoading = false
        },
        /* Yuridik shaxs korxonalarining holati end */

        /* Yuridik shaxsning korxona holati turi start */
        [getLegalEntityStatus.fulfilled]: (state, actions) => {
            state.le_entity = actions.payload
            state.isLoading = false
        },
        [getLegalEntityStatus.pending]: (state) => {
            state.isLoading = true
        },
        [getLegalEntityStatus.rejected]: (state) => {
            toast.error("Error")
            state.isLoading = false
        },
        /* Yuridik shaxsning korxona holati turi */

        /* Oked API start */
        [getOketTreeFond.fulfilled]: (state, actions) => {
            state.le_entity = actions.payload
            state.isLoading = false
        },
        [getOketTreeFond.pending]: (state) => {
            state.isLoading = true
        },
        [getOketTreeFond.rejected]: (state) => {
            toast.error("Error")
            state.isLoading = false
        },
        /* Oked API end */

        /* OkedId API start */
        [getOkedId.fulfilled]: (state, actions) => {
            state.le_entity = actions.payload
            state.isLoading = false
        },
        [getOkedId.pending]: (state) => {
            state.isLoading = true
        },
        [getOkedId.rejected]: (state) => {
            toast.error("Error")
            state.isLoading = false
        },
        /* OkedId API start */

    /* Family Relation */
        [getRelationTypeList.fulfilled]: (state, actions) => {
            state.faRelationType = actions.payload?.family_relation_type_list
            state.isLoading = false
        },
        [getRelationTypeList.pending]: (state) => {
            state.isLoading = true
        },
        [getRelationTypeList.rejected]: (state) => {
            toast.error("Error")
            state.isLoading = false
        }
    }
})

export const {} = sysSlice.actions
export default sysSlice.reducer
