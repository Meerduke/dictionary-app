import React, { useState } from "react";
import axios from "axios";
import Results from './Results';
import Photos from './Photos';
import './Dictionary.css';

export default function Dictionary(props){
    const [keyword, setKeyword] = useState(props.defaultKeyword);
    const [results, setResults] = useState(null);
    const [loaded, setLoaded] = useState(false);
    const [photos, setPhotos] = useState(null);

    function handleDictionaryResponse(response){
        setResults(response.data[0]);
    }

    function handlePexelsResponse(response){
        setPhotos(response.data.photos);
    }

    function search(){
        // https://dictionaryapi.dev/
        let apiUrl =`https://api.dictionaryapi.dev/api/v2/entries/en_US/${keyword}`
        axios.get(apiUrl).then(handleDictionaryResponse);

        // https://www.pexels.com/api/documentation/
        let pexelsApiKey = "563492ad6f9170000100000173e1078ee9944a90a928b537b9c82586";
        let pexelsApiUrl = `https://api.pexels.com/v1/search?query=${keyword}&per_page=9`;
        let headers = { Authorization: `Bearer ${pexelsApiKey}`};
        axios.get(pexelsApiUrl, { headers: headers }).then(handlePexelsResponse);
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
                <form onSubmit={handleSubmit} className="mt-3">
                    <label className="mb-3">Search for definitions here...</label>
                    <br />
                    <input type="search" onChange={handleKeywordChange} defaultValue={props.defaultKeyword}/>
                    <br />
                    <button className="btn btn-light mt-4">
                    Search
                    </button>
                </form>
                <Results results={results} />
                <section>
                    <Photos photos={photos} />
                </section>   
            </div>
        );
    }else {
        load();
        return "Loading";
    }

}