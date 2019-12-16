const inc = () => ({ type: "INC" });
const dec = () => ({ type: "DEC" });
const rnd = () => {
    const randomValue = Math.floor(Math.random()*10)+1;
  return {
    type: "RND",
    value:randomValue
  };
};

export { inc, dec, rnd };
