let input = document.getElementById("input-box");
let buttons = document.querySelectorAll("button");
let string = "";
let oprtrs = ["+","-","*","/","%","."]
let arr = Array.from(buttons);

arr.forEach((btn) => {
    btn.addEventListener('click', (e) => {
        if (e.target.innerHTML == "=") {
            let last = string[string.length-1];
            if (oprtrs.includes(last)){
                input.value = string;
            } else {
                string = eval(string);
                input.value = string;   
            }
        } else if (e.target.innerHTML == "AC") {
            string = "";
            input.value = string;
        } else if (e.target.innerHTML == "DEL") {
            string = string.substring(0, string.length - 1);
            input.value = string;
        } 
        else if (oprtrs.includes(e.target.innerHTML)) {
            let last = string[string.length-1];
            if (oprtrs.includes(last)){
                input.value = string;
            } else{
                string = string + e.target.innerHTML;
                input.value = string; 
            } 
        } else {
            string = string + e.target.innerHTML;
            input.value = string;
        }

    })
})






