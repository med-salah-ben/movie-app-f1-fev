import React from 'react'
import { useParams } from 'react-router-dom';
import YouTube from 'react-youtube';

const Trailer = ({movies}) => {    
    const params = useParams();

    console.log("paramsID : ",params)
    console.log("id" , movies.name)
    const movie = movies.find((movie)=>movie.trailerID === params.id)
    console.log("movie : " ,movie)

    const opts = {
        height: '390',
        width: '640',
        playerVars: {
          // https://developers.google.com/youtube/player_parameters
          autoplay: 1,
        },
      };
      let onReady = (event) => {
        // access to player in all event handlers via event.target
        event.target.pauseVideo();
      }
  return (
    <div>
        <YouTube videoId={movie.trailerID} opts={opts} onReady={onReady} />
    </div>
  )
}

export default Trailer