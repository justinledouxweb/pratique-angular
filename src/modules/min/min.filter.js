function minFilter() {
  return function filter(input) {
    const list = [];

    input.forEach((temp) => {
      list.push(temp.temperature);
    });

    const min = Math.min(...list);

    return isFinite(min) ? min : null;
  };
}

export default minFilter;
