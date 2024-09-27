import React, { useState } from 'react';
import './pdf.css';
import './main.css';

// function Pdfsummarizer({ onFileUpload }) {
//   const handleFileChange = (event) => {
//     const file = event.target.files[0];
//     onFileUpload(file);
//   };

  function Pdfsummarizer({}) {
    const handleFileChange = (event) => {
      const file = event.target.files[0];
      onFileUpload(file);
    };

  return (
    // <div className='upload'>
    //   <input type="file" accept="application/pdf" onChange={handleFileChange} />
    // </div>
    /* From Uiverse.io by 3bdel3ziz-T */
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

  );
}


export default Pdfsummarizer;