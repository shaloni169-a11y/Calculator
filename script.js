let string = "";
let buttons = document.querySelectorAll(".button");
let input = document.querySelector(".input");

buttons.forEach((button) => {
    button.addEventListener("click", (e) => {
        let value = e.target.innerHTML;

        if (value === "=") {
            try {
                string = eval(string).toString();
                input.value = string;
            } catch {
                input.value = "Error";
                string = "";
            }
        }
        else {
            string += value;
            input.value = string;
        }
    });
});