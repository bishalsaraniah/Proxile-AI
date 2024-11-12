import { useState } from "react";
import TextToSpeech from '../../../Components/TextToSpeech/TextToSpeech';
import axios from "axios";
import "./main.css";
import QuizGenerator from '../../../Components/QuizGenerator/QuizGenerator';

const VideoSummarizer = () => {
  const [videoUrl, setVideoUrl] = useState("");
  const [result, setResult] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError(null);
    setResult("");

    try {
      // const response = await axios.post('http://localhost:4000/api/videosummary/ysummarize', {
        const response = await axios.post('https://proxile-ai-backend.vercel.app/api/videosummary/ysummarize', {
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
    <div className="inputarea main">
      <div className="inputArea w100">
      <input
      className="VideoInput"
      type="text"
      value={videoUrl}
      placeholder="YouTube Video URL"
      required
      onChange={(e) => setVideoUrl(e.target.value)}
    />
    <SubmitButton/>
      </div>
    </div>
  );

  // Submit Button Component
  const SubmitButton = () => (
    <button className="SubmitButton" type="submit" disabled={isLoading}>
      {isLoading ? "Summarizing..." : "Summarize"}
      <span className="transition"></span>
      <span className="gradient"></span>
      <span className="label"></span>
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
      </form>
      <OutputContent />
    </div>
    <div>
      <TextToSpeech value={result}/>
      {<QuizGenerator summary={result}/>}
    </div>
  </>
  );
};

export default VideoSummarizer;