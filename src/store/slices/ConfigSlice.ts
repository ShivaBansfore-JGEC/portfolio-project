'use client'
import { createSlice } from "@reduxjs/toolkit";

const configSlice = createSlice({
    name: 'configurations',
    initialState: {
        isDarkTheme: true
    },
    reducers: {
        updateTheme: (state) => {
            state.isDarkTheme = !state.isDarkTheme
        }
    }
})

export const { updateTheme } = configSlice.actions;

export default configSlice.reducer