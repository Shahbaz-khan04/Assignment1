let arr = [11, 15, 17, 18, 19];

arr.splice(0, 2);

for (let i = 16; i >= 11; i--) {
  arr.unshift(i);
}

console.log(arr);
