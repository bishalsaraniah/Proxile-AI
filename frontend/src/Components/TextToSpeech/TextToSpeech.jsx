import { useEffect } from 'react';
import './TextToSpeech.css';

const TextToSpeech = ({ value }) => {
    const handleClick = () => {
        // Cancel any ongoing speech before starting new narration to avoid overlap
        window.speechSynthesis.cancel();
        
        const utterance = new SpeechSynthesisUtterance(value);
        window.speechSynthesis.speak(utterance);
    };

    useEffect(() => {
        // Cleanup function to stop any ongoing speech synthesis on component unmount
        return () => {
            window.speechSynthesis.cancel();
        };
    }, []);

    return (
        <div>
            <button className='voicebtn' onClick={handleClick}></button>
        </div>
    );
};

export default TextToSpeech;
