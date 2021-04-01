import React from 'react';

export default function Photos(props){
    if (props.photos){
        console.log(props.photos);
        return (
            <div className="Photos">
                <div className="row">
                {props.photos.map(function(photo, index){
                    return (
                        <div className="col-sm-4" key={index} >
                            <a href={photo.src.original} target="_blank" rel="noreferrer">
                                <img src={photo.src.tiny} className="img-fluid rounded mb-4"/>
                            </a>
                        </div>
                    )
                })}
                </div>
            </div>
        );
    } else {
        return null;
    }
    
}