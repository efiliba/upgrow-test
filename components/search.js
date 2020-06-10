import React, {useRef, useEffect, useReducer} from 'react';
import {reducer, ActionCreators} from './searchReducer';

const MIN_SEARCH_CHARACTERS = 3;

const Search = ({autoFocus, onSearch}) => {
  useEffect(() => {
    if (autoFocus) {
      searchInput.current.focus();
    }
  }, [autoFocus]);

  const [{value: searchValue, disabled: searchDisabled}, dispatch] = useReducer(reducer, {
    minRequiredChars: MIN_SEARCH_CHARACTERS,
    value: '',
    disabled: true
  });
  
  const searchInput = useRef(null);

  const handleSearch = () =>
    onSearch(searchValue);

  const handleSearchChange = e =>
    dispatch(ActionCreators.setSearchValue(e.target.value));

  return (
    <fieldset>
      <legend>Search for a tag:</legend>
      <input
        type="text"
        ref={searchInput}
        value={searchValue}
        onChange={handleSearchChange}
        aria-label="Search photos by tag"
      />
      <button onClick={handleSearch} disabled={searchDisabled}>Search</button>

      <style jsx>{`
        legend {
          color: #cdcdcd;
        }
        button {
          margin-left: 4px;
        }
      `}</style>
    </fieldset>
  );
};

export default Search;
