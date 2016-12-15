Array.prototype.myEach = function(cb) {
  for (let i = 0; i < this.length; i++) {
    cb(this[i], i, this);
  }
};

Array.prototype.myMap = function(cb) {
  let res = this;
  res.myEach(function(el, i, array) {
    array[i] = cb(el);
    return array;
  });
  return res;
};

Array.prototype.myInject = function(acc, cb) {
  this.myEach(function(el, i, array){
    acc = cb(acc, el);
  });
  return acc;
};

Array.prototype.mySelect = function(cb) {
  let res = [];
  this.myEach(function(el, i) {
    if (cb(el)) {
      res.push(el) ;
    }
  });
  return res;
};

function count(obj) {
  let i = 0;
  for (let keys in obj) {
    i++;
  }
  return i;
}

Array.prototype.include = function(el) {
  let found = false;
  this.myEach(function(i) {
    if (i === el) {
      found = true;
    }
  });
  return found;
};

Array.prototype.mySort = function(cb) {

  this.myEach(function(el, i, array) {
    for(let x = 0; x < array.length; x++){
      let temp = 0;
      if(cb(el, array[x]) === el){
        temp = array[x];
        array[x] = el;
        array[i] = temp;
      }
    }
  });
  return this;
};

function substrings(str){
  let res = [];
  for(var x = 0; x < str.length; x++){
    for(var y = x; y < str.length; y++){
      if (res.indexOf(str.slice(x,y+1)) === -1) {
        res.push(str.slice(x,y+1));
      }
    }
  }
  return res;
}

String.prototype.substrings = function(){
  let res = [];
  for(var x = 0; x < this.length; x++){
    for(var y = x; y < this.length; y++){
      if (res.indexOf(this.slice(x,y+1)) === -1) {
        res.push(this.slice(x,y+1));
      }
    }
  }
  return res;
};

function range(start, end) {
  if (end < start) {
    return [];
  }

  let res = range(start, end - 1).concat(end);
  return res;
}

function exp(b, n) {
  if (n === 0) {
    return 1;
  }

  if (n === 1) {
    return b;
  }

  return b * exp(b, n - 1);
}

function exp2(b, n) {
  if (n === 0) {
    return 1;
  }

  if (n === 1) {
    return b;
  }
  if (n % 2 === 0) {
    return exp2(b, n/2)*exp2(b, n/2);
  } else {
    return b * (exp2(b, (n - 1) / 2)*(exp2(b, (n - 1) / 2)));
  }
}

function fib(n) {

  if(n === 1){
    return [1];
  }else if(n === 2){
      return [1,1];
    }

  let arr = fib(n-1);
  return arr.concat([arr[arr.length-1] + arr[arr.length-2]]);
}

function bsearch(array, target) {
  if (array[0] === target) {
    return 0;
  }

  let m = Math.floor(array.length / 2);

  if (target > array[m]) {
    return bsearch(array.slice(m)) + m;
  } else if (target < array[m]) {
    return bsearch(array.slice(0, m));
  } else {
    return m;
  }
}

function makeChange(amt, coinVals){
  let coins = {};

  if (amt === 0) {
    return {};
  }

  for (let i = 0; i < coinVals.length; i++) {
    let coinStr = "coin" + i;
    if (amt < coinVals[i]) {
      continue;
    }
    coins[coinStr] = Math.floor(amt / coinVals[i]);
    let left = amt % coinVals[i];
    return Object.assign(coins, makeChange(left, coinVals));
  }
}

function mergeSort(array) {
  if (array.length === 0) {
    return [];
  }

  if (array.length === 1) {
    return [array[0]];
  }

  let m = Math.floor(array.length / 2);

  let left = array.slice(0, m);
  let right = array.slice(m);
  let left_split = mergeSort(left);
  let right_split = mergeSort(right);
  return merge(left_split, right_split);

}

function merge(left, right) {
  let res = [];
  while (left.length > 0 && right.length > 0) {
    if (left[0] > right[0]) {
      res.push(right.shift());
    } else if (left[0] <= right[0]) {
      res.push(left.shift());
    }
  }

  return res.concat(left).concat(right);
}

function subsets(array){
  let res = [[]];
  for(var x = 0; x < array.length; x++){
    for(var y = x; y < array.length; y++){
      if (res.indexOf(array.slice(x,y+1)) === -1) {
        res.push(array.slice(x,y+1));
      }
    }
  }
  return res;
}

console.log(subsets([25, 10, 5, 1]));
// console.log(merge([1,3,5],[2,4,6]));
