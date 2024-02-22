import { createSlice } from '@reduxjs/toolkit'

const navigatorSlice = createSlice({
    name: 'navigator',
    initialState: {
        partsVisibility: {
            mainPart : true,
            resumePart : false,
            contactsPart : false,
        },
    },
    reducers: {
        setPartsVisibility(state, action) {
            for(let key of Object.keys(state.partsVisibility)){
                state.partsVisibility[key] = key === action.payload ? true : false
            }            
        },
    },
});

export const {setPartsVisibility} = navigatorSlice.actions;
export default navigatorSlice.reducer