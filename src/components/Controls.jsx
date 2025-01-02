import React from "react";
import { useMeeting } from "@videosdk.live/react-sdk";

function Controls({ onStartScreenShare, onStopScreenShare }) {
  const { leave, toggleMic, toggleWebcam } = useMeeting();
  return (
    <div>
      <button onClick={() => leave()}>Leave</button>
      <button onClick={() => toggleMic()}>toggleMic</button>
      <button onClick={() => toggleWebcam()}>toggleWebcam</button>
    </div>
  );
}

export default Controls;
