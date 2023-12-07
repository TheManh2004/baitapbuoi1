// 1. Viết chương trình nhận hai số làm đầu vào và hiển thị tổng của chúng.
// const sum=(a,b) =>{
//     return a+b
// }
// console.log(sum(5,4))
// 2. Viết chương trình nhận một chuỗi làm đầu vào và hiển thị độ dài của chuỗi.
// const lengthstring = (string) =>{
//     return string.length
// }
// console.log(lengthstring("Javascript"))
// 3. Viết chương trình nhận một số làm đầu vào và hiển thị bình phương của số đó
// const binhphuong=(a)=>{
//     return a*a
// }
// console.log(binhphuong(5))
// 4. Viết chương trình nhận một danh sách các số làm đầu vào và hiển thị số lớn nhất trong danh sách.
// const maxarr= (arr) =>{
//     let max=-Infinity
//     for(let i=0;i<arr.length;i++){
//         if(arr[i]>max){
//             max=arr[i]
//         }
//     }
//     return max
// }
// console.log(maxarr([5,3,4,8,1,9]))
// 5. Viết chương trình nhận một danh sách các chuỗi làm đầu vào và hiển thị chuỗi ngắn nhất trong danh sách.
// const smallstring =(string) => {
//     let min = Infinity
//     let name =[]
//     for(let i=0;i<string.length;i++){
//         if(min>string[i].length){
//             min=string[i].length
//             name=string[i]
//         }
//     }
//     return name
// }
// console.log(smallstring(["Javascript","Java","PHP"]))
// 6. Viết chương trình nhận một danh sách các số làm đầu vào và sắp xếp danh sách theo  thứ tự tăng dần.
// const sapxep=(arr)=>{
//     let temp=0
//     for(let i=0;i<arr.length;i++){
//         for(let j=i+1;j<arr.length;j++){
//             if(arr[i]>arr[j]){
//                 temp=arr[i]
//                 arr[i]=arr[j]
//                 arr[j]=temp
//             }
//         }
//     }
//     return arr
// }
// console.log(sapxep([5,6,2,3,1,4]))
// 9. Viết chương trình nhận một chuỗi làm đầu vào và trả về số từ trong chuỗi.
// const demtu = (string) =>{
//     let sotu=string.split(" ")
//     return sotu.length
// }
// console.log(demtu("Hello World"))
// 7. Viết chương trình nhận một danh sách các chuỗi làm đầu vào và sắp xếp danh sách theo thứ tự alphabet.
// const sapxep =(arr) => {
//    let Arrnew =arr.sort()
//    return Arrnew
// }
// console.log(sapxep(["php", "python", "javascript", "java", "full stack"]))
// 8. Viết chương trình nhận một danh sách các số làm đầu vào và trả về số trung vị của các số. .( Tìm số trung vị ( số trung vị không phải số trung bình cộng ))
// const trungvi=(arr) => {
//     let sotrungvidayle=0
//     let sotrungvidaychan1=0
//     let sotrungvidaychan2=0
//     for(let i=0;i<arr.length;i++){
//         if(arr[i].length%2===0){
//             return sotrungvidayle=arr[i].length/2
//         }
//         else {
//             sotrungvidaychan1=arr[i].length/2
//             sotrungvidaychan2=(arr[i].length/2)-1
//         }
//     }
// }
// console.log(trungvi[5,4,3,2])
// 10. Viết chương trình nhận một danh sách các chuỗi làm đầu vào và trả về số chuỗi chứa chữ 'a'.
//  function demChuoiChuaA(arr) {
//     var chuoiChuaA = arr.filter(function(chuoi) {
//         return chuoi.includes('a');
//       });
//       return chuoiChuaA;
//  }
// console.log(demChuoiChuaA(["Java","python","Hella"]))
// 1. Viết chương trình nhận một danh sách các số làm đầu vào và trả về số lớn thứ hai trong danh sách
// const searchmax2 = (arr) => {
//     let max1=-Infinity
//     let max2=-Infinity
//     for(let i=0;i< arr.length;i++){
//         if(arr[i]>max1){
//             max2=max1
//             max1=arr[i]
//         }
//         else if (arr[i]>max2 && max2!=max1){
//             max2=arr[i]
//         }
//     }
//     return max2
// }
// console.log(searchmax2([70, 11, 20, 4, 100]))
// 2 Viết chương trình nhận một danh sách các số nguyên làm đầu vào và trả về hiệu số lớn nhất giữa hai phần tử trong danh sách.
// const searchhieu = (arr) => {
//     let max=-Infinity
//     let min=Infinity
//     for(let i=0;i<arr.length;i++){
//         if(arr[i]>max){
//             max=arr[i]
//         }
//     }
//     for(let i=0;i<arr.length;i++){
//         if(arr[i]<min){
//             min=arr[i]
//              }
//         }
//     return max-min
// }
// console.log(searchhieu([70, 11, 20, 4, 100]))
// 5 Viết chương trình nhận một danh sách các số nguyên làm đầu vào và trả về tổng con tăng liên tiếp lớn nhất trong danh sách.
// const daytangdainhat= (arr) => {
//     let tongmax=arr[0]
//     let tongHienTai=arr[0]
//     for(let i=0;i<arr.length;i++){
//             if(arr[i]<arr[i+1]){
//                 tongHienTai+=arr[i]}
//             else{
//                 tongHienTai=arr[i]
//             tongmax = Math.max(tongmax,tongHienTai);
//         }
//     }
//     return tongmax
// }
//     console.log(daytangdainhat([1, 2, 3, 2, 5, 7, 2, 4, 6, 9, 10]))
// Array - object
// reverses: Cho đầu vào là 1 mảng, Viết một function để đảo ngược thứ tự phần tử trong mảng , yêu cầu không dùng hàm Reverses có sẵn của javascript ( dùng forEach hoặc reduce )
// const newarr0=[]
// const newArr= (arr) =>{
//     for(let i=arr.length-1;i>=0;i--){
//         newarr0.push(arr[i])
//     }
//     return newarr0
// }
// console.log(newArr([4,2,3,5,7]))
// chunk: Cho một mảng đầu vào, viết một function để chia đều mảng theo số phần chỉ định.
// const separationArray = (arr,n) => {
//     const soMang = arr.length / n
//     for (let i = 1; i <= soMang; i++) {
//         console.log(arr.slice((i - 1) * n, i * n))
//     }
//     return arr.slice(0, n)
// }
// separationArray([5,7,8,9,4,10,12,45,15,9],5)
// uniq: Cho một mảng đầu vào, viết một function để loại bỏ các phần tử bị lặp trong mảng. 
// let newNumber =[]
// const resetArr=(arr)=>{
//     arr.forEach(element => {
//         if(!newNumber.includes(element)){
//             newNumber.push(element)
//         }
//     });
//     return newNumber
// }
// console.log(resetArr([1,2,4,5,6,7,6,8,9]))


