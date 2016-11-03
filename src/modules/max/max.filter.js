function maxFilter() {
  return function filter(input) {
    const list = [];

    input.forEach((temp) => {
      list.push(temp.temperature);
    });

    const max = Math.max(...list);

    return isFinite(max) ? max : null;
  };
}

export default maxFilter;
