//Hàm kiểm tra SNT
function primeCheck(number) {
    if (number < 2) {
        return false;
    } else {
        for (let i = 2; i < number ; i++) {
            if (number % i === 0) {
                return false;
            }
        }
        return true;
    }
}

//Hàm tính tổng các SNT từ 0 đến x
function sumOfListPrime(number) {
    let sum = 0;
    for (let i = 2; i <= number; i++) {
        if (primeCheck(i)) {
            sum += i;
        }
    }
    return sum;
}

//Nhập
let x = +prompt("Nhập x = ");

//Trả kết quả
alert(`Tổng các SNT từ 0 đến ${x} là: ${sumOfListPrime(x)}`);