import React, {useState, useEffect} from 'react';
import axios from "axios";

const QuizGenerator = ({summary}) => {
    const [generatedquiz, setgeneratedquiz] = useState("")
    const [error,setError] = useState(null)
    
    useEffect(() => {
        const generatequiz = async()=>{
            setgeneratedquiz("");
            setError(null);
            try {
                const response = await axios.post('http://localhost:4000/api/videosummary/ysummarize', {
                  question:`From the given paragraph give me ask me a quiz with 4 options to test my knowldge  ${summary}`
                });
                setgeneratedquiz(response.data.result);
                console.log(response.data)
              } catch (error) {
                console.error('Error:', error);
                setError("An error occurred while fetching the summary. Please try again.");
              }
        }
        generatequiz();
    }, [summary])
    
  return (
    <div>
      {generatedquiz && <div>{generatedquiz}</div>}
      {error && <div>{error}</div>}
    </div>
  )
}

export default QuizGenerator
