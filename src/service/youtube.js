import axios from "axios";

class Youtube {
  constructor(key) {
    this.youtube = axios.create({
      baseURL: "https://youtube.googleapis.com/youtube/v3",
      params: { key: key, part: "snippet" },
    });
  }

  async mostPopular() {
    const response = await this.youtube.get("videos", {
      params: {
        chart: "mostPopular",
        maxResults: 25,
      },
    });
    return response.data.items;
  }

  async search(term) {
    const response = await this.youtube.get("search", {
      params: {
        maxResults: 25,
        q: term,
        type: "video",
      },
    });
    return response.data.items.map((item) => ({
      ...item,
      id: item.id.videoId,
    }));
  }
}

export default Youtube;
