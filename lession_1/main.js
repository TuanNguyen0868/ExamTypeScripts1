var fullName = 'Nguyen Anh Tuan';
var age = '26';
var adDress = 'Thanh Hoa';
// Thông báo alert
// alert(fullName);
// alert(age);
// alert(adDress);

//thông báo có ok và cancel
// confirm('may du tuoi chua ma vao xem phim !');

//Thông báo có textbox nhập kí tự
// prompt('alolol');

//Thông báo hiện lên sau ??? giây+
// setTimeout(function() {
// alert('thong bao')
// }, 4000)

//thông báo liên tục theo ??? giây
// setInterval(function() {
//     confirm('khong tat duoc dau leeu  leu !! Xem cai cuc cut cho leu leu')
// }, 2000);

//If và else
// var a = 239;
// var b = 372;
// if(a > b){
//     console.log('Meo meo');
// }
// else {
// console.log('gau gau');
// }

//Check
// var a = 1;
// var b = 2;
// var isSuccess = a > b;
// console.log(isSuccess)
// var myfuntion = function() {
//     alert('hi em yeu');
// };
// myfuntion();

//Khai báo object
// var myObject = {
//     name: 'Tuan dep trai ',
//     age: 17,
//     adDress: 'Thanh hoa',
//     //yourfuntion(),
// }


// var  yourfuntion = function() {
//     var age = 17
//     if(age > 18){
//     console.log('du tuoi vao tu');
//     }else{
//         console.log('chua du tuoi vao tu');
//     }
// }
// yourfuntion();
// console.log(myObject)

//Lấy index phần tử cuối cùng trùng nhau
// var myString = 'Nguyen anh tuan dep trai vo doi doi doi doi doi';
// console.log(myString.lastIndexOf('tuan'));

//Cắt chuỗi theo chỉ số index
// console.log(myString.slice(11,15));

//Thay thế tất cả các phần tử giống nhau thành một phân tử khác
// console.log(myString.replace(/doi/g,'tuan'));

//Chuyển đổi sang chữ hoa
// console.log(myString.toLocaleUpperCase());

//Chuyển đổi thành chữ thường
// console.log(myString.toLocaleLowerCase());

//Tách mảng thành một object
// var subject = 'toan , ly , hoa';
// console.log(subject.split(', '));

//Lấy kí tự theo chỉ số index
// const meomeoeo = '      Nguyen Anh Tuan';
// console.log(meomeoeo[11])

//Xóa khoảng trăng không cần thiết
// // console.log(meomeoeo.trim())

//Convert từ số sang string
// var number1 = 8;
// console.log(number1.toString())

//Kiểm Tra number1 có phải là số NaN không
// console.log(isNaN(number1))

//Chuyển đổi số thập phân 
// var number2 = 4353.234235;
// console.log(number2.toFixed(2))

//Khai báo Mảng
// var mang = [
//     'toan',
//     'ly',
//     'hoa',
//     'sinh',
//     'van',
//     'su', 
// ]
// console.log(mang)

// //kiểm tra mảng có phải là là mảng hay không khi truyền vao là object
// console.log(Array.isArray({}));

// //Kiểm tra mảng có phải là mảng hay không khi truiyenf vao là mảng
// console.log(Array.isArray(mang));

// // Lấy phân tử theo index
// console.log(mang[2])

var fullMyName = 'Nguyen dinh truong anh tuan';
alert(fullMyName);