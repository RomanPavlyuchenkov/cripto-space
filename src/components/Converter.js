import { selectCryptoCurrency, selectCurrency } from "../utils/constants.js";
export default class Converter {
  constructor(data) {
    this._searchContainer = document.querySelector(data.searchContainer);
    this._searchInput = this._searchContainer.querySelector(
      ".converter__searchCoin-input"
    );
    this._selectCryptocurrency = this._searchContainer.querySelector(
      ".converter__searchCoin-select"
    );
    this._cryptocurrency = document.querySelector(data.cryptocurrency);
    this._currency = document.querySelector(data.currency);
    this._selectCurrency = document.querySelector(data.selectCurrency);
  }

  showСourse(data, coin) {
    document.querySelector(".converter__button-inner-text").textContent = coin;
    this._cryptocurrency.value = "1";
    this._currency.value = Object.values(data)[0];
  }
  //Отправить value селектов
  handleSendCurrency(getCoin) {
    this._selectCurrency.addEventListener("change", function () {
      getCoin(selectCryptoCurrency.value, selectCurrency.value);
    });
  }
  handleSendCoinn(getCoin) {
    this._selectCryptocurrency.addEventListener("change", function () {
      getCoin(selectCryptoCurrency.value, selectCurrency.value);
    });
  }
  //Обработчик поиска монет
  handleSearhCoin() {
    this._searchInput.addEventListener("input", this._searchCoin);
  }

  _searchCoin() {
    // Функция для выполнения поиска
    // Получаем значение введенное пользователем
    const input = document
      .querySelector(".converter__searchCoin-input")
      .value.toLowerCase();
    // Получаем список элементов выбора
    const select = document.querySelector(".converter__searchCoin-select");
    // Получаем список опций
    const options = select.getElementsByTagName("option");

    // Перебираем опции и скрываем те, которые не соответствуют поисковому запросу
    for (var i = 0; i < options.length; i++) {
      var txtValue = options[i].text.toLowerCase();
      if (txtValue.indexOf(input) > -1) {
        options[i].style.display = "";
      } else {
        options[i].style.display = "none";
      }
    }
  }
}
