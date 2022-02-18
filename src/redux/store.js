import { configureStore } from "@reduxjs/toolkit"
import phoneBookReducer from "./phoneBook/phoneBookReducer"

export const store = configureStore({
  reducer: {
    phonebook: phoneBookReducer,
  },
})
