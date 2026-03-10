const insertionSort = require("./insertionSort");

describe("Insertion Sort - Basis Path Testing (V(G) = 3)", () => {
  test("Path 1 (1->2->7): Array dengan 1 elemen, loop luar tidak dieksekusi", () => {
    const A = [5];
    const n = 1;
    const result = insertionSort(A, n);
    expect(result).toEqual([5]);
  });

  test("Path 2 (1->2->3->4->6->2->7): Array sudah terurut, loop dalam tidak dieksekusi", () => {
    const A = [1, 5];
    const n = 2;
    const result = insertionSort(A, n);
    expect(result).toEqual([1, 5]);
  });

  test("Path 3 (1->2->3->4->5->4->6->2->7): Array terbalik, loop dalam dieksekusi 1 kali", () => {
    const A = [5, 1];
    const n = 2;
    const result = insertionSort(A, n);
    expect(result).toEqual([1, 5]);
  });
});
