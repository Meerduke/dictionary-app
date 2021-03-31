import React, { useState } from "react";
import axios from "axios";
import './Dictionary.css';

export default function Dictionary(){
    const [keyword, setKeyword] = useState("");

    function handleRepsonse(response){
        console.log(response.data[0].meanings[0].definitions[0].definition);
    }

    function search(event) {
        event.preventDefault();
    
        let apiUrl =`https://api.dictionaryapi.dev/api/v2/entries/en_US/${keyword}`
        axios.get(apiUrl).then(handleRepsonse);
    }    

    function handleKeywordChange(event){
        setKeyword(event.target.value);
    }


    return (
        <div className="Dictionary">
            <p>
                Hello from dictionary
            </p>
            <form onSubmit={search} className="d-flex justify-content-evenly">
                <input type="search" onChange={handleKeywordChange}/>
                <button className="btn btn-secondary">
                Search
                </button>
            </form>
        </div>
    )

}