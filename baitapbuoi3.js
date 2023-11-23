// 1. Viết một hàm JavaScript để tính tổng của hai số nguyên và in ra kết quả.
// function sumNumber(a,b){
//     return a+b
// }
// const totalNumber = sumNumber(3,4)
// console.log(totalNumber)
// 2. Tạo một hàm JavaScript để tính giá trị tuyệt đối |a|  của một số và in ra nó.
// function handleAbsoluteValue(a){
//     let converstA = a
//     if(converstA<0){
//         return converstA * -1
//     }
//     else return1 converstA

// }
// console.log(handleAbsoluteValue(-2))
// 3. Viết hàm JavaScript để kiểm tra xem một số có phải là số chẵn hay không, và in ra kết quả.
// function kt(a){
//     if(a%2==0){
//         return 1
//     }
//     return 0
// }
// let i=2
// if(kt(i)){
//     console.log("Số chẵn")
// }
// else console.log("Không phải số chẵn")
// 4. Tạo một hàm JavaScript để tính diện tích của hình chữ nhật với chiều rộng và chiều cao được truyền vào.
// function dientich(a,b){
//     return a*b
// }
// const dientich1=dientich(5,6)
// console.log(dientich1)
// 6. Tạo một hàm JavaScript để tính giai thừa của một số nguyên dương và in ra kết quả.
// function gt(n){
//     let giaithua=1
//     for(let i=1;i<=n;i++){
//         giaithua*=i
//     }
//     return giaithua
// }
// let gt1=gt(5)
// console.log(gt1)
// 8. Tạo một hàm JavaScript để đảo ngược một chuỗi và in ra chuỗi đảo ngược.
// function daonguoc(str){
//     let newstr = " "
//     for(let i=str.length-1;i>=0;i--){
//         newstr+=str[i]
//     }
//     return newstr
// }
// console.log(daonguoc("Hello"))
// 9. Viết chương trình JavaScript để kiểm tra xem một chuỗi có phải là chuỗi Palindrome (chuỗi đối xứng) hay không bằng cách sử dụng một hàm.
//  function ktra(str){
//     let newstr = ""
//     for(let i=str.length-1;i>=0;i--){
//         newstr+=str[i]
//     }
//     // console.log(newstr)
//     if( newstr===str){ 
//     console.log("Là chuỗi đối xứng")
//      }
//    else {
//      console.log("Không là chuỗi đối xứng")
//      }
//     return newstr==str
// }
// console.log(ktra("aba"))
// 10. Tạo một hàm JavaScript để tính tổng của mảng các số nguyên được truyền vào.
// function tong(a){
//     let tong1=0
//     for(let i=0;i<a.length;i++){
//         tong1+=a[i]
//     }
//     return tong1
// }
// console.log(tong([1,2,3,4]))
// 11. Viết hàm JavaScript để kiểm tra xem một số nguyên có phải là số hoàn hảo (số có tổng các ước của nó bằng chính nó) hay không và in ra kết quả.
// function ktra(a){
//     let tonguoc=0
//     for(let i=0;i<a;i++){
//         if(a%i==0){
//             tonguoc+=i
//         }
//     }
//         if(tonguoc==a){
//             return 1
//     }
//         return 0
// }
//     let n=6
//     if(ktra(n)){
//         console.log("Là số hoàn hảo",n)
//     }
//     else console.log("Không là số hoàn hảo")
// 13. Viết hàm JavaScript để tính giá trị bình phương của một số nguyên được truyền vào và in ra kết quả.
// function binhphuong(a){
//     return a*a
// }
// console.log(binhphuong(5))
// 14. Tạo một hàm JavaScript để kiểm tra xem một số có phải là số nguyên tố hay không và in ra kết quả.
// function nt(a){
//     if(a==1){
//         return 0
//     }
//     for(let i=2;i<=a;i++){
//         if(a%2==0||a%3==0||a%5==0||a%7==0){
//             return 0
//         }
//         return 1
//     }
// }
// let n=17
// if(nt(n)){
//     console.log(n,"Là số nguyên tố")
// }
// else console.log("Không là số nguyên tố")
// 15. Viết chương trình JavaScript để tìm số lớn nhất trong một mảng các số nguyên bằng cách sử dụng một hàm.
//  function Max(a){
//     let max=a[0]
//      for(let i=0;i<a.length;i++){
//         if(a[i]>max)
//         max=a[i]
//      }
//      return max
//  }
//  console.log(Max([1,2,3,4,5]))