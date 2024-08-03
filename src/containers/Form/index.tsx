
import { FormEvent, useState } from 'react'
import * as S from './style'


const Form = () => {

    
    const registerContact = (e: FormEvent) => {
        e.preventDefault()
        console.log('submit button ok')
    }

    return (
        <S.Form onSubmit={registerContact}>
            <input type="text" placeholder="Nome" />
            <input type="email" placeholder="E-mail"/>
            <input type="number" placeholder="Telefone"/>
            <button formAction="submit">Registrar contato</button>
        </S.Form>
    )


}

export default Form