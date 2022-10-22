// 2-1
const exercise1 = () => {
  let word = "palindrome";
  console.log(word.length);
  [...word].forEach((letter) => {
    console.log(letter);
  });
};

// 2-2
const exercise2 = () => {
  let palindrome = "no lemon, no melon";
  let reverse = [...palindrome].reverse();
  console.log(reverse.join(""));
};
exercise2();

// 2-3
const exercise3 = () => {
  let result = "";
  let rows = 5;
  let colums = 10;
  for (let index = 0; index < rows; index++) {
    for (let index = 0; index < colums; index++) {
      result += "*";
    }
    result += "\n";
  }
  console.log(result);
};
