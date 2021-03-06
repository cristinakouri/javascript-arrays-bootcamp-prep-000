var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"]; 

function addElementToBeginningOfArray(array, element){
  return [element,...array]
}


//Number 3 
function destructivelyAddElementToBeginningOfArray(array, element){
  array.unshift(element)
  return array
}
destructivelyAddElementToBeginningOfArray([1], 2)

//Number 4 
function addElementToEndOfArray(array, element){
  return [...array, element]
}

// not done
function destructivelyAddElementToEndOfArray(array, element){
  array.push(element);
  return array
  
}

function accessElementInArray(array, index){
  return array[index]; 
}

function destructivelyRemoveElementFromBeginningOfArray(array){
  array.shift(); 
  return array
}

function removeElementFromBeginningOfArray(array){
  let newArr = array.slice(1)
  return newArr; 
}

function destructivelyRemoveElementFromEndOfArray(array) {
  array.pop();
  return array 
}

function removeElementFromEndOfArray(array) {
  let newArr = array.slice(0, array.length - 1)
  return newArr
}

