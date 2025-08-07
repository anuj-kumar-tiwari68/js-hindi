for (let i = 1; i <= 5; i++) {
  let row = "";
  let spaces;

  for (let j = 1; j <= i; j++) {
    spaces = " ".repeat(5 - i);
    row += "#";
  }
  console.log(spaces + row);
}