export default class ApiCryptoCompare {
  getCoinPrice(coin, currency) {
    return fetch(
      `https://min-api.cryptocompare.com/data/price?fsym=${coin}&tsyms=${currency}`
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
