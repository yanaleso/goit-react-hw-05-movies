import { useState } from 'react';
import PropTypes from 'prop-types';
import { BiSearchAlt }   from 'react-icons/bi'
import { toast } from 'react-toastify';
import { SearchbarBox, SearchForm, Button, Input } from './SearchBox.styled';

export default function SearchBox({onSubmit}) {
  const [searchQuery, setSearchQuery] = useState('');

  const handleChange = e => {
    const { value } = e.target;
    setSearchQuery(value.toLowerCase());
  };

  const handleSubmit = e => {
    e.preventDefault();
    
    if (searchQuery.trim() === '') {
      toast.error("Please fill in the input.");
      return;
    }
    onSubmit( searchQuery );
  };

  return (
    <SearchbarBox>
      <SearchForm onSubmit={handleSubmit}>
        <Button type="submit">
          <BiSearchAlt size={26} />
        </Button>

        <Input
          type="text"
          autocomplete="off"
          autoFocus
          placeholder="Search movies"
          value={searchQuery}
          onChange={handleChange}
        />
      </SearchForm>
    </SearchbarBox>
  );
}

SearchBox.propTypes = {
    onSubmit: PropTypes.func.isRequired,
}