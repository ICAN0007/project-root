let currentPage = 1;
const perPage = 10;
let videos = [];

async function loadVideos() {
  const res = await fetch('videos.json');
  videos = await res.json();
  videos.sort((a, b) => new Date(b.addedAt) - new Date(a.addedAt));
  renderVideos();
}

function renderVideos() {
  const start = (currentPage - 1) * perPage;
  const end = start + perPage;
  const pageVideos = videos.slice(start, end);
  const grid = document.getElementById('videoGrid');
  grid.innerHTML = pageVideos.map(v => `
    <div class="card" onclick="location.href='video.html?id=${v.id}'">
      <img src="${v.thumb}" alt="${v.title}">
      <h4>${v.title}</h4>
    </div>
  `).join('');
  document.getElementById('pageInfo').innerText = `Page ${currentPage}`;
}

document.getElementById('nextPage').addEventListener('click', () => {
  if (currentPage * perPage < videos.length) {
    currentPage++;
    renderVideos();
  }
});

document.getElementById('prevPage').addEventListener('click', () => {
  if (currentPage > 1) {
    currentPage--;
    renderVideos();
  }
});

document.getElementById('searchBar').addEventListener('input', (e) => {
  const term = e.target.value.toLowerCase();
  const filtered = videos.filter(v => v.title.toLowerCase().includes(term));
  const grid = document.getElementById('videoGrid');
  grid.innerHTML = filtered.map(v => `
    <div class="card" onclick="location.href='video.html?id=${v.id}'">
      <img src="${v.thumb}" alt="${v.title}">
      <h4>${v.title}</h4>
    </div>
  `).join('');
});

document.getElementById('menuBtn').addEventListener('click', () => {
  const menu = document.getElementById('menu');
  menu.style.display = menu.style.display === 'flex' ? 'none' : 'flex';
});

loadVideos();
