import { configureStore } from '@reduxjs/toolkit'
import contactsRecuers from './reducers/contactReducer'

export default configureStore({
  reducer: {
    contacts: contactsRecuers,
  },
})