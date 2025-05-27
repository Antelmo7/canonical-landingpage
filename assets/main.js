const url =
  "https://youtube138.p.rapidapi.com/channel/videos/?id=UCJ65UG_WgFa_O_odbiBWZoA&filter=videos_latest&hl=en&gl=US";
const options = {
  method: "GET",
  headers: {
    "x-rapidapi-key": "82aa2ced4amsh9ed4318ad7dfbd2p1f35aajsn32472270dd8a",
    "x-rapidapi-host": "youtube138.p.rapidapi.com",
  },
};

const content = null || document.getElementById('content');

async function fetchData(apiUrl) {
  const response = await fetch(apiUrl, options);
  const data = await response.json();
  return data;
}

(async () => {
  try {
    const videos = await fetchData(url);
    let view = `
    ${videos.contents
      .map(
        (video) => `
      <div class="group relative">
        <div
          class="w-full bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:aspect-none">
          <img src="${video.video.thumbnails[1].url}" alt="" class="w-full">
        </div>
        <div class="mt-4 flex justify-between">
          <h3 class="text-sm text-gray-700">
            <span aria-hidden="true" class="absolute inset-0"></span>
            ${video.video.title}
          </h3>
        </div>
      </div>
    `
      )
      .slice(0, 4)
      .join("")}
    `;
    content.innerHTML = view;
  } catch (error) {
    console.error(error);
  }
})();