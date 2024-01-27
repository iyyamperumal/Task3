// String title cap
let string= () => {
    let arr = ["sathish" , "iyyam" , "perumal"];
    for (let i=0; i<arr.length;i++)
    {
        for (let j=0; j<arr[i].length; j++){
            if(j===0)
            {
                console.log(arr[i][j].toUpperCase());
    
            }
            else{
                console.log(arr[i][j].toLowerCase());
            }
        }
    }
    }
    string();