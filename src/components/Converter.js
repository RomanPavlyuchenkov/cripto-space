import { getSelects } from "../pages";
export default class Converter {
  constructor(data) {
    this._searchContainer = document.querySelector(data.searchContainer);
    this._searchContainerCurrency = document.querySelector(
      data.searchContainerCurrency
    );
    this._cryptocurrency = document.querySelector(data.cryptocurrency);
    this._currency = document.querySelector(data.currency);
  }

  showСourse(data, coin) {
    document.querySelector(
      ".converter__button-inner-text-cryptocurrency"
    ).textContent = coin;
    document.querySelector(
      ".converter__button-inner-text-currency"
    ).textContent = Object.keys(data)[0];
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
  //////////////////////////////////Открытие и закрытие контейнеров
  handleShowCryptoCurrencyContainer() {
    document
      .querySelector(".converter__button-cryptocurrency")
      .addEventListener("click", () => {
        this._searchContainer.classList.toggle("converter__search_type_active");
        this._handleSendCryptoCurrency();
      });
    this._closeOverlayCryptoCurrencyContainer();
  }
  handleShowCurrencyContainer() {
    document
      .querySelector(".converter__button-currency")
      .addEventListener("click", () => {
        this._searchContainerCurrency.classList.toggle(
          "converter__search_type_active"
        );
        this._handleSendCurrency();
      });
    this._closeOverlayCurrencyContainer();
  }
  _closeOverlayCryptoCurrencyContainer() {
    window.addEventListener("touchend", (evt) => {
      // при клике в любом месте окна браузера
      const target = evt.target; // находим элемент, на котором был клик
      if (
        !target.closest(".converter__button-cryptocurrency") &&
        !target.closest(".converter__search-cryptocurrency-input") &&
        !target.closest(".option")
      ) {
        // Метод closest ищет ближайший родительский элемент, подходящий под указанный CSS селектор, при этом сам элемент тоже включается в поиск
        this._searchContainer.classList.remove("converter__search_type_active"); // то закрываем окно , удаляя активный класс
      }
    });
    window.addEventListener("click", (evt) => {
      const target = evt.target;
      if (
        !target.closest(".converter__button-cryptocurrency") &&
        !target.closest(".converter__search-cryptocurrency-input")
      ) {
        this._searchContainer.classList.remove("converter__search_type_active");
      }
    });
  }
  _closeOverlayCurrencyContainer() {
    window.addEventListener("touchend", (evt) => {
      // при клике в любом месте окна браузера
      const target = evt.target; // находим элемент, на котором был клик
      if (
        !target.closest(".converter__button-currency") &&
        !target.closest(".converter__search-cryptocurrency-input") &&
        !target.closest(".option")
      ) {
        // Метод closest ищет ближайший родительский элемент, подходящий под указанный CSS селектор, при этом сам элемент тоже включается в поиск
        this._searchContainerCurrency.classList.remove(
          "converter__search_type_active"
        ); // то закрываем окно , удаляя активный класс
      }
    });
    window.addEventListener("click", (evt) => {
      const target = evt.target;
      if (
        !target.closest(".converter__button-currency") &&
        !target.closest(".converter__search-cryptocurrency-input")
      ) {
        this._searchContainerCurrency.classList.remove(
          "converter__search_type_active"
        );
      }
    });
  }
  ////////////////////////////////////////////////////Отправить value селектов
  _selectedCurrency() {
    const btnCryptoCurrency = document.querySelector(
      ".converter__button-inner-text-cryptocurrency"
    ).textContent;
    getSelects(btnCryptoCurrency, this.textContent);
  }
  _handleSendCurrency() {
    const select = document.querySelector(".converter__currency-select");
    const optionList = select.querySelectorAll(".option");
    optionList.forEach((i) => {
      i.addEventListener("click", this._selectedCurrency);
    });
  }
  _selectedCryptoCurrency() {
    const btnCurrency = document.querySelector(
      ".converter__button-inner-text-currency"
    ).textContent;
    getSelects(this.textContent, btnCurrency);
  }
  _handleSendCryptoCurrency() {
    const select = document.querySelector(".converter__cryptocurrency-select");
    const optionList = select.querySelectorAll(".option");
    optionList.forEach((i) => {
      i.addEventListener("click", this._selectedCryptoCurrency);
    });
  }
  /////////////////////////////////////////////////Обработчик поиска монет
  handleSearhCoin() {
    document
      .querySelector(".converter__search-cryptocurrency-input")
      .addEventListener("input", this._searchCoin);
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
    const options = select.querySelectorAll(".option");
    // Перебираем опции и скрываем те, которые не соответствуют поисковому запросу
    for (let i = 0; i < options.length; i++) {
      let txtValue = options[i].textContent.toLocaleLowerCase();
      if (txtValue.indexOf(input) > -1) {
        options[i].style.display = "";
      } else {
        options[i].style.display = "none";
      }
    }
  }
}
