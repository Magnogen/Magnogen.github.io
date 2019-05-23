function encode(){
	var entity;
	var input;
	var output = "";
	var method;
	var key;
	var letters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
    	var morse = [".-", "-...", "-.-.", "-..", ".", "..-.", "--.", "....", "..", ".---", "-.-", ".-..", "--", "-.", "---", ".--.", "--.-", ".-.", "...", "-", "..-", "...-", ".--", "-..-", "-.--", "--.."];
	entity = document.getElementById("input");
	input = entity.value;
	entity = document.getElementById("method");
	method = entity.options[entity.selectedIndex].value;
	entity = document.getElementById("key");
	key = entity.value;
	
	if (method == "caesar") {
		entity.value = key[0];
                key = key[0]
                for (var i = 0; i < input.length; i++) {
                   	if (letters.indexOf(input[i].toLowerCase()) == -1) {
               			output = output + input[i].toLowerCase();
                	} else {
                       		if (letters.indexOf(key[0].toLowerCase()) != -1) {
                        		output = output + letters[(letters.length + letters.indexOf(input[i].toLowerCase()) + parseInt(letters.indexOf(key))) % letters.length];
                        	} else {
                        		output = output + letters[(letters.length + letters.indexOf(input[i].toLowerCase()) + parseInt(key)) % letters.length];
                        	}
			}
                }
	} else if (method == "keyword") {
        	for (var i = 0; i < input.length; i++) {
                    	if (letters.indexOf(input[i].toLowerCase()) == -1) {
                        	output = output + input[i].toLowerCase();
                        } else {
                        	if (letters.indexOf(key[0].toLowerCase()) != -1) {
                            		output = output + letters[(letters.length + letters.indexOf(input[i].toLowerCase()) + parseInt(letters.indexOf(key[i % key.length]))) % letters.length];
                        	} else {
                            		output = output + letters[(letters.length + letters.indexOf(input[i].toLowerCase()) + parseInt(key[i % key.length])) % letters.length];
                            	}
                			
                        }
                }
	} else if (method == "morse") {
        	for (var i = 0; i < input.length; i++) {
                    	if (letters.indexOf(input[i].toLowerCase()) == -1) {
                        	output = output + input[i].toLowerCase() + "|";
                        } else {
                        	output = output + morse[letters.indexOf(input[i].toLowerCase())] + "|";
                        }
                }
                output = output.slice(0, -1);
	}
        document.getElementById("output").value = output;
}
function decode(){
	var entity;
	var input;
	var output = "";
	var method;
	var key;
	var letters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
    	var morse = [".-", "-...", "-.-.", "-..", ".", "..-.", "--.", "....", "..", ".---", "-.-", ".-..", "--", "-.", "---", ".--.", "--.-", ".-.", "...", "-", "..-", "...-", ".--", "-..-", "-.--", "--.."];
	entity = document.getElementById("input");
	input = entity.value;
	entity = document.getElementById("method");
	method = entity.options[entity.selectedIndex].value;
	entity = document.getElementById("key");
	key = entity.value;
	
	if (method == "caesar") {
		entity.value = key[0];
                key = key[0]
                for (var i = 0; i < input.length; i++) {
                   	if (letters.indexOf(input[i].toLowerCase()) == -1) {
               			output = output + input[i].toLowerCase();
                	} else {
                       		if (letters.indexOf(key[0].toLowerCase()) != -1) {
                        		output = output + letters[(letters.length + letters.indexOf(input[i].toLowerCase()) - parseInt(letters.indexOf(key))) % letters.length];
                        	} else {
                        		output = output + letters[(letters.length + letters.indexOf(input[i].toLowerCase()) - parseInt(key)) % letters.length];
                        	}
			}
                }
	} else if (method == "keyword") {
        	for (var i = 0; i < input.length; i++) {
                    	if (letters.indexOf(input[i].toLowerCase()) == -1) {
                        	output = output + input[i].toLowerCase();
                        } else {
                        	if (letters.indexOf(key[0].toLowerCase()) != -1) {
                            		output = output + letters[(letters.length + letters.indexOf(input[i].toLowerCase()) - parseInt(letters.indexOf(key[i % key.length]))) % letters.length];
                        	} else {
                            		output = output + letters[(letters.length + letters.indexOf(input[i].toLowerCase()) - parseInt(key[i % key.length])) % letters.length];
                            	}
                			
                        }
                }
	} else if (method == "morse") {
    	input = input.split("|");
        	for (var i = 0; i < input.length; i++) {
                    	if (morse.indexOf(input[i]) == -1) {
                        	output = output + input[i];
                        } else {
                        	output = output + letters[morse.indexOf(input[i])];
                        }
                }
	}
        document.getElementById("output").value = output;
}
