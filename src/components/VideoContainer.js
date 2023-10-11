import React, { useEffect, useState } from "react";
import { YOUTUBE_VIDEOS_API } from "../utils/constants";
import VideoCard from "./VideoCard";

const VideoContainer = () => {
  //super-powerfull local state variable
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    getVideos();
  }, []);

  const getVideos = async () => {
    const data = await fetch(YOUTUBE_VIDEOS_API);
    const json = await data.json();
    setVideos(json.items);
  };

  return (
    <div className="flex flex-wrap ">
      {videos.map((movieData) => (
        // <Link
        //   key={movieData.id}
        //   to={`/youtube-project/watch?v=${movieData.id}`}
        // >
        <VideoCard info={movieData} />
        // </Link>
      ))}
    </div>
  );
};

export default VideoContainer;
