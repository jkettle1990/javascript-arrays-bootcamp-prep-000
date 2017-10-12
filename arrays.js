var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"]


function addElementToBeginningOfArray(array, element){
  var newArray  = [array]
    [element, ...newArray]
    return newArray
}

function destructivelyAddElementToBeginningOfArray(a, b){
  var ArrayB = [array]
  ArrayB.unshift(element)
  return ArrayB
}
