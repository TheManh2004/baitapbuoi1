// 3. Viết chương trình JavaScript để in ra tất cả số chẵn từ 1 đến 20 bằng vòng lặp for.
// const n=20
// let sum=0
// for(let i=1;i<=n;i++){
//     if(i%2===0){
//         sum+=i
//     }
// }
// console.log(sum)
// 4. Tạo một biến i và sử dụng vòng lặp for để tính giai thừa của i (i!) cho một giá trị i cụ thể.
// const i=5
// let gt=1
//  for(let j=1;j<=i;j++){
//         gt*=j
    
// }
// console.log(gt)
// 5. Viết chương trình JavaScript để in ra bảng cửu chương từ 2 đến 9 bằng vòng lặp for.
// const i=2
//  let ch=1
//  for(let j=1;j<=10;j++){
//          ch=i*j
//          console.log("bảng cửu chương 2*",j,"=",ch)
//  }
// 10. Tạo một biến year và sử dụng vòng lặp while để in ra tất cả các năm nhuận từ year đến year + 50.
// let namnhuan=0
// let year=1000
// for(let i=year;i<=year+50;i++){
//     if(i%100!==0 && i%4==0 || i%400===0){
//         console.log(i)
//     }
// }
// 11. Viết chương trình JavaScript để tạo một hình tam giác vuông bằng dấu sao (*) bằng vòng lặp.
// let tamgiacvuong=""
// for(let i = 1; i <= 6; i++) {
//     let a=""
//     for( let j = 1; j <= i; j++){
//          a += "*";
//         }
//     console.log(a)
// }
//  console.log(tamgiacvuong);
// 13. Viết chương trình JavaScript để in ra tất cả các số Armstrong (số mà tổng lũy thừa của các chữ số bằng chính nó) từ 1 đến 100.
// function kt2(n) {
//     let m = n;
//     let sum = 0;
//     while (m) {
//         sum += (m % 10) * (m % 10);
//         m /= 10;
//     }
//     return sum === n;
// }
// for (let i = 1; i <= 100; i++) {
//     if (kt2(i) === true) {
//     console.log(i);
//     }
// }
// 14. Tạo một biến n và sử dụng vòng lặp while để in ra tất cả các số nguyên tố từ 1 đến n.
// const n=100
// let i=1
// while(i<n){
//     if (i > 1) {
//         if (i === 2 || i === 3 || i === 5 || i === 7) {
//             console.log(i);
//         }
//         else if(i % 2 !== 0 &&
//             i % 3 !== 0 &&
//             i % 5 !== 0 &&
//             i % 7 !== 0)
//             {
//                 console.log(i);
//             }
//     }
//     i++;
// }