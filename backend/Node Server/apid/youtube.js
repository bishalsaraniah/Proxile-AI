const axios = require('axios');
const { JSDOM } = require('jsdom');

// Extract Video ID from YouTube URL
const extractVideoId = (videoUrl) => {
  const urlObj = new URL(videoUrl);
  const videoId = urlObj.searchParams.get('v');
  return videoId;
};

// Fetch Video Captions Track
const getVideoCaptions = async (videoId, language = 'en') => {
  const YOUTUBE_API_KEY = process.env.YOUTUBE_API_KEY;
  
  // Get list of caption tracks available for the video
  const captionsTrackListUrl = `https://www.googleapis.com/youtube/v3/captions?part=snippet&videoId=${videoId}&key=${YOUTUBE_API_KEY}`;
  
  try {
    const trackResponse = await axios.get(captionsTrackListUrl);
    
    if (trackResponse.data.items.length === 0) {
      throw new Error('No captions available for this video.');
    }

    // Find the caption track matching the requested language
    const track = trackResponse.data.items.find(item => item.snippet.language === language);

    if (!track) {
      throw new Error(`No captions found for language: ${language}`);
    }

    // Use the caption ID to fetch the captions
    const captionId = track.id;
    const captionsUrl = `https://www.googleapis.com/youtube/v3/captions/${captionId}?tfmt=srv3&key=${YOUTUBE_API_KEY}`;
    
    const captionResponse = await axios.get(captionsUrl);

    const { data: captionsXML } = captionResponse;
    const dom = new JSDOM(captionsXML);
    const textTracks = Array.from(dom.window.document.querySelectorAll('text')).map(node => node.textContent);
    
    const fullCaptionText = textTracks.join(' '); // Join all caption text into a single string

    return fullCaptionText;
  } catch (error) {
    console.error('Error fetching captions:', error.message);
    throw new Error('Failed to fetch video captions');
  }
};

module.exports = { extractVideoId, getVideoCaptions };
