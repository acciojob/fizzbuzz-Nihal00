
let arr = [];

function() {
	for(let i=0; i<=100; i++){
		if(i % 3 == 0){
			arr.push("Fizz");
		}else if(i % 5 == 0){
			arr.push("Buzz");
		}else if(i % 3 == 0 && i % 5 == 0){
			arr.push("FizzBuzz");
		}else {
			arr.push(i);
		}
	}
}

