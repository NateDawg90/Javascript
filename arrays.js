
Array.prototype.uniq = function() {
  let res = [];
  for (let i = 0; i < this.length; i++) {
    if (res.indexOf(this[i]) === -1) {
      res.push(this[i]);
    }
  }
  return res;
};

Array.prototype.two_sum = function() {
  let res = [];
  this.bind;
  for (let i = 0; i < this.length; i++) {
    for (let j = i + 1; j < this.length; j++) {
      if (this[i] + this[j] === 0) {
        res.push([i, j]);
      }
    }
  }
  return res;
};

function my_transpose(arr){
  let mat = [];

  for (let i = 0; i < arr.length; i++){
    mat.push([]);
    for (let j = 0; j < arr.length; j++){
      mat[i].push(arr[j][i]);
    }
  }
  console.log(arr);
  return mat;
}

console.log(my_transpose(
  [[0, 1, 2],
    [3, 4, 5],
    [6, 7, 8]]));
// console.log([-1, 0, 2, -2, 1].two_sum());
