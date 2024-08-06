
import { FormEvent, useState } from 'react'
import * as S from './style'
import { useDispatch, useSelector } from 'react-redux'
import { RootReducer } from '../../store'
import { register } from '../../store/reducers/contacts'

type Props = {
    editNome: string,   
    editEmail: string,
    editTel: string,
}

const Form = ({editNome, editEmail, editTel}: Props) => {

    const [ nome, setNome ] = useState('')
    const [ email, setEmail ] = useState('')
    const [ tel, setTel ] = useState('')
    const [ isEditing, setIsEditing ] = useState(false)

    const contacts = useSelector((state: RootReducer) => state.contact)
    const dispatch = useDispatch()
    
    const registerContact = (e: FormEvent) => {
        e.preventDefault()

        dispatch(register({
            nome,
            email,
            tel
        }))
        
    }

    return (
        <S.Form onSubmit={registerContact}>
            <input value={isEditing ? editNome : null} onChange={e => setNome(e.target.value)} type="text" placeholder="Nome" required/>
            <input value={isEditing ? editEmail  : ''} onChange={e => setEmail(e.target.value)} type="email" placeholder="E-mail"/>
            <input value={isEditing ? editTel  : ''} onChange={e => setTel(e.target.value)} type="number" placeholder="Telefone"/>
            <button formAction="submit">Registrar contato</button>
        </S.Form>
    )


}

export default Form