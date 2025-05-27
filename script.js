function loadGame(url) {
  document.getElementById("gameFrame").src = url;
}

function toggleFullscreen() {
  const frame = document.getElementById("gameFrame");
  if (frame.requestFullscreen) {
    frame.requestFullscreen();
  } else if (frame.webkitRequestFullscreen) {
    frame.webkitRequestFullscreen();
  } else if (frame.msRequestFullscreen) {
    frame.msRequestFullscreen();
  }
}

function minimizeGame() {
  document.getElementById("gameFrame").src = "";
}

document.getElementById("toggleSidebar").addEventListener("click", () => {
  const sidebar = document.getElementById("sidebar");
  sidebar.style.width = sidebar.style.width === "50px" ? "250px" : "50px";
});
