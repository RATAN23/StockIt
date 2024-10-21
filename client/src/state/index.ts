import { createSlice ,PayloadAction } from "@reduxjs/toolkit";

export interface InitialTypes {
    isSideBarCollapsed : boolean,
    isDarkMode : boolean
}

const initialState : InitialTypes = {
    isDarkMode : false,
    isSideBarCollapsed : false
}

export const globalSlice = createSlice({
    name : "global",
    initialState,
    reducers : {
        setIsSideBarCollapsed : (state , action : PayloadAction<boolean>) => {
            state.isSideBarCollapsed = action.payload;
        },
        setIsDarkMode : (state , action : PayloadAction<boolean>) => {
            state.isDarkMode = action.payload;
        },
    },
})

export const {setIsSideBarCollapsed , setIsDarkMode} = globalSlice.actions
export default globalSlice.reducer