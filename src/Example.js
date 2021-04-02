import React from 'react';

export default function Example(props){
    if (props.example){
        return (
            <div className="Example">
                <p>
                    <em>"{props.example}"</em>
                </p>
            </div>
        );
        } else {
            return null;
        }
}