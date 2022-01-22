import { useState } from "react"
import PropTypes from 'prop-types';

export const AddCategory = ({setCategories}) =>{

    const [inputValue, setinputValue] = useState('');

    const handleInputChange = (e) =>{
        setinputValue(e.target.value);
    }

    const handleSummit = (e) =>{
        e.preventDefault();
        if(inputValue.trim().length >2){
            setCategories(category => [inputValue,...category,]);
            setinputValue('');
        }
        
    }

    return(
        <form onSubmit={handleSummit}>
            <input
                type="text"
                value={inputValue}
                onChange={handleInputChange}
            />
        </form>
    )
}

AddCategory.propTypes = {
    setCategories: PropTypes.func.isRequired,
}
