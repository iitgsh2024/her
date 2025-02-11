import {useEffect, useState} from 'react';

import "./LocalVideo.css";

const LocalVideo = (props) => {

  const [st, setst] = useState(false);
  useEffect(()=>{
    console.log(props.VideoStart);
    if(props.VideoStart){
      setst(true);
    }
  },[props.VideoStart]);

  return (
    <div className={`video-container ${st ? "show" : ""}`}>
      <video width="80%" controls>
        <source src="/bideo.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
    
  );
};
  
export default LocalVideo;