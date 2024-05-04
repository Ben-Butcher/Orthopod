const podcastContainer = document.querySelector(".podcast");
const vidBtn = document.getElementById("watch-btn");

let randomVid = null;
function loadVideo() {
  randomVid = Math.floor(Math.random() * 8) + 1;
  podcastContainer.innerHTML += `<video controls>
    <source src="media-videos/vid-${randomVid}.mp4" type="video/mp4" />
  </video>`;
  console.log(randomVid);
}
function loadAudio() {}
