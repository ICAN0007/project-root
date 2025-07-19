const videos = [
  {
    id: "v1",
    title: "Sample Video 1",
    categories: ["viral"],
    tags: ["funny"],
    src: "https://files.catbox.moe/l2524k.mp4",
    thumb: "https://files.catbox.moe/77z1vd.png",
    duration: 200,
    addedAt: "2025-07-19T09:00:00Z"
  },
  {
    id: "v2",
    title: "Sample Video 2",
    categories: ["latest"],
    tags: ["trending"],
    src: "https://files.catbox.moe/6qzodz.mp4",
    thumb: "https://files.catbox.moe/ubwr6d.png",
    duration: 250,
    addedAt: "2025-07-18T09:00:00Z"
  }
];

// Sort videos by newest
videos.sort((a, b) => new Date(b.addedAt) - new Date(a.addedAt));

const grid = document.getElementById('video-grid');
grid.innerHTML = ""; // Clear

videos.forEach(v => {
  const card = document.createElement('div');
  card.className = "bg-gray-800 rounded shadow overflow-hidden hover:shadow-lg transition";
  card.innerHTML = `
    <a href="${v.src}" target="_blank">
      <img src="${v.thumb}" alt="${v.title}" class="w-full h-40 object-cover">
      <div class="p-2">
        <h3 class="font-bold text-sm truncate">${v.title}</h3>
        <p class="text-xs text-gray-400">${v.categories.join(", ")}</p>
      </div>
    </a>
  `;
  grid.appendChild(card);
});
