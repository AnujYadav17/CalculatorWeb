let input = document.getElementById('inputBox');
let buttons = document.querySelectorAll('button');

let string = "";

const operators = ['+', '-', '*', '/', '%'];

buttons.forEach(button => {
    button.addEventListener('click', (e) => {
        let value = e.target.innerHTML;


        if (value === '=') {
            try {
                string = eval(string).toString();
                input.value = string;
            } catch {
                input.value = "Error";
                string = "";
            }
            return;
        }


        if (value === 'AC') {
            string = "";
            input.value = string;
            return;
        }

        
        if (value === 'DEL') {
            string = string.slice(0, -1);
            input.value = string;
            return;
        }

        
        if (value === '%') {
            if (string === "" || operators.includes(string.slice(-1))) return;
            string = (eval(string) / 100).toString();
            input.value = string;
            return;
        }

        
        if (value === '.') {
            let lastNumber = string.split(/[\+\-\*\/]/).pop();
            if (lastNumber.includes('.')) return;
        }

        
        if (operators.includes(value)) {
            if (string === "" || operators.includes(string.slice(-1))) return;
        }


        string += value;
        input.value = string;
    });
});
