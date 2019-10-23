function slice(string, start = 0, end = string.length) {
  // return string.slice(start, end)
  const newArray = [];

  for(let i = start; i < end; i++){
    newArray.push(string[i])
  }

  return newArray.join(' ');
}

function repeat(str, repetitions) {
//     return str.repeat(repetitions);
  // let repeatedString = "";

  // while (repetitions > 0) {
  //   repeatedString += str;
  //   str--;
  // }
  // return repeatedString;
}

function startsWith(string, substring) {
  // return string.startsWith(substring)
  let splitString = string.split(' ');
  
  for(let i = 0; i < splitString.length; i++){
    if(splitString[i] === splitString[substring]){
      return true;
    } else {
      return false;
    }
  }
}

function endsWith(str, substring) {
  // return str.endsWith(substring);
  let splitString = str.split(' ');

  for (let i = 0; i < splitString.length; i++){
    if(splitString[i] === splitString[substring]) {
      return true;
    } else {
      return false;
    }
  
}

}

function includes(arr, item) {
  // return arr.includes(item);
  for(let i = 0; i < arr.length; i++) {
    if(arr[i] === item) {
      return true;
    } else {
      return false;
    }
  }
}

function join(arr, separator = '') {
  // return arr.join(separator);
  let joinArray = [];
  
  for(let i = 0; i < arr.length; i++) {
    if(arr[i] === ', ') {
      joinArray.push(separator);
    }
  }

  return joinArray;
}


function split(str, separator) {
  // return str.split(separator)
  let splitArray = [];

  for(let i = 0; i < str.length; i++) {
    
  }
}

function trimStart(str) {
  let joinArray = [];
  let strSplit = str.split(' ');

  for(let i = 0; i < str.length; i++){
    if(str[i] === ' ') 
  }
}

function trimEnd(str) {
}


module.exports = {
  slice,
  repeat,
  startsWith,
  endsWith,
  includes,
  join,
  split,
  trimStart,
  trimEnd,
}
