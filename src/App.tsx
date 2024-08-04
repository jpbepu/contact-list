
import { Provider } from 'react-redux';
import store from './store'

import { GlobalStyle } from './styles'

import Form from './containers/Form';
import Contato from './components/Contato';



// import { Provider } from 'react-redux'
// import { store } from './store'

function App() {
  return (
    <Provider store={store}>
      <GlobalStyle />
      <div className="container">
        <h1>Lista de Contatos</h1>
        <Form />
        <Contato/>


      </div>
    </Provider>
  )
}

export default App;
