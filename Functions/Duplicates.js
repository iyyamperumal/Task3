// Duplicates
let arr=[3,4,5,6,7,4,2,6,3,8,9,9,2,7,5];
let temp=arr[0];
for (let i=1;i<arr.length;i++)
{
    temp=temp^arr[i]
}
console.log(temp);
