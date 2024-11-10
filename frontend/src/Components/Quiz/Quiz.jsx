import React, { useState } from "react";
import axios from "axios";
import "./Quiz.css";
import Textsummarizer from "../../pages/app/Subpages/Textsummarizer";

const Quiz = () => {


  return (
    <div>
        <button className="pushable">
            <span className="shadow"></span>
            <span className="edge"></span>
            <span className="front"> Quiz </span>
        </button>

    </div>
  )
}

export default Quiz