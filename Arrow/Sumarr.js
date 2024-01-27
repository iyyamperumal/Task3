//sum in array
let sumarr = () => {let e = [1,2,3,4,5,6,7,8,9,10];
    let temp=parseInt(e[0]+e[1]);
    for(var k=2; k< e.length; k++){
        temp= (temp + parseInt(e[k]));
    }
    console.log(temp);
    }
    sumarr();