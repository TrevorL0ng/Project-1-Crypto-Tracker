var apiUrl = "https://api.coinlore.net/api/tickers/?start=200&limit=10";
var coinData = "";
var input = document.getElementById("cryptoInput");
var cryptoText = document.getElementById("cryptoOutputName");
var cryptoPrice = document.getElementById("cryptoOutputValue");
fetch(apiUrl)
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    coinData = data.data;
    input.disabled = false;
    console.log(coinData);
  });

  function searchFunction() {
    var filter, txtValue;
    filter = input.value.toUpperCase();
    for (var i = 0; i < coinData.length; i++) {
      if (filter == coinData[i].name.toUpperCase()) {
        console.log(coinData[i].name);
        console.log(coinData[i].price_usd);
        cryptoText.textContent = coinData[i].name;
        cryptoPrice.textContent = coinData[i].price_usd;
      }
    } 
  }