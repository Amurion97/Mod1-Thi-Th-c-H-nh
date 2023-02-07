let diemThi = [];

//Nhập mảng
let N = +prompt("Số lượng điểm thi cần tính là: ");
for (let i = 0; i < N; i++) {
    diemThi.push(parseInt(prompt(`Nhập điểm thi thứ ${i+1}`)));
}

//Duyệt mảng và tính giá trị trung bình
function findAvg(arr) {
    let sum = 0;
    arr.forEach(function (value, index, array){
        sum += value;
    })
    return (sum/arr.length).toFixed(1);
}

//Trả kết quả
alert(`Giá trị trung bình của các điểm thi vừa nhập là ${findAvg(diemThi)}`);

