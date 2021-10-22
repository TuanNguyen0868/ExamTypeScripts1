// //IIFE arow function
// (() => {
//     alert('Hello mấy cưng !!!')
// })();
// //Truyền tham số
// ((abc)=>{
//     alert('Thông Báo : ' + abc);
// })('Đã gặp được Anh Tuấn đẹp trai');


//Example

const app = (function(){
    const cars = []
    return {
    get(index){
        return cars[index]
    },
    add(car){
        cars.push(car)
    },
    edit(index, car){
        cars[index] = car
    },
    } 
})();


//Gop hai  object

let obj1 = {
    model:"LX570",
    make:"Lexus",
}
let obj2 = {
    color:"red",
    year: 2021,
}

let obj3 = {...obj1, ...obj2}

console.log(obj3)


function createCounter(){
    let count = 0
    

    function increase(){
        return ++count
    }
    return increase
}
const counter1 = createCounter()
console.log(counter1())
console.log(counter1())
console.log(counter1())
console.log(counter1())


function createStorage(key){
    const store = JSON.parse(localStorage.getItem(key)) ?? {}

    const save = () => {
        localStorage.setItem(key, JSON.stringify(store))
    }
    const storage = {
        get(key){
            return store[key]
        },
        set(key, value){
            store[key] = value
            save()
        },
        remove(key){
            delete store[key]
            save()
        }
    }
    return storage
}

const profileAccount = createStorage('profile_Account')
profileAccount.set('acc','TuanNguyen227')
profileAccount.set('pass','12345Aa@')
profileAccount.set('email','TuanNguyen227@gmail.com')

const profileAccount1 = createStorage('profile_Account1')
profileAccount1.set('acc','TuanNguyen2271995')
profileAccount1.set('pass','12345Aa@')
profileAccount1.set('email','TuanNguyen2271995@gmail.com')



function createApp(){
    const cars = []
    return{
        add(car){
            cars.push(car)
        },
        show(){
            document.getElementById("carslist").innerHTML = cars
        },
        edit(index, car){
            cars[index] = car
        },
        remove(index){
            cars.splice(index, 1)
        },
    }
}
 const app2 = createApp()

 app2.add('BMW')
 app2.add('BMW2')
 app2.add('BMW3')
 app2.add('BMW4')

 app2.edit(0,'Mecs')
 app2.show()
 app2.remove(0)
