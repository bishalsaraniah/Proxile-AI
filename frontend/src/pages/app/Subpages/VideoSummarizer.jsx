import { useState } from "react";
import axios from "axios";
import "./main.css";

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
      const response = await axios.post('http://localhost:3000/vel', {
        question:`Please provide me the summary of the youtube video which is available in the following url ${videoUrl}`
                // question: `${videoUrl}`
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
    <div className="app">
      <form onSubmit={handleSubmit}>
        <VideoInput />
        <SubmitButton />
      </form>
      <OutputContent />
    </div>
  );
};

export default VideoSummarizer;