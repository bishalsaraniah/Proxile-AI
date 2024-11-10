// import React, {useState, useEffect} from 'react';
// import axios from "axios";

// const QuizGenerator = ({summary}) => {
//     const [generatedquiz, setgeneratedquiz] = useState("")
//     const [error,setError] = useState(null)
    
//     useEffect(() => {
//         const generatequiz = async()=>{
//             setgeneratedquiz("");
//             setError(null);
//             try {
//                 const response = await axios.post('http://localhost:4000/api/videosummary/ysummarize', {
//                   question:`From the given paragraph give me ask me a quiz with 4 options to test my knowldge  ${summary}`
//                 });
//                 setgeneratedquiz(response.data.result);
//                 console.log(response.data)
//               } catch (error) {
//                 console.error('Error:', error);
//                 setError("An error occurred while fetching the summary. Please try again.");
//               }
//         }
//         generatequiz();
//     }, [summary])
    
//   return (
//     <div>
//       {generatedquiz && <div>{generatedquiz}</div>}
//       {error && <div>{error}</div>}
//     </div>
//   )
// }

// export default QuizGenerator


// QuizGenerator.js


import React, { useState, useEffect } from 'react';
import axios from 'axios';

const QuizGenerator = ({ summary }) => {
  const [generatedQuizzes, setGeneratedQuizzes] = useState([]); // Array to store all generated quizzes
  const [error, setError] = useState(null);

  useEffect(() => {
    const generateQuiz = async () => {
      setError(null);
      try {
        const response = await axios.post('http://localhost:4000/api/videosummary/ysummarize', {
          question: `From the given paragraph, ask me a quiz with 4 options to test my knowledge: ${summary}`
        });
        // Append the new quiz to the generatedQuizzes array
        setGeneratedQuizzes((prevQuizzes) => [...prevQuizzes, response.data.result]);
        console.log(response.data);
      } catch (error) {
        console.error('Error:', error);
        setError("An error occurred while fetching the quiz. Please try again.");
      }
    };

    if (summary) generateQuiz();
  }, [summary]);

  return (
    <div>
      {generatedQuizzes.length > 0 && (
        <div>
          <h3>Generated Quizzes:</h3>
          <ul>
            {generatedQuizzes.map((quiz, index) => (
              <li key={index}>{quiz}</li>
            ))}
          </ul>
        </div>
      )}
      {error && <div>{error}</div>}
    </div>
  );
};

export default QuizGenerator;