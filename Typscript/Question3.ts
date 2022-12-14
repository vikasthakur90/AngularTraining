let str:string = "vikkivs";
let pallen = (st:string) => {const midPoint = st.length / 2;
for (let i = 0; i < midPoint && i < st.length; i++) {
  if (st[i] != st[st.length - 1 - i]) {
    console.log(" Not Palindrome");
    return;
  }
}
console.log("Palindrome");};
console.log(pallen(str));