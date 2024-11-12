import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './QuizGenerator.css';

const QuizGenerator = ({ summary }) => {
  const [generatedQuizzes, setGeneratedQuizzes] = useState([]); // Array to store all generated quizzes
  const [error, setError] = useState(null);
  const [quizBtnClicked, setQuizBtnClicked] = useState(false); // State to handle button click

  useEffect(() => {
    const generateQuiz = async () => {
      setError(null);
      try {
        // const response = await axios.post('http://localhost:4000/api/quiz/generatedquiz', {
          const response = await axios.post('https://proxile-ai-backend.vercel.app/api/quiz/generatedquiz', {
            // const response = await axios.post('https://proxile-ai-backend.vercel.app/api/videosummary/ysummarize', {
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

    if (quizBtnClicked && summary) {
      generateQuiz();
      setQuizBtnClicked(false); // Reset button click state after generating quiz
    }
  }, [quizBtnClicked, summary]);

  return (
    <div className='gq-container'>
      <button onClick={() => setQuizBtnClicked(true)} className="pushable2">
        <span className="shadow2"></span>
        <span className="edge2"></span>
        <span className="front2"> Quiz </span>
      </button>
      
      {generatedQuizzes.length > 0 && (
        <div className='gq-results'>
          <h3>Generated Quizzes:</h3>
          <ol className='gq-results-ol'>
            {generatedQuizzes.map((quiz, index) => (
              <li key={index}>{quiz}</li>
            ))}
          </ol>
        </div>
      )}
      
      {error && <div>{error}</div>}
    </div>
  );
};

export default QuizGenerator;
