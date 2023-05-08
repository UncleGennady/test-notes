import React, {useState} from 'react'
import'./styles.scss'

const SearchBox = () => {
    const [state, setState] = useState('')
    return (
        <div>
            <input onChange={({target})=>setState(() => (target.value))} className={`input ${!!state ? 'input_placeholder_none' : ''}`} type="text" placeholder={"Search"}/>
        </div>
    );
};

export default SearchBox;