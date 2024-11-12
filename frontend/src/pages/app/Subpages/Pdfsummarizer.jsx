import React, { useState } from 'react';
import './pdf.css';
import './main.css';
import TextToSpeech from '../../../Components/TextToSpeech/TextToSpeech';
import QuizGenerator from '../../../Components/QuizGenerator/QuizGenerator';

// function Pdfsummarizer({ onFileUpload }) {
//   const handleFileChange = (event) => {
//     const file = event.target.files[0];
//     onFileUpload(file);
//   };

const Pdfsummarizer = () => {    
  // const handleFileChange = (event) => {
  //     const file = event.target.files[0];
  //     onFileUpload(file);
  //   };
    

  return (
        /* From Uiverse.io by 3bdel3ziz-T */
    <>
      <div className="itiscenter">
        <div className="containers">
          <div className="folder">
            <div className="front-side">
              <div className="tip"></div>
              <div className="cover"></div>
            </div>
            <div className="back-side cover"></div>
          </div>
            <label className="custom-file-upload">
            <input className="title" type="file" />
            Choose a file
            </label>
        </div>
      </div> 
      <TextToSpeech/>
      <QuizGenerator/>
    </>
  );
};


export default Pdfsummarizer