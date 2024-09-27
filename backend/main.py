from flask import Flask, jsonify
from flask_cors import CORS
app = Flask(__name__)

import streamlit as st
from dotenv import load_dotenv

import os
import google.generativeai as genai
from youtube_transcript_api import YouTubeTranscriptApi


CORS(app)
load_dotenv() ##load all the nevironment variables



@app.route("/api/users", methods=['GET'])

def users():
    data = {
        "message":"hello I am Bishal"
    }
    return jsonify(data)



## getting the transcript data from yt videos
@app.route("/api/extract_transcript_details", methods=['GET'])

def extract_transcript_details(youtube_video_url):
    try:
        video_id=youtube_video_url.split("=")[1]
        
        transcript_text=YouTubeTranscriptApi.get_transcript(video_id)

        transcript = ""
        for i in transcript_text:
            transcript += " " + i["text"]

        return transcript

    except Exception as e:
        raise e







genai.configure(api_key=os.getenv("GOOGLE_API_KEY"))

prompt="""You are Yotube video summarizer. You will be taking the transcript text
and summarizing the entire video and providing the important summary in points
within 250 words. Please provide the summary of the text given here:  """




## getting the summary based on Prompt from Google Gemini Pro
@app.route("/api/generate_gemini_content", methods=['GET'])

def generate_gemini_content(transcript_text,prompt):
    model=genai.GenerativeModel("gemini-pro")
    response=model.generate_content(prompt+transcript_text)
    return response.text

st.title("YouTube Transcript to Detailed Notes Converter")
youtube_link = st.text_input("Enter YouTube Video Link:")

if youtube_link:
    video_id = youtube_link.split("=")[1]
    print(video_id)
    st.image(f"http://img.youtube.com/vi/{video_id}/0.jpg", use_column_width=True)

if st.button("Get Detailed Notes"):
    transcript_text=extract_transcript_details(youtube_link)

    if transcript_text:
        summary=generate_gemini_content(transcript_text,prompt)
        st.markdown("## Detailed Notes:")
        st.write(summary)





if __name__ == "__main__":
    app.run(port=8000)