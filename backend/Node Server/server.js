




// const express = require('express');
// const dotenv = require('dotenv');
// const { extractVideoId, getVideoCaptions } = require('./api/youtube');
// const { getVideoSummary } = require('./api/gemini');

// // Load environment variables
// dotenv.config();

// const app = express();
// app.use(express.json());

// // Route to summarize YouTube video captions
// app.post('/api/summarize', async (req, res) => {
//   const { videoUrl } = req.body;
  
//   try {
//     const videoId = extractVideoId(videoUrl);
//     const captions = await getVideoCaptions(videoId, 'en'); // Fetch English captions by default
//     const summary = await getVideoSummary(captions);        // Summarize the captions using Gemini
    
//     res.json({ summary });
//   } catch (error) {
//     console.error('Error:', error.message);
//     res.status(500).json({ error: error.message });
//   }
// });

// // Start server
// const PORT = process.env.PORT || 5000;
// app.listen(PORT, () => console.log(`Server running on port ${PORT}`));




