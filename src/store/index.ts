import { configureStore } from "@reduxjs/toolkit";
import contactReducer from './reducers/contacts'
import formReducer from './reducers/form'

// import taskReducer from './reducers/tasks'
// import filterReducer from './reducers/filter'

const store = configureStore({
    reducer: {
        contact: contactReducer,
        form: formReducer
        // tasks: taskReducer,
        // filter: filterReducer
    }
})


export type RootReducer = ReturnType<typeof store.getState>
export default store