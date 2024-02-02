const findLongestWord = (array) => { //passed tests
    let answer = '';
    for (let i = 0; i < array.length; i += 1) {
      if (array[i].length > answer.length) {
        answer = array[i];
      }
    }
    return answer;
};

const sumUniqueNumbers = array => { 
  const uniqueSet = new Set(array);
  let sum = 0;
  for (let number of uniqueSet) {
    sum += number;
  }
  return sum;
};

const mergeArrays = (...arrays) => {
  return [...new Set(arrays.flat())];
};

const hasProperty = (object, property) => {
  return (Boolean(object[property]));
};

const getPropertyValue = (object, property) => {
  return (object[property]) ? object[property] : undefined; 
};

const invertObject = (object) => {
  const entries = Object.entries(object);
  const newObject = {};
  for (let [key, value] of entries) {
    newObject[value] = key;
  }
  return newObject;
};
