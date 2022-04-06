import React, {useRef} from 'react'
import './SearchBar.css'
import SearchIcon from "@mui/icons-material/Search";
import { useDispatch } from 'react-redux';
import { searchSliceActions } from '../../store/SearchSlice';
import { useHistory } from 'react-router-dom';
const SearchBar = () => {
    const dispatch = useDispatch()
    const history = useHistory()
    const inputRef = useRef()
    const selectRef = useRef()
    const searchItem  = e => {
        e.preventDefault()
        dispatch(searchSliceActions.setSearchData({type: selectRef.current.value, keyword: inputRef.current.value}))
        history.push(`/search/${inputRef.current.value}`)
        
    }
  return (
    <div className="search-div">
        <form onSubmit={searchItem}>
            <select ref={selectRef}><option>Movies</option>
                    <option>Series</option>
            </select>
          <input type="text" placeholder="Search" ref={inputRef}/>
          <SearchIcon onClick={searchItem}/>
          
          </form>
        </div>
  )
}

export default SearchBar