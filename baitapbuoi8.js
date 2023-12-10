// let thuvien =[{
//     id: 1,
//     namebook:"Harry poter",
//     author:"Dũng",
//     count: 7,

// },{
//     id: 2,
//     namebook:"Lucngan",
//     author:"Đạt",
//     count: 8,
    
// },{
//     id: 3,
//     namebook:"Phieuluuky",
//     author:"Tâm",
//     count: 9,
    
// }]
// let library=[]
// const newthuvien =thuvien.map((element) =>{
//     if(element.namebook === "Harry poter"){
//         element.address="tầng2"
//         element.produce=2018
//     }
//     return element
// })
// console.log(newthuvien)

// const removeBook = thuvien.filter((element) => element.count !== 9)
// console.log(removeBook)
// function updatecount(id,namebook,author,count){
//     const bookupdate=thuvien.find(thuvien => thuvien.namebook ===namebook)
//     if (bookupdate){
//         bookupdate.id=id
//         bookupdate.namebook=namebook
//         bookupdate.author=author
//         bookupdate.count=count
//     }
//     else{
//         console.log("Sách không tồn tại")
//     }
//     return thuvien
// }
// console.log(updatecount(5,"Phieuluuky","Vân",15))

// Quản lý Tài khoản Ngân hàng
// let taikhoanbank =[{
//     sotaikhoan:222004567,
//     chutaikhoan:"Mạnh",
//     sodu:1000000,
//     lichsugiaodich:2023,

// },{
//     sotaikhoan:222004568,
//     chutaikhoan:"Tâm",
//     sodu:6000000,
//     lichsugiaodich:2024,
    
// },{
//     sotaikhoan:222004569,
//     chutaikhoan:"Vân",
//     sodu:9000000,
//     lichsugiaodich:2022,
    
// }]
// let transactionHistory = [];
// function chuyenkhoan(nguoinhan,sotienchuyen) {
//     if(sotienchuyen>0 && sodu >= sotienchuyen){
//         sodu-=sotienchuyen
//         nguoinhan+=sotienchuyen
//         transactionHistory.push("Đã chuyển khoản cho",nguoinhan.chutaikhoan,"Số tiền",sotienchuyen)
//         nguoinhan.transactionHistory.push("Nhận chuyển khoản từ",chutaikhoan,"Số tiền",sotienchuyen)
//         console.log("Chuyển khoản thành công. Số dư mới của bạn là:",sodu)
//     }
//     else{
//         console.log("Chuyển khoản không thành công vui lòng kiểm tra lại số du")
//     }
    
// }
// console.log(chuyenkhoan("Vân",1000))
// Quản lý Khách hàng

// let khachhang =[{
//     ten:"Dũng",
//     email:"abcde123@gmail.com",
//     phone:"093332121",
//     address:"Hà Nội",
//     size:9

// },{
//     ten:"Phi",
//     email:"abcde1234@gmail.com",
//     phone:"093332122",
//     address:"Hoa Thánh",
//     size:8
    
// },{
//     ten:"Nhung",
//     email:"abcde12345@gmail.com",
//     phone:"093332123",
//     address:"Nghệ An",
//     size:10
    
// }]
// let library=[]
// const newkhachhang =khachhang.map((element) =>{
//     if(element.ten === "Dũng"){
//         element.Tuổi=87
//         element.health="Yếu"
//     }
//     return element
// })
// console.log(newkhachhang)

// const removekhachhang = khachhang.filter((element) => element.size >=9)
// console.log(removekhachhang)
// function updatesize(ten,email,phone,address,size){
//     const khachhangupdate=khachhang.find(khachhang => khachhang.ten ===ten)
//     if (khachhangupdate){
//         khachhangupdate.ten=ten
//         khachhangupdate.email=email
//         khachhangupdate.phone=phone
//         khachhangupdate.address=address
//         khachhangupdate.size=size
//     }
        // else{
    //             console.log("Khách hàng không tồn tại")
    //         }
//     return khachhang
// }
// console.log(updatesize("Dũng","abcde123456@gmail.com","093332121","Cầu giấy",5))
// Quản lý Hội viên phòng tập gym
// Tạo đối tượng hội viên với thông tin (tên, tuổi, địa chỉ, gói tập, ngày gia nhập,...).
// Sử dụng mảng và object để quản lý danh sách hội viên, thực hiện chức năng thêm, xóa, sửa thông tin hội viên và tính tổng doanh thu từ gói t

// const danhsachhoivien = [{
//     name : "Đạt",
//     age : 18,
//     adress : "Long Biên",
//     goitap : 1000000,
//     date : "12/10/2022",
// },{
//     name : "Mạnh",
//     age : 20,
//     adress : "Đông Anh",
//     goitap : 500000,
//     date : "3/12/2022",
// },
// {
//     name : "Tuấn Anh",
//     age : 22,
//     adress : "Phúc Thọ",
//     goitap : 300000,
//     date : "19/10/2023",
// },
// {
//     name : "Dũng",
//     age : 25,
//     adress : "Cầu Giấy",
//     goitap : 2000000,
//     date : "10/12/2023",
// },
// ]
// function themHoiVien(ten, tuoi, diaChi, goiTap, ngayGiaNhap) {
//     let hoiVienMoi = {
//         ten: ten,
//         tuoi: tuoi,
//         diaChi: diaChi,
//         goiTap: goiTap,
//         ngayGiaNhap: ngayGiaNhap,
//     };
//     danhsachhoivien.push(hoiVienMoi);
//     return danhsachhoivien
// }
// console.log(themHoiVien("Minh",17,"Ha Noi",400000,"05/10/2023"));

// const removehoivien = danhsachhoivien.filter((element) => element.age !== 25)
// console.log(removehoivien)

// function updatehoivien(name,age,adress,goitap,date){
//             const hoivienupdate=danhsachhoivien.find(danhsachhoivien=> danhsachhoivien.name === name)
//             if (hoivienupdate){
//                 hoivienupdate.name = name 
//                 hoivienupdate.age = age 
//                 hoivienupdate.adress = adress 
//                 hoivienupdate.goitap = goitap 
//                 hoivienupdate.date = date 
//             }
//             else{
//                 console.log("Hội viên không tồn tại")
//             }
//             return danhsachhoivien
//         }
//         console.log(updatehoivien("Mạnh",24,"Hà Nội",700000,"3/12/2022"))

// function tinhtongdoanhthu () {
//     let  tongdoanhthu = 0;
//     danhsachhoivien.forEach((Element) => {
//         tongdoanhthu += Element.goitap
//     })
//     return tongdoanhthu
// }
// console.log(tinhtongdoanhthu(danhsachhoivien))