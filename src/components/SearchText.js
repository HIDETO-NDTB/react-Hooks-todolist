import React, { useState, useContext } from 'react';
import { INPUT_SEARCHTEXT } from '../actions';
import AppContext from '../contexts/AppContext';

const SearchText = () => {
  const [searchText, setSearchText] = useState('');
  const { dispatch } = useContext(AppContext);
  const handleSearchKeyUp = () => {
    dispatch({
      type: INPUT_SEARCHTEXT,
      searchText
    })
  }

  return (
    <div className="searchText-form">
      <input type="text" placeholder="Input Word For Search" className="input-searchText"
        onChange={e => setSearchText(e.target.value)} onKeyUp={handleSearchKeyUp} />
    </div>
  );
}

export default SearchText