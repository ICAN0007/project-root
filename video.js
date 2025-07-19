let videos = [];
async function loadVideoPage() {
  const res = await fetch('videos.json');
  videos = await res.json();
  const params = new URLSearchParams(window.location.search);
  const videoId = params.get('id');
  const video = videos.find(v => v.id === videoId);
  if (video) {
    document.getElementById('videoPlayer').innerHTML = `
      <h2>${video.title}</h2>
      <video controls width="100%" src="${video.src}"></video>
    `;
    renderRelated(video);
  }
}

function renderRelated(currentVideo) {
  const related = videos.filter(v => v.id !== currentVideo.id && v.categories.some(c => currentVideo.categories.includes(c)));
  const related6 = related.slice(0, 6);
  const grid = document.getElementById('relatedVideos');
  grid.innerHTML = related6.map(v => `
    <div class="card" onclick="location.href='video.html?id=${v.id}'">
      <img src="${v.thumb}" alt="${v.title}">
      <h4>${v.title}</h4>
    </div>
  `).join('');
}

document.getElementById('menuBtn').addEventListener('click', () => {
  const menu = document.getElementById('menu');
  menu.style.display = menu.style.display === 'flex' ? 'none' : 'flex';
});

loadVideoPage();
