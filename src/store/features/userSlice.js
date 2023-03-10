import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    user: {},
}


export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        login: (state, action) => {
            state.user = action.payload
        },
        logout: (state, action) => {
            state.user = {}
        }
    },
})


export const { login, logout } = userSlice.actions;

export default userSlice.reducer;