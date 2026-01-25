exports.handler = async (event) => {
  const { q, from, to, pageSize } = event.queryStringParameters;
  const apiKey = process.env.NEWS_API_KEY;

  const apiUrl = `https://newsapi.org/v2/everything?q=${q}&from=${from}&to=${to}&pageSize=${pageSize}&apiKey=${apiKey}`;

  try {
    const response = await fetch(apiUrl);
    const data = await response.json();

    return {
      statusCode: response.status,
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: "Failed to fetch news" }),
    };
  }
};
