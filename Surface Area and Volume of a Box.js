// Description:

// Write a function that returns the total surface area and volume of a box as an array: [area, volume].

function getSize(width, height, depth) {
  let area = 2 * (height * width + height * depth + width * depth);
  let volume = width * height * depth;
  arr = [];

  arr.push(area, volume);
  return arr;
}
