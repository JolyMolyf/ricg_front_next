'use client';

import { Course } from '@/app/utils/models/Course';
import { createSlice } from '@reduxjs/toolkit';

export interface UserState {
    isAuthenticated: false,
    user: {},
    jwt: '',
}

const initialState: UserState = {
    isAuthenticated: false,
    user: {},
    jwt: '',
}

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {

    }
})

export const {  } = userSlice.actions;

export default userSlice.reducer;