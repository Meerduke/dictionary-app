import React from 'react';
import Example from './Example';
import Synonyms from './Synonyms';

export default function Meaning(props){
    return (
        <div className="Meaning">
            <h3 className="text-uppercase">
                {props.meaning.partOfSpeech}
            </h3>
            {props.meaning.definitions.map(function(definition, index){
                return(
                    <div key={index}>
                        <p>
                            <span className="fw-bold">Definition:</span>
                            <br />
                            {definition.definition}
                            <br />
                            <Example example={definition.example} />
                            <Synonyms synonyms={definition.synonyms} />
                        </p>
                    </div>
                );
             })}
        </div>
        );
    }