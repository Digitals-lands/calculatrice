let display = document.getElementById('display');

function appendToDisplay(value) {
    if( display.value == 'Error')
    {
        display.value = value;

    }else{
        
    display.value += value;
    }

}

function clearDisplay() {
    display.value = '';
}

function calculate() {
    try {
        parts = display.value.split("^");
    if (parts.length === 2) {
        power()
    }else if (parts.length === 1){

        display.value = eval(display.value);
    }
    else{
        display.value = 'Error';

    }
    } catch (error) {
        display.value = 'Error';
    }
}

function squareRoot() {
    try {
        let result = Math.sqrt(eval(display.value));
        display.value = result;
    } catch (error) {
        display.value = 'Error';
    }
}
function tab1()
{
    document.getElementById('tab1').style.display='block'
    document.getElementById('tab2').style.display='none'
}

function tab2()
{
    document.getElementById('tab1').style.display='none'
    document.getElementById('tab2').style.display='block'
}



function sine() {
    try {
        let result = Math.sin(eval(display.value)  * (Math.PI / 180));
        display.value = result;
    } catch (error) {
        display.value = 'Error';
    }
}

function cosine() {
    try {
        let result = Math.cos(eval(display.value)* (Math.PI / 180))
        display.value = result;
    } catch (error) {
        display.value = 'Error';
    }
}

function tangent() {
    try {
        let result = Math.tan(eval(display.value) * (Math.PI / 180))
        display.value = result;
    } catch (error) {
        display.value = 'Error';
    }
}




function pi() {
    try{
        if( display.value!='')
        {

            display.value =(display.value*Math.PI)
        }
        else{
    display.value += Math.PI;
}
} catch (error) {
    display.value = 'Error';
}
}
function factorial() {
    try {
        let num = eval(display.value);
        let result = 1;
        for (let i = 2; i <= num; i++) {
            result *= i;
        }
        display.value = result;
    } catch (error) {
        display.value = 'Error';
    }
}
function power() {
    let parts = display.value.split("^");
    if (parts.length === 2) {
        try {
            let base = eval(parts[0]);
            let exponent = eval(parts[1]);
            let result = Math.pow(base, exponent);
            display.value = result;
        } catch (error) {
            display.value = 'Error';
        }
    } else {
        display.value = 'Error';
    }
}

function naturalLogarithm() {
    try {
        let result = Math.log(eval(display.value));
        display.value = result;
    } catch (error) {
        display.value = 'Error';
    }
}

function exponentiation() {
    try {
        let result = Math.exp(eval(display.value));
        display.value = result;
    } catch (error) {
        display.value = 'Error';
    }
}
