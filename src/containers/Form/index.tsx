
import { FormEvent, useState } from 'react'
import * as S from './style'
import { useDispatch, useSelector } from 'react-redux'
import { RootReducer } from '../../store'
import { teste, register } from '../../store/reducers/contacts'


const Form = () => {

    const [ nome, setNome ] = useState('')
    const [ email, setEmail ] = useState('')
    const [ tel, setTel ] = useState('')

    const contacts = useSelector((state: RootReducer) => state.contact)
    const dispatch = useDispatch()
    
    const registerContact = (e: FormEvent) => {
        e.preventDefault()

        dispatch(register({
            nome,
            email,
            tel
        }))
        
        console.log(contacts)
    }

    return (
        <S.Form onSubmit={registerContact}>
            <input onChange={e => setNome(e.target.value)} type="text" placeholder="Nome" required/>
            <input onChange={e => setEmail(e.target.value)} type="email" placeholder="E-mail"/>
            <input onChange={e => setTel(e.target.value)} type="number" placeholder="Telefone"/>
            <button formAction="submit">Registrar contato</button>
        </S.Form>
    )


}

export default Form