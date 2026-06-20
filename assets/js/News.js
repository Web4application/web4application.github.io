const ticker = document.getElementById("ticker");

// FIXED RSS (The Verge)
const RSS_URL = "https://www.theverge.com/rss/index.xml";

async function loadNews() {
  try {
    const api = `https://api.rss2json.com/v1/api.json?rss_url=${encodeURIComponent(RSS_URL)}`;
    
    const res = await fetch(api);
    const data = await res.json();

    if (!data.items) return;

    const feed = data.items.slice(0, 8).map(item => {
      return `[${item.title.toUpperCase()}]`;
    }).join(" • ");

    ticker.textContent = feed + " • " + feed;

  } catch (err) {
    ticker.textContent = "NEWS OFFLINE • SYSTEM RUNNING LOCAL MODE";
  }
}

loadNews();
setInterval(loadNews, 600000);
