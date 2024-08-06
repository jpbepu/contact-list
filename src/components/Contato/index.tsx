
import { useDispatch, useSelector } from 'react-redux'
import { RootReducer } from '../../store'

import * as S from './style'
import { remove, edit } from '../../store/reducers/contacts'
import { useState } from 'react'



export type Props = {
    nome: string,   
    email: string,
    tel: string,
}


const Contato = ({ nome, email, tel }: Props) => {

    const dispatch = useDispatch()

    const [newEmail, setNewEmail] = useState(email)
    const [newTel, setNewTel] = useState(tel)

    const [isEditing, setIsEditing ] = useState(false)



    return (



        <S.Card key={nome}>
            <div>
                <h2>{nome}</h2>
                <br />

                <S.TextField
                    disabled={!isEditing}
                    value={newEmail}
                    onChange={e => setNewEmail(e.target.value)}
                />

                <S.TextField
                    disabled={!isEditing}
                    value={newTel}
                    onChange={e => setNewTel(e.target.value)}
                />

            </div>
            <div>
                {isEditing? (

                    <button onClick={() => {
                        dispatch(edit({
                            nome,
                            email,
                            tel
                        }))
                        setIsEditing(false)
                    }}>
                        Salvar
                    </button>

                ) : (
                    <button onClick={() => {
                        setIsEditing(true)
                    }}>Editar</button>
                )}

                <button onClick={() => dispatch(remove(nome))}>Excluir</button>
            </div>

        </S.Card>

    )
}

export default Contato