
const screenDisplay = document.querySelector('.screen');
const numbers = document.querySelector('.numbers');



numbers.addEventListener('click', (e) => {

    if (e.target.className == 'number') {

        let text = e.target.value;
        if (text === "=") {
            try {
                screenDisplay.textContent = eval(screenDisplay.textContent)
            }
            catch (err) {
                screenDisplay.textContent = "";
                alert("invalid syntax");

            }
        }
        else if (text === "C") {
            screenDisplay.textContent = "";
        }
        else if (text === "Back") {
            let screenValue = screenDisplay.textContent;
            screenDisplay.textContent = screenValue.substring(0, screenValue.length - 1);
        }
        else if (text === "%") {
            screenDisplay.textContent = screenDisplay.textContent / 100;
        }
        else if (text === "devide") {
            screenDisplay.textContent = 1 / parseFloat(screenDisplay.textContent);
        }
        else if (text === "square") {
            screenDisplay.textContent = screenDisplay.textContent * screenDisplay.textContent;
        }
        else {
            screenDisplay.textContent = screenDisplay.textContent + text
        }



    }
})


