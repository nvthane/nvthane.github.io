var frameNumber = 0, // start video at frame 0
    // lower numbers = faster playback
    playbackConst = 300, 
    // get page height from video duration
    setHeight = document.getElementById("set-height"), 
    // select video element         
    vid = document.getElementById('v0'); 

// dynamically set the page height according to video length
vid.addEventListener('loadedmetadata', function() {
  setHeight.style.height = Math.floor(vid.duration) * playbackConst + "px";
});

// Use requestAnimationFrame for smooth playback
function scrollPlay() {
  var frameNumber = window.pageYOffset / playbackConst,
      vid = document.getElementById("v0"),
      maxFramesToRender = 10;
  
  if (Math.floor(frameNumber) > maxFramesToRender) {
    vid.currentTime = frameNumber - maxFramesToRender;
  } else {
    vid.currentTime = 0;
  }
  window.requestAnimationFrame(scrollPlay);
}

window.requestAnimationFrame(scrollPlay);
