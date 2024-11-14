// src/pages/MethodsPage.jsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import '../Adornos/MethodsPage.css';
import '../Adornos/VideoPage.css';
import video1Thumbnail from '../assets/thumbnails/video1.jpg';
import video2Thumbnail from '../assets/thumbnails/video2.jpg';
import video3Thumbnail from '../assets/thumbnails/video3.jpg';
import video4Thumbnail from '../assets/thumbnails/video4.jpg';

const MethodsPage = () => {
  const navigate = useNavigate();
  const [selectedVideo, setSelectedVideo] = useState(null);

  const handleClick = (videoUrl) => {
    setSelectedVideo(videoUrl);
  };

  if (selectedVideo) {
    return (
      <div className="video-page">

        <div className="video-container">
          <iframe
            width="100%"
            height="100%"
            src={selectedVideo}
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
        <button onClick={() => setSelectedVideo(null)} className="return-button">
          Volver
        </button>
      </div>
    );
  }

  return (
    <div className="methods-page">
      <h1>Diferentes métodos de relajación</h1>
      <div className="video-thumbnails">
        <div className="thumbnail" onClick={() => handleClick("https://www.youtube.com/embed/PHKrspKW06k")}>
         <img src={video1Thumbnail} alt="Video 1" />
          <div className="play-icon">▶️</div>
        </div>
        <div className="thumbnail" onClick={() => handleClick("https://www.youtube.com/embed/EGO5m_DBzF8")}>
          <img src={video2Thumbnail} alt="Video 2" />
          <div className="play-icon">▶️</div>
        </div>
        <div className="thumbnail" onClick={() => handleClick("https://www.youtube.com/embed/vrnwp7EE3VI")}>
         <img src={video3Thumbnail} alt="Video 3" />
          <div className="play-icon">▶️</div>
        </div>
        <div className="thumbnail" onClick={() => handleClick("https://www.youtube.com/embed/6fQEeeO7AYs")}>
          <img src={video4Thumbnail} alt="Video 4" />
          <div className="play-icon">▶️</div>
        </div>
      </div>
    </div>
  );
};

export default MethodsPage;

