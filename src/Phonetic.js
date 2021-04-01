import React from 'react';
import ReactAudioPlayer from 'react-audio-player';

export default function Phonetic(props){
    return (
        <div className="Phonetic">
            <ReactAudioPlayer
                src={props.phonetic.audio}
                autoPlay={false}
                controls
            />
            <br />
            {props.phonetic.text}
        </div>
    );
}