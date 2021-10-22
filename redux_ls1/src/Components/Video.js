import React from "react"
import ReactPlayer from "react-player"

function Video(props) {
  return (
    <div className="video">
      <ReactPlayer
        url={props.URL}
      />
    </div>
  )
}

export default Video