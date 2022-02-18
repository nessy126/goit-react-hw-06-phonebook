import { useSelector } from "react-redux";
import ContactListItem from "../ContactListItem/ContactListItem";

const ContactList = () => {
  const { contacts, filter } = useSelector((state) => state.phonebook)

    const filterArray = () => {
      if (filter === "") return contacts
      return contacts.filter((el) => {
        return el.name.toLowerCase().includes(filter.toLowerCase())
      })
    }
  return (
    <>
      <ul>
        {filterArray().map(({ id, name, number }) => (
          <ContactListItem
            name={name}
            number={number}
            key={id}
          />
        ))}
      </ul>
    </>
  )
}
 
export default ContactList;

