let operator;
let array=[0,0];
let currentNumber=array[0];

function calculate(){
    numberA=array[0];
    numberB=array[1];
    if (array.length==1){
        array[0]=arguments[0];
    }
    else if (array.length==2){
        if (operator=="add"){
            array[0]=numberA+numberB;
        }
        else if (operator=="subtract"){
            array[0]=numberA-numberB;
        }
        else if (operator=="multiply"){
            array[0]=numberA*numberB;
        }
        else if (operator=="divide"){
            array[0]=numberA/numberB;
        }
        array.pop();
    }
    currentNumber=array[0];
    document.getElementById("screen").innerText=currentNumber;
}


/*Psuedo code
listen for buttons,
when one button is pressed, save into an array of 2 long, 
when operator is pressed, store choice in operator variable
when second number is pressed, save into array[1] and return the answer
make array[0]=array[1] and delete array[1] for future calculatons.

what i need: calculate function

global array