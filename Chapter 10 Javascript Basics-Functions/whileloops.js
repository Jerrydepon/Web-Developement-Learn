console.log("Pinting all numbers between -10 and 19");
var counter = -10;

while(counter < 20) {
	console.log(counter);
	counter++;
}

console.log("Pinting all even numbers between 10 and 40");
var counter = 10;

while(counter <= 40 ) {
	console.log(counter);
	counter += 2;
}
for(var counter = 10; counter <= 40; counter += 2){
	console.log()
}

console.log("Pinting all odd numbers between 300 and 333");
var counter = 300;

while(counter <= 333) {
	if(counter % 2 != 0){
		console.log(counter);
	}
	counter++;
}

console.log("Pinting all numbers divisible by 5 and 3 between 5 and 50");
var counter = 5;

while(counter <= 50) {
	if(counter % 5 == 0 && counter % 3 == 0) {
		console.log(counter);
	}
	counter++;
}
