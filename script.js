function toggleFullscreen() {
  const frame = document.getElementById("gameFrame");
  const iframeDoc = frame.contentDocument || frame.contentWindow.document;

  if (frame.requestFullscreen) {
    frame.requestFullscreen();
  } else if (frame.webkitRequestFullscreen) {
    frame.webkitRequestFullscreen();
  } else if (frame.msRequestFullscreen) {
    frame.msRequestFullscreen();
  } else {
    alert("Fullscreen not supported on this browser.");
  }
}
