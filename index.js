let arrays = [1, 2, 4, 5, 6];

// for (let i = 0; i < arrays.length; i++) {
//   console.log(arrays[i]);
// }
const arrayDuplicate = function (nums) {
  let numberi;
  let numberj;
  for (let i = 0; i < nums.length; i++) {
    // console.log(nums[i]);
    numberi = nums[i];
    console.log(numberi, "first loop");
    for (let j = i + 1; j < nums.length; j++) {
      numberj = nums[j];
      console.log(numberj, "second loop");
      if (numberi == numberj) {
        return true;
      }
    }
  }
  return false;
};
console.log(arrayDuplicate(arrays));
