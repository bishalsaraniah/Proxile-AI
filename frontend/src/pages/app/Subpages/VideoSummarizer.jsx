import { useState } from "react";
import axios from "axios";
import "./v.css";

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
        // question:`Please provide me the summary of the youtube video which is available in the following url ${videoUrl}`
                question: `${videoUrl}`
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
    <div className="output">
      {error && <p className="error">{error}</p>}
      {result && <p>{result}</p>}
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


// import { useState } from "react";
// import axios from "axios";
// import "./v.css";

// const VideoSummarizer = () => {
//   const [videoUrl, setVideoUrl] = useState("");
//   const [result, setresult] = useState("");
  

// try {
//   const response = axios.request(options);
//   console.log(response.data);
//   const finalData = response.result.summary;
//   setresult(finalData)
// } catch (error) {
//   console.error(error);
// }

//   const options = () => {
//     axios.post('http://localhost:3000/videosummarizer', {
//       question: {videoUrl},
//     })
//     .then(response => {
//       setresult(response.data.result); // Get the result from the response
//     })
//     .catch(error => {
//       console.error('Error:', error);
//     });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     const blog = { videoUrl };
//     console.log(blog);
//   };

//   // Video Input Component
//   const VideoInput = () => (
//     <form action="POST" method="post">
//       <input
//         className="VideoInput"
//         type="text"
//         value={videoUrl}
//         placeholder="YouTube Video URL" required
//         onChange={(e) => setVideoUrl(e.target.value)}
//       />
//     </form>
//   );


//   // Submit Button Component
//   const SubmitButton = () => (
//     <button className="SubmitButton" type="submit" onClick={options} value="Submit">
//       Summarize
//       <span className="transition"></span>
//       <span className="gradient"></span>
//       <span className="label">Button</span>
//     </button>
//   );


//   // Output Content
//   const Outputcontent = () => {
//     <div className="output">
//           <p>{result}</p>;
//     </div>
//   };

//   return (
//     <>
//       <form onSubmit={handleSubmit}>
//         <div className="app">
//           <VideoInput />
//           <SubmitButton />
//           <Outputcontent />
//         </div>
//       </form>
//     </>
//   );
// };
// export default VideoSummarizer;