import css from './SearchBox.module.css'
import { useDispatch, useSelector } from 'react-redux'
import { changeFilter, selectNameFilter} from '../../redux/filtersSlice'


const SearchBox = () => {
  const dispatch = useDispatch();
  const filterValue = useSelector(selectNameFilter);

  const handleFilter = (event) => {
    const value = event.target.value;
    const action = changeFilter(value);
    dispatch(action);
  };

  return (
    <div className={css.searchWrapper}>
      <p>Find contacts by name</p>
      <input type="text" 
        value={filterValue}
        onChange={handleFilter} 
        className={css.inputSearch}
      />
    </div>
  )
}

export default SearchBox