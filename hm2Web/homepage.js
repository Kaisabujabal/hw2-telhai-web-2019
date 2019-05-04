function encodingWord() {
    document.getElementById("userinput").value = "";
    var length = Number(Math.floor(Math.random() * 20) + 5);
    var result = '';
    var characters = 'abcdefghijklmnopqrstuvwxyz0123456789.,';
    var charactersLength = characters.length;
    for (var i = 0; i < length; i++) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    
    document.getElementById("output").innerHTML = result;
}
String.prototype.replaceAt = function (index, replacement) {
    return this.substr(0, index) + replacement + this.substr(index + replacement.length);
}

function WordDecoding() {
    var input = document.getElementById("output").value;
    console.log(input);
    var usrinput = document.getElementById("userinput").value;
    console.log(usrinput);
    var result = "";
    var M = Number(input.length);
    for (i = 0; i < input.length; i++) {
        if ((input[i].charCodeAt(0) >= Number(97)) && (input[i].charCodeAt(0) <= Number(122))) {
            var Asci = Number(input[i].charCodeAt(0));
            if (Asci + Number(3) > 122) {
                input = input.replaceAt(i, String.fromCharCode(Number(97) + (Number(Asci + Number(3)) - Number(123))));
            }
            else {
                input = input.replaceAt(i, String.fromCharCode((Number(Asci) + Number(3))));
            }
        }
        if((input[i] >= Number(1)) && (input[i] <= Number(9))){
            let d = Number(10)-Number(input[i]).toString();
            input = input.replaceAt(i, d.toString());
        }
    }
    for (i = 1; i < input.length; i++) {
        if (input[i] == ".") {
            var temp = "{";
            input = input.replaceAt(i, input[M - i - 1]);
            input = input.replaceAt(Number(M - i - 1), temp);
        }
        if (input[i] == ",") {
            var temp = "}";
            input = input.replaceAt(i, input[M - i - 1]);
            input = input.replaceAt(Number(M - i - 1), temp);
        }
    }
    for (i = 0; i < input.length; i++) {
        if (input[i] == "{") {
            input = input.replaceAt(i, ".");
        }
        if (input[i] == "}") {
            input = input.replaceAt(i, ",");
        }
    }
    result += input;
    console.log(result);
    
    if(result.toString() == usrinput.toString())
        window.location.href = "./calculator.html"
    else
    {
        alert("The password you entered is incorrect!")
        document.getElementById("userinput").value = "";
        encodingWord();
    }
        
        
}
window.onload = encodingWord;