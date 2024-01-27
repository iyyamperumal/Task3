//Return prime numbers
    (function(){const array = [-1,-4,-3,-7,0,3,6,7,13,11,17,18,15,19];
    	function prime(num){
	  for (let i = 2; i < num; i++)
	  {
	    if (num % i ==0){
	      return false;
	    }
	  }
	  return num>1;
	}
	console.log(array.filter(prime));
})
();