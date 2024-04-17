export default class ApiCryptoCompare {
  getCoinPrice(coin) {
    return fetch(
      `https://min-api.cryptocompare.com/data/price?fsym=${coin}&tsyms=USD,RUB,EUR`
    ).then(this._handleResponse);
  }
  _handleResponse(res) {
    if (res.ok) {
      return res.json();
    } else {
      return Promise.reject(`Ошибка:${res.status}`);
    }
  }
}
