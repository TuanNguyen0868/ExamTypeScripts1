let ar =  [7 , 83 , 812, 82, 3]
 function plusar(){
    let tong = 0;
    for ( var i in ar) {
        tong += ar[i];
    }
    return tong;
 }
 console.log(plusar())