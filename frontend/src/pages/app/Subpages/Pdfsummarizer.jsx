import React, { useState } from 'react';
import './main.css';

function Pdfsummarizer({ onFileUpload }) {
  const handleFileChange = (event) => {
    const file = event.target.files[0];
    onFileUpload(file);
  };

  

  return (
    <div className='upload'>
      <input type="file" accept="application/pdf" onChange={handleFileChange} />
    </div>
  );
}


export default Pdfsummarizer;