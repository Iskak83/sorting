const bubbleSort = (arr) => {
  let passes = 0;

  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      console.log(arr);
      if (arr[j] > arr[j + 1]) {
        let currentEl = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = currentEl;
      }
      passes++;
    }
  }

  return [arr, passes];
};
