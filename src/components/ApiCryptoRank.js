export default class ApiCryptoRank {
  getAllCoins() {
    return fetch(
      "https://api.cryptorank.io/v1/currencies?api_key=fe462838ebd400caa596ee3563d4a549e76e831ba7b378491b098497f871"
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
