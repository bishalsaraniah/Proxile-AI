import { useState } from 'react'
import axios from 'axios';
import './main.css'
import { IoLinkOutline } from "react-icons/io5";
import Loader from '../../../Components/Loader/Loader';
import Errorbx from '../../../Components/Errorbbx/Errorbx';
import TextToSpeech from '../../../Components/TextToSpeech/TextToSpeech';
import QuizGenerator from '../../../Components/QuizGenerator/QuizGenerator';

const Articlesummarizer = () => {


    const [inputValue, setInputValue] = useState("");
    const [loading, setLoading] = useState("");
    const [summary, setSummary] = useState("");
    const [err, setErr] = useState()


    const handleInputChange = (e) => {
        setInputValue(e.target.value);
    };


    const handleSearch = async () => {

        setLoading("true")
        setSummary('')
        setErr(false)


        const options = {
            method: 'GET',
            url: 'https://article-extractor-and-summarizer.p.rapidapi.com/summarize',
            params: {
                url: inputValue,
                length: '3'
            },
            headers: {
                // 'x-rapidapi-key': '47695e702cmshb8bb391f8faac5bp199044jsn9ed4811905f9',
                // 'x-rapidapi-key': '6f68f7d326msh443ddf50f9ab214p147137jsn089d377ec1bb',
                'x-rapidapi-key': '2d83c306d6mshe8bb4e8f6b74c56p186d49jsn2d54461d899a',
                'X-RapidAPI-Host': 'article-extractor-and-summarizer.p.rapidapi.com'
            }
        };

        try {
            const response = await axios.request(options);
            console.log(response.data.summary)
            const finalData = response.data.summary;
            setSummary(finalData)

        } catch (error) {
            console.log(error)
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
                                <h3>Article Summary:</h3>
                                <span className='url'>{inputValue}</span>
                            </div>
                            {/* <h3>Article Summary:</h3> */}
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
            <div>
                <TextToSpeech value={summary}/>
                {<QuizGenerator summary={summary}/>}
            </div>
        </>
    )
}

export default Articlesummarizer