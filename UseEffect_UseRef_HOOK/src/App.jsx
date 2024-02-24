import { useState, useRef, useEffect } from 'react';



function VideoPlayer({ src, isPlaying }) {
  const ref = useRef(null);

  //when dom or page loaded
  useEffect(()=>{
    alert("page loaded")
    console.log("page loaded!");
  })

useEffect(()=>{
  if(!isPlaying){
    alert("video paused!")
  }
})


  //to play or pause the video
  useEffect(() => {
    if (isPlaying) {
      ref.current.play();
    } else {
      ref.current.pause();
    }
  });

  return <video ref={ref} src={src} loop playsInline />;
}

export default function App() {
  const [isPlaying, setIsPlaying] = useState(false);
  return (
    <>
      <button onClick={() => setIsPlaying(!isPlaying)}>
        {isPlaying ? 'Pause' : 'Play'}
      </button>
      <VideoPlayer
        isPlaying={isPlaying}
        src="https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4"
      />
    </>
  );
}

