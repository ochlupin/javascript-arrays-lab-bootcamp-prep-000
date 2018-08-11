const app = "I don't do much."
var kittens = ["Milo", "Otis", "Garfield"]

function destructivelyAppendKitten(name) {
  kittens.push(name)
};

function destructivelyPrependKitten(name) {
  kittens.unshift(name)
};

function destructivelyRemoveLastKitten() {
  kittens.pop()
};

function destructivelyRemoveFirstKitten() {
  kittens.shift()
};

function appendKitten(name) {
  return [...kittens, name]
};

function prependKitten(name) {
  return [name, ...kittens]
};


//slices all elements in the array from index position 0 to second last position (.length-1) i.e. this translates slicing out all but the last element and returning the remainder as a new array
function removeLastKitten() {
  return kittens.slice(0, kittens.length - 1)
};

// slices all the elements starting from index position 1 to the last postion i.e. this translates to slicing out the first element and returning the remainder as a new array
function removeFirstKitten() {
  return kittens.slice(1)
};