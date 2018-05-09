import React from 'react';

const Search = ({location}) => {
    return (
        <div>
            <p>{location.search}.... search</p>
            {new URLSearchParams(location.search).get('keyword')}.... search
        </div>
    );
};

export default Search;