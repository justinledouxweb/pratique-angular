function medianeFilter() {
  return function filter(input) {
    const list = [];

    input.forEach((temp) => {
      list.push(temp.temperature);
    });

    list.sort((a, b) => a > b);

    const lowMiddle = list[Math.floor((list.length - 1) / 2)]; // 5
    const highMiddle = list[Math.ceil((list.length - 1) / 2)]; // 7
    const mediane = (lowMiddle + highMiddle) / 2; // 6

    return list.length === 0 ? null : mediane;
  };
}

export default medianeFilter;
