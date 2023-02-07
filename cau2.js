//Hàm chèn số vào vị trí xác định trong mảng
function insertNumberToArray(arr, x, index) {
    let tempArr = [...arr];
    let N = arr.length;
    if (index < 0 || index > N) {
        return tempArr;
    } else {
        for (let i = N; i > index ; i--) {
            tempArr[i] = tempArr[i-1];
        }
        tempArr[index] = x;
        return tempArr;
    }
}

//Nhập mảng
let daySo = [];
let N = +prompt("Chiều dài mảng là: ");
for (let i = 0; i < N; i++) {
    daySo.push(parseInt(prompt(`Nhập số thứ ${i+1}`)));
}
let x = +(prompt("Số x cần chèn là:"));
let index = +(prompt("Vị trí muốn chèn x là:"));

//Trả kết quả
alert(`Mảng kết quả là: ${insertNumberToArray(daySo,x,index)}`);

