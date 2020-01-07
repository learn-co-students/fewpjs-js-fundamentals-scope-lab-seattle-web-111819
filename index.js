let animal = "cheetah"

function myAnimal() {
  return animal
}

function yourAnimal() {
  let animal = "zebra"
  // How can we make sure that this function
  // and the above function both pass?
  // P.S.: You can't just hard-code 'cheetah' below
  return animal
} 

function add2(n) {
  let two = 2
  return n + two

  // Feel free to move things around!
  //two = 2
}