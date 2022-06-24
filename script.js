var operator = prompt("Please enter operator you want to perform e.g +, -, x, /");
		var firstNumber = prompt("Number 1:");
		var secondNumber = prompt("Number 2:");
		if(operator == "-") {
			var Result = firstNumber - secondNumber;
			alert ("Result is " + Result) 
		}
		else if(operator == "+") {
			var Result = firstNumber + secondNumber;
			alert ("Result is " + Result) 
		}
		else if(operator == "x") {
			var Result = firstNumber * secondNumber;
			alert ("Result is " + Result) 
		}
		else if(operator == "/"){
			var Result = firstNumber / secondNumber;
			alert ("Result is " + Result) 
		} else {
			alert ("Invalid operation")
		}; 