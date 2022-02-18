import { createReducer, combineReducers } from "@reduxjs/toolkit"
import { addContact, deleteContact, setFilter } from "./phoneBookActions";

const contsctsFromLS = () => JSON.parse(localStorage.getItem("contacts") || [])
const setContactsToLS = (contacts) => localStorage.setItem("contacts", JSON.stringify(contacts))

 const contactsReducer = createReducer(contsctsFromLS, {
   [addContact]: (state, { payload }) => {
     const contacts = [...state, payload];
     setContactsToLS(contacts)
     return contacts;
   },

   [deleteContact]: (state, { payload }) => {
     const contsctsWithoutDeleted = state.filter(
       (contact) => contact.name !== payload
     )
     setContactsToLS(contsctsWithoutDeleted)
     return contsctsWithoutDeleted
   },
 })

 const filterReducer = createReducer("", {
   [setFilter]: (_, { payload }) => payload,
 })


const phoneBookReducer = combineReducers({
  contacts: contactsReducer,
  filter: filterReducer,
})
export default phoneBookReducer;