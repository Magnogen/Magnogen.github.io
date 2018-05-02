function convert() {
        	var amount = prompt("Enter number from 0 to 26:");
            if (amount < 0 || amount > 26 || amount == "") {
            	alert("FAIL! TRY AGAIN!!!");
            } else {
            	alert("Converting...")
            	var text = ""
            	while (i < document.getElementById("input").value.length) {
                    text = text + document.getElementById("input").value.charAt(0);
                    i++;
                }
                document.getElementById("input").value = text;
            }
        }
