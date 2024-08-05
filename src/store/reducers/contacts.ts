import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState = {

    items: [
        {
            nome: 'teste REDUX',
            email: 'teste@teste.com',
            tel: 11111111,
        },
        {
            nome: 'teste 2',
            email: 'teste2@teste.com',
            tel: 2222222,
        }

    ]
};



const contactSlice = createSlice({
    name: 'contacts',
    initialState,
    reducers: {

        teste: (state, action: PayloadAction<string>) => {
            console.log(action.payload)
        },

        //registra novo contato
        register: (state, action : PayloadAction<any>) =>{

            //checa se o contato ja exite pelo nome
            const existingContact = state.items.find(
                c => c.nome.toLowerCase() === action.payload.nome.toLowerCase()
            )
            if (existingContact) {
                alert('Contato repetido')
            } else {
                state.items = [...state.items, action.payload]
            }
        },

        //remove contato com base no nome
        remove: (state, action: PayloadAction<any>) => {

            state.items = state.items.filter(c => c.nome !== action.payload)

            console.log(`contato ${action.payload} removido`)
        },

        //edita o contato com base no nome
        edit: (state, action: PayloadAction<any>) => {
            const contactIndex = state.items.findIndex(c => c.nome === action.payload.nome)

            if (contactIndex >= 0) {
                state.items[contactIndex] = action.payload
            }
        },



    },

})

export const { teste, register, remove, edit } = contactSlice.actions
export default contactSlice.reducer