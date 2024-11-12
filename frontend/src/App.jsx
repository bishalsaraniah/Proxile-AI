import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

//pages 
import Home from './pages/Home/Home'


// components
import Header from './Components/Header/Header'
import ProductInterface from './pages/app/ProductInterface'
import Articlesummarizer from './pages/app/Subpages/Articlesummarizer'
import Textsummarizer from './pages/app/Subpages/Textsummarizer'
import Pdfsummarizer from './pages/app/Subpages/Pdfsummarizer'
import VideoSummarizer from './pages/app/Subpages/VideoSummarizer'

function App() {


  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/appinterface' element={<ProductInterface />} />
          <Route path='/appinterface/:aiproduct' element={<ProductInterface />} />
          <Route path='/appinterface/articlesummarizer' element={<Articlesummarizer />} />
          <Route path='/appinterface/textsummarizer' element={<Textsummarizer />} />
          <Route path='/appinterface/pdfsummarizer' element={<Pdfsummarizer />} />
          <Route path='/appinterface/videosummarizer' element={<VideoSummarizer />} />
        </Routes>
      </Router>
    </>
  )
}

export default App