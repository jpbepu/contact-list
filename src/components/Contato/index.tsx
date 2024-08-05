
import { useDispatch, useSelector } from 'react-redux'
import { RootReducer } from '../../store'

import * as S from './style'
import { remove } from '../../store/reducers/contacts'



export type Props = {
    nome: string,   
    email: string,
    tel: number,
}


const Contato = ({ nome, email, tel }: Props) => {

    const dispatch = useDispatch()



    return (

                <S.Card key={nome}>
                    <div>
                        <h2>{nome}</h2>
                        <br />
                        <h3>{email}</h3>
                        <h3>{tel}</h3>
                    </div>
                    <div>
                        <button onClick={() => {

                            dispatch(remove(nome))
                        }}>Editar</button>
                        <button onClick={() => dispatch(remove(nome))}>Excluir</button>
                    </div>
        
                </S.Card>
    )
}

export default Contato