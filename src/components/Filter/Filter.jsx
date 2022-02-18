import { useSelector, useDispatch } from "react-redux"
import {setFilter} from "../../redux/phoneBook/phoneBookActions"

const Filter = () => {
  const { filter } = useSelector((state) => state.phonebook)
  const dispatch = useDispatch()
  
  const setReduceFilter = (e) => dispatch(setFilter(e))

  return (
    <label>
      Find contact by name<br></br>
      <input
        onChange={setReduceFilter}
        value={filter}
        type="text"
        name="filter"
      />
    </label>
  )
}
 
export default Filter;