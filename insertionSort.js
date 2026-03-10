function insertionSort(A, n) {
  let i = 1;

  while (i < n) {
    let key = A[i];
    let j = i - 1;

    while (j >= 0 && A[j] > key) {
      A[j + 1] = A[j];
      j = j - 1;
    }

    A[j + 1] = key;
    i = i + 1;
  }

  return A;
}

module.exports = insertionSort;
