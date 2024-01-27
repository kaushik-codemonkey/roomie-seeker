import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { User } from '../../types/User'

const initialState: User = {
    email: '',
    first_name: '',
    mobile: '',
    username: '',
    last_name: ''
}

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        updateUser: (state, action: PayloadAction<User>) => {
            // state.email = action.payload.email;
            // state.first_name = action.payload.first_name;
            // state.last_name = action.payload.last_name;
            // state.mobile = action.payload.mobile
            // state.username = action.payload.username
            return action.payload
        },
    },
})

// Action creators are generated for each case reducer function
export const { updateUser } = userSlice.actions

export default userSlice.reducer