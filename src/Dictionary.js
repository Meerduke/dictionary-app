import React, { useState } from "react";
import axios from "axios";
import './Dictionary.css';
import Results from './Results';

export default function Dictionary(props){
    const [keyword, setKeyword] = useState(props.defaultKeyword);
    const [results, setResults] = useState(null);
    const [loaded, setLoaded] = useState(false);

    function handleRepsonse(response){
        setResults(response.data[0]);
    }

    function search(){
        // https://dictionaryapi.dev/
        let apiUrl =`https://api.dictionaryapi.dev/api/v2/entries/en_US/${keyword}`
        axios.get(apiUrl).then(handleRepsonse);
    }

    function handleSubmit(event) {
        event.preventDefault();
        search();
    }    

    function handleKeywordChange(event){
        setKeyword(event.target.value);
    }

    function load(){
        setLoaded(true);
        search();
    }
    
    if (loaded){
        return (
            <div className="Dictionary">
                <form onSubmit={handleSubmit} className="d-flex justify-content-evenly">
                    <input type="search" onChange={handleKeywordChange}/>
                    <button className="btn btn-secondary">
                    Search
                    </button>
                </form>
                <Results results={results} />
            </div>
        );
    }else {
        load();
        return "Loading";
    }

}