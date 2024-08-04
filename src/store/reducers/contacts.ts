import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Contatos } from "../../components/Contato";

const initialState = {

    items: [
        {
            nome: 'teste 1',
            email: 'teste@teste.com',
            tel: '11111111',
            id: 1
        },
        {
            nome: 'teste 2',
            email: 'teste2@teste.com',
            tel: '2222222',
            id: 1
        }

    ]
};



const contactSlice = createSlice({
    name: 'contacts',
    initialState,
    reducers: {

        teste: (state, action: PayloadAction<string>) => {
            console.log(action.payload)
        }

        // register: (state, action : PayloadAction<Omit<Contatos, 'id'>>) =>{
        //     const existingContact = state.items.find(
        //         c => c.nome.toLowerCase() === action.payload.nome.toLowerCase()
        //     )

        //     if (existingContact) {
        //         alert('Contato repetido')
        //     } else {
                
        //         const lastContact = state.items[state.items.length -1]
                

        //         const newContact = {
        //             ...action.payload,
        //             id: lastContact ? lastContact.id + 1 : 1
        //         }

        //         state.items.push(newContact)
        //     }
        // }

        // //remove contato com base no id passado na payload
        // remove: (state, action: PayloadAction<number>) => {
        //     state.items = state.items.filter(c => c.id !== action.payload)
        // },

        // //edita o contato com base no id passado na payload
        // edit: (state, action: PayloadAction<Contatos>) => {
        //     const contactIndex = state.items.findIndex(c => c.id === action.payload.id)

        //     if (contactIndex >= 0) {
        //         state.items[contactIndex] = action.payload
        //     }
        // },



    }

})

export const { teste } = contactSlice.actions
export default contactSlice.reducer