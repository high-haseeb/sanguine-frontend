import React, { useState, useRef, useEffect } from 'react';
import Video from "../src/assets/Hype fim 11.mov"
// import Play from "../src/assets/play-solid.svg"
// Pause
// import Pause from "../src/assets/Pause-solid.svg"

const AutoplayVideo = () => {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isHovered, setIsHovered] = useState(false);

  const handlePlayPause = () => {
    const videoElement = videoRef.current;
    if (isPlaying) {
      videoElement.pause();
    } else {
      videoElement.play();
    }
    setIsPlaying(!isPlaying);
  };

  useEffect(() => {
    const videoElement = videoRef.current;
    let options = {
      root: null,
      rootMargin: '0px',
      threshold: 0.5
    };

    const callback = (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          videoElement.play();
          setIsPlaying(true);
        } else {
          videoElement.pause();
          setIsPlaying(false);
        }
      });
    };

    const observer = new IntersectionObserver(callback, options);
    observer.observe(videoElement);

    // Cleanup observer on component unmount
    return () => {
      observer.unobserve(videoElement);
    };
  }, []);

  return (
    <div 
      className='video-container'
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <video 
        className='video' 
        controls={false} 
        autoPlay 
        muted 
        ref={videoRef}
        loop
      >
        <source src={Video} type="video/mp4" />
      </video>
      {isHovered && (
        <div className='controls'>
          <button onClick={handlePlayPause}>
          {isPlaying ? (
             <i class="fa-solid fa-pause"></i>
             
            ) : (
              <i class="fa-solid fa-play"></i>
            )}

          </button>
        </div>
      )}
    </div>
  );
};

export default AutoplayVideo;
