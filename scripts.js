// Sample video data (your JSON)
const videos = [
  {
    "id": "v1",
    "title": "Sample Video 1",
    "categories": ["viral"],
    "tags": ["funny"],
    "src": "https://files.catbox.moe/l2524k.mp4",
    "thumb": "https://files.catbox.moe/77z1vd.png",
    "duration": 200,
    "addedAt": "2025-07-19T09:00:00Z"
  },
  {
    "id": "v2",
    "title": "Sample Video 2",
    "categories": ["latest"],
    "tags": ["trending"],
    "src": "https://files.catbox.moe/6qzodz.mp4",
    "thumb": "https://files.catbox.moe/ubwr6d.png",
    "duration": 250,
    "addedAt": "2025-07-18T09:00:00Z"
  }
];

// Sort videos by date (newest first)
videos.sort((a, b) => new Date(b.addedAt) - new Date(a.addedAt));

const videoGrid = document.getElementById('video-grid');

// Render videos
videos.forEach(video => {
  const videoCard = document.createElement('div');
  videoCard.className = 'bg-gray-900 rounded overflow-hidden shadow hover:shadow-lg transition';

  videoCard.innerHTML = `
    <a href="${video.src}" target="_blank">
      <img src="${video.thumb}" alt="${video.title}" class="w-full h-40 object-cover">
      <div class="p-2">
        <h3 class="text-sm font-bold truncate">${video.title}</h3>
        <p class="text-xs text-gray-400">${video.categories.join(', ')}</p>
      </div>
    </a>
  `;
  videoGrid.appendChild(videoCard);
});
