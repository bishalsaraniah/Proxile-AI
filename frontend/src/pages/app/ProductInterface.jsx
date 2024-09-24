import React, { useContext, useEffect, useState } from 'react'
import './ProductInterface.css'
import Textsummarizer from './Subpages/Textsummarizer'
import Articlesummarizer from './Subpages/Articlesummarizer'
import Articleextractor from './Subpages/Articleextractor'
import Pdfsummarizer from './Subpages/Pdfsummarizer'
import VideoSummarizer from './Subpages/VideoSummarizer'
import { Link, useParams } from "react-router-dom";

const ProductInterface = () => {



  
  const [product, setProduct] = useState(1);

  
  let { aiproduct } = useParams();

  
  useEffect(() => {
    if (aiproduct === "articleextractor") {
      setProduct(3);
    } else if (aiproduct === "textsummarizer") {
      setProduct(2);
    } else if (aiproduct === "pdfsummarizer") {
      setProduct(4);
    } else if (aiproduct === "videosummarizer") {
      setProduct(5);
    } else {
      setProduct(1);
    }
  }, [aiproduct]);
  return (
    <>
      <div className="tabLinks main">
        <div className="tabLink-area container">
          <Link to={'/appinterface/articlesummarizer'}><button className={product === 1 ? "active" : ""}>Article Summarizer</button></Link>
          <Link to={'/appinterface/textsummarizer'}><button className={product === 2 ? "active" : ""}>Text Summarizer</button></Link>
          <Link to={'/appinterface/articleextractor'}><button className={product === 3 ? "active" : ""}>Article Extractor</button></Link>
          <Link to={'/appinterface/pdfsummarizer'}><button className={product === 4 ? "active" : ""}>PDF Summarizer</button></Link>
          <Link to={'/appinterface/videosummarizer'}><button className={product === 5 ? "active" : ""}>Video Summarizer</button></Link>
        </div>
      </div>

      <div className="subheading-area">
        <div className="subheading-inner-area">
          <p>

            {
              product === 1 ? "AI Article Summarization: Instantly condense lengthy articles into concise summaries using advanced AI algorithms."
                : product === 2 ? "Text Summarization: Simplify any text or document into key points and main ideas effortlessly"
                  : product === 3 ? "AI Article Extractor: Extract articles directly from websites and blogs for quick summarization"
                  : product === 4 ? "AI PDF Summarization : Simplifies the content given in the pdf"
                  : "Youtube Video Summarizer : Fetches data of Youtube videos and provides meaningful summary."
            }

          </p>
        </div>
      </div>
      {
        product === 1 ? <Articlesummarizer state dispatch /> 
        : product === 2 ? <Textsummarizer /> 
        : product === 3 ? <Articleextractor />
        : product === 4 ? <Pdfsummarizer />
        : <VideoSummarizer />
      }
    </>
  )
}


export default ProductInterface

