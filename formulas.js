const evenLast = arr => {
  return (
    arr
      .filter((item, i) => i % 2 === 0)
      .reduce((summ, current) => summ + current) * arr[arr.length - 1] || 0
  );
};

const stra = "ex[ort string";
const stra2 = "Second ex[ort string";
export { evenLast, stra, stra2 };
