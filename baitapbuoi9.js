let film = [{
    id: 1,
    name:"Harry poter",
    addresskey:1,
    sell:1500,
},{
    id: 2,
    name:"Batanvlogs",
    addresskey:2,
    sell:3500,
},{
    id: 3,
    name:"Demen",
    addresskey:3,
    sell:4500,
}]
let tieuchi =[{
    dohay:6,
    id:1,
    giaban:200000,
},{
    dohay:7,
    id:2,
    giaban:300000,
},{
    dohay:8,
    id:3,
    giaban:400000,
}]
let tacgia =[{
    name:"J.K.Rowling",
    id:1,
},{
    name:"Bà Tân",
    id:2,
},{
    name:"Tố Hữu",
    id:3,
}]
function themfilm(id,name,dohay,sell) {
    let filmnew = {
        id: id,
        name: name,
        dohay: dohay,
        sell:sell
    };
    film.push(filmnew);
    return film
}
console.log(themfilm(4,"Bố Già",4,400000,));
function updatefilm(id,name,dohay,sell){
            const filmupdate=film.find(element=> element.name === name)
            if (filmupdate){
                filmupdate.id = id 
                filmupdate.name = name
                filmupdate.dohay = sell 
                filmupdate.sell = sell 
            }
            else{
                console.log("Film không tồn tại")
            }
            return film
        }
        console.log(updatefilm(5,"Bố Già",8,3,5000))
const getFilm= (id) => {
    let findname =film.find(element => element.id === id)
    if(!findname){
        console.log("Không tìm thấy film")
        return
    }
    const tieuchiByFilm = tieuchi.find(element => element.id === findname.addresskey)
    const tacgiaFilm = tacgia.find(element => element.id === findname.id)
    return {
        name: findname.name,
        dohay: tieuchiByFilm.dohay,
        tacgia: tacgiaFilm.name
    }
}
console.log(getFilm(3))
const doanhthu=(id) => {
    let findname =film.find(element => element.id === id)
    if(!findname){
        console.log("Không tìm thấy film")
        return
    }
    const tieuchiByFilm = tieuchi.find(element => element.id === findname.addresskey)
    const doyeuthich =tieuchi.filter((element) => element.dohay>5)
    if(tieuchiByFilm.dohay>5){
        console.log("Bộ phim rất được yêu thích")
    return {
        doanhthu: tieuchiByFilm.giaban*findname.sell
        }
    }
    else{
        return {
            doanhthu: tieuchiByFilm.giaban*findname.sell
            }
    }
}
console.log(doanhthu(3))