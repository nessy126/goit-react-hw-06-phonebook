import { useDispatch } from "react-redux";
import {deleteContact} from "../../redux/phoneBook/phoneBookActions"

const ContactListItem = ({ name, number }) => {
  const dispatch = useDispatch()
  return (
    <>
      <li>
        <p>
          {name}
          <span> {number}</span>
        </p>
        <button onClick={() => dispatch(deleteContact(name))} type="button">
          Delete
        </button>
      </li>
    </>
  )
}
 
export default ContactListItem;