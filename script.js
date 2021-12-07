// get the display area
let display = document.getElementById('display');
// get the buttons
let buttons = Array.from(document.getElementsByClassName('button'));

// map through each button with an event listner
buttons.map( button => {
    button.addEventListener('click', (e) => {
        // switch statement for options
        switch(e.target.innerText) {
            case 'C':  // clear the contents
                display.innerText = "";
                break;
            case '←': // removes the last item
                if(display.innerText) {
                    display.innerText = display.innerText.slice(0,-1);
                }
                break;
            case '=': // use the eval function to calculate the display text
                try{
                    display.innerText = eval(display.innerText);
                    
                } catch { // in case its uncomputable math
                    display.innerText = "ERROR";
                }
                
                
            default: // displays to the display area
                display.innerText += e.target.innerText;
        }
    })
})
