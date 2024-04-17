import "../pages/index.css";
import ApiCryptoCompare from "../components/ApiCryptoCompare";
import ApiCryptoRank from "../components/ApiCryptoRank";
import Options from "../components/Options";
import Section from "../components/Section";
import Converter from "../components/Converter";

const converter = new Converter({
  searchContainer: ".converter__searchCoin",
  cryptocurrency: ".converter__input_type_cryptocurrency",
  currency: ".converter__fieldset_type_currency",
});
converter.handleSearhCoin();
converter.handleSendCoinn(getCoin);
const apiCryptoCompare = new ApiCryptoCompare();
//Делаем запрос на BTC при загрузке страницы
apiCryptoCompare
  .getCoinPrice("BTC")
  .then((data) => {
    converter.showСourse(data, "BTC");
  })
  .catch((err) => {
    console.log(`catch: ${err}`);
  });

//Отправляем выбранную монету в api
function getCoin(coin) {
  apiCryptoCompare
    .getCoinPrice(coin)
    .then((data) => {
      console.log(data);
      converter.showСourse(data, coin);
    })
    .catch((err) => {
      console.log(`catch: ${err}`);
    });
}
//Выводим монеты в select
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
}

const renderOption = new Section(".converter__searchCoin-select");
