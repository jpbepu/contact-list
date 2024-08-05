
import { Provider, useSelector } from 'react-redux';
import store from './store'
import { RootReducer } from './store'

import { GlobalStyle } from './styles'

import Contatos from './containers/Contatos';



function App() {



    return (
        <Provider store={store}>
        <GlobalStyle />
        <div className="container">
            <h1>Lista de Contatos</h1>
            <Contatos/>
        

        </div>
        </Provider>
    )
}

export default App;
