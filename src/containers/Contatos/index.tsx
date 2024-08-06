
import { useSelector } from 'react-redux'
import { RootReducer } from '../../store'

import Contato from '../../components/Contato'
import Form from '../Form'





const Contatos = () => {


    const contatos = useSelector((state: RootReducer) => state.contact)
    const editContato = useSelector((state: RootReducer) => state.form)

    return (

        <>
        
            <Form
                editNome={editContato.nome}
                editEmail={editContato.email}
                editTel={editContato.tel}
            />
            
            {contatos.items.map((c) => (
                <Contato
                    nome={c.nome}
                    email={c.email}
                    tel={c.tel}
                />
            ))}
        
        </>

    )
}

export default Contatos