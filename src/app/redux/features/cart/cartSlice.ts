'use client';

import { Course } from '@/app/utils/models/Course';
import { createSlice } from '@reduxjs/toolkit';

export interface CartState {
    items: Array<{course: Course, date: any, quantity: number}>
}

const initialState: CartState = {
    items: []
}

export const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {

    }
})

export const {  } = cartSlice.actions;

export default cartSlice.reducer;