import Options from "./Options.js";

export default class CourseCoins extends Options {
  constructor(_templateSelector, _coin) {
    super(_templateSelector, _coin);
    this._coinName = _coin.name;
    this._coinCost = Math.floor(_coin.values.USD.price * 100) / 100;
  }

  createOption() {
    super.createOption();
    this._element = this._getTemplate();
    this._element.querySelector(".course__coin").textContent = this._coinName;
    this._element.querySelector(
      ".course__cost"
    ).textContent = `${this._coinCost} USD`;

    return this._element;
  }
}
