import { useState } from 'react'
import axios from 'axios';
import './main.css'
import { IoLinkOutline } from "react-icons/io5";
import Loader from '../../../Components/Loader/Loader';
import Errorbx from '../../../Components/Errorbbx/Errorbx';

const VideoSummarizer = () => {


    const [inputValue, setInputValue] = useState("");
    const [loading, setLoading] = useState("");
    const [summary, setSummary] = useState("");
    const [err, setErr] = useState()


    const handleInputChange = (e) => {
        setInputValue(e.target.value);
    };


    // const urlObj = new URL(inputValue);
    // const id = urlObj.searchParams.get('v');
    // console.log(id);


    const handleSearch = async () => {

        setLoading("true")
        setSummary('')
        setErr(false)
        

        const options = {
            method: 'GET',
            url: 'https://youtube-video-summarizer-gpt-ai.p.rapidapi.com/api/v1/get-transcript-v2',
            params: {
              // video_id: 'osKzYw6xdig',
              video_id: inputValue,
              platform: 'youtube'
            },
            headers: {
              'x-rapidapi-key': 'de8c6c65b0mshf27504dc114d506p1cd158jsn7f03492a4d54',
              'x-rapidapi-host': 'youtube-video-summarizer-gpt-ai.p.rapidapi.com'
            }
        };

        try {
          const response = await axios.request(options);
          console.log(response.data);
          const finalData = response.data.summary;
          setSummary(finalData)
        } catch (error) {
          console.error(error);
          setErr(error)
        }

        setLoading(false)
    }
    return (
        <>
            <div className="inputarea main">
                <div className="inputArea w100">
                    <IoLinkOutline className='link-icon' />
                    <input onChange={handleInputChange} type="text" placeholder='Paste your URL here' />
                    <button onClick={() => handleSearch()} disabled={!inputValue}>Summarize</button>
                </div>
            </div>

            {
                loading ? <Loader /> : ''
            }

            {
             err ? <Errorbx msg={err.message} code={err.code} data={err.response.data.message} /> : ''
            }

            {
                summary ? (
                    <div className="summaryarea main">

                        <div className="summary-bx article w100">
                            <div className="summaryHead">
                                <span className='url'>{inputValue}</span>
                            </div>
                            <h3>Youtube Summary:</h3>
                            <br />
                            <p>
                                {
                                    summary
                                }
                            </p>
                        </div>
                    </ div>
                ) : ' '
            }

        </>
    )
}

export default VideoSummarizer;


// import { useState } from 'react'
// import axios from 'axios';
// import './main.css'
// import { IoLinkOutline } from "react-icons/io5";
// import Loader from '../../../Components/Loader/Loader';
// import Errorbx from '../../../Components/Errorbbx/Errorbx';

// const VideoSummarizer2 = () => {


//     const [inputValue, setInputValue] = useState("");
//     const [loading, setLoading] = useState("");
//     const [summary, setSummary] = useState("");
//     const [err, setErr] = useState()


//     const handleInputChange = (e) => {
//         setInputValue(e.target.value);
//     };


//     const handleSearch = async () => {

//         setLoading("true")
//         setSummary('')
//         setErr(false)


//         const options = {
//             method: 'GET',
//             url: 'youtube-video-summarizer1.p.rapidapi.com',
//             params: {
//               videoURL: inputValue
//             },
//             headers: {
//                 'x-rapidapi-key': 'de8c6c65b0mshf27504dc114d506p1cd158jsn7f03492a4d54',
//                 'x-rapidapi-host': 'youtube-video-summarizer1.p.rapidapi.com'
//             }
//         };

//         try {
//             const response = await axios.request(options);
//             console.log(response.data.summary)
//             const finalData = response.data.summary;
//             setSummary(finalData)

//         } catch (error) {
//             console.log(error)
//             setErr(error)
//         }

//         setLoading(false)
//     }
//     return (
//         <>
//             <div className="inputarea main">
//                 <div className="inputArea w100">
//                     <IoLinkOutline className='link-icon' />
//                     <input onChange={handleInputChange} type="text" placeholder='Paste your URL here' />
//                     <button onClick={() => handleSearch()} disabled={!inputValue}>Summarize</button>
//                 </div>
//             </div>

//             {
//                 loading ? <Loader /> : ''
//             }

//             {
//              err ? <Errorbx msg={err.message} code={err.code} data={err.response.data.message} /> : ''
//             }

//             {
//                 summary ? (
//                     <div className="summaryarea main">

//                         <div className="summary-bx article w100">
//                             <div className="summaryHead">
//                                 <span className='url'>{inputValue}</span>
//                             </div>
//                             <h3>Youtube Summary:</h3>
//                             <br />
//                             <p>
//                                 {
//                                     summary
//                                 }
//                             </p>
//                         </div>
//                     </ div>
//                 ) : ' '
//             }


//         </>
//     )
// }

// export default VideoSummarizer2