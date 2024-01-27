// Rotate array
let a=[0,1,2,3,4,5,6,7,8,9];
let k=5;
let rotate= function() {
    for(let i=0; i<=a.length;i++){
    for(j=0;j<k;j++){
     a.push(a.shift());
    }
}
    console.log(a.join(","));
}

rotate();