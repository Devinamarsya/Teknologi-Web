// Fibonacci menggunakan rekursi
function fibonacci(n) {
    if (n <= 1) {
        return n;
    } else {
        return fibonacci(n - 1) + fibonacci(n - 2);
    }
}

// Class Fibonacci untuk menghitung dan menampilkan deret Fibonacci
class Fibonacci {
    constructor(n) {
        this.n = n;
    }

    // Metode output untuk mendapatkan deret Fibonacci hingga suku ke-n
    output() {
        let result = [];
        let fib = 1;
        let fib_1 = 1;
        let fib_2 = 0;

        for (let i = 0; i < this.n; i++) {
            result.push(fib);
            fib = fib_1 + fib_2;
            fib_2 = fib_1;
            fib_1 = fib;
        }
        return result;
    }
}

function hitungFibonacci() {
    const inputNumber = document.getElementById("inputVar").value;
    const resultElement = document.getElementById("hasilhitung");

    if (inputNumber === "") {
        resultElement.innerText = "Silakan masukkan suku ke-n.";
        return;
    }

    const n = parseInt(inputNumber);

    if (isNaN(n)) {
        resultElement.innerText = "Masukkan angka yang valid.";
    } else {
        // Menggunakan fungsi rekursi Fibonacci untuk perbandingan
        const recursiveResult = fibonacci(n);
        
        // Menggunakan kelas Fibonacci untuk perhitungan deret
        const fibonacciInstance = new Fibonacci(n);
        const iterativeResult = fibonacciInstance.output();

        resultElement.innerHTML = `
            Suku ke-${n} dari deret Fibonacci (Rekursi): ${recursiveResult}<br>
            Suku ke-${n} dari deret Fibonacci (Iteratif): ${iterativeResult.join(", ")}
        `;
    }
}
