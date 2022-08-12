import React from "react";
import VideoText from "./VideoText";
import './video.css'

const Video = () => (
    <div className={'video'}>
        <div className="video_youtube">
            <iframe width="160" height="80" src="https://www.youtube.com/embed/e1jndfRZIao" title="YouTube video player"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen="true" id="video" tabindex="1" fs="1" playsinline="1"></iframe>
        </div>
        <VideoText />
</div>
);

export default Video;