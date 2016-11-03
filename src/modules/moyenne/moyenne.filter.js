function moyenne() {
  return function filter(input) {
    const list = [];

    input.forEach((temp) => {
      list.push(temp.temperature);
    });

    const sum = list.reduce((a, b) => a + b, 0);
    const ave = sum / list.length;

    return input.length === 0 ? null : ave;
  };
}

export default moyenne;
