// 2. Tạo một mảng số nguyên và sử dụng thuật toán tìm kiếm tuần tự để kiểm tra xem một số cụ thể có tồn tại trong mảng hay không.
// const arr=[5,4,6,7,8,3,4,5]

// const checknumber = (arr,number) => {
//     let dem=0
//     for(let i=0;i<arr.length;i++){
//         if(arr[i]==number){
//             dem++
//         }
//     }
//     if(dem==0){
//         console.log("Không tồn tại")
//     }
//     else{
//         console.log("Có tồn tại")
//     }
// }
// checknumber(arr,0)
// 3. Viết hàm JavaScript để sắp xếp một mảng số nguyên bằng thuật toán sắp xếp nổi bọt (bubble sort).
// const arr=[5,4,6,7,8,1,2,0]
// function sapxep(arr){
//     for(let i=0;i<arr.length;i++){
//         let temp=0
//         for(let j=i+1;j<arr.length;j++){
//             if(arr[i]>arr[j]){
//                 temp=arr[i]
//                 arr[i]=arr[j]
//                 arr[j]=temp
//             }
//         }
//     }
//     console.log(arr)
// }
// sapxep(arr)
// 4. Tạo một mảng số nguyên và sử dụng thuật toán sắp xếp nổi bọt để sắp xếp mảng theo thứ tự tăng dần.
// const arr=[5,4,6,7,8,1,2,0]
// function sapxep(arr){
//     for(let i=0;i<arr.length;i++){
//         let temp=0
//         for(let j=i+1;j<arr.length;j++){
//             if(arr[i]>arr[j]){
//                 temp=arr[i]
//                 arr[i]=arr[j]
//                 arr[j]=temp
//             }
//         }
//     }
//     console.log(arr)
// }
// sapxep(arr)
// 5. Viết chương trình JavaScript để tìm giá trị lớn nhất trong một mảng số nguyên bằng cách sử dụng thuật toán tìm kiếm tuần tự.
// const arr=[5,4,6,7,8,1,2,0]
// let max=-Infinity
// for(let i=0;i<arr.length;i++){
//     if(arr[i]>max){
//         max=arr[i]
//     }
// }
// console.log(max)
// 7. Viết hàm JavaScript để sắp xếp một mảng số nguyên theo thứ tự giảm dần bằng thuật toán sắp xếp nổi bọt.
//  const arr=[5,4,6,7,8,1,2,0]
//  function sapxep(arr){
//      for(let i=0;i<arr.length;i++){
//          let temp=0
//          for(let j=i+1;j<arr.length;j++){
//             if(arr[i]<arr[j]){
//                  temp=arr[i]
//                  arr[i]=arr[j]
//                  arr[j]=temp
//              }
//          }
//      }
//      console.log(arr)
//  }
//  sapxep(arr)
// 9. Viết chương trình JavaScript để tìm phần tử nhỏ nhất trong một mảng số nguyên bằng thuật toán tìm kiếm tuần tự.
//  const arr=[5,4,6,7,8,1,2,0]
//  let min=Infinity
//  for(let i=0;i<arr.length;i++){
//      if(arr[i]<min){
//          min=arr[i]
//      }
//  }
//  console.log(min)
// 10. Tạo một mảng số nguyên và sử dụng thuật toán sắp xếp nổi bọt để sắp xếp mảng theo thứ tự giảm dần.
// const arr=[5,4,6,7,8,1,2,0]
// let temp=0
// for(let i=0;i<arr.length;i++){
//     for(let j=i+1;j<arr.length;j++){
//         if(arr[i]<arr[j]){
//             temp=arr[i]
//             arr[i]=arr[j]
//             arr[j]=temp
//         }
//     }
// }
// console.log(arr)
// 11. Viết hàm JavaScript để thực hiện tìm kiếm tuần tự trong một mảng chuỗi và trả về vị trí của chuỗi cần tìm.
const findstring=["PHP","Javascript","C++","C#","Python","Ruby","Java",]
 const checkstring = (findstring,string) => {
     let dem=0
     for(let i=0;i<findstring.length;i++){
         if(findstring[i]==string){
             dem++
             console.log(i)
         }
     }
     if(dem==0){
         console.log("Không tồn tại")
     }
 }
 checkstring(findstring,"Python")
