const axios = require("axios");

const newsPromise = axios.get("https://newsapi.org/v2/top-headlines?apiKey=c350d894c22a4b6f9ee28d388e9cdeb0&sources=cnn");

newsPromise.then((response) => 
{
  const {articles} = response.data;
  console.log(typeof articles);
  console.log(articles);

});