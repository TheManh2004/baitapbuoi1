// Bài tập 4: Viết hàm chia một mảng thành các mảng con có kích thước nhất định.
// const arr =[2,3,4,5,7,8,6,8,9]
// let arr1=[]
// let arr2=[]
// let arr3=[]
// let arr4=[]
// let arr5=[]
// const chiamang =(arr) => {
//      arr.forEach(((element) => {
//          arr1.push(element)
//         if(element>2){
//             arr2.push(element)
//         }
//         else if(element>2){
//             arr3.push(element)
//         }
//         else if(element>2){
//             arr4.push(element)
//         }
//         else if(element>2){
//             arr5.push(element)
//         }
//  }))
// }
// console.log(chiamang(arr1,arr2,arr3,arr4,arr5))
// chwua xong
// Bài tập 5: Tìm giá trị trung bình của các số trong một mảng.
// const Arr =[2,3,4,5,7,8,6,8,9]
// const absnumber = (arr) =>{
// let sum=0
// let dem=0
// Arr.forEach(element => {
//     sum+=element
//     dem++
// });
//     return sum/dem
// }
// console.log(absnumber(Arr))
// Bài tập 4: Viết hàm chia một mảng thành các mảng con có kích thước nhất định.
// const arr = [2,3,5,6,8,1,4,9,10,12,15,19]
// const smallarr = (arr,number) =>{
// for (let i = 0; i < arr.length - number + 1; i++) {
//     let newArr = [];
//     for (let j = 0; j < number; j++) {
//         newArr.push(arr[i + j]);
//     }
//     console.log(newArr);
// }
// }
// Bài tập 8: Tìm chuỗi dài nhất trong một mảng các chuỗi.
//  const maxword = (string) => {
//       let max = -Infinity
//           word = ""
//       for(let i=0;i<string.length;i++){
//            if(string[i].length>max){
//                 max = string[i].length
//                 word = string[i]
//            }
//       }
//       return word
//  }
//  console.log(maxword(["Trong","Tuấn Anh","Dung","Đạt"]))
// Bài tập 9: Viết hàm thực hiện phép cộng 2 ma trận số nguyên.
// let arr1 = [
//     [1, 2, 3],
//     [2, 3, 4],
// ],
// arr2 = [
//     [4, 5, 6],
//     [5, 6, 7],
// ];
// const congmang = (arr1, arr2) => {
// let arr3 = [[], []];
// for (let i = 0; i < arr1.length; i++) {
//     for (let j = 0; j < arr1[i].length; j++) {
//         arr3[i][j] = arr1[i][j] + arr2[i][j];
//     }
// }
// return arr3;
// };
// console.log(congmang(arr1, arr2));
// Bài tập 10: Tìm và xóa tất cả các phần tử bị lặp lại trong một mảng số.
// const arrN = [1, 2, 4, 3, 2, 5, 66, 5, 66, 7];
// const newS = (arr) => {
//     let newarr = [];
//     for (let i = 0; i < arr.length; i++) {
//         let ok = 1;
//         for (let j = 0; j < i; j++) {
//             if (arr[j] === arr[i]) {
//                 ok = 0;
//             }
//         }
//         if (ok === 1) newarr.push(arr[i]);
//     }
//     return newarr;
// };

// console.log(newS(arrN));
// Bài tập 12: Viết hàm tính tổng các số chia hết cho 3 hoặc 5 trong một khoảng từ 0 đến n.
// const sum=(n) => {
//     let sum=0
//     for(let i=0;i<n;i++){
//         if((i%3==0)||(i%5==0)){
//             sum+=i
//         }
//     }
//     return sum
// }
// console.log(sum(8))
// Bài tập 13: Tìm và in ra các số nguyên tố đầu tiên trong một mảng có kích thước n.
// function nto(n) {
//     for (let i = 2; i <= Math.sqrt(n); i++) {
//         if (n % i === 0) {
//             return false;
//         }
//     }
//     return true;
// }
// const kt2 = (arr) => {
//     return arr.filter((nummber) => nto(nummber));
// };
// console.log(kt2([2, 3, 4, 5, 6, 7, 8, 9]));

