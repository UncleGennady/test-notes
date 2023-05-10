import React, {useContext} from 'react'
import {SearchContext} from "../../providers/SearchProvider";
import'./styles.scss'

const SearchBox = () => {
    const {search, setSearch} = useContext(SearchContext)
    return (
        <div>
            <input onChange={({target})=>setSearch(() => (target.value))} className={`input ${!!search ? 'input_placeholder_none' : ''}`} type="text" placeholder={"Search"} value={search}/>
        </div>
    );
};

export default SearchBox;