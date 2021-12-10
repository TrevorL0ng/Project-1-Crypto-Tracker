var apiUrl = "https://api.coinlore.net/api/tickers/?start=200&limit=10";


fetch(apiUrl)
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    var coinData = data.data
    console.log(data);
    for (var i = 0; i < coinData.length; i++) {
      console.log(coinData[i].name);
      console.log(coinData[i].price_usd);
    }
  });
