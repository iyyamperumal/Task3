// Palindrome
let pali= () => {let arrstr=["slow","madam"];
let a;
for(let i=0; i<arrstr.length;i++)
{
	for(let j=arrstr[i].length;j>0;j--)
	{
        a= arrstr[i].split("").reverse().join("");
		if(arrstr[i]===a){

			console.log(arrstr[i],": is a palindrome");
			break;
		}
		else{
			console.log(arrstr[i],": is not a Palindrome");
			break;
		}
	 }
}
}
pali();
