// alert("Nguyễn Anh Tuấn đẹp Trai siêu vip pro");
// confirm("Hey anh yêu" );
// prompt('bạn đủ tuổi vào tù chưa??? Nhập tuổi đê ! ')
// setTimeout(function(){
//     alert("hey baby ")
// }, 2000)
// setInterval(function(){
//     alert("tắt hộ mình cái ")
// }, 5000)
// const d = new Date();
// document.getElementById("ngaythang").innerHTML = d;
function changeim(a){
    var picture;
    if(a==0){
        picture = "/ls1/image/bACKGROUND.jpg";
    }
    else{
        picture = "/ls1/image/background1.jpg";
    }
    document.getElementById("myimage").src = picture;
}
function example(abtc36){
    var chooses;
    if (abtc36==0) {
        chooses = "/ls1/image/hinh-n-n-android-hinh-n-n-hd-hinh-n-n-iphone-hinh-n-n-mi-n-937980.jpg";
    } 
    else {
        chooses = "/ls1/image/wolves_backgrounds_003.jpg";
    }
    document.getElementById("testchange").src = chooses;
}

const member = {
    firstName: " Nguyễn " ,
    lastName: " Tuấn " ,
    age: 26,
    fullName: function() {
        return this.firstName + "" + this.lastName;
    }
};
function checkAge(){
    if(member.age >= 18){
        alert(member.firstName + "" + member.lastName + "!!!" + "" + "Tuổi : " + member.age) 
    }
    else{
        alert("Bạn chưa đủ tuổi !!!")
    }
}
const myArray = [
    "Nguyen",
    "Anh",
    "Tuan",
    "dep",
    "trai",
    "sieu",
    "cap"
]
console.log(myArray);

let mystr = "Nguyen anh tuan dep trai tuan sieu cap pro"
console.log(mystr.length)
console.log(mystr.indexOf("anh"))
console.log(mystr.lastIndexOf("tuan"))
console.log(mystr.search("trai"))

console.log(myArray.sort())

// document.getElementById("demo12").innerHTML = myArray;

// function sortsArray(){
//     myArray.sort();
//     document.getElementById(demo11).innerHTML = myArray;
// }
// const myPoint = [20, 15 ,68 , 40, 12 , 80]
// document.getElementById("demo15").innerHTML = myPoint;
 const cars = [
     {type: "Lamborghini", Year: 2019},
     {type: "Porsche", Year: 2018},
     {type: "BMW", Year: 2021},
     {type: "Rolls royce", Year: 2009},
     {type: "Ferrari", Year: 2017},
 ]
 function displaycar(){
     document.getElementById("demo18").innerHTML = 
     cars[0].type + ":" +  cars[0].Year + "<br>" +
     cars[1].type + ":" +  cars[1].Year + "<br>" +
     cars[2].type + ":" +  cars[2].Year + "<br>" +
     cars[3].type + ":" +  cars[3].Year + "<br>" +
     cars[4].type + ":" +  cars[4].Year + "<br>" ;  
 }
 function sortcars(){
    cars.sort(function(a , b){return a.Year - b.Year});
    displaycar();
 }


// foreach
const mynumber = [25, 45, 13, 46, 98, 44, 52]
let funtxt = "";
mynumber.forEach(funmynumber);
document.getElementById("demo21").innerHTML = funtxt;
function funmynumber(value, index, array){
  funtxt += "value of element : " + value + "<br>";
   funtxt += "index of element : " + index + "<br>";
  funtxt += "Array : " + array + "<br>" + "<br>" 
  + "______________________________________________________________________" 
  + "<br>" + "<br>";
}
const mynumber2 = ['Nguyễn' , 'Đình', 'Quang' , 'Khải'];
let funtxt2 = "";
for (const x of mynumber2) {
    funtxt2 = funtxt2 + x + "<br>";
}
document.getElementById("demo22").innerHTML = funtxt2;
//end foreach

//do while
let abcx = "";
let ac = 0;
do {
  abcx += "This is number : " + ac + "<br>";
  ac++;  
} while (ac < 10);
document.getElementById("demo23").innerHTML = abcx;


const listSong = ["I Hate You" , "I Love You" , "Break my Heart"];
let text3 = "";
let bv = 0;
do {
    text3 += "This is song Name : " + listSong[bv] + "<br>"
    bv++;
} while (bv < listSong.length);
document.getElementById("demo24").innerHTML = text3;



//class
class myinfosss {
    constructor(name, add , age , hobit){
        this.name = name;
        this.add = add;
        this.age = age;
        this.hobit = hobit;
    }
}
const displayInfo = new myinfosss("Anh Tuấn" , "Thanh Hoá", 18 , "Du lịch");
document.getElementById("demo25").innerHTML = displayInfo.name + "<br>" + displayInfo.add + "<br>" + displayInfo.age + "<br>" + displayInfo.hobit;

class mybike {
    constructor(name , year){
        this.name = name;
        this.year = year;
    }
    age(){
        let date = new Date();
        return date.getFullYear() - this.year;
    }
}
let myBikess = new mybike("Phượng Hoàng", 1995);
document.getElementById("demo26").innerHTML = "Dòng xe : " +  myBikess.name + "<br>" + "Đã Chinh Chiến Được " + myBikess.age() + "  Năm"; 

let emp = '{"employees":['+'{"firstName":"Tuấn","lastName":"Nguyễn","age":"18"}, '+' {"firstName":"Nhật","lastName":"Lê","age":"28"}, '+' {"firstName":"Long","lastName":"Trần","age":"26"}]}'
// let person1 = {
//     id: 'p1', 
//     name: 'duc',
//     age: 12,
//     alias: [ 'nazi', 'duc', ],
// };

// let person1 = {
//     'id': 'p1', 
//     'name': 'duc',
//     age: 12,
//     alias: [ 'nazi', 'duc', ],
//     al: [
//         {}, {},
//     ],
//     'tao ten la': 'duc',
//     ["sdfs"]: 'sfsdfs'
// };

// var sp1 = JSON.stringify(person1); // '{"id":"p1"}'
// var p1 = JSON.parse(sp1);

// person1.id;
// person1['name'];
// person1['tao ten la'];

// person1.id = '';
// person1['tao ten la'] = 'df';



const oBj = JSON.parse(emp);
document.getElementById("demo27").innerHTML = 
oBj.employees[0].firstName + "" + oBj.employees[0].lastName + "" + oBj.employees[0].age + "<br>" +
oBj.employees[1].firstName + "" + oBj.employees[1].lastName + "" + oBj.employees[1].age + "<br>" +
oBj.employees[2].firstName + "" + oBj.employees[2].lastName + "" + oBj.employees[2].age + "<br>";

//IIFE : 
(function(){
    console.log("This is IIFE !")
})();   

