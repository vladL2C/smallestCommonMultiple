//find smallest common multiple

function smallestCommons(arr) {
  // sort array
  arr = arr.sort((a, b) => b - a);
  //new array to store the range
  let array = [];
  //loop to push range into a new array from highest to lowest
  for (let i = arr[0]; i >= arr[1]; i--) {
    array.push(i);
  }

  let lcm = 0;
  let loop = 1;
  let i;

  do {
    lcm = array[0] * loop * array[1];

    for (i = 2; i <= array.length; i++) {
      if (lcm % array[i] !== 0) {
        break;
      }
    }
    loop++;
  } while (i !== array.length);
  return lcm;
}

smallestCommons([5, 1]);