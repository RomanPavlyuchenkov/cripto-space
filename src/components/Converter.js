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
    this._usd = document.getElementById("usd");
    this._eur = document.getElementById("eur");
    this._rub = document.getElementById("rub");
  }
  showСourse(data, coin) {
    document.querySelector(".converter__button-inner-text").textContent = coin;
    this._cryptocurrency.value = "1";
    if (this._usd.selected) {
      document.querySelector(".converter__input_type_currency").value =
        data.USD;
    } else if (this._eur.selected) {
      document.querySelector(".converter__input_type_currency").value =
        data.EUR;
    } else if (this._rub.selected) {
      document.querySelector(".converter__input_type_currency").value =
        data.RUB;
    }

    this._handleSearchCurrency(data);
  }
  _handleSearchCurrency(data) {
    this._usd.value = data.USD;
    this._eur.value = data.EUR;
    this._rub.value = data.RUB;
    const Currency = document.querySelector(".converter__select-currency");
    document;

    Currency.addEventListener("change", function () {
      document.querySelector(".converter__input_type_currency").value =
        this.value;
    });
  }
  handleSendCoinn(getCoin) {
    /*  Обработчик отправки монеты в api */
    this._selectCryptocurrency.addEventListener("change", function () {
      getCoin(this.value);
    });
  }
  handleSearhCoin() {
    /*   Обработчик поиска монет */
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
