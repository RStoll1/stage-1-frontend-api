export const baseUrl =
  process.env.NODE_ENV === "production"
    ? "/.netlify/functions/news-proxy"
    : "http://localhost:3000";

export const handleServerResponse = (res) => {
  if (res.ok) {
    return res.json();
  }
  return res.json().then((err) => Promise.reject(err));
};

export function getItems() {
  return new Promise((resolve, reject) =>
    resolve([
      {
        _id: "65f7368dfb74bd6a92114c85",
        source: {
          name: "Source Name",
          id: "source-id",
        },
        title: "News article title",
        description: "News article description",
        url: "News article URL",
        urlToImage: "News article image URL",
        publishedAt: "2026-01-15T12:34:56Z",
        content: "News Article Content. Whatever it may be",
      },
      {
        _id: "696f314dc612422a711a0d97",
        source: {
          name: "Source Name",
          id: "source-id",
        },
        author: "Author Name",
        title: "News article title",
        description: "News article description",
        url: "News article URL",
        urlToImage: "News article image URL",
        publishedAt: "2026-01-15T12:34:56Z",
        content: "News Article Content. Whatever it may be",
      },
      {
        _id: "696f3159401bb5a2ec0e3120",
        source: {
          name: "Source Name",
          id: "source-id",
        },
        title: "News article title",
        description: "News article description",
        url: "News article URL",
        urlToImage: "News article image URL",
        publishedAt: "2026-01-15T12:34:56Z",
        content: "News Article Content. Whatever it may be",
      },
    ])
  );
}

export function saveArticle(article) {
  return new Promise((resolve, reject) => {
    resolve({
      _id: "65f7371e7bce9e7d331b11a0",
      source: article.source.name,
      publishedAt: article.publishedAt,
      description: article.description,
      url: article.url,
      title: article.title,
      urlToImage: article.urlToImage,
    });
  });
}
