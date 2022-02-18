import { useState } from "react";
import { nanoid } from "nanoid"
import { useSelector, useDispatch } from "react-redux"
import {addContact} from "../../redux/phoneBook/phoneBookActions"


const Form = () => {
  const { contacts } = useSelector((state) => state.phonebook)
  const dispatch = useDispatch()
  const [name, setName] = useState("")
  const [number, setNumbet] = useState("")

  const handleInputChange = (e) => {
    e.target.name === "name" && setName(e.target.value)
    e.target.name === "number" && setNumbet(e.target.value)
  }

  const reset = () => {
    setName("")
    setNumbet("")
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    if (contacts.find((el) => el.name === name)) {
      alert(name + "is already exist")
      return
    }

    const newContact = {
      name,
      number,
      id: nanoid(),
    }

    dispatch(addContact(newContact))
    reset()
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Name
        <input
          value={name}
          onChange={handleInputChange}
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
      </label>
      <label htmlFor="">
        Number
        <input
          onChange={handleInputChange}
          value={number}
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />
      </label>
      <button type="submit">Add contact</button>
    </form>
  )
}
 
export default Form;