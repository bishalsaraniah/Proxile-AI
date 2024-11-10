// // QuizContext.js
// import React, { createContext, useContext, useState } from 'react';

// // Create a context
// const QuizContext = createContext();

// // Create a custom hook to use the Quiz context
// export const useQuiz = () => useContext(QuizContext);

// // Create a provider component
// export const QuizProvider = ({ children }) => {
//     const [generatedQuiz, setGeneratedQuiz] = useState("");
//     const [error, setError] = useState(null);

//     return (
//         <QuizContext.Provider value={{ generatedQuiz, setGeneratedQuiz, error, setError }}>
//             {children}
//         </QuizContext.Provider>
//     );
// };
