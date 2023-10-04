const arr1: number[] = [5, 20, 2, -7, 6, 3, 2, 4];
console.log("array original: "+ arr1);

const bubbleSort = (arr: number[], len: number = arr.length): number[] => {
  if (len === 1) {
    return arr;
  }

  let ordenado = false;

  arr.forEach((v : number, i : number) => {
    if (v > arr[i + 1]) {
      [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]];
      ordenado = true;
    }
  });

  if (!ordenado) {
    return arr;
  }

  return bubbleSort(arr, len - 1);
};

console.log("array ordenado: " +bubbleSort(arr1));

