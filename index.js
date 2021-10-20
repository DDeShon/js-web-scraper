const PORT = 8000;
const axios = require("axios");
const cheerio = require("cheerio");
const express = require("express");

const app = express();
const url = "https://www.theguardian.com/us";

axios(url).then((response) => {
  const html = response.data;
  const view = cheerio.load(html);
  view(".fc-item__title", html).each(function () {
    const title = view(this).text();
    const url = view(this).find("a").attr("href");
  });
});

app.listen(PORT, () => console.log(`Server running on PORT ${PORT}`));
