
import { useDispatch } from 'react-redux'

import * as S from "./style"
import { useState } from "react"
import { teste } from '../../store/reducers/contacts'



export type Contatos = {
    nome: string,   
    email: string,
    tel: number,
    id: number
}

const Contato = () => {

    const dispatch = useDispatch()

    const [contatos, setContatos] = useState([

        {
            nome: 'teste 1',
            email: 'teste@teste.com',
            tel: '11111111',
            id: 1
        },
        {
            nome: 'teste 2',
            email: 'teste2@teste.com',
            tel: '22222222',
            id: 2
        }  
    ])

    return (

        <>
        
        
                {contatos.map((c) => (
        
                <S.Card key={c.nome}>
                    <div>
                        <h2>{c.nome}</h2>
                        <br />
                        <h3>{c.email}</h3>
                        <h3>{c.tel}</h3>
                    </div>
                    <div>
                        <button onClick={() => dispatch(teste('hi'))}>Editar</button>
                        <button>Excluir</button>
                    </div>
        
                </S.Card>
                ))}
        
        </>



        // <S.Card>
        //     <div>
        //         <h2>Nome</h2>
        //         <br />
        //         <h3>Email</h3>
        //         <h3>Telefone</h3>
        //     </div>
        //     <div>
        //         <button>Editar</button>
        //         <button>Excluir</button>
        //     </div>

        // </S.Card>

    )
}

export default Contato