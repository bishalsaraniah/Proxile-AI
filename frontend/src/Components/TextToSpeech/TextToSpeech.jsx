import React from 'react';
import './TextToSpeech.css';

const TextToSpeech = (xyz) => {
    const handleClick=()=>{
        const value = new SpeechSynthesisUtterance(xyz.value);

        window.speechSynthesis.speak(value);
    }

  return (
    <div>
      <button className='voicebtn' onClick={handleClick}></button>
    </div>
  )
}

export default TextToSpeech;