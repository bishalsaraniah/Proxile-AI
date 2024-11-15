// import { useState } from 'react';
// import axios from 'axios';
// import './main.css'

//   // Video Input Component
//   const VideoInput = ({ videoUrl, setVideoUrl }) => (
//     <input
//       type="text"
//       value={videoUrl}
//       onChange={(e) => setVideoUrl(e.target.value)}
//       placeholder="YouTube Video URL" required
//     />
//   );

//   // Submit Button Component
// const SubmitButton = ({ loading }) => (
//   <button type="submit" disabled={loading}>
//     Summarize
//   </button>
// );

// const VideoSummarizer = () => {
//   const [videoUrl, setVideoUrl] = useState('');
//   const [summary, setSummary] = useState('');
//   const [error, setError] = useState('');

// //   const handleInputChange = (e) => {
// //     setInputValue(e.target.value);
// // };

// //   const apiKey = 'AIzaSyBwpE3CLJytveFHei8PuNtpwR2cW4-Qwpw'; // Replace with your YouTube API key
// //   const geminiApiKey = 'AIzaSyAiu4GE_XxGeUjVjjXVZQS4EHoNyBSE6kw'; // Replace with your Gemini API key

//   const getVideoId = (url) => {
//     const match = url.match(/(?:https?:\/\/)?(?:www\.)?youtube\.com\/(?:watch\?v=|embed\/|v\/|.+\?.+v=)([^&]{11})|youtu\.be\/([^&]{11})/);
//     return match ? match[1] || match[2] : null;
//   };

//   const fetchVideoDetails = async () => {
//     const videoId = getVideoId(videoUrl);
//     if (!videoId) {
//       setError('Invalid YouTube URL');
//       return;
//     }

//     try {
//       const response = await axios.get(`https://www.googleapis.com/youtube/v3/videos?id=${videoId}&key=${apiKey}&part=snippet`);
//       if (response.data.items.length === 0) {
//         setError('No video found');
//         return;
//       }
//       const videoDescription = response.data.items[0].snippet.description;
//       console.log('Video Description:', videoDescription); // Log the description
//       await fetchSummary(videoDescription);
//     } catch (err) {
//       // console.error('Error fetching video details:', err.response ? err.response.data : err.message);
//       setError('Error fetching video details');
//     }
//   };

//   const fetchSummary = async (text) => {
//     try {
//        await axios.post('https://api.gemini.com/v1/summarize', {
//         apiKey: geminiApiKey, // Make sure this is correct
//         text: text,
//       }, {
//         headers: {
//           'Content-Type': 'application/json',
//         }
//       })
//       .then(function (response) {
//         console.log('Summary Response:', response.data); // Log the summary response
//         setSummary(response.data.summary);
//       })
//       .catch(function (error) {
//         console.log(error);
//       });

//     } catch (err) {
//       console.error('Error fetching summary:', err.response ? err.response.data : err.message);
//       setError('Error fetching summary: ' + (err.response ? JSON.stringify(err.response.data) : err.message));
//     }
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     setSummary('');
//     setError('');
//     fetchVideoDetails();
//   };

//   return (
//     <div className="app">
//     <h1>YouTube Summarizer</h1>
//     <form onSubmit={handleSubmit}>
//       <VideoInput videoUrl={videoUrl} setVideoUrl={setVideoUrl} />
//       {/* <PromptInput prompt={prompt} setPrompt={setPrompt} /> */}
//       {/* <SubmitButton loading={loading} /> */}
//       <SubmitButton />
//     </form>

//     {error && <p style={{ color: 'red' }}>{error}</p>}
//       {summary && (
//         <div>
//           <h2>Summary:</h2>
//           <p>{summary}</p>
//         </div>
//       )}
//     </div>
//   );

//   // return (
//   //   <div style={{ padding: '20px'}}>

//   //     <h1 style={{display: 'flex', alignItems: 'center', justifyContent: 'center'}}>YouTube Video Summarizer</h1>
//   //     <form onSubmit={handleSubmit} style={{paddingTop:10, display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
//   //       <input
//   //         type="text"
//   //         value={videoUrl}
//   //         onChange={(e) => setVideoUrl(e.target.value)}
//   //         placeholder="Enter YouTube video URL"
//   //         required
//   //         style={{ width: '300px', padding: '10px' }}
//   //       />

//   //       <button type="submit" style={{ padding: '10px',paddingLeft:10}}>Summarize</button>
//   //     </form>
//   //     {error && <p style={{ color: 'red' }}>{error}</p>}
//   //     {summary && (
//   //       <div>
//   //         <h2>Summary:</h2>
//   //         <p>{summary}</p>
//   //       </div>
//   //     )}
//   //   </div>
//   // );
// };
// export default VideoSummarizer;