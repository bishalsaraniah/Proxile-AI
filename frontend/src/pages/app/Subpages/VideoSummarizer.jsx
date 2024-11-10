import { useState } from "react";
import TextToSpeech from '../../../Components/TextToSpeech/TextToSpeech';
import axios from "axios";
import "./main.css";
import Quiz from '../../../Components/Quiz/Quiz';
import QuizGenerator from '../../../Components/QuizGenerator/QuizGenerator';

const VideoSummarizer = () => {
  const [videoUrl, setVideoUrl] = useState("");
  const [result, setResult] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [quizbtn, setquizbtn] = useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError(null);
    setResult("");

    try {
      const response = await axios.post('http://localhost:4000/api/videosummary/ysummarize', {
        question:`Please provide me the summary of the youtube video from the given link  ${videoUrl}`
      });
      setResult(response.data.result);
    } catch (error) {
      console.error('Error:', error);
      setError("An error occurred while fetching the summary. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  
  // Video Input Component
  const VideoInput = () => (
    <input
      className="VideoInput"
      type="text"
      value={videoUrl}
      placeholder="YouTube Video URL"
      required
      onChange={(e) => setVideoUrl(e.target.value)}
    />
  );

  // Submit Button Component
  const SubmitButton = () => (
    <button className="SubmitButton" type="submit" disabled={isLoading}>
      {isLoading ? "Summarizing..." : "Summarize"}
      <span className="transition"></span>
      <span className="gradient"></span>
      <span className="label">Button</span>
    </button>
  );

  // Output Content
  const OutputContent = () => (
  <div className="summaryarea main">
    <div className="summary-bx w100">
    {error && <p className="error">{error}</p>}
    {result && <p>{result}</p>}
    </div>
  </div>
  );

  return (
  <>
      <div className="app">
      <form onSubmit={handleSubmit}>
        <VideoInput />
        <SubmitButton />
      </form>
      <OutputContent />
    </div>
    <div>
      <TextToSpeech value={result}/>
                      {/* <Quiz onClick={()=>{setquizbtn(true);console.log("Button clicked");}} /> */}
                      <button onClick={()=>{setquizbtn(true);console.log("Button CLicked");}} className="pushable2">
                    <span className="shadow2"></span>
                    <span className="edge2"></span>
                    <span className="front2"> Quiz </span>
                </button>
                {quizbtn && <QuizGenerator summary={result}></QuizGenerator>}
    </div>
  </>
  );
};

export default VideoSummarizer;