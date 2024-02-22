import { createSlice } from '@reduxjs/toolkit';

const settingsSlice = createSlice({
    name: 'settings',
    initialState: {
        theme: 'dark',
    },
    reducers: {
        setTheme(state, action) {
            state.theme = action.payload
        },

    },
});

export const {setTheme} = settingsSlice.actions;
export default settingsSlice.reducer