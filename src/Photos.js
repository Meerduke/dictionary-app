import React from 'react';

export default function Photos(props){
    if (props.photos){
        return (
            <div className="Photos">
                <div className="row">
                {props.photos.map(function(photo, index){
                    return (
                        <div className="col-sm-4" key={index} >
                            <a href={photo.previewURL} target="_blank" rel="noreferrer">
                                <img src={photo.previewURL} className="img-fluid rounded mb-4" alt="images of search result" title="search result image"/>
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