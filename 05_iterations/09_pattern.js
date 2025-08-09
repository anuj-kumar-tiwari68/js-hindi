// for (let i = 1; i <= 5; i++) {
//   let row = "";
//   let spaces;

//   for (let j = 1; j <= i; j++) {
//     spaces = " ".repeat(5 - i);
//     row += "#";
//   }
//   console.log(spaces + row);
// }
for (let i=0;i<5;i++){
  let row = ""
  let spaces = ""
  for(let j=i-1;j<=i;j--){
    spaces += " "
  }
  for(let k=1;k<=i;k++){
    row += "#"
  }
  console.log(spaces + row)
}