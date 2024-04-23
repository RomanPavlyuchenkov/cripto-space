import { selectCryptoCurrency, selectCurrency } from "../utils/constants.js";
export default class Converter {
  constructor(data) {
    this._searchContainer = document.querySelector(data.searchContainer);

    this._searchInput = this._searchContainer.querySelector(
      ".converter__search-cryptocurrency-input"
    );
    this._selectCryptocurrency = this._searchContainer.querySelector(
      ".converter__cryptocurrency-select"
    );
    this._cryptocurrency = document.querySelector(data.cryptocurrency);
    this._currency = document.querySelector(data.currency);
    this._selectCurrency = document.querySelector(data.selectCurrency);
  }

  showСourse(data, coin) {
    document.querySelector(
      ".converter__button-cryptocurrency option"
    ).textContent = coin;
    this._cryptocurrency.value = "1";
    this._currency.value = Object.values(data)[0];
    this._converter(data);
  }
  _converter(data) {
    const cryptocurrencyInput = document.querySelector(
      ".converter__input_type_cryptocurrency"
    );
    const currencyInput = document.querySelector(
      ".converter__input_type_currency"
    );
    const courseCoin = Object.values(data)[0];
    cryptocurrencyInput.addEventListener("input", function () {
      currencyInput.value = cryptocurrencyInput.value * courseCoin;
    });
    currencyInput.addEventListener("input", function () {
      cryptocurrencyInput.value = currencyInput.value / courseCoin;
    });
  }
  handleShowCryptoCurrencyContainer() {
    document
      .querySelector(".converter__button-cryptocurrency")
      .addEventListener("click", () => {
        this._searchContainer.classList.toggle(
          "converter__search-cryptocurrency_type_active"
        );
      });
    this._closeOverlay();
  }
  _closeOverlay() {
    window.addEventListener("click", (e) => {
      // при клике в любом месте окна браузера
      const target = e.target; // находим элемент, на котором был клик
      if (
        !target.closest(".converter__button-cryptocurrency") &&
        !target.closest(".converter__search-cryptocurrency-input")
      ) {
        // Метод closest ищет ближайший родительский элемент, подходящий под указанный CSS селектор, при этом сам элемент тоже включается в поиск
        this._searchContainer.classList.remove(
          "converter__search-cryptocurrency_type_active"
        ); // то закрываем окно , удаляя активный класс
      }
    });
    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape") {
        this._searchContainer.classList.remove(
          "converter__search-cryptocurrency_type_active"
        );
      }
    });
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
      .querySelector(".converter__search-cryptocurrency-input")
      .value.toLowerCase();
    // Получаем список элементов выбора
    const select = document.querySelector(".converter__cryptocurrency-select");
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
