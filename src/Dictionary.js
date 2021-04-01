import React, { useState } from "react";
import axios from "axios";
import './Dictionary.css';
import Results from './Results';

export default function Dictionary(){
    const [keyword, setKeyword] = useState("");
    const [results, setResults] = useState(null);

    function handleRepsonse(response){
        setResults(response.data[0]);
    }

    function search(event) {
        event.preventDefault();
    // https://dictionaryapi.dev/
        let apiUrl =`https://api.dictionaryapi.dev/api/v2/entries/en_US/${keyword}`
        axios.get(apiUrl).then(handleRepsonse);
    }    

    function handleKeywordChange(event){
        setKeyword(event.target.value);
    }


    return (
        <div className="Dictionary">
            <form onSubmit={search} className="d-flex justify-content-evenly">
                <input type="search" onChange={handleKeywordChange}/>
                <button className="btn btn-secondary">
                Search
                </button>
            </form>
            <Results results={results} />
        </div>
    )

}