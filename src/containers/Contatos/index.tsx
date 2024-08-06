
import { useSelector } from 'react-redux'
import { RootReducer } from '../../store'

import Contato from '../../components/Contato'
import Form from '../Form'





const Contatos = () => {


    const contatos = useSelector((state: RootReducer) => state.contact)

    return (

        <>
        
            <Form/>
            
            {contatos.items.map((c) => (
                <Contato key={c.nome}
                    nome={c.nome}
                    email={c.email}
                    tel={c.tel}
                />
            ))}
        
        </>

    )
}

export default Contatos