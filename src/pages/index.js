import "../pages/index.css";
import ApiCryptoCompare from "../components/ApiCryptoCompare";
import ApiCryptoRank from "../components/ApiCryptoRank";
import Options from "../components/Options";
import Section from "../components/Section";
import Converter from "../components/Converter";
import CourseCoins from "../components/CourseCoins";
const converter = new Converter({
  searchContainer: ".converter__search_type_cryptocurrency",
  searchContainerCurrency: ".converter__search_type_currency",
  cryptocurrency: ".converter__input_type_cryptocurrency",
  currency: ".converter__input_type_currency",
});

converter.handleSearhCoin();
converter.handleShowCryptoCurrencyContainer();
converter.handleShowCurrencyContainer();
const apiCryptoCompare = new ApiCryptoCompare();
//При загрузке страницы загружаем BTC
apiCryptoCompare
  .getCoinPrice("BTC", "USD")
  .then((data) => {
    converter.showСourse(data, "BTC");
  })
  .catch((err) => {
    console.log(`catch: ${err}`);
  });
//Отправляем выбранную монету в api
export function getSelects(coin, currency) {
  getCoin(coin, currency);
}
function getCoin(coin, currency) {
  apiCryptoCompare
    .getCoinPrice(coin, currency)
    .then((data) => {
      converter.showСourse(data, coin);
    })
    .catch((err) => {
      console.log(`catch: ${err}`);
    });
}
//Выводим монеты в select и на страницу
const apiCryptoRank = new ApiCryptoRank();
apiCryptoRank
  .getAllCoins()
  .then((coins) =>
    coins.data.reverse().forEach((element) => {
      renderElement(element);
    })
  )
  .catch((err) => {
    console.log(`catch: ${err}`);
  });

function renderElement(element) {
  const option = new Options(".template", element);
  const optionElement = option.createOption();
  renderOption.addItem(optionElement);
  const course = new CourseCoins(".template-course", element);
  const courseElement = course.createOption();
  renderCousre.addItem(courseElement);
}

const renderOption = new Section(".converter__cryptocurrency-select");
const renderCousre = new Section(".course__container");
