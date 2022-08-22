import { createSlice ,createAsyncThunk } from '@reduxjs/toolkit'

import Axios from './api'
export const fetchContacts = createAsyncThunk('contacts/fetchContacts', async ({page,countryId}) => {
    const options = { 
        params : {
            "countryId": countryId,
            "companyId": 171,
            "page": page
        }
      };
    let response = Axios(options).get("/contacts.json")
    return (await response).data
   
})

export const contactSlicer = createSlice({
  name: 'contacts',
  initialState: {
    value: 0,
    contacts: []
  },
  reducers: {
  
  },
  extraReducers: (builder) => {
    builder.addCase(fetchContacts.fulfilled, (state, action) => {
        state.contacts = action.payload.contacts
    })
}
})
export const selecContacts = (state) => state.contacts.contacts


// Action creators are generated for each case reducer function
// export const { increment, decrement, incrementByAmount } = contactSlicer.actions

export default contactSlicer.reducer