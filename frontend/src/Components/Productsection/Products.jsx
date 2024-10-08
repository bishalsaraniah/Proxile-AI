import React from 'react'
import './Products.css'
import { Link, useParams } from "react-router-dom";

const Products = () => {
  return (
    <>
    <div className="bg">
      <section className='product-area main'>
        <h1>Products</h1>
        <div className="innerproduct-area container">
          <Link to={'/appinterface/articlesummarizer'}>
            <div className="productcrd crd1">Article Summarizer</div>
          </Link>
          <Link to={'/appinterface/textsummarizer'}>
            <div className="productcrd crd2">Text Summarizer</div>
          </Link>
          {/* <Link to={'/appinterface/articleextractor'}>
            <div className="productcrd crd3">Article Extractor</div>
          </Link> */}
          <Link to={'/appinterface/pdfsummarizer'}>
            <div className="productcrd crd4">PDF Summarizer</div>
          </Link>
          <Link to={'/appinterface/videosummarizer'}>
            <div className="productcrd crd5">Youtube Video Summarizer</div>
          </Link>
        </div>
      </section>
    </div>
    </>
  )
}

export default Products