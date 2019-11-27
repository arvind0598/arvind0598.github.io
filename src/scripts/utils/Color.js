class Color {
  /**
   * @summary parses an input string to get individual RGBA values
   * @param {string} rgbStr rgb string
   */
  constructor(rgbStr) {
    const colorsArr = rgbStr.match(/\d+/g);
    const [red, green, blue] = colorsArr.map((x) => parseInt(x, 10));
    // eslint-disable-next-line object-curly-newline
    Object.assign(this, { red, green, blue });
  }

  getString(alpha = 1) {
    return `rgba(${this.red}, ${this.blue}, ${this.green}, ${alpha})`;
  }
}

export default Color;
