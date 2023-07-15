import React, {useState} from 'react'
import { useNavigate } from 'react-router-dom';

const SearchSw = () => {

    const [porp, setPorp] = useState("people");
    const [id, setId] = useState();
    const navigate = useNavigate();


    const submitForm = (e) => {
        e.preventDefault();

        navigate(`/${porp}/${id}`)
        
}
    


    return (
        <form onSubmit={submitForm}>
            <label>Search for: </label>
            <select onChange={ (e) => setPorp(e.target.value) } value={porp} >
                <option value='people'>People</option>
                <option value='planet'>Planet</option>
            </select>

            <label>ID: </label>
            <input type="number" onChange={ (e) => setId(e.target.value) } value={id} />
            <input type="submit" value="Search" />
        </form>
    )
}

export default SearchSw