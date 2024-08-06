import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState = {

    nome: '',
    email: '',
    tel: '',

};



const formSlice = createSlice({
    name: 'form',
    initialState,
    reducers: {

        editContato: (state, action: PayloadAction<any>) => {
            state= action.payload
        },

    },

})

export const { editContato } = formSlice.actions
export default formSlice.reducer