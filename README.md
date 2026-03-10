# Insertion Sort - Whitebox Testing

Repositori ini berisi implementasi algoritma **Insertion Sort** beserta pengujian performa **Basis Path Testing** (Whitebox Testing).

## Struktur File

- **`insertionSort.js`**: Implementasi algoritma Insertion Sort.
- **`insertionSort.test.js`**: File pengujian (Unit Test) menggunakan **Jest**. Berisi 3 Test Cases yang mencakup 3 Independent Basis Paths (V(G) = 3).
- **`package.json`**: Konfigurasi project Node.js dan eksekusi test.

## Basis Path (Cyclomatic Complexity V(G) = 3)

1. **Path 1**: Array dengan 1 elemen (loop luar langsung bernilai False).
2. **Path 2**: Array sudah terurut (loop dalam tidak tereksekusi).
3. **Path 3**: Array tidak terurut / terbalik (loop dalam tereksekusi minimal 1 kali).

## Cara Menjalankan Test

Pastikan [Node.js](https://nodejs.org/) sudah terinstal di komputer Anda.

1. **Install Dependencies**

   ```bash
   npm install
   ```

2. **Jalankan Test**
   ```bash
   npm test
   ```

Jika berhasil, Jest akan menampilkan bahwa ke-3 unit test telah **PASS**.
