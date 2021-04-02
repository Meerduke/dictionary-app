import React from 'react';
import ReactAudioPlayer from 'react-audio-player';

export default function Phonetic(props){
    return (
        <div className="Phonetic mt-4">
            <ReactAudioPlayer
                src={props.phonetic.audio}
                autoPlay={false}
                controls
            />
            <br />
            <br />
            {props.phonetic.text}
        </div>
    );
}