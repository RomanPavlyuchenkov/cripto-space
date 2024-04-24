export default class Options {
  constructor(templateSelector, data) {
    this._templateSelector = templateSelector;
    this._coin = data.symbol;
  }

  _getTemplate() {
    const templeateElements = document.querySelector(
      this._templateSelector
    ).content;
    const optionElement = templeateElements
      .querySelector(".option")
      .cloneNode(true);
    return optionElement;
  }
  createOption() {
    this._element = this._getTemplate();
    this._element.textContent = this._coin;
    return this._element;
  }
}
