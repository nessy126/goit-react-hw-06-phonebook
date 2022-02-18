import "./App.css"
import Form from "./components/Form/Form"
import ContactList from "./components/ContactList/ContactList"
import Filter from "./components/Filter/Filter"
import { useEffect, useState } from "react"

const App = () => {
  const [contacts, setContacts] = useState([])
  const [filter, setFilter] = useState("")

  useEffect(() => {
  const contacts = JSON.parse(localStorage.getItem("contacts")) || []
    setContacts(contacts)
}, [])

  useEffect(() => {
    localStorage.setItem("contacts", JSON.stringify(contacts))
}, [contacts])

 

  const addContact = (newContact) => {
    setContacts((prev) => [...prev, newContact])
  }

  const deleteContact = (name) => {
    const contsctsWithoutDeleted = contacts.filter(
      (contact) => contact.name !== name
    )
    setContacts(contsctsWithoutDeleted)
    }

  const setStateFilter = (e) => {
    setFilter(e.target.value)
  }

  const filterArray = () => {
    if (filter === "") return contacts
    return contacts.filter((el) => {
      return el.name.toLowerCase().includes(filter.toLowerCase())
    })
  }
  
    return (
      <div className="App">
        <h1>Phonebook</h1>
        <Form contacts={contacts} addContact={addContact} />
        <h2>Contacts</h2>
        <Filter filter={filter} setFilter={setStateFilter} />
        <ContactList
          contacts={contacts}
          filterArray={filterArray}
          setFilter={setStateFilter}
          deleteContact={deleteContact}
        />
      </div>
    )
  }

export default App
