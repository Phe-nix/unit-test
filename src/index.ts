export function merge(
  collection_1: number[],
  collection_2: number[],
  collection_3: number[]
): number[] {
  const result: number[] = [];
  let i = 0; 
  let j = collection_2.length - 1; 
  let k = 0; 

  const temp: number[] = [];


  while (i < collection_1.length && j >= 0) {
    if (collection_1[i] < collection_2[j]) {
      temp.push(collection_1[i++]);
    } else {
      temp.push(collection_2[j--]);
    }
  }

  while (i < collection_1.length) {
    temp.push(collection_1[i++]);
  }

  while (j >= 0) {
    temp.push(collection_2[j--]);
  }

  let m = 0;
  while (m < temp.length && k < collection_3.length) {
    if (temp[m] < collection_3[k]) {
      result.push(temp[m++]);
    } else {
      result.push(collection_3[k++]);
    }
  }

  while (m < temp.length) {
    result.push(temp[m++]);
  }

  while (k < collection_3.length) {
    result.push(collection_3[k++]);
  }

  return result;
}

console.log(merge([1, 3, 5], [6, 4, 2], [7, 8, 9])); // Output: [1, 2, 3, 4, 5, 6, 7, 8, 9]